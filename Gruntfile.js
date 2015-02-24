'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js : {
                files: ['asset/js/src/**/*.js'],
                tasks: ['browserify','uglify']
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
            dev : {
                files : {
                    'asset/js/build/<%= pkg.name %>.js' : 'asset/js/src/**/*.js'
                },
                options : {
                    browserifyOptions : {
                        debug : true,
                        standalone : '<%= pkg.name %>'
                    }
                }
            }
        },
        uglify: {
            my_target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'dist/<%= pkg.name %>.map'
                },
                files: {
                    'dist/<%= pkg.name %>.min.js': ['asset/js/build/<%= pkg.name %>.js']
                }
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    

    
    

};