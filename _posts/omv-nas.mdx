---
title: "搭建 OMV NAS 系统"
date: "2020-01-21"
excerpt: "记录使用 openmediavault 5 搭建 NAS 系统的过程"
---

之前冲动性消费剁手了树莓派4，结果到手之后就吃灰了。这两天又翻出来了一块机械硬盘，就干脆拿来搭一个 NAS，也算是有了点作用。

## 安装 OMV

[openmediavault](https://www.openmediavault.org/) 是一个基于Debian Linux 的 NAS 系统，可以根据自己的硬件和喜好在 Debian 或者基于 Debian 的 Linux 系统上安装 OMV，树莓派可以直接在官方的 [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/) 上安装。系统的安装和相关配置这里就略过了。

OMV 在 [GitHub](https://github.com/OpenMediaVault-Plugin-Developers/installScript) 上提供了[安装脚本](https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install)，可以直接按照教程下载脚本执行，不过因为官方的软件源在墙外，下载可能非常慢，建议把脚本里的软件源修改为国内镜像源。

```bash
# 下载脚本
wget https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install
# 把 omvRepo="http://packages.openmediavault.org/public" ，修改为 omvRepo="https://mirrors.tuna.tsinghua.edu.cn/OpenMediaVault/public/"
nano install
chmod +x install
sudo ./install
```

安装完成后在浏览器上打开 http://<树莓派的IP地址> 即可看到 OMV 的登录页，默认用户名和密码为 admin/openmediavault。

![OMV 首页](/images/omv-nas/omv-index.png)

### 手动安装 OMV-Extras

如果使用上面的步骤安装 OMV 系统的话，OMV-Extras 插件包是默认安装的。但是可能由于网络因素导致 OMV-Extras 插件包无法安装。这时需要根据[这个页面](https://forum.openmediavault.org/index.php?thread/5549-omv-extras-org-plugin/)上的引导下载 deb 文件手动上传安装 OMV-Extras。

## 使用国内源

清华大学 TUNA 协会维护的开源软件镜像站现已提供 OpenMediaVault 软件源镜像，如果发现系统更新下载插件慢的话可以更换到清华的镜像源。更换以下文件，建议在更换之前备份原文件。

### debian 软件源

将 /etc/apt/sources.list 文件替换为以下内容：

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
```

### OMV 软件源

将 /etc/apt/sources.list.d/openmediavault.list 文件替换为以下内容：

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/OpenMediaVault/public/ usul main
```

将 /etc/apt/sources.list.d/openmediavault-kernel-backports.list 文件替换为以下内容：

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/debian buster-backports main contrib non-free
```

### OMV-Extras 软件源

将 /etc/apt/sources.list.d/omvextras.list 文件替换为以下内容：

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/OpenMediaVault/openmediavault-plugin-developers/usul buster main
deb [arch=arm64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian buster stable
deb http://linux.teamviewer.com/deb stable main
```

## 配置 OMV

### 安装 flashmemory 插件

openmediavault-flashmemory 插件可以把系统产生的临时文件暂存在内存里，减少对硬盘的读写次数，从而延长系统盘的使用寿命。对树莓派这种用 TF 卡做系统盘的设备来说这个插件可以减少 TF 卡损坏的概率。

插件页面搜索 openmediavault-flashmemory 插件并安装（如果搜索不到可以[手动安装 OMV-Extras](#手动安装-omv-extras)后再搜索插件），安装完成之后侧栏中会出现 Flash Memory 菜单项，点击菜单项可以看到进一步的优化步骤。

![禁用硬盘的交换分区](/images/omv-nas/flashmemory.png)

### 硬盘挂载

OMV 提供了 WebUI 来管理挂载的硬盘。

#### 磁盘

**注意：第一次挂载硬盘需要格式化硬盘，在插入硬盘前记得备份重要数据。**

“存储器 -> 磁盘”页面点击扫描找到挂载的存储盘，选中挂载的硬盘点击擦除，擦除完成后点击编辑可以设置硬盘电源管理。

![磁盘](/images/omv-nas/hardware.png)

![磁盘设置](/images/omv-nas/hardware-setting.png)

#### 文件系统

“存储器 -> 文件系统”页面点击创建在弹出的页面中创建文件系统。

![文件系统](/images/omv-nas/file.png)

设备栏选择挂载的存储盘，标签根据用途自行填写，文件系统一般使用默认的 ext4 即可。

![创建文件系统](/images/omv-nas/file-create.png)

创建完成后在文件系统页面会出现刚才创建的设备，选中这个设备点击挂载后再点击应用即可挂载硬盘。

### 文件共享

#### 共享文件夹

“访问权限管理 -> 共享文件夹”页面点击添加，在弹出的页面里添加共享文件夹。

![共享文件夹](/images/omv-nas/share.png)

可根据用途自行填写“名称”和“注释”，设备选择上面创建的存储盘设备，路径选择存储盘下的路径，权限保持默认或者根据需求自行选择，之后点击保存，在页面上会显示新建的共享文件夹。

![新建共享文件夹](/images/omv-nas/share-create.png)

选中创建的共享文件夹，点击特权和 ACL 设置不同用户/用户组的访问权限，这里的用户/用户组就是 Linux 系统的用户/用户组。可以在“访问权限管理-用户/用户组”页面里设置也可以通过命令行设置。

![特权](/images/omv-nas/share-auth.png)

![ACL](/images/omv-nas/share-acl.png)

之后点击应用即可创建共享文件夹。

#### 启用 SMB 协议

“服务 -> SMB -> 共享”页面点击添加，共享文件夹选择刚才新增的文件夹，其他的设置根据具体的需求填写即可，点击保存即可在共享页面可以看到新增的共享。在“服务 -> SMB -> 设置”勾选启用（其他设置按需修改），点击保存后再点击应用即可启用 SMB 协议。

![SMB 设置](/images/omv-nas/smb.png)

![SMB 共享](/images/omv-nas/smb-share.png)

![SMB 添加共享](/images/omv-nas/smb-share-create.png)

### Docker 

OMV 5 删除了很多之前的插件转而使用 Docker 提供相关的功能，因此 Docker 的安装也是必要的。“系统 -> OMV-Extras -> Docker”（没有 OMV-Extras 菜单项请[手动安装 OMV-Extras](#手动安装-omv-extras)）页面点击 Docker 按钮，在下拉框中选择安装即可安装 Docker。

![安装Docker](/images/omv-nas/docker.png)

此外建议安装 [Portainer](https://www.portainer.io/)，这是一个可以管理 Docker 的 WebUI，可以可视化的管理 Docker 镜像和容器，并且提供 Docker Compose 部署容器的功能。

![Portainer](/images/omv-nas/Portainer.png)

![Docker Compose 部署容器](/images/omv-nas/Portainer-stacks.png)

## 配置端口映射

大多数 Docker 会提供一个 WebUI ，用户访问 OMV-IP:port 就可以使用对应的功能，使用不同的端口对应不同的 Docker。但是部署的 Docker 太多的话，记忆多个端口会很麻烦，可以使用内置 nginx 的端口映射功能，将不同的端口映射到80端口的不同路径上。

以 Portainer 为例，新增 /etc/nginx/openmediavault-webgui.d/portainer.conf 文件：

```
location /portainer {
  return 301 $scheme://$host/portainer/;
}

location ~* ^/portainer(/.*)$ {
  proxy_http_version 1.1;
  proxy_set_header Connection "";
  rewrite /portainer(.*) $1 break;
  proxy_pass http://127.0.0.1:9000;
}

location ~* ^/portainer/(api/websocket/ws/.*)$ {
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
  proxy_http_version 1.1;
  rewrite /portainer(.*) $1 break;
  proxy_pass http://127.0.0.1:9000;
}
```

修改后执行 `sudo systemctl restart nginx` 重启 nginx，之后即可通过 OMV-IP/portainer 访问 portainer。