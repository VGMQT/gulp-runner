module.exports = () => {
  $.gulp.task('fonts', () =>
    $.gulp
      .src(`${$.config.dev}/fonts/**/*.*`, { since: $.gulp.lastRun('fonts') })
      .pipe($.gulp.dest(`${$.config.build}/fonts`))
  );
};
