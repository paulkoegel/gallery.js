module.exports = (grunt) ->
  grunt.initConfig
    # watch:
    #   files: "<config:lint.files>"
    #   tasks: "lint test"

    clean: ["dist/*"]

    coffee:
      glob_to_multiple:
        files: grunt.file.expandMapping(['source/**/*.coffee'], 'dist/',
          rename: (destBase, destPath) ->
            destBase + destPath.replace(/\.coffee$/, '.js').replace('source', '')
          )

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.registerTask 'default', ['clean', 'coffee']
