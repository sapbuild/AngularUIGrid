'use strict';

var gulp = require('gulp');

// Workaround for eslint bad object-assign version
Object.assign = require('object-assign');

gulp.task('default', ['build'], function () {
});

gulp.task('clean', function (done) {
});

gulp.task('build', [], function () {
});

gulp.task('dist', ['build'], function () {
});
