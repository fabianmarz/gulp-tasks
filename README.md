# Gulp Tasks

This is a collection of gulp tasks which I use in my projects. It is meant to have a central space to maintain the code.

## Setup

```sh
$ yarn add --dev git+https://github.com/fabianmarz/gulp-tasks.git
```
or
```sh
$ npm install --save-dev git+https://github.com/fabianmarz/gulp-tasks.git
```

or add manually in your `package.json`:

```json
{
  "devDependencies": {
    "@fabianmarz/gulp-tasks": "git+https://github.com/fabianmarz/gulp-tasks.git"
  }
}
```
Add gulp to your main project and require the collection in the `gulpfile.js`.

```js
const gulp = require('gulp');
require('./index.js')(gulp);
```

## TODO
- [ ] Expose Task overview
