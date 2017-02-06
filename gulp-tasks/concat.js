/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var concat      = require('gulp-concat');
var order       = require('gulp-order');
var sync        = require('browser-sync');

// Export our tasks.
module.exports = {

  // Concat all CSS into a master bundle.
  css: function() {
    return gulp.src([
      './dist/css/*.css'
    ])
      // Reorder the files so global is first.
      // If you need to get fancier with the order here's an example:
      // .pipe(order([
      //   'dist/css/global.css',
      //   'src/components/**/*.css',
      //   'dist/css/btn.css',
      //   'dist/css/form-item.css',
      //   'dist/css/form-float-label.css',
      //   'dist/css/*.css'
      // ], { base: './' }))
      .pipe(order([
        'dist/css/global.css',
        'dist/css/*.css'
      ], { base: './' }))
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./dist/all'))
      .pipe(sync.stream());
  }
};
