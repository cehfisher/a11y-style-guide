/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var sync        = require('browser-sync');
var runSequence = require('run-sequence');

//=======================================================
// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
//=======================================================
var taskCompile     = require('./gulp-tasks/compile.js');
var taskMove        = require('./gulp-tasks/move.js');
var taskLint        = require('./gulp-tasks/lint.js');
var taskCompress    = require('./gulp-tasks/compress.js');
var taskClean       = require('./gulp-tasks/clean.js');
var taskStyleGuide  = require('./gulp-tasks/styleguide.js');
var taskConcat      = require('./gulp-tasks/concat.js');
//=======================================================
// Compile Our Sass and JS
// We also move some files if they don't need
// to be compiled.
//=======================================================
gulp.task('compile', ['compile:sass', 'compile:js', 'move:js']);

// Compile Sass
gulp.task('compile:sass', function() {
  return taskCompile.sass();
});

// Compile JavaScript ES2015 to ES5.
gulp.task('compile:js', function() {
  return taskCompile.js();
});

// If some JS components aren't es6 we want to simply move them
// into the dist folder. This allows us to clean the dist/js
// folder on build.
gulp.task('move:js', function() {
  return taskMove.js();
});

// For working styleguide to work with Github Pages, we need
// to copy the /dist folder into the /docs folder.
gulp.task('move:docs', function() {
  return taskMove.docs();
});

//=======================================================
// Lint Sass and JavaScript
//=======================================================
gulp.task('lint', ['lint:sass']);

// Lint Sass based on .sass-lint.yml config.
gulp.task('lint:sass', function () {
  return taskLint.sass();
});

// Lint JavaScript based on .eslintrc config.
gulp.task('lint:js', function () {
  return taskLint.js();
});

//=======================================================
// Compress Files
//=======================================================
gulp.task('compress', function() {
  return taskCompress.assets();
});

//=======================================================
// Generate style guide
//=======================================================
gulp.task('styleguide', function() {
  return taskStyleGuide.generate(__dirname);
});

//=======================================================
// Concat all CSS files into a master bundle.
//=======================================================
gulp.task('concat', function () {
  return taskConcat.css();
});

//=======================================================
// Clean all directories.
//=======================================================
gulp.task('clean', ['clean:css', 'clean:js', 'clean:styleguide']);

// Clean style guide files.
gulp.task('clean:styleguide', function () {
  return taskClean.styleguide();
});

// Clean CSS files.
gulp.task('clean:css', function () {
  return taskClean.css();
});

// Clean JS files.
gulp.task('clean:js', function () {
  return taskClean.js();
});

// Clean Docs folder for new fresh documents.
gulp.task('clean:docs', function() {
  return taskClean.docs();
});

//=======================================================
// Watch and recompile sass.
//=======================================================

// Pull the sass watch task out so we can use run sequence.

gulp.task('watch:sass', function(callback) {
  runSequence(
    ['lint:sass', 'compile:sass'],
    'concat',
    callback
  );
});

// Main watch task.
gulp.task('watch', function() {

  // Watch all my sass files and compile sass if a file changes.
  gulp.watch(
    './src/{global,components}/**/*.scss',
    ['watch:sass']
  );

  // Watch all my JS files and compile if a file changes.
  gulp.watch([
    './src/{global,components}/**/*.js'
  ], ['lint:js', 'compile:js']);

  // Watch all my twig files and rebuild the style guide if a file changes.
  gulp.watch(
    './src/{components}/**/*.twig',
    ['watch:styleguide']
  );

});

// Reload the browser if the style guide is updated.
gulp.task('watch:styleguide', ['styleguide'], sync.reload);

//=======================================================
// Default Task
//
// runSequence runs 'clean' first, and when that finishes
// 'lint', 'compile', 'compress' run
// at the same time. Then 'styleguide', then'concat' runs last.
//=======================================================
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    ['lint', 'compile', 'compress'],
    'styleguide',
    'concat',
    callback
  );
});
