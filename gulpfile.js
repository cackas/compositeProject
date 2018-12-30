'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cssnano = require('gulp-cssnano');
var cache = require ('gulp-cache');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('client/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('client/css'))
    .pipe(browserSync.stream());
});

gulp.task('css-libs', function () {
    return gulp.src('client/css/libs.css')
      .pipe(concatCss("libs.min.css"))
      .pipe(cssnano())
      .pipe(gulp.dest('client/css'));
});

gulp.task('scripts', function() {
    return gulp.src([
        'client/libs/jquery/dist/jquery.min.js', 
        'client/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'client/libs/slick-carousel/slick/slick.min.js'
    ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('client/js'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'client'
        }
    });
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('watch', ['sass', 'css-libs', 'scripts', 'browser-sync'], function(){
    gulp.watch('client/sass/*.sass', ['sass'], browserSync.reload);
    gulp.watch('client/*.html', browserSync.reload);
    gulp.watch('client/js/*.js', browserSync.reload);
})

gulp.task('build', ['sass', 'css-libs', 'scripts'], function() {
    
	var buildCss = gulp.src([
			'client/css/common.css',
			'client/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('client/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('client/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('client/*.html')
	.pipe(gulp.dest('dist'));

});