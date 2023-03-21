var gulp = require('gulp');
const gulpConnect = require('gulp-connect');
const sass = require('gulp-sass')(require('sass'));


gulp.task('default', function () {
	gulp.src('./src/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./prod/style'))
})

gulp.task('sass:watch', function () {
	gulp.watch('./src/**/*.scss', gulp.series('sass'))
})

function server() {
	return gulpConnect.server({
			host: '0.0.0.0',
			port: 8080,
			root: 'src/',
			livereload: true
	});
}

exports.server = server;

