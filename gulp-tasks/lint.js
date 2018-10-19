/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var sassLint = require('gulp-sass-lint');
var eslint   = require('gulp-eslint');

// Export our tasks.
module.exports = {

  // Lint Sass based on .sass-lint.yml config.
  sass: function() {
    return gulp.src([
      './src/{global,layout,components}/**/*.scss',
      '!./src/global/utils/*'
    ])
      .pipe(sassLint())
      .pipe(sassLint.format());
  },

  // Lint JavaScript based on .eslintrc config.
  js: function() {
    return gulp.src([
      './src/{global,layout,components}/**/*.js',
      '!./src/components/**/vendors/*'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  }
};
