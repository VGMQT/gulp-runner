module.exports = () => {
  $.gulp.task('sass:lint', (cb) => {
    $.exec(
      `npx stylelint --fix ${$.config.dev}/styles/**/*.{scss,sass,css}`,
      (error, stdout) => {
        console.log(stdout);
        cb(error);
      }
    );
  });
};
