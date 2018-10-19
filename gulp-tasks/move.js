/*eslint strict: ["error", "global"]*/
'use strict';

// If some JS components aren't es6 we want to simply move them
// into the dist folder. This allows us to clean the dist/js
// folder on build.

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var rename = require('gulp-rename');

// Export our tasks.
module.exports = {

  // Moves JavaScript.
  js: function() {
    return gulp.src([
      './src/{global,layout,components}/**/*.js',
      '!./src/{global,layout,components}/**/*.es6.js'
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./dist/js'));
  }
};
