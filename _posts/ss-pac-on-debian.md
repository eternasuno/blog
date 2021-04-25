---
title: "Debian 使用 shadowsocks 本地代理"
date: "2020-12-28"
excerpt: "在 Debian 系统上配置 shadowsocks 客户端并开启 pac 模式"
---

最近服务器连 GitHub 经常超时，虽然可以改 Host 解决，但是说不定什么时候 Host 也会失效。最后决定直接在服务器上挂代理，考虑到还需要访问国内网站，所以还要配置PAC。

## 安装 shadowsocks-libev

Debian 可以直接用 apt 下载，其他的系统可以参考[shadowsocks-libev的文档](https://github.com/shadowsocks/shadowsocks-libev#installation)。

```bash
sudo apt-get update 
sudo apt-get install shadowsocks-libev
```

shadowsocks-libev的配置文件在 /etc/shadowsocks-libev/config.json。

```json
{
  "server": "代理服务器地址",
  "server_port": "代理服务器地址",
  "local_port": 1080,
  "password": "代理服务器地址",
  "timeout": 60,
  "method": "加密方式"
}
```

shadowsocks-libev 支持 [Systemd](https://zh.wikipedia.org/zh-hans/Systemd), 可以使用 systemctl 管理服务。

```bash
# 启动
sudo systemctl start shadowsocks-libev-local@config
# 查看运行情况
sudo systemctl status shadowsocks-libev-local@config
# 配置开机自启
sudo systemctl enable shadowsocks-libev-local@config
```

这里的config指 /etc/shadowsocks-libev/ 下配置文件的名称，如果不是在 config.json 里配置代理服务器信息，请自行修改。

启动之后可以用 `curl -x socks5://127.0.0.1:1080 http://www.google.com` 验证代理是否生效。

## 安装 privoxy

上述步骤完成之后实际上已经可以使用代理了，但是考虑到需要访问国内网站，需要安装 privoxy 开启 pac 模式。

```bash
# 安装privoxy
sudo apt-get install privoxy
# 获取 gfwlist2privoxy 脚本, 如果连接超时可以使用代理 -x socks5://127.0.0.1:1080
curl -skL https://raw.github.com/zfl9/gfwlist2privoxy/master/gfwlist2privoxy -o gfwlist2privoxy
# 生成 gfwlist.action 文件
bash gfwlist2privoxy '127.0.0.1:1080'
# 拷贝至 privoxy 配置目录
sudo cp -af gfwlist.action /etc/privoxy/
# 加载 gfwlist.action 文件
sudo echo 'actionsfile gfwlist.action' >> /etc/privoxy/config
# 启动 privoxy.service 服务
sudo systemctl start privoxy.service
# 开机自启
sudo systemctl enable privoxy.service
```

privoxy 启动之后设置临时环境变量进行测试：

```bash
export http_proxy = "http:127.0.0.1:8118"
export https_proxy = "http:127.0.0.1:8118"
curl www.google.com
```

有返回值说明代理成功，编辑 /etc/prifile ，在文件末尾加入环境变量。

```bash
proxy = "http://127.0.0.1:8118"
export https_proxy = $proxy
export http_proxy = $proxy
export ftp_proxy = $proxy
```

重新打开一个终端使用 `curl www.google.com` 验证， 有返回值说明代理成功。