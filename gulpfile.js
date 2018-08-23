const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	const plugins = [
			autoprefixer() ,
			cssnano({
				reduceIdents: false
			})
	];
	const options = {
		outputStyle: 'compressed'
	}
	return gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass(options)) // Using gulp-sass
		.pipe(postcss(plugins))
		.pipe(gulp.dest('public/css/'))
		.pipe(browserSync.reload({
			stream: true
		}))
});


gulp.task('browserSync', function() {
	browserSync.init({
		port: 4600,
		proxy: 'http://localhost:4000'
	})
});


gulp.task('default', ['sass','browserSync'] , function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('views/**/*.pug', browserSync.reload)
	gulp.watch('public/js/**/*.js', browserSync.reload)
});