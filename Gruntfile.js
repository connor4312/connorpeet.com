module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      app: {
        expand: true,
        cwd: 'src/js',
        src: ['**/*.coffee'],
        dest: '.tmp/js',
        ext: '.js'
      }
    },
    uglify: {
      coffee: {
        expand: true,
        cwd: '.tmp/js',
        src: ['**/*.js'],
        dest: 'public/js',
        ext: '.js'
      }
    },
    less: {
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "public/css/style.css": "src/css/style.less"
        }
      }
    },
    clean: ['.tmp']
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'less', 'coffee', 'uglify']);

};