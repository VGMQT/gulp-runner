/* eslint-disable global-require, import/no-dynamic-require */

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  config: require('./gulp/configs/config'),
  path: {
    tasks: require('./gulp/configs/tasks.js'),
  },

  browserSync: require('browser-sync').create(),
  del: require('del'),
  exec: require('child_process').exec,
  fs: require('fs'),
  compiler: require('webpack'),
  webpack: require('webpack-stream'),
};

$.path.tasks.forEach((taskPath) => {
  require(taskPath)();
});

$.gulp.task(
  'core',
  $.gulp.parallel(
    // 'html',
    'pug',
    'css:vendor',
    // 'js:vendor',
    'fonts',
    'images'
  )
);

$.gulp.task('core:images', $.gulp.series('images:minify', 'svg:sprite'));

$.gulp.task('jass:dev', $.gulp.parallel('sass', 'js:app-minify'));

$.gulp.task('jass:prod', $.gulp.parallel('sass:prod', 'js:app-minify:prod'));

$.gulp.task(
  'default',
  $.gulp.series(
    'clean',
    'js:lint',
    'sass:lint',
    'core:images',
    $.gulp.parallel('core', 'jass:dev'),
    $.gulp.parallel('watch', 'serve')
  )
);

$.gulp.task(
  'build',
  $.gulp.series('clean', 'core:images', $.gulp.parallel('core', 'jass:prod'))
);
