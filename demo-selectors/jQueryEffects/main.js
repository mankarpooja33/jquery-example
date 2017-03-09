$(document).ready(function(){
$("#showcontent").click(function() {
  $(".show").show();
});

$("#hidecontent").click(function() {
  $(".hide").hide();
});

$("#togglecontent").click(function() {
  $(".toggle").toggle();
});

$("#slideup").click(function() {
  $(".up").slideUp(1000);
});

$("#slidedown").click(function() {
  $(".down").slideDown(1000);
});

$("#fadein").click(function() {
  $(".in").fadeIn(1000);
});

$("#fadeout").click(function() {
  $(".out").fadeOut(1000);
});

$("#btn1").click(function(){
  $("#box").animate({width: "300px"});
});

$("#btn2").click(function(){
  $("#box").animate({width: "100px"});
});

});