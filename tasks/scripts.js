module.exports = function (gulp) {
  'use strict';

  const path = require('path');
  const manifest = require(path.resolve('manifest.json'));
  const concat = require('gulp-concat');
  const uglify = require('gulp-uglify-es').default;

  const task = function () {
    return gulp.src(manifest.config.paths.scripts.assets)
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest(manifest.config.paths.scripts.dist));
  }

  gulp.task('scripts', task);
};
