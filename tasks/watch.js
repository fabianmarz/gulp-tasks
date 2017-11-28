module.exports = function (gulp) {
  'use strict';

  const path = require('path');
  const manifest = require(path.resolve('manifest.json'));

  const task = function () {
    gulp.watch([
      manifest.config.paths.styles.assets
    ], [
      'styles'
    ]);
  };

  gulp.task('watch', [
    'serve',
    'styles'
  ], task);
};
