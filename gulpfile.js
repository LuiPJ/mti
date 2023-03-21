var gulp = require('gulp'), // Подключаем Gulp
	sass = require('gulp-sass')(require('sass')); //Подключаем Sass пакет
 
gulp.task('sass', function(){ // Создаем таск "sass"
	return gulp.src('app/sass/main.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});