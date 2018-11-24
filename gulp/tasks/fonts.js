'use strict';

module.exports = function() {
  $.gulp.task('fonts', function() {
    return $.gulp.src($.config.dev + '/fonts/**/*.*', { since: $.gulp.lastRun('fonts') })
      .pipe($.gulp.dest($.config.build + '/fonts'));
  });
};