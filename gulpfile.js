var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('src'));
});
gulp.task("watch", function() {
    gulp.watch("*.ts", gulp.series("typescript"));
});
