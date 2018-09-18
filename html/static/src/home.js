require(['domReady!', 'swiper', 'resizeend', 'comFunc'], function (){
    function resizePage(){
        
    }
    
    $(window).resizeEnd({
        // delay : 500 /* 监控间隔时间 单位：毫秒 */
    },function(){ resizePage();});
    resizePage();

});