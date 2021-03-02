module.exports = () => {
  $.gulp.task('pug', () =>
    $.gulp
      .src(`${$.config.dev}/pug/pages/*.pug`)
      .pipe(
        $.gp.pug({
          // locals: JSON.parse($.fs.readFileSync('content.json', 'utf8')),
          pretty: '\t',
        })
      )
      .on(
        'error',
        $.gp.notify.onError((error) => ({
          title: 'Pug',
          message: error.message,
        }))
      )
      .pipe($.gulp.dest($.config.build))
  );
};
