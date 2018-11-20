$(function(){
	var num=0
	$('.ban-prev a').click(function(){
		num--
		if (num<0) {
			num=1
		}
		$('.ban-ul li').fadeOut()
		$('.ban-ul li').eq(num).fadeIn()
		console.log(num)
	})
	$('.ban-next a').click(function(){
		a()
	})
	function a(){
		num++
		if (num>1) {
			num=0
		}
		$('.ban-ul li').fadeOut()
		$('.ban-ul li').eq(num).fadeIn()
		console.log(num)
	}
// 	var timer=setInterval(a,3000)
// 	$('.ban-ul li a').hover(function(){
// 		clearInterval(timer)
// 	},function(){
// 		var timer=setInterval(a,3000)
// 	})

	$('.main1-con-cenb-anniu a').mouseover(function(){
		$('.main1-con-cenb-anniu a').css('background','rgba(0,0,0,.001)')
		$(this).css('background','url(img/tuijian_cur_40a7c37.webp.jpg)')
		$('.main1-con-ul li').fadeOut()
		$('.main1-con-ul li').eq($(this).index()).fadeIn()
	})
	
	$('.main1-con-right-top a').mouseover(function(){
		$('.main1-con-right-ul').fadeOut()
		$('.main1-con-right-ul').eq($(this).index()).fadeIn()
	})
	
	
})