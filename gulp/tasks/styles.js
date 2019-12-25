module.exports = function () {
    $.gulp.task('styles', () => {
        return $.gulp.src('./app/scss/style.sass')
            .pipe($.plugins.sourcemaps.init())
            .pipe($.plugins.sass({
                errorLogToConsole: true,
                outputStyle: "compressed"
            }))
            .on('error', console.error.bind(console))
            // .pipe($.plugins.purgecss({
            //     content: ['./build/**/*.html'],
                // whitelistPatterns: [/show$/, /mobile$/] // здесь указываешь список селекторов, которые содержат значение
            // })) // а этот плагин удаляет ненужные селекторы, если их нет в html файлах отслеживаемой директории
            .pipe($.plugins.autoprefixer({
                cascade: true
            }))
            .pipe($.plugins.csso())
            .pipe($.plugins.rename({ suffix: '.min' }))
            .pipe($.plugins.sourcemaps.write('./'))
            .pipe($.gulp.dest('./build/styles'))
            .pipe($.bs.stream());
    });
};
