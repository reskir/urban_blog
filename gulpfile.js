'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const imageop = require('gulp-image-optimization');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');
const smushit = require('gulp-smushit')


gulp.task('images', function(cb) {
    gulp.src(['images/**/*.png','images/**/*.jpg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});

gulp.task('prefix', () =>
    gulp.src('_sass/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            minify:false
        }))
        .pipe(gulp.dest('_sass'))
);


gulp.task('sass', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
});
