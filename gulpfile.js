var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', async function() {
    gulp.src(['./gulp-pre-build/**/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./gulp-pre-build'));
});