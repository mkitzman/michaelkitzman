module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        yslow: {
            options: {
                thresholds: {
                    weight: 180,
                    speed: 1500,
                    score: 80,
                    requests: 15
                }
            },
            pages: {
                files: [
                    {
                        src: 'http://michaelkitzman.com'
                    }
                ]
            }
        },
        concat: {
            dist: {
                src: [
                    'js/vender/*.js', // All JS in the vender folder
                    'js/main.js'  // This specific file
                ],  
                dest: 'js/build/production.js'
            }
        },
        phantomas: {
            gruntSite : {
                options : {
                    indexPath : './phantomas/',
                    options   : {},
                    url       : 'http://michaelkitzman.com/'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'img/build/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-yslow');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-phantomas');
    //grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    //grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'yslow']);
    grunt.registerTask('default', ['phantomas', 'concat', 'uglify', 'yslow']);

};