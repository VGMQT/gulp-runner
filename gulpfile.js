'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  config: require('./gulp/configs/config'),
  path: {
    tasks: require('./gulp/configs/tasks.js')
  },

  browserSync: require('browser-sync').create(),
  del: require('del'),
  exec: require('child_process').exec,
  fs: require('fs'),
  merge: require('merge-stream')
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('build',
  $.gulp.series(
    'clean',

    $.gulp.parallel(
      'images:sprite',
      'svg:sprite',
    ),

    'images:minify',
    'sass:lint',

    $.gulp.parallel(
      // 'html',
      'pug',
      'css:vendor',
      'sass',
      'js:vendor',
      // 'js:app',
      'js:app-minify',
      'fonts',
      'images'
    )
  )
);

$.gulp.task('default',
  $.gulp.series(
    'build',

    $.gulp.parallel(
      'watch',
      'serve'
    )
  )
);