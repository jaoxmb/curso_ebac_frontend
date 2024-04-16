module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          './dev/styles/main.css': './src/styles/main.less'
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          './dist/styles/main.min.css': './src/styles/main.less'
        }
      }
    },
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: 'SRC_CSS',
              replacement: './styles/main.css'
            },
            {
              match: 'SRC_JS',
              replacement: './scripts/main.js'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./src/index.html'],
            dest: 'dev/'
          }
        ]
      },
      dist: {
        options: {
          patterns: [
            {
              match: 'SRC_CSS',
              replacement: './styles/main.min.css'
            },
            {
              match: 'SRC_JS',
              replacement: './scripts/main.min.js'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['./src/index.html'],
            dest: 'dist/'
          }
        ]
      }
    },
    uglify: {
      dev: {
        options: {
          beautify: true
        },
        files: {
          './dev/scripts/main.js': './src/scripts/**/*.js'
        }
      },
      dist: {
        optiosn: { 
          compress: true
        },
        files: {
          './dist/scripts/main.min.js': './src/scripts/**/*.js'
        }
      }
    },
    watch: {
      less: {
        files: ['./src/styles/**/*.less'],
        tasks: ['less:development'],
        options: {
          atBegin: true
        }
      },
      html: {
        files: ['./src/index.html'],
        tasks: ['replace:dev'],
        options: {
          atBegin: true
        }
      },
      js: {
        files: ['./src/scripts/**/*.js'],
        tasks: ['uglify:dev'],
        options: {
          atBegin: true
        }
      }
    },
    concurrent: {
      target: ['less:production', 'uglify:dist', 'replace:dist']
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['concurrent']);
}