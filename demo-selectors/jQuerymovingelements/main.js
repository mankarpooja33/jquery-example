$(document).ready(function(){
  
  $("#btn1").click(function(){
    $(".append p").append(" <b>Appended text</b>.");
  });
  $("#btn2").click(function(){
    $(".append ol").append("<li>Appended item</li>");
  });
  
  $("#btn3").click(function(){
    $(".prepand p").prepend("<b>Prepended text</b>. ");
  });
  $("#btn4").click(function(){
    $(".prepand ol").prepend("<li>Prepended item</li>");
  });
  
  $("#btn5").click(function(){
    $(".remove-content").remove();
  });
  
  $("#btn6").click(function(){
    $(".clone p").clone().appendTo(".copy-content");
  });
  
});