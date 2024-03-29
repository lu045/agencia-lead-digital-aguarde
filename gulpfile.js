var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');


gulp.task('sass', gulp.series( function() {
    return gulp.src(['sass/**/*.sass'])
    .pipe(sass()) // converter o Sass em CSS
    .pipe(gulp.dest('css'));
}));

gulp.task('watch', gulp.series( function() {
    gulp.watch(['sass/**/*.sass'], gulp.parallel( ['sass'] ));
}));

gulp.task('default', gulp.series( ['sass', 'watch'] ));

