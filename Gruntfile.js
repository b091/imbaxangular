module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
            }
        },
        uglify: {
            compiled_app: {
                options: {
                    mangle: false,
                    compress: true
                },
                files: {
                    'app/assets/js/app.min.js': ['app/js/compiled/app/ts/*.js', 'app/js/imbaxapp.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'lib/angular/angular.js',
                    'lib/angular-route/angular-route.js',
                    'lib/angular-resource/angular-resource.js',
                    'lib/jquery/jquery.js',
                    'lib/bootstrap/bootstrap.js'
                ],
                dest: 'app/assets/js/provide.js'
            }
        },
        copy: {
            bootstrap: {
                files: [
                    {
                        expand: true,
                        cwd: 'lib/bootstrap/',
                        src: 'glyphicons-*.*',
                        dest: 'app/assets/fonts/',
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'lib/bootstrap/',
                        src: '*.css',
                        dest: 'app/assets/css/',
                        flatten: true,
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            tests: {
                files: ['app/ts/*.ts', 'app/js/*.js'],
                tasks: ['typescript:base','uglify:compiled_app']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('build', [
        'bower:install',
        'concat',
        'uglify:compiled_app',
        'copy',
        'watch'
    ]);

};
