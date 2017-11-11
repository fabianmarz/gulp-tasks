module.exports = function (gulp) {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const tasksPath = path.join(__dirname, 'tasks');

  fs.readdirSync(tasksPath).forEach(function (file) {
    require('./tasks/' + file)(gulp);
  });
};
