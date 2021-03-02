module.exports = () => {
  $.gulp.task('sass:prod', () =>
    $.gulp
      .src(`${$.config.dev}/styles/main.scss`)
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass())
      .on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.csso())
      .pipe($.gp.rename('main.min.css'))
      .pipe($.gulp.dest(`${$.config.build}/css`))
      .pipe($.browserSync.stream())
  );
};
