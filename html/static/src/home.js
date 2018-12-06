require(['domReady!', 'swiper', 'resizeend', 'lazyload', 'comFunc'], function (){

    // 图片懒加载
    $("img.lazy").lazyload({
        effect: 'fadeIn',
        threshold: '50',
        failure_limit : 1
    });
    
    function resizePage(){
        
    }
    
    $(window).resizeEnd({
        // delay : 500 /* 监控间隔时间 单位：毫秒 */
    },function(){ resizePage();});
    resizePage();

});