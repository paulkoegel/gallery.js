module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: "<config:lint.files>",
      tasks: "lint test"
    },
    coffee: {
      compile: {
        files: {
          'dist/hello.js': 'source/hello.coffee'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  return grunt.registerTask('default', 'lint test concat min');
};
