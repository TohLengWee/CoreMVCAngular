﻿/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var root_path = {
    webroot: "./wwwroot/"
};
//library source  
root_path.nmSrc = "./node_modules/";
//library destination  
root_path.package_lib = root_path.webroot + "lib-npm/";
gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/**/*.*', {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs/'));
});
gulp.task("copy-angular2", function () {
    return gulp.src(root_path.nmSrc + '/angular2/bundles/**/*.js', {
        base: root_path.nmSrc + '/angular2/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/'));
});
gulp.task("copy-es6-shim", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
        base: root_path.nmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});
gulp.task("copy-all", ["copy-rxjs", 'copy-angular2', 'copy-systemjs', 'copy-es6-shim']);