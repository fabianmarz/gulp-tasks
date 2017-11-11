module.exports = function (gulp) {
  'use strict';

  const browserSync = require('browser-sync');
  const path = require('path');
  const paths = require('./../package.json').paths;
  const manifest = require(path.resolve(paths.manifest));

  const task = function () {
    return browserSync.init({
      proxy: manifest.config.devUrl,
      host: manifest.config.devUrl,
      open: 'external',
    });
  }

  gulp.task('serve', task);
};
