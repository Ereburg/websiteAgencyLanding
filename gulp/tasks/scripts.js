module.exports = function () {
    // $.gulp.task('scripts-libs', () => {
    //     return $.gulp.src([
    //         './app/scripts/libs/**/*.js'
    //         ])
    //         .pipe($.plugins.sourcemaps.init())
    //         .pipe($.plugins.concat('libs.min.js'))
    //         .pipe($.plugins.terser())
    //         .pipe($.plugins.sourcemaps.write('./')) 
    //         .pipe($.gulp.dest('./build/scripts'));
    // });
    $.gulp.task('scripts', () => {
        return $.gulp.src(['./app/scripts/main.js'])
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.rename({ suffix: '.min' }))
            .pipe($.plugins.terser())
            .pipe($.plugins.sourcemaps.write('./')) 
            .pipe($.gulp.dest('./build/scripts'));
    });
    // $.gulp.task('scripts', $.gulp.series('scripts-libs', 'scripts-main'));
};