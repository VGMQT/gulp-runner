module.exports = () => {
  $.gulp.task('images', () =>
    $.gulp
      .src([
        `${$.config.dev}/images/**/*.*`,
        `!${$.config.dev}/images/sprites/**/**.*`,
      ])
      .pipe($.gulp.dest(`${$.config.build}/images`))
  );
};
