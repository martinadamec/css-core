'use strict';
var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	postcss 	= require('gulp-postcss'),
	autoprefix 	= require('autoprefixer');

var dir = './',
	source = './source/';


/**
 * Generate new style from css/sass/style/*.scss
 */
gulp.task('css', function () {
	gulp.src(source + 'main.scss')
		.pipe(sass({
			outputStyle: 'expanded', // expanded compressed compact nested
		}).on('error', sass.logError))
		.pipe(postcss([
			autoprefix({
            	browsers: ['> 5%', 'last 2 version', 'IE 9']
        	})
        ]))
		.pipe(gulp.dest(dir));
});
 
    
/**
 * Watch files
 */
gulp.task('watch', ['css'], function () {
	gulp.watch(source + '**/*', ['css']);
});