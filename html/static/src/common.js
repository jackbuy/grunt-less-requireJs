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
            // $('body').off('touchmove').css({
            //     "overflow":"auto"
            // });
            $('body').css({
                "overflow":"auto"
            });
            navBtnBg.hide();
        }else{
            $nav.addClass('active');
            $(this).addClass('active');
            // $('body').on('touchmove', function(e){
            //     e.preventDefault();
            // });
            $('body').css({
                "overflow":"hidden"
            });
            navBtnBg.show();
        } 
    });

    // 遮罩关闭
    // navBtnBg.on('click', function(){ 
    //     navBtn.removeClass('active');
    //     navBtn.next().hide();
    //     $(this).hide();
    //     $('body').off('touchmove');
    // });

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
            
    //         console.log(22);
    //     }
    // });

    /**
     * 首页打开菜单
     */
    $('.menu').on('click', function(){
        $('.home-menu').show();
        $('.home-menu-bg').show();
    });

    $('.menu-close').on('click', function(){
        $('.home-menu').hide();
        $('.home-menu-bg').hide();
    });

    // 
    $('.mouse').on("click", function(){
        var oft = $('.news-hot').offset().top;
        $('body,html').animate({
            'scrollTop':oft
        },300);
    });
    /**
     * 选择语言
     */
    $('.tool-bar-lau').on('click', function(){
        $(".languge").show();
        $(".languge-bg").show();
        // if(!$(this).hasClass('active')){
        //     $(this).addClass("active");
        //     $(this).parent().next().slideDown();
        //     $('body').on('touchmove', function(e){
        //         e.preventDefault();
        //     });
        // }else{
        //     $(this).removeClass("active");
        //     $(this).parent().next().slideUp();
        //     $('body').off('touchmove');
        // }
    });
    $('.lau-btn').on('click', function(){
        $(".languge").hide();
        $(".languge-bg").hide();
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
    var tab = $('.bsc-inner-content');
    var menu = tab.find('.menu a');
    var content = tab.find('.con');
    tabCommon(menu, content, "active");

    // 公司业务 - 货运代理
    
    var tab2 = $('.hzhb-tab');
    var menu2 = tab2.find('.hzhb-tab-menu span');
    var content2 = tab2.find('.hzhb-tab-content ul');
    tabCommon(menu2, content2, "active");

    // 悬浮固定
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