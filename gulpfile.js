const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
             .pipe(sass())
             .pipe( gulp.dest('app/css') )
});



// Gulp format
// gulp.task('task-name', function(){
//  // task code here.

// })

// Example of a task
// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })
