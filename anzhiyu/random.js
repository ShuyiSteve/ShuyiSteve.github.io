var posts=["2025/07/24/VUE3初识/","2025/06/23/hello-world/","2025/07/06/常见的排序算法/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };