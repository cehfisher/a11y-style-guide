/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var rename      = require('gulp-rename');
var imagemin    = require('gulp-imagemin');

// Export our tasks.
module.exports = {

  // Compress svg/png/jpg files.
  assets: function() {
    return gulp.src([
      './src/{global,layout,components}/**/*{.png,.jpg,.svg}'
    ])
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }]
      }))
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./dist/assets'));
  }
};
