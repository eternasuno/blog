---
published: false
title: 使用 Sonarr 和 Jackett 实现自动下载新番
date: '2021-01-21'
excerpt: 在 NAS 使用 Docker 部署 Sonarr + Jackett + qbittorrent，实现自动下载新番
---
[Sonarr](https://sonarr.tv/) 是一个监控电视剧更新并下载最新集的自动化工具。在添加新的节目后，Sonarr 会从 TVDB 搜刮元数据以及播放时间等数据，在新一集更新后从给定的 Rss 源获取下载地址并调用下载工具下载，并在下载完成后将文件移动到指定的媒体文件夹并按照给定的格式重新命名。 Sonarr 本身不提供数据源和下载功能，因此还需要部署 [Jackett](https://github.com/Jackett/Jackett) 来提供 Rss 源以及 [qbittorrent](https://www.qbittorrent.org/)	或其他 BT 下载工具，此外由于 Sonarr 和 Jackett 更新比较频繁，建议同时部署一个 [Watchtower](https://github.com/containrrr/watchtower) 容器实现自动更新。

## 部署 qbittorrent

BT 下载工具我用的是 qbittorrent，镜像使用的是 [superng6/qbittorrentee](https://hub.docker.com/r/superng6/qbittorrentee)，也可以根据个人喜好选择 Transmission 或其他的下载工具。

执行命令：

```bash
docker run -d  \
    --name=qbittorrentee  \
    -e WEBUIPORT=8080  \
    -e PUID=1000 \
    -e PGID=100 \
    -e TZ=Asia/Shanghai \
    -v <path to config>:/config \
    -v <path to downloads>:/downloads \
    --network host \
    --restart unless-stopped  \
    superng6/qbittorrentee:latest
```

docker-compose：

```yaml
version: "2.1"
services:
  qbittorrent:
    image: superng6/qbittorrent
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=100
      - TZ=Asia/Shanghai
      - WEBUIPORT=8080
    volumes:
      - <path to data>:/config
      - <path to downloads>:/downloads
    network_mode: host
    restart: unless-stopped
```

容器的网络模式使用了 host 模式而不是常用的 bridge 模式，是因为 Sonarr 需要使用 qbittorrent 和 Jackett 容器的 IP 地址来调用相应的功能，bridge 模式下需要额外的[设置](https://www.cnblogs.com/Yogile/p/12944741.html)才能使容器的 IP 固定，而设置成 host 模式可以直接使用 127.0.0.1 访问容器，相对更加方便。

另外建议将下载位置和媒体文件夹放置在同一个磁盘上，这样可以开启 Sonarr 的[硬链接](https://en.wikipedia.org/wiki/Hardlink)功能，方便做种。

部署成功后访问 <主机IP>:8080 进入 WebUI，用户名/密码为 admin/adminadmin。

## 部署 Jackett

### 部署容器

Jackett 是一个将多个种子站的资源聚合在一起并提供给其他软件（比如 Sonarr）的工具， [linuxserver](https://www.linuxserver.io/) 提供了 [Jackett 镜像](https://hub.docker.com/r/linuxserver/jackett)可以直接使用。

执行命令：

```bash
docker run -d \
  --name=jackett \
  -e PUID=1000 \
  -e PGID=100 \
  -e TZ=Asia/Shanghai \
  -e AUTO_UPDATE=false \
  -v <path to config>:/config \
  -v <path to downloads>:/downloads \
  --network host \
  --restart unless-stopped \
  ghcr.io/linuxserver/jackett
```

docker-compose：

```yaml
version: "2.1"
services:
  jackett:
    image: ghcr.io/linuxserver/jackett
    container_name: jackett
    environment:
      - PUID=1000
      - PGID=100
      - TZ=Asia/Shanghai
      - AUTO_UPDATE=false
    volumes:
      - <path to config>:/config
      - <path to downloads>:/downloads
    network_mode: host
    restart: unless-stopped
```

下载位置和 qbittorrent 的下载位置保持一致即可，部署成功后访问 <主机IP>:9117 访问 WebUI 进行进一步的设置。

### 添加 Indexers

![Jackett 主页](/images/sonarr-jackett/jackett.png)

点击 Add Indexer 按钮添加数据源，因为目的是下载新番，添加 dmhy 的数据源应该就够用了。添加之后点击 Test 按钮测试是否能访问网站，如果因为网络原因无法访问网站可以点击扳手按钮把网站地址修改为国内的镜像源。

![修改网站地址](/images/sonarr-jackett/jackett-dmhy.png)

## 部署 Sonarr

### 部署容器

[Sonarr 镜像](https://hub.docker.com/r/linuxserver/sonarr)选用的是 Sonarr3，也就是 preview 分支，latest 分支使用的 Sonarr2 已经停止添加新功能，进入维护阶段。Sonarr3 开始支持中文 index，并且内容识别度相比 Sonarr2 有了很大的提升，对于下载动画片来说，只有 Sonarr3 能用。

```bash
docker run -d \
  --name=sonarr \
  -e PUID=1000 \
  -e PGID=100 \
  -e TZ=Asia/Shanghai \
  -e UMASK_SET=022 \
  -v <path to config>:/config \
  -v <path to media>:/media \
  --network host \
  --restart unless-stopped \
  ghcr.io/linuxserver/sonarr:preview
```

docker-compose：

```yaml
version: "2.1"
services:
  sonarr:
    image: ghcr.io/linuxserver/sonarr:preview
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=100
      - TZ=Asia/Shanghai
      - UMASK_SET=022
    volumes:
      - <path to config>:/config
      - <path to media>:/media
    network_mode: host
    restart: unless-stopped
```

qbittorrent 的下载目录挂载在 media 目录下，因此这里没有挂载 downloads 目录，如果下载目录在其他位置，那么还需要挂载 downloads 目录：`<path to downloads>:/downloads`。例外需要注意的是 Sonarr 会频繁地往 config 目录下写日志文件，建议不要把 config 挂载在设置了休眠的硬盘或者易损坏的 TF 卡（比如树莓派的系统盘）上。

部署成功后访问 <主机IP>:8989 访问 WebUI 进行进一步的设置。

### 设置 Sonarr

Sonarr 的功能很多，设置也很繁杂，这里只介绍必要的设置。

“Settings -> Media Management -> Root Folders” 点击 Add Root Folder 按钮添加媒体文件夹。
