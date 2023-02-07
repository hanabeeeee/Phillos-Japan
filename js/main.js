$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 1000){
            $("#gotop_wrap").removeClass("deactive");
            $("#gotop_wrap").addClass("active");
        }else{
            $("#gotop_wrap").removeClass("active");
            $("#gotop_wrap").addClass("deactive");
        }
    })
});

$(document).ready(function(){
  var currentPosition = parseInt($("#gotop_wrap").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $("#gotop_wrap").stop().animate({"top":position+currentPosition+"px"},350);
  });
});


$(document).ready(function(){
    clientW = $("body").width();

   if(clientW == 1180){
      $(".gotop_box").css("width","150px");
      $(".gotop_box").css("height","150px");
      $(".gotop_box img").css("width","100px");
      $(".gotop_box i").css("font-size","100px");
   }
});
  
