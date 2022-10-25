import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

/* Burger menu */
const burgerButton = document.querySelector('.header__burger-btn');
const burgerMenu = document.querySelector('.header__info');
burgerButton.addEventListener('click', () => {
    if (document.documentElement.clientWidth >= 1907) return;
    burgerMenu.classList.toggle('show');
});

/* Screen-size 320 */
const movableElement = document.querySelector('.header__hidden');
addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 768) {
        burgerMenu.append(movableElement);
    } else {
        document.querySelector('.header__services').prepend(movableElement);
    }
})
