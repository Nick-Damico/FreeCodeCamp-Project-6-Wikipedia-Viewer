const gulp = require('gulp');
const sass = require('gulp-sass');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify-es').default;
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
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
             .pipe(sass())
             .pipe( gulp.dest('app/css') )
             .pipe(browserSync.reload({
               stream: true
             }))
});

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe( gulpIf('*.js', uglify() ))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('imagesmin', function() {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
             .pipe( cache(imagemin()) )
             .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/src/*.js', browserSync.reload);
});

gulp.task('build', function (cb){
  runSequence('clean:dist',
    [`clean:dist`, `sass`, `useref`, `imagesmin`],
    cb
  )
  console.log('Building files');
});

gulp.task('default', function(cb) {
  runSequence(
    ['sass', 'browserSync', 'watch'],
    cb
  )
});
