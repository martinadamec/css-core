'use strict';
var gulp 		= require('gulp'),
	postcss 	= require('gulp-postcss'),
	autoprefix 	= require('autoprefixer');

const s = require('sass');
const sass = require('gulp-sass')(s);

var dir = './',
	source = './source/';


/**
 * Generate new style from css/sass/style/*.scss
 */
gulp.task('css', function () {
	return gulp.src(source + 'main.scss')
		//.src(requiredSource + 'main.scss')
		.pipe(sass({
			outputStyle: 'expanded', // expanded compressed compact nested
		}).on('error', sass.logError))
		.pipe(postcss([
			autoprefix()
        ]))
		.pipe(gulp.dest(dir));
});
 
    
/**
 * Watch files
 */
gulp.task('watch', function () {
	gulp.series('css')();
	gulp.watch(source + '**/*', gulp.series('css'));
});