module.exports = function (grunt) {
    grunt.initConfig({

        uglify: {
            files: {
                src: 'src/*.js',
                dest: 'lib/',
                expand: true,
                flatten: true,
                ext: '.min.js'
            }
        },
        watch: {
            js: {
                files: 'src/*.js',
                tasks: ['uglify']
            },
        }
    });
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // register at least this one task
    grunt.registerTask('default', ['uglify']);
};