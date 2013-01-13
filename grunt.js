module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: "<config:lint.files>",
      tasks: "lint test"
    },
    // coffee: {
    //   compile: {
    //     files: {
    //       'dist/hello.js': 'source/hello.coffee'
    //     }
    //   },
    //   glob_to_multiple: {
    //     files: grunt.file.expandMapping(['source/*.coffee'], 'dist/', {
    //       rename: function(destBase, destPath) {
    //         return destBase + destPath.replace(/\.coffee$/, '.js');
    //       }
    //     })
    //   }
    // }
    coffee: {
      compile: {
        files: {
          'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
          'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
        }
      },

      glob_to_multiple: {
        files: grunt.file.expandMapping(['source/*.coffee'], 'dist/', {
          rename: function(destBase, destPath) {
            return destBase + destPath.replace(/\.coffee$/, '.js');
          }
        })
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  return grunt.registerTask('default', 'lint test concat min');
};
