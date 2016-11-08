'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var imageop = require('gulp-image-optimization');
var image = require('gulp-image');


gulp.task('images', function(cb) {
    gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(imagemin())
    .pipe(image())
    .pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});


gulp.task('sass', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
});
