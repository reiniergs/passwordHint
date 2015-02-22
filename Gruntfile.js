'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        
        watch: {
            js : {
                files: ['public/js/src/**/*.js'],
                tasks: ['requirejs']
            }, 
            css: {
                files: 'public/css/src/**/*.scss',
                tasks: ['compass'],
                options: {
                  livereload: true
                }
            }    
        },
        compass: {                 
            dev: {                    
                options: {
                  sassDir: 'public/css/src',
                  cssDir:  'public/css'
                }
            }
        },
        browserify : {
            dist : {
                files : {
                    'public/js/main.js' : 'public/js/src/**/*.js'
                },
                options : {
                    browserifyOptions : {
                        debug : true,
                    }
                }
            }
        },
        requirejs: {
		    compile: {
			    options: {
			    	appDir: './public/js',
			    	baseUrl : './',
			        dir : "public/build",
			        modules: [
				        { name: 'init' },
				    ],
				    paths : {
				    	'backbone' : 'vendor/backbone',
				    	'underscore' : 'vendor/underscore',
				    	'jquery' : 'vendor/jquery',
				    	'text'	: 'vendor/text',
				    	'handlebars' : 'vendor/handlebars'
				    }
			    }
		    }
		}
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks("grunt-amd-wrap");
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['requirejs']);

    
    

};