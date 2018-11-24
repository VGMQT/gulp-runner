'use strict';

module.exports = function() {
  $.gulp.task('html', function() {
    return $.gulp.src($.config.dev + '/*.html')
      .pipe($.gulp.dest($.config.build));
  });
};