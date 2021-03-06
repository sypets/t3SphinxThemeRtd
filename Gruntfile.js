module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    open : {
      dev: {
        path: 'http://localhost:1919'
      }
    },

    connect: {
      server: {
        options: {
          port: 1919,
          base: 'demo_docs/build',
          livereload: true
        }
      }
    },
    copy: {
      fonts: {
        files: [
          // includes files within path
          {expand: true, flatten: true, src: ['node_modules/font-awesome/fonts/*'],                                dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/TYPO3.styleguide/public/fonts/TYPO3_Share_Complete/Share-TTF/Share-Bold.ttf'],       dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/TYPO3.styleguide/public/fonts/TYPO3_Share_Complete/Share-TTF/Share-BoldItalic.ttf'], dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/TYPO3.styleguide/public/fonts/TYPO3_Share_Complete/Share-TTF/Share-Italic.ttf'],     dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/TYPO3.styleguide/public/fonts/TYPO3_Share_Complete/Share-TTF/Share-Regular.ttf'],    dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/TYPO3.styleguide/public/fonts/TYPO3_Share_Complete/Share-TTF/Share-TechMono.ttf'],   dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},

          // {src: ['node_modules/fontface-source-sans-pro/scss/source-sans-pro.scss'], dest: 'sass/_source-sans-pro.scss'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/EOT/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/EOT/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/EOT/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/eot/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/OTF/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/OTF/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/OTF/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/otf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/TTF/*-It*' ],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/TTF/*Bold*' ],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/TTF/*Regular*' ], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/ttf/',  filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/WOFF/OTF/*-It*'],     dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/WOFF/OTF/*Bold*'],    dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['node_modules/fontface-source-sans-pro/fonts/WOFF/OTF/*Regular*'], dest: 't3SphinxThemeRtd/static/fonts/SourceSansPro/woff/', filter: 'isFile'},

          {src: ['node_modules/source-code-pro/EOT/SourceCodePro-Bold.eot'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/eot/SourceCodePro-Bold.eot'},
          {src: ['node_modules/source-code-pro/EOT/SourceCodePro-Regular.eot'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/eot/SourceCodePro-Regular.eot'},
          {src: ['node_modules/source-code-pro/OTF/SourceCodePro-Bold.otf'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/otf/SourceCodePro-Bold.otf'},
          {src: ['node_modules/source-code-pro/OTF/SourceCodePro-Regular.otf'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/otf/SourceCodePro-Regular.otf'},
          {src: ['node_modules/source-code-pro/SVG/SourceCodePro-Bold.svg'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/svg/SourceCodePro-Bold.svg'},
          {src: ['node_modules/source-code-pro/SVG/SourceCodePro-Regular.svg'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/svg/SourceCodePro-Regular.svg'},
          {src: ['node_modules/source-code-pro/TTF/SourceCodePro-Bold.ttf'],              dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/ttf/SourceCodePro-Bold.ttf'},
          {src: ['node_modules/source-code-pro/TTF/SourceCodePro-Regular.ttf'],           dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/ttf/SourceCodePro-Regular.ttf'},
          {src: ['node_modules/source-code-pro/WOFF/TTF/SourceCodePro-Bold.ttf.woff'],    dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/woff/SourceCodePro-Bold.woff'},
          {src: ['node_modules/source-code-pro/WOFF/TTF/SourceCodePro-Regular.ttf.woff'], dest: 't3SphinxThemeRtd/static/fonts/SourceCodePro/woff/SourceCodePro-Regular.woff'},

          // move local fonts into final path
          {expand: true, flatten: true, src: ['fonts/local/*'], dest: 't3SphinxThemeRtd/static/fonts/', filter: 'isFile'},

          {expand: true, flatten: true, src: ['node_modules/jquery/dist/*'], dest: 't3SphinxThemeRtd/static/', filter: 'isFile'}
          // todo: jquery-ui!

        ]
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['node_modules/bourbon/dist', 'node_modules/neat/app/assets/stylesheets', 'node_modules/font-awesome/scss', 'node_modules/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 't3SphinxThemeRtd/static/css',
          ext: '.css'
        }]
      },
      build: {
        options: {
          style: 'compressed',
          loadPath: ['node_modules/bourbon/dist', 'node_modules/neat/app/assets/stylesheets', 'node_modules/font-awesome/scss', 'node_modules/wyrm/sass']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass', '*.scss'],
          dest: 't3SphinxThemeRtd/static/css',
          ext: '.css'
        }]
      }
    },

    exec: {
      build_sphinx: {
        cmd: './my-sphinx-build.sh demo_docs/source demo_docs/build'
      }
    },
    clean: {
      build: ["demo_docs/build"],
      fonts: ["t3SphinxThemeRtd/static/fonts"]
    },

    watch: {
      /* Compile sass changes into theme directory */
      sass: {
        files: ['sass/*.sass', 'sass/*.scss', 'node_modules/**/*.sass'],
        tasks: ['sass:dev']
      },
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['t3SphinxThemeRtd/**/*', 'demo_docs/**/*.rst', 'demo_docs/**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
      },
      /* live-reload the demo_docs if sphinx re-builds */
      livereload: {
        files: ['demo_docs/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['clean:build', 'clean:fonts', 'copy:fonts', 'sass:build']);
  grunt.registerTask('build', ['clean:build', 'clean:fonts', 'copy:fonts', 'sass:build', 'exec:build_sphinx']);
  grunt.registerTask('full', ['clean:build', 'clean:fonts', 'copy:fonts', 'sass:dev', 'exec:build_sphinx', 'connect', 'open', 'watch']);
}

