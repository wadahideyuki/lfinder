$(function () {

/*-- SP機能のアコーディオン --*/
$(".sec3 ul li dl").click(function(){
  if($(window).width() <= 640){
    $(this).toggleClass("show");
    $(this).next().slideToggle();
    return false;
  }
});
/*-- /SP機能のアコーディオン --*/



}); //fncEnd