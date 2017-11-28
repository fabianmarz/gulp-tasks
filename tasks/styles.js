module.exports = function (gulp) {
  'use strict';

  const browserSync = require('browser-sync');
  const csso = require('gulp-csso');
  const path = require('path');
  const manifest = require(path.resolve('manifest.json'));
  const sass = require('gulp-sass');
  const sassModuleImporter = require('sass-module-importer');

  const task = function () {
    return gulp.src(manifest.config.paths.styles.assets)
      .pipe(sass({
        importer: sassModuleImporter(),
      }).on('error', sass.logError))
      .pipe(csso({
        sourceMap: true,
        debug: true,
      }))
      .pipe(gulp.dest(manifest.config.paths.styles.dist))
      .pipe(browserSync.stream());
  }

  gulp.task('styles', task);
};
