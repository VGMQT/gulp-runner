'use strict';

module.exports = function() {
  $.gulp.task('sass:lint', function(cb) {
    $.exec(`yarn stylelint --fix ${$.config.dev}/styles/*.scss ${$.config.dev}/styles/**/*.scss`, function (error, stdout) {
      console.log(stdout);
      cb(error);
    });
  });
};