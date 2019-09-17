module.exports = () => {
  $.gulp.task('js:lint', cb => {
    $.exec('yarn pretty-quick', (error, stdout) => {
      console.log(stdout);
      cb(error);
    });
    $.exec(`yarn eslint '${$.config.dev}/js/**/*.js' --fix`, (error, stdout) => {
      console.log(stdout);
      cb(error);
    });
  });
};
