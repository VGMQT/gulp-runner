module.exports = () => {
  $.gulp.task('js:lint', cb => {
    $.exec('pretty-quick', (error, stdout) => {
      console.log(stdout);
      cb(error);
    });
    $.exec(`eslint '${$.config.dev}/js/**/*.js' --fix`, (error, stdout) => {
      console.log(stdout);
      cb(error);
    });
  });
};
