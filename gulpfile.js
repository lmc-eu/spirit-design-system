'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var del = require('del');

var paths = {
    lib: 'node_modules/',
    src: {
        html: 'src/html/',
        scss: 'src/scss/',
        js: 'src/js/',
        fonts: 'src/fonts/',
        images: 'src/img/'
    },
    dist: {
        html: 'dist/',
        css: 'dist/css/',
        js: 'dist/js/',
        fonts: 'dist/fonts/',
        images: 'dist/img/'
    }
};

gulp.task('clean:dist', function () {
    return del(['dist/']);
});

gulp.task('build:styles', function () {
    return gulp.src(paths.src.scss + '*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.dist.css))
});

gulp.task('copy:html', function () {
    return gulp.src(paths.src.html + '**/*')
        .pipe(gulp.dest(paths.dist.html));
});

gulp.task('copy:styles', function () {
    return gulp.src([
        paths.lib + 'normalize.css/normalize.css'
    ])
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task('copy:fonts', function () {
    return gulp.src(paths.src.fonts + '**/*')
        .pipe(gulp.dest(paths.dist.fonts));
});

gulp.task('copy:images', function () {
    return gulp.src(paths.src.images + '**/*')
        .pipe(gulp.dest(paths.dist.images));
});

gulp.task('watch', function () {
    gulp.watch([paths.src.html + '**/*'], gulp.series('copy:html'));
    gulp.watch([paths.src.scss + '**/*'], gulp.parallel('build:styles'));
});

gulp.task('copy', gulp.parallel('copy:html', 'copy:styles', 'copy:images', 'copy:fonts'));
gulp.task('build', gulp.parallel('build:styles', 'copy'));
gulp.task('default', gulp.series('clean:dist', 'build'));