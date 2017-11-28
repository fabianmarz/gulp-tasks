module.exports = function (gulp) {
  'use strict';

  const browserSync = require('browser-sync');
  const path = require('path');
  const manifest = require(path.resolve('manifest.json'));

  const task = function () {
    return browserSync.init({
      proxy: manifest.config.devUrl,
      host: manifest.config.devUrl,
      open: 'external',
    });
  }

  gulp.task('serve', task);
};
