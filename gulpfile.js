/*jslint node: true, nomen:true*/
(function () {
    'use strict';

    var gulp = require('gulp'),
        browserify = require('gulp-browserify'),
        gutil = require('gulp-util'),
        useref = require('gulp-useref'),
        uglify = require('gulp-uglify'),
        imagemin = require('gulp-imagemin'),
        rename = require('gulp-rename'),
        cssnano = require('cssnano'),
        cache = require('gulp-cache'),
        postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'),
        changed = require('gulp-changed'),
        supportedBrowsers = ['>0.1%'],
        production = gutil.env.type === 'production',
        processors = [
            autoprefixer({
                remove: false,
                browsers: supportedBrowsers
            }),
            cssnano()
        ];

    
    gulp.task('default', ['minifyJS', 'minifyCSS', 'images', 'browserify']);

    gulp.task('browserify', function () {
        return gulp.src(['browserify-libs-routine.js'], {read: false})

            .pipe(browserify({
                debug: !production,
                extensions: ['.jsx']
            }))

            .pipe(rename('libs.js'))
            .pipe(uglify()).pipe(rename({suffix: '.min'}))

            .pipe(gulp.dest('client/app/dist/js'));
    });
    
     gulp.task('minifyJS', function () {
        

        return gulp.src(['client/browserify-client-routine.js'], {read: false})

            .pipe(browserify({
                debug: !production,
                extensions: ['.jsx']
            }))

            .pipe(rename('custom.js'))
            .pipe(uglify()).pipe(rename({suffix: '.min'}))

            .pipe(gulp.dest('client/app/dist/js'));
    });
    
    gulp.task('minifyCSS', function () {
        return gulp.src(['client/*/*.css'])
            .pipe(postcss(processors)).pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('client/dist/css/'));
    });
    
    gulp.task('images', function () {
        return gulp.src('server/public/images/raw/*.+(png|jpg|jpeg|gif|svg)').pipe(cache(imagemin())).pipe(gulp.dest('server/public/images/dist'));
    });

}());