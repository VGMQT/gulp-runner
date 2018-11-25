'use strict';

module.exports = function() {
  $.gulp.task('images:sprite', function() {
    const spriteData = $.gulp.src($.config.dev + '/images/sprites/png/*.png', { since: $.gulp.lastRun('images:sprite') })
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '/images/sprites/png/sprite.png',
        cssFormat: 'scss'
      }));

    const imgStream = spriteData.img
      .pipe($.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.dev + '/images/sprites/png'));

    const cssStream = spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.dev + '/styles/sprite'));

    return $.merge(imgStream, cssStream);
  });
};