var posts=["2024/03/05/2023年终总结/","2024/03/15/本地快速部署文生文AI/","2023/12/03/PVE软盘安装系统Tips/","2024/02/05/Android刷机入门教程/","2024/06/01/蛇贸易汉化移植/","2023/11/25/在TrueNAS系统中安装PVE内核/","2024/05/20/蛇之命汉化移植/","2024/06/01/godot-dontstarve-cam/","2024/01/31/MoneyThings/","2024/01/31/js-with-json-api/","2023/11/28/Bootstrap-jQuery加载进度条/","2024/01/30/机器学习笔记之代价函数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Nick的琐碎日常","link":"https://www.nickwald.top/","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/nick.webp","descr":"🌻向阳生长，灿若花开🌻","siteshot":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/nick@0.5x.webp","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/anzhiyu.webp","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"speed","tag":"技术"},{"name":"应龙笔记","link":"https://www.silverdragon.cn/?link=blog.kclub.tech","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/silverdragon.webp","descr":"应龙笔记是一个专注于知识分享的网站","siteshot":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/silverdragon.webp","color":"speed","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/heo.webp","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2023/03/03/6401bcbf1d33b.webp","color":"speed","tag":"生活"},{"name":"koto's Site","link":"https://koto.cc","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/kobe-koto.webp","descr":"koto 的灌水站","siteshot":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/koto.webp","color":"speed","tag":"技术"},{"name":"江修的博客","link":"https://blogs.obelisync.com","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/lupnis.webp","descr":"烂尾楼合集（？","siteshot":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/lupnis-siteshot.webp","color":"speed","tag":"技术"},{"name":"西西のBlog","link":"https://xxand.cc","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/cc.png","descr":"嘻嘻西西CC吸吸","siteshot":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/cc.webp","color":"speed","tag":"技术"},{"name":"Nick","link":"https://www.nickwald.top/","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/nick.webp","descr":"🌻向阳生长，灿若花开🌻","recommend":true},{"name":"Dao-Miruu","link":"https://www.silverdragon.cn/?link=blog.kclub.tech","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/silverdragon.webp","descr":"应龙笔记是一个专注于知识分享的网站","recommend":false},{"name":"koto's Site","link":"https://koto.cc","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/kobe-koto.webp","descr":"koto 的灌水站","recommend":false},{"name":"SharpIce","link":"https://sharpice.top","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/sharpice.webp","descr":"锐冰龙温馨的小窝~","recommend":false},{"name":"DP 小木屋","link":"https://dpii.club","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/dp.webp","descr":"暂无。","recommend":false},{"name":"江修","link":"https://blogs.obelisync.com","avatar":"https://kclub-phost-1313107835.cos.ap-nanjing.myqcloud.com/Phost/friends/avatar/lupnis.webp","descr":"AI 大佬","recommend":false},{"name":"渣渣120","link":"https://zhazha120.cn","avatar":null,"descr":{}}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };