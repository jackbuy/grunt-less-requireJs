// requeryJs config配置
// requeryJs 兼容ie6+
// waitSeconds: 0  //加载等待时间（默认为7秒，可以设置为0表示永远不超时，或者大一点的数字）
// require css.js //不支持IE9-，暂不考虑使用
require.config({
    // map: {
    //   '*': {
    //     'css': 'lib/css'
    //   }
    // },
    paths:{
        // lib
        "domready":"lib/domReady",
        "jquery": "lib/jquery-1.9.0.min",
        "owl": "lib/owlcarousel/owl.carousel.min",
        // "swiper": "lib/swiper4.3.5/js/swiper.min",
        "swiper": "lib/swiper.min",
        "nicescroll": "lib/jquery.nicescroll.min",
        "resizeend": "lib/jquery-resizeEnd.min",
        "velocity": "lib/velocity.min",
        "velocity-ui": "lib/velocity.ui.min",
        "tweenmax": "lib/TweenMax.min",
        // script
        "common": "script/common"
    },
    shim:{
        "owl": {
            deps: [
                'jquery',
                // 'css!lib/owlcarousel/assets/owl.carousel.min.css'
            ]
        },
        "swiper": ["jquery"],
        "nicescroll": {
            deps: ["jquery"]
        },
        "resizeend": {
            deps: ["jquery"]
        },
        "velocity": {
            deps: ["jquery"]
        },
        "velocity-ui": {
            deps: ["velocity"]
        },
        "tweenmax": {
            deps: ["jquery"]
        },
        "common": {
            deps: ["jquery"]
        }
    },
    urlArgs: "bust=" +  (new Date()).getTime(),
    waitSeconds: 0
});


/*
* 响应式常用插件说明，具体使用方法------请百度
* 注意：文件必须添加在页面的head元素内，因为IE浏览器必须在元素解析前知道这个元素，所以这个js文件不能在页面底部调用。
*/

// respond.js   是为IE9以下浏览器支持css3中屏幕自适应的一个小js插件。注意：要在服务器下才会有效
// html5.js   让IE（包括IE6）支持HTML5元素方法
// modernizr.js   帮助我们检测浏览器是否实现了某个feature，注意：只做检测