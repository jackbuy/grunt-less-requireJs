module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        //concat合并 
        // concat: {
        //     options:{
        //         stripBanners:true, //合并时允许输出头部信息
        //         banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
        //     }, 
        //     jsConcat:{
        //         src:'static/src/**/*.js',
        //         dest:'static/js/<%=pkg.jsName %>.js'
        //     }
        // }, 
        // less预编译
        less: { 
            // dev: {
            //     options: {
            //         compress: true,
            //         // yuicompress: true,
            //         // ieCompat：true,
            //         // optimization: 2,
            //         sourceMap: true,
            //         sourceMapFilename: 'static/css/<%= pkg.cssName %>.css.map', // where file is generated and located
            //         sourceMapURL: '<%= pkg.cssName %>.css.map', // the complete url and filename put in the compiled css file
            //         // sourceMapBasepath: '/', // Sets sourcemap base path, defaults to current working directory.
            //         // sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
            //     },
            //     files: [
            //         {'static/css/<%= pkg.cssName %>.css':'static/less/<%= pkg.cssName %>.less' } 
            //     ]
            // },
            dev: {
                options: {
                    compress: true,
                    // yuicompress: true, 
                    optimization: 2,
                    // ieCompat：true,
                    sourceMap: true,
                    sourceMapFilename: 'static/css/<%= pkg.cssName %>.min.css.map', // where file is generated and located
                    sourceMapURL: '<%= pkg.cssName %>.min.css.map', // the complete url and filename put in the compiled css file
                    // sourceMapBasepath: '/', // Sets sourcemap base path, defaults to current working directory.
                    // sourceMapRootpath: '/', // adds this path onto the sourcemap filename and less file paths
                },
                files: [
                    {'static/css/<%= pkg.cssName %>.min.css':'static/less/<%= pkg.cssName %>.less' } 
                ]
            }
        },
        //压缩css
        // cssmin:{
        //     options:{
        //         compatibility: 'ie8',
        //         keepSpecialComments: '*',
        //         advanced: false
        //         stripBanners:true, //合并时允许输出头部信息
        //         banner:'/*!<%= pkg.cssName %> - <%= pkg.cssVersion %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
        //     },
        //     build:{
        //         src:'static/css/<%= pkg.cssName %>.css',//压缩是要压缩合并了的
        //         dest:'static/css/<%= pkg.cssName %>.min.css' //dest 是目的地输出
        //     }
        // },
        //压缩js
        uglify:{
            options:{
                // stripBanners:true, //合并时允许输出头部信息
                // sourceMap:true,
                banner:'/*!<%= pkg.jsName %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'static/src',//js目录下
                    src:'**/*.js',//所有js文件
                    dest: 'static/js/script/'//输出到此目录下
                }]
            }
            // build:{
            //     src:'static/js/lib/require.js',//压缩是要压缩合并了的
            //     dest:'static/js/lib/require.min.js' //dest 是目的地输出
            // }
        }, 
        // qunit: {
        //     files: ['test/**/*.html']
        // },
        jshint: {
            files: ['static/src/**/*.js'],
            options: {
                //这里是覆盖JSHint默认配置的选项
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        // 文件监听
        watch: { 
            files: ['static/src/**/*.js','static/less/**/*.less'],  
            // tasks: ['less'] 
            tasks: ['jshint','uglify','less'] 
            // tasks: ['jshint','concat','uglify','less'] 
            // tasks: ['jshint','concat','uglify','less','cssmin'] 
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); //代码压缩
    grunt.loadNpmTasks('grunt-contrib-jshint'); //js验证
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch'); //代码监控
    grunt.loadNpmTasks('grunt-contrib-concat'); //代码合并
    grunt.loadNpmTasks('grunt-css'); //css压缩
    grunt.loadNpmTasks('grunt-contrib-less'); //less 预编译


    // grunt.registerTask('default', ['uglify']);  
    // grunt.registerTask('default', ['less','watch']);  
    grunt.registerTask('default', ['jshint','uglify','less','watch']);  
    // grunt.registerTask('default', ['jshint','concat','uglify','less','cssmin','watch']);  

    // grunt.registerTask('default', ['concat', 'uglify','cssmin','watch']);//合并、js压缩 、css压缩、动态监听
    // grunt.registerTask('default', ['jshint','concat', 'uglify','cssmin','watch']);//js检查、合并、js压缩 、css压缩、动态监听

};
