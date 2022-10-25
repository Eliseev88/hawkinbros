import fileinclude from "gulp-file-include"; // Для встраивания html-модулей в главный файл
import webpHTML from "gulp-webp-html-nosvg"; // Для преобразования картинок в webp
import versionNumber from "gulp-version-number"; // Для добавления к имени файлов даты и версии (защита от кэширования)
import pug from 'gulp-pug';

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'HTML',
            message: "Error: <%= error.message %>"
        })
    ))
    // Если пишем на чистом HTML
    //.pipe(fileinclude())
    // Если используем PUG
    .pipe(pug({
        // Сжатие HTML-файла
        pretty: true,
        // Показывать в терминале какой файл обработан
        verbose: true,
    }))
    // Заменяем пути к картинкам
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    // Проверяем если режим dev то выполняем, если prod то нет
    .pipe(app.plugins.if(app.isBuild, webpHTML()))
    .pipe(app.plugins.if(app.isBuild, versionNumber({
        'value': '%DT%',
        'append': {
            'key': '_v',
            'cover': 0,
            'to': [
                'css',
                'js',
            ]
        },
        'output': {
            'file': 'gulp/version.json'
        }
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    // Запускаем лайв сервер
    .pipe(app.plugins.browsersync.stream());
}
