module.exports = function (gulp) {
  'use strict';

  const browserSync = require('browser-sync');
  const csso = require('gulp-csso');
  const paths = require('./../package.json').paths;
  const sass = require('gulp-sass');
  const sassModuleImporter = require('sass-module-importer');

  const task = function () {
    return gulp.src(paths.styles)
      .pipe(sass({
        importer: sassModuleImporter(),
      }).on('error', sass.logError))
      .pipe(csso({
        sourceMap: true,
        debug: true,
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
  }

  gulp.task('styles', task);
};
