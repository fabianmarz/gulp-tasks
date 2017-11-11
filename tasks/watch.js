module.exports = function (gulp) {
  'use strict';

  const paths = require('./../package.json').paths;

  const task = function () {
    gulp.watch([
      paths.styles
    ], [
      'styles'
    ]);
  };

  gulp.task('watch', [
    'serve'
  ], task);
};
