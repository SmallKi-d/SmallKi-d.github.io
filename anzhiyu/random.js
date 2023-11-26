var posts=["2023/11/21/hello-world/","2023/11/25/在TrueNAS系统中安装PVE内核/","2023/11/26/本地搭建NetData实现自有服务器性能监控/","2023/11/25/NAT6解决校园网IPv6分配掩码128问题/","2023/11/25/自己的域名免费快速搭建个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };