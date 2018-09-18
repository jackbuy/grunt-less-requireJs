$(function(){
    /**
     * 三明治菜单 - 移动端使用
     * @author：zzj
     */
    var navBtn = $(".mb-nav");
    var navBtnBg = $(".mb-nav-bg");
    var $nav = $(".sub-header .con .nav");
    navBtn.on('click', function(){
        if($(this).hasClass('active')){
            $nav.removeClass('active');
            $(this).removeClass('active');
            $('body').css({
                "overflow":"auto"
            });
            navBtnBg.hide();
        }else{
            $nav.addClass('active');
            $(this).addClass('active');
            $('body').css({
                "overflow":"hidden"
            });
            navBtnBg.show();
        } 
    });

    /**
     * 返回顶部 - Pc端使用
     * @author: zzj
     * 
     */
    var goTopBtn = $(".gotop");
    var scrollHeight = 300;
    isScoll();
    $(window).on('scroll', isScoll);
    
    function isScoll(){
        if($(window).scrollTop() > scrollHeight){
            goTopBtn.addClass('active');
        }else{
            goTopBtn.removeClass('active');
        }
    }
    goTopBtn.on('click',function(){
        $('body,html').animate({
            'scrollTop':'0px'
        },300);
    });

    /**
     * 禁止鼠标右键
     */
    // function stop(){
    //     return false;
    //    }
    // document.oncontextmenu=stop;
    
    /**
     * 禁止鼠标左键拖动图片
     */
    // $('img').on({
    //     mousedown: function(e){
    //         e.preventDefault();
    //     }
    // });

    /**
     * 首页打开菜单
     */
    $('.mouse').on("click", function(){
        var oft = $('.news-hot').offset().top;
        $('body,html').animate({
            'scrollTop':oft
        },300);
    });

    /**
     * 多行文本溢出
     */
    function ovfNum(obj){
        $(obj).each(function(){
            var str = $(this).html();
            var offsetH = $(this).height();
            for(i=0; i<str.length; i++) {
                $(this).html(str.substr(0, i)).css({
                    opacity: 1
                });
                if(offsetH < $(this)[0].scrollHeight) {
                    $(this).css({
                        overflow: 'hidden',
                        opacity: 1,
                    });
                    $(this).html(str.substr(0, i-3) + '...');
                break;
                }
            }
        });
    }
    ovfNum('.news-content-side .des');
    ovfNum('.news-content-content li .content .des');


    /**
     * 公用选项卡
     * @param {*} menu 
     * @param {*} content 
     * @param {string} effect  // css3特效
     */
    function tabCommon(menu, content, effect){
        menu.each(function(){
            $(this).on('click', function(event){
                event.preventDefault();
                $(this).addClass('active').siblings().removeClass('active');
                console.log($(this).index());
                content.eq($(this).index()).addClass(effect).siblings().removeClass(effect);
            });
        });
    }
    
    // 联系我们 - 办事处
    // var tab = $('.bsc-inner-content');
    // var menu = tab.find('.menu a');
    // var content = tab.find('.con');
    // tabCommon(menu, content, "active");


    /**
     * 悬浮固定
     */
    var fixTab = $(".sub-header");
    var fixTab2 = $(".sub-banner");
    var offsetTop = fixTab2.outerHeight(true) - fixTab.height();
    function goScoll(){
        if($(window).scrollTop() >= offsetTop){
            fixTab.addClass('active');
        }else{
            fixTab.removeClass('active');
        }

    }
    goScoll();
    $(window).on('scroll', goScoll);

});