'use strict';

module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src($.config.dev + '/images/**/*.*', { since: $.gulp.lastRun('images') })
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.build + '/images'));
  });
};