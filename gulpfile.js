var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

gulp.task('build-less', function() {
	return gulp.src('src/less/styles.less')
		.pipe(sourcemaps.init())
		.pipe(less({
			errLogToConsole: true
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

gulp.task('build-js', function() {
	return gulp.src(['src/js/*.js'])
			.pipe(concat('main.js'))
			.pipe(uglify()).on('error', function(e){
				console.log(e);
			})
			.pipe(gulp.dest('dist/js'))
			.pipe(reload({
					stream: true
			}));
});

gulp.task('build-html', function() {
	return gulp.src(['src/*.html'])
			.pipe(gulp.dest('dist'))
			.pipe(reload({
					stream: true
			}));
});

gulp.task('copy', function() {
	return gulp.src('src/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream())
});

gulp.task('copy-modules-bs', function() {
	sourcesLess = [
		'./node_modules/bootstrap/less/*',
		'./node_modules/bootstrap/less/*/*'
	]
	gulp.src( sourcesLess )
			.pipe(gulp.dest('./src/less/bootstrap'));

	sourcesJS = [
		'./node_modules/bootstrap/js/*'
	]
	gulp.src( sourcesJS )
			.pipe(gulp.dest('./src/js/libs'));
});
gulp.task('copy-bs', ['copy-modules-bs']);

gulp.task('bs-reload', function() {
	browserSync.reload();
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	})
});

// Default task
gulp.task('watch', ['browserSync'], function () {
	gulp.watch('src/less/**/*.less', ['build-less']);
	gulp.watch('src/js/*.js', ['build-js']);
	gulp.watch('src/*.html', ['build-html'])
});
