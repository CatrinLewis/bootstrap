$(document).ready(function(){

  $("#CatrinLewis").mouseenter(function(){
    $(this).append("<b>  You should read this!  </b>");
  });

  $("a").click(function(){
    $(this).fadeOut("slow").fadeIn(1000);
  });

  $("p").mouseenter(function(){
    $(this).css("color", "#db4e00");
  });

  $("p").mouseleave(function(){
    $(this).css("color", "black");
  });

  $("h2").mouseenter(function(){
    $(this).css("color", "#db4e00").addClass("important");
  });

  $("h2").mouseleave(function(){
    $(this).css("color", "black").removeClass("important");
  });

  $("img").mouseenter(function(){
    $(this).animate({
      opacity: '0.5',
    });
  });

  $("img").mouseleave(function(){
    $(this).animate({
      opacity: '1',
    });
  });

});
