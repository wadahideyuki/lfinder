$(function () {

/*-- fullpageJs --*/
/*
var myFullpage = new fullpage('#fullpage', {
  anchors: [
    '1stPage',
    '2ndPage',
    '3rdPage',
    '4thPage',
    '5thPage',
    '6thPage',
    '7thPage'
  ],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['First page', 'Second page', 'Third and last page'],
  responsiveWidth: 1100,
  scrollOverflow: true,
  afterResponsive: function(isResponsive){
  }
});
*/
$("#fullpage").fullpage({
  anchors: [
    '1stPage',
    '2ndPage',
    '3rdPage',
    '4thPage',
    '5thPage',
    '6thPage',
    '7thPage'
  ],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['First page', 'Second page', 'Third and last page'],
  responsiveWidth: 1100,
  scrollOverflow: true,
  afterResponsive: function(isResponsive){
  }
});

//次ページへscrollボタン
$(".btnScrlNxt a").click(function(){
  $.fn.fullpage.moveSectionDown();
  return false;
});
//headerのnavボタン
$("header .in ul a").click(function(){
  var scrlNum = $(this).attr("data-scrlNum");
  $.fn.fullpage.moveTo(scrlNum);
  return false;
});
/*-- fullpageJs --*/


/*-- mainのbg切替 --*/
  var sldElm = $(".sec1 .bg");
	var cnt = 0;
	var cnt2 = sldElm.length-1;//画像の数-1

	function mainChange(){
		if(cnt < cnt2){
			sldElm.eq(cnt).fadeOut(3000);
			sldElm.eq(cnt+1).fadeIn(3000);
			cnt ++;
		}else{
			cnt = 0;
			sldElm.fadeOut(3000);
			sldElm.eq(0).fadeIn(3000);
		}
	}//mainChange() End

//自動切替
	function startSlide(){
		timerId = setInterval(function(){	mainChange();}, 4000);
	};//startSlide()end
	startSlide();
/*-- /mainのbg切替 --*/



}); //fncEnd