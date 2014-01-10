module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // this allows you to override how package.json is used with templates
        app: {
            name: '<%= pkg.name %>',
            package_name: '<%= pkg.config.id %>',
            description: '<%= pkg.description %>',
            version: '<%= pkg.version %>',
            author_name: '<%= pkg.author.name %>',
            author_email: '<%= pkg.author.email %>',
            author_url: '<%= pkg.author.url %>',
        },

        clean: {
            plugins: ['plugins'],
            platforms: ['platforms'],
            merges: ['merges', 'platform-merges'],
            template: ['.cordova/config.json', 'www/config.xml']
        },

        mkdir: {
            'default': {
                options: {
                    create: ['plugins', 'platforms', 'merges', 'platform-merges', '.cordova']
                }
            }
        },

        copy: {
            platform_merges: {
                expand: true,
                dest: './platforms/',
                cwd: 'platform-merges',
                src: '**'
            }
        },

        cordovacli: {
            options: {
                path: './'
            },
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add',
                    platforms: ['ios', 'android']
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        'console',
                        'device',
                        'network-information',
                        'splashscreen'
                    ]
                }
            },
            build_ios: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            prepare_ios: {
                options: {
                    command: 'prepare',
                    platforms: ['ios']
                }
            },
            prepare_android: {
                options: {
                    command: 'prepare',
                    platforms: ['android']
                }
            },
            serve: {
                options: {
                    command: 'serve',
                    port: 7000
                }
            }
        },

        image_resize: {
            "icon-57": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 57
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/icons/icon.png": "www/res/icon.png"
                }
            },
            "icon-57-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 114
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/icons/icon@2x.png": "www/res/icon.png"
                }
            },
            "icon-72": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 72
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/icons/icon-72.png": "www/res/icon.png"
                }
            },
            "icon-72-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 144
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/icons/icon-72@2x.png": "www/res/icon.png"
                }
            },
            "screen-iphone-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 320,
                    height: 480
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default~iphone.png": "www/res/screen-portrait.png"
                }
            },
            "screen-iphone-portrait-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 640,
                    height: 960
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default@2x~iphone.png": "www/res/screen-portrait.png"
                }
            },
            "screen-iphone-portrait-568h-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 640,
                    height: 1136
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default-568h@2x~iphone.png": "www/res/screen-portrait.png"
                }
            },
            "screen-ipad-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 768,
                    height: 1004
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default-Portrait~ipad.png": "www/res/screen-portrait.png"
                }
            },
            "screen-ipad-portrait-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 1536,
                    height: 2008
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default-Portrait@2x~ipad.png": "www/res/screen-portrait.png"
                }
            },
            "screen-ipad-landscape": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 1024,
                    height: 748
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default-Landscape~ipad.png": "www/res/screen-landscape.png"
                }
            },
            "screen-ipad-landscape-2x": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 2048,
                    height: 1496
                },
                files: {
                    "platforms/ios/<%= app.name %>/Resources/splash/Default-Landscape@2x~ipad.png": "www/res/screen-landscape.png"
                }
            },
            "icon-36-ldpi": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 36
                },
                files: {
                    "platforms/android/res/drawable-ldpi/icon.png": "www/res/icon.png"
                }
            },
            "icon-48-mdpi": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 48
                },
                files: {
                    "platforms/android/res/drawable-mdpi/icon.png": "www/res/icon.png"
                }
            },
            "icon-72-hdpi": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 72
                },
                files: {
                    "platforms/android/res/drawable-hdpi/icon.png": "www/res/icon.png"
                }
            },
            "icon-96-xhdpi": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 96
                },
                files: {
                    "platforms/android/res/drawable/icon.png": "www/res/icon.png"
                }
            },
            "screen-ldpi-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 426,
                    height: 320
                },
                files: {
                    "platforms/android/res/drawable-ldpi/screen.png": "www/res/screen-portrait.png"
                }
            },
            "screen-mdpi-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 420,
                    height: 320
                },
                files: {
                    "platforms/android/res/drawable-mdpi/screen.png": "www/res/screen-portrait.png"
                }
            },
            "screen-hdpi-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 640,
                    height: 480
                },
                files: {
                    "platforms/android/res/drawable-hdpi/screen.png": "www/res/screen-portrait.png"
                }
            },
            "screen-xhdpi-portrait": {
                options: {
                    crop: true,
                    upscale: true,
                    width: 960,
                    height: 720
                },
                files: [
                    {dest:"platforms/android/res/drawable/screen.png", src:"www/res/screen-portrait.png"},
                    {dest:"platforms/android/res/drawable-xhdpi/screen.png", src:"www/res/screen-portrait.png"},
                ]
            }
        },

        watch: {
            src: {
                files: ['www/**/*.*', 'platform-merges/**/*.*'],
                tasks: ['update']
            }
        },

        template_process: {
            json:{
                files:[{src:'templates/config.json', dest:'.cordova/config.json'}]
            },
            xml: {
                files:[{src:'templates/config.xml', dest:'www/config.xml'}]
            }
        }
    });    

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-cordovacli');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadTasks('tasks');

    grunt.registerTask('default', 'Watch for changes, run update.', ['update', 'watch']);
    grunt.registerTask('init', 'Initialize the development environment.',['clean','mkdir','template_process:xml','template_process:json','cordovacli:add_platforms','cordovacli:add_plugins','update']);
    grunt.registerTask('update', 'Update platforms.', ['cordovacli:prepare_ios', 'cordovacli:prepare_android', 'copy', 'image_resize']);
    grunt.registerTask('build', 'Build Platforms.', ['cordovacli:build_ios', 'cordovacli:build_android']);
    grunt.registerTask('serve', 'Serve webroot via cordova.', ['cordovacli:serve']);

};
