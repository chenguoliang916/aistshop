var $mlNav = $('.ml-nav');
	$('#dowebok').fullpage({
		verticalCentered: !1,
		navigation: !0,
		/*anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],*/
		onLeave: function(index, nextIndex, direction){
			/*console.log(index);*/
			if(index == 2 && direction == 'up'){
				$mlNav.animate({
					top: 0
				}, 680);
			} else if(index == 1 && direction == 'down') {
			
				$mlNav.animate({
					top: -85
				}, 400);
			} else {
				$mlNav.animate({
					top: -85
				}, 400);
			}
		},
		afterLoad:function(anchorLink,index){
			if(index==6){
				$('.section5').toggleClass('active-on');
			}
		}
	});
	var dongdoctor=function(){
	$('.bg13').stop().css({bottom:'-100%',opacity:0}).show().animate({bottom:'0%',opacity:1},800);
	};
	dongdoctor();
	var resetwh=function(){
		W_W=$(window).width();
		W_H=$(window).height();
		$('.set-h').height(W_H);
		//console.log(W_H);
	}
	$(window).resize(resetwh);
	resetwh();