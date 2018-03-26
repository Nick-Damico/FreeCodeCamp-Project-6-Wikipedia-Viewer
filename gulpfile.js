const gulp = require('gulp');
const g_sass = require('gulp-sass');


gulp.task('sass', function() {
  return gulp.src('./app/scss/**/*.scss')
             .pipe(g_sass())
             .pipe(gulp.dest('app/css'));
});

gulp.task('default', function() {

});
