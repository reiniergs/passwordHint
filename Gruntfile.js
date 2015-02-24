'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        
        watch: {
            js : {
                files: ['asset/js/src/**/*.js'],
                tasks: ['browserify']
            }, 
            css: {
                files: 'asset/css/src/**/*.scss',
                tasks: ['compass'],
                options: {
                  livereload: true
                }
            }    
        },
        compass: {                 
            dev: {                    
                options: {
                  sassDir: 'asset/css/src',
                  cssDir:  'asset/css'
                }
            }
        },
        browserify : {
            dist : {
                files : {
                    'asset/js/build/component.js' : 'asset/js/src/**/*.js'
                },
                options : {
                    browserifyOptions : {
                        debug : true,
                        standalone : 'passwordHint'
                    }
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['requirejs']);

    
    

};