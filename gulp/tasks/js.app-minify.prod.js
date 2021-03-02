module.exports = () => {
  $.gulp.task('js:app-minify:prod', () =>
    $.gulp
      .src($.config.appJS)
      .pipe($.webpack({ mode: 'production' }, $.compiler))
      .pipe(
        $.gp.babel({
          presets: ['@babel/env'],
        })
      )
      .pipe($.gp.concat('app.js'))
      .pipe(
        $.gp.minify({
          ext: {
            min: '.min.js',
          },
          noSource: true,
        })
      )
      .pipe($.gulp.dest(`${$.config.build}/js`))
  );
};
