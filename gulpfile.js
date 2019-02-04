'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var request = require('request');

var basePath = {
	app: 'app/',
	assets: 'app/build/',
	scss: 'scss/**/*.scss'
};

// Compile sass into css and update browser
gulp.task('sass', function () {
	return gulp.src(basePath.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(basePath.assets))
		.pipe(browserSync.stream());
});

// Get latest jQuery from cdn and include into app.
// Much easier to do vs. a node_modules directory outside the project.
gulp.task('js', function () {
	return request('http://code.jquery.com/jquery-latest.min.js')
		.pipe(source('jquery-latest.min.js'))
		.pipe(gulp.dest(basePath.assets));
});

gulp.task('default', gulp.parallel('sass', 'js'));




