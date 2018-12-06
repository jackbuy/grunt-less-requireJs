/*!all-2018-12-06 */

require(["domReady!","swiper","resizeend","lazyload","comFunc"],function(){$("img.lazy").lazyload({effect:"fadeIn",threshold:"50",failure_limit:1}),$(window).resizeEnd({},function(){})});