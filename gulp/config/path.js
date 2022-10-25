// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,bmp,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`, // Все файлы и папки внутри files
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,bmp,gif,webp,svg,ico}`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
    ftp: ``,
}
