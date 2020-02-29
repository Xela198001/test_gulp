// Подключаем Gulp
var gulp = require("gulp"),
// подключаем gulp-sass
sass = require('gulp-sass'),
useref = require('gulp-useref'),
browserSync = require('browser-sync').create()

// gulp.task('task-name', function () {
//     return gulp.src('source-files') // получаем источники с помощью gulp.src
//    .pipe(aGulpPlugin()) // прогоняем их через плагин
//    .pipe(gulp.dest('')) // выходные файлы в папке destination
//   });

gulp.task('serve', function() {
    browserSync.init({
   server: {
       baseDir: './'
   },
    });
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
    browserSync.watch('./', browserSync.reload)
  });

gulp.task('sass', function(){
    return gulp.src('scss/**/*.scss')
   .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
 .pipe(gulp.dest('css'))
 .pipe(browserSync.stream())
  });
  

  // Gulp watch 
  gulp.task('default', gulp.parallel('serve','sass'), function(){
    //gulp.watch('scss/*.scss', gulp.series('sass')); 
//     gulp.watch('*.html', browserSync.reload({stream: true})); 
//   gulp.watch('js/**/*.js', browserSync.reload({striam: true})); 
    // другие ресурсы
  });

  

// // Подключаем плагины Gulp
// var sass = require("gulp-sass"), // переводит SASS в CSS
//     cssnano = require("gulp-cssnano"), // Минимизация CSS
//     autoprefixer = require('gulp-autoprefixer'), // Проставлет вендорные префиксы в CSS для поддержки старых браузеров
//     imagemin = require('gulp-imagemin'), // Сжатие изображение
//     concat = require("gulp-concat"), // Объединение файлов - конкатенация
//     uglify = require("gulp-uglify"), // Минимизация javascript
//     rename = require("gulp-rename"); // Переименование файлов
//     browserSync = require('browser-sync');

// /* --------------------------------------------------------
//    ----------------- Таски ---------------------------
// ------------------------------------------------------------ */

// // Копирование файлов HTML в папку dist
// gulp.task("html", function() {
//     return gulp.src("*.html")
//     .pipe(gulp.dest("dist"));
// });

// // Объединение, компиляция Sass в CSS, простановка венд. префиксов и дальнейшая минимизация кода
// gulp.task("sass", function() {
//     return gulp.src("sass/*.sass")
//         .pipe(concat('style.sass'))
//         .pipe(sass())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//          }))
//         .pipe(cssnano())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest("dist/css"));
// });

// // Объединение и сжатие JS-файлов
// gulp.task("scripts", function() {
//     return gulp.src("js/*.js") // директория откуда брать исходники
//         .pipe(concat('scripts.js')) // объеденим все js-файлы в один 
//         .pipe(uglify()) // вызов плагина uglify - сжатие кода
//         .pipe(rename({ suffix: '.min' })) // вызов плагина rename - переименование файла с приставкой .min
//         .pipe(gulp.dest("dist/js")); // директория продакшена, т.е. куда сложить готовый файл
// });

// // Сжимаем картинки
// gulp.task('imgs', function() {
//     return gulp.src("images/*.+(jpg|jpeg|png|gif)")
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{ removeViewBox: false }],
//             interlaced: true
//         }))
//         .pipe(gulp.dest("dist/images"))
// });

// // Задача слежения за измененными файлами
// gulp.task("watch", function() {
//     gulp.watch("*.html", ["html"]);
//     gulp.watch("js/*.js", ["scripts"]);
//     gulp.watch("sass/*.sass", ["sass"]);
//     gulp.watch("images/*.+(jpg|jpeg|png|gif)", ["imgs"]);
// });

// gulp.task('browserSync', function() {
//     browserSync({
//    server: {
//    baseDir: ''
//    },
//     })
//   });

//   gulp.task('sass', function() {
//   return gulp.src('scss/*.scss')
//  .pipe(sass())
//  .pipe(gulp.dest('css'))
//  .pipe(browserSync.reload({
//  stream: true
//  }))
// });

// gulp.task('watch', ['browserSync', 'sass'], function (){
//     gulp.watch('scss/*.scss', ['sass']); 
//     // Обновляем браузер при любых изменениях в HTML или JS
//     gulp.watch('*.html', browserSync.reload); 
//     gulp.watch('js/**/*.js', browserSync.reload); 
//   });

// ///// Таски ///////////////////////////////////////

// // Запуск тасков по умолчанию
// gulp.task("default", ["html", "sass", "scripts", "imgs", "watch"]);