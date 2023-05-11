$(function(){
  $("p").click(function(){
      $(this).hide();
  });
  
  // add
  $("ul.red li").add("p.red").css("color", "red");

  // addBack
  $("div.prev").find("p.ip").addBack().addClass("abc");

  $("h1.ac").addClass("bg");
  $("h2.ac").addClass("bg bd");

  // after
  $("h1.gt").after("<p>world</p>");

  // animation
  $(".big").click(function(){
    $(".any").animate({
      width:"100%"
    }); // 빅이라는 클래스를 가진 버튼을 클릭할 때 any라는 클래스를 가진 div가 가로폭을 100% 채움
  });

  // attr
  let hClass = $("h6").attr("class");
  $("span.inline").text(hClass);

  // attr add
  $(".control").attr("placeholder","이름이 뭐에요?");

  // clone
  $(".copy").clone().appendTo(".null");

  // each
  let i = 1
  $("p").each(function(){
    $(this).addClass("s" + i);
    i = i + 1;
  });

  // empty
  $(".empty").click(function(){
    $(".box").empty();
  });
});





