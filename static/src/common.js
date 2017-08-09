 $(function(){
 	// 菜单 
 	$('.nav-btn').on('click',function(){
 		if($(this).find('.mb-nav').hasClass('active')){
 			$(this).find('.mb-nav').removeClass('active');
 			$(this).next().hide();
			$('.mb-nav-bg').hide();
			$('body').off('touchmove');
			// $('body').css({'overflow':'auto'});
 		}else{
 			$(this).find('.mb-nav').addClass('active');
 			$(this).next().show();
 			$('body').on('touchmove',function(e){e.preventDefault();});
			// $('body').css({'overflow':'hidden'}); 
			$('.mb-nav-bg').show();
 		} 
 	});

 	// 遮罩关闭
 	$('.mb-nav-bg').on('click',function(){ 
		$('.nav-btn').find('.mb-nav').removeClass('active');
		$('.nav-btn').next().hide();
		$('.mb-nav-bg').hide();
		$('body').off('touchmove'); 
 	}); 


 	// 中英切换
	$('.languge').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).find('.languge-con').hide();
		}else{
			$(this).addClass('active');
			$(this).find('.languge-con').show();
		} 
	});

 });