/*
 *  @_leo_isaac
 */

$(function(){
  w = $(window).width();  //ウィンドウ幅
  h = $(window).height(); //ウィンドウ高さ
  h1 = $("#top *");
  h1w = h1.width();
  h1h = h1.height();
  $("#top img").height(h1.outerHeight(true) - h1.css("margin-bottom").replace(/px/, ""));

  h1.css({'top': h/2-h1h, 'left': w/2-h1w/2});
  $(window).resize(function(){
    w = $(window).width();
    h = $(window).height();
    h1w = h1.width();
    h1h = h1.height();
    h1.css({'top': h/4-h1h - y/2.1, 'left': w/2-h1w/2});
    $("#top img").height(h1.outerHeight(true) - h1.css("margin-bottom").replace(/px/, ""));
  });

  scroller();
  $(window).on('scroll', scroller);
  $('body').bind('touchmove', scroller);

  var flag = true;

  $("#main").on('scroll', function() {
    innerY = document.getElementById("main").scrollTop;
    if(innerY == 0) {
      $("#main").css('overflow', 'hidden');
      $("body").css('overflow', 'scroll');
      flag = true;
      $("#top *").fadeToggle('fast');
    } else {
      flag = false;
    }
  });

  function scroller(){
    y = $(window).scrollTop();
    h1.css('top', h/4-h1h - y/2.1);
    if($('#main').height() <= y && flag){
      $("#main").css('overflow', 'scroll');
      $("body").css('overflow', 'hidden');
      $("#top *").fadeToggle('fast');
    }
  }


  //github-chart
  var img = $("#github-chart-img");
  img.load(function() {
    if(img.width() > $(window).width()) {
      $("#github-chart").scrollLeft(img.width());
    }
  });
  img.attr('src', img.attr('src'));
});
