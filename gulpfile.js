'use strict';

global.$ = {
  gulp: require('gulp'),
  path: {
    tasks: require('./gulp/configs/tasks.js')
  },
  config: require('./gulp/configs/config'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  merge: require('merge-stream'),
  fs: require('fs')
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