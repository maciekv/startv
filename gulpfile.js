var gulp = require('gulp'),
    browserSync = require('browser-sync'), // przeladowuje przegladarke
    autoprefixer = require('gulp-autoprefixer'), // dodaje prefiksy css like -webkit-*
    plumber = require('gulp-plumber'), // powoduje, ze jesli wystapia bledy, nasluchiwanie nie jest przerywane
    sass = require('gulp-sass') // kompiluje sass to scss
;

var reload = browserSync.reload;
gulp.task('hello', function() {
    console.log('hello!');
})

gulp.task('css', function() {

    gulp
        .src("app/sass/main.scss")
        .pipe(plumber())
        // .pipe(sass()) // trzeba uzyc sass.sync(), jesli korzystamy z plumbera 
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ["last 5 version", "IE 9"]
        }))
        .pipe(gulp.dest("app/css/"))
        .pipe(browserSync.stream());

})

// watch files for changes and reload
gulp.task('serve', function() {

    browserSync({
        server: {
            baseDir: './app'
        }
    });

    // nasluchuj zmian w scss i wykonuj zadanie css
    gulp.watch("app/sass/**/*.scss", ["css"]);

    // nasluchuj zmian i reload przegladarki
    gulp.watch(['**/*.html', 'css/**/*.css', '**/*.js'], {
        cwd: 'app'
    }, reload);
});



gulp.task("default", ["css", "serve"]);