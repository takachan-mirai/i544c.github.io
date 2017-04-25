/*
 *  @_leo_isaac
 */

$(function(){
  window.addEventListener("scroll", (() => {
    let top_min_height = document.querySelector("#top h1").clientHeight;
    return () => {
      document.getElementById("top").style.height = Math.max(window.innerHeight - window.pageYOffset, top_min_height);
    };
  })());
  
  //github-chart
  var img = $("#github-chart-img");
  img.load(function() {
    if(img.width() > $(window).width()) {
      $("#github-chart").scrollLeft(img.width());
    }
  });
  img.attr('src', img.attr('src'));
});
