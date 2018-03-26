const gulp = require('gulp');
const g_sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    });
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
             .pipe(g_sass())
             .pipe(gulp.dest('app/css'))
             .pipe(browserSync.reload({
               stream: true
             }))
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
