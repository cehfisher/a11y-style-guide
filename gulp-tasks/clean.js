/*eslint strict: ["error", "global"]*/
'use strict';

//=======================================================
// Include Our Plugins
//=======================================================
var del = require('del');

// Export our tasks.
module.exports = {

  // Clean style guide files.
  styleguide: function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del([
      './dist/style-guide/*'
    ], {force: true});
  },

  // Clean CSS files.
  css: function() {
    return del([
      './dist/css/*'
    ], {force: true});
  },

  // Clean JS files.
  js: function() {
    return del([
      './dist/js/*'
    ], {force: true});
  }
};
