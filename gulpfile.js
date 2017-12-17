'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const imageop = require('gulp-image-optimization');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');
const smushit = require('gulp-smushit');
const imageminJpegtran = require('imagemin-jpegtran');


gulp.task('images', function(cb) {
    gulp.src('images/**/*.{jpg, png}')
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(imagemin())
    .pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
});

// gulp.task('prefix', function() {
//     gulp.src('_sass/*.scss')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false,
//             minify:false
//         }))
//         .pipe(gulp.dest('_sass'))
// );


gulp.task('sass', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
});
