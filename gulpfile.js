var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var runSequence = require('run-sequence');
var install = require('gulp-install');
var rimraf = require('rimraf');

var js_dest_path = 'assets/lib/js';
var css_dest_path = 'assets/lib/css';

var jsFilter = gulpFilter('*.js');
var cssFilter = gulpFilter('*.css');
var imgFilter = gulpFilter(['*.gif','*.png']);

gulp.task('clean',function(){
    return rimraf("assets/lib",function(){ });
});

gulp.task('build',function(callback){
    runSequence('clean',callback);
});
