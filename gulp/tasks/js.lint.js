module.exports = () => {
  $.gulp.task('js:lint', (cb) => {
    $.exec(
      `npx pretty-quick --pattern ${$.config.dev}/js/**/*.js`,
      (error, stdout) => {
        console.log(stdout);
        cb(error);
      }
    );
    $.exec(`npx eslint ${$.config.dev}/js/**/*.js --fix`, (error, stdout) => {
      console.log(stdout);
      cb(error);
    });
  });
};
