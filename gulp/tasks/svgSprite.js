import svgSpritePackage from 'gulp-svg-sprite';

export const svgSprite = () => {
    return app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: 'SVG',
            message: 'Error <%= error.message %>'
        })))
        .pipe(svgSpritePackage({
            mode: {
                stack: {
                    sprite: `../icons.svg`,
                    // Создавать страницу с перечнем иконок
                    example: true
                },
            }
        }))
        .pipe(app.gulp.dest(`${app.path.build.images}/icons`))
        .pipe(app.plugins.browsersync.stream());
}