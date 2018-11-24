'use strict';

module.exports = function() {
  $.gulp.task('js:vendor', function() {
    return $.gulp.src($.config.vendorJS)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gp.minify({
        ext:{
          min:'.min.js'
        },
        noSource: true
      }))
      .pipe($.gulp.dest($.config.build + '/js'));
  });
};