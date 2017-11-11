module.exports = function (gulp) {
  'use strict';

  const sequence = require('run-sequence').use(gulp);

  const task = function (callback) {
    return sequence(
      'styles'
    );
  };

  gulp.task('default', task);
};
