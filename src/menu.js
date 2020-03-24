'use strict';

const menuBtn = document.getElementById('menu-btn');
const topBtn = document.querySelector('.top-button');

window.addEventListener('scroll', () => {
    if (pageYOffset > document.documentElement.clientHeight) {
        menuBtn.style.position = 'fixed';
        topBtn.style.display = 'block';
    } else {
        menuBtn.style.position = '';
        topBtn.style.display = '';
    }
});

const menu = document.querySelector('.menu');
const lis = [...menu.querySelectorAll('li')];


menuBtn.addEventListener('click', (event) => {
    let i = 1;

    menu.style.transform = 'translateX(0px)';
    menuBtn.style.display = 'none';

    lis.forEach(li => {
        let timeout = 50;
        setTimeout(() => li.style.transform = 'translateX(0px)', timeout * ++i)
    })
});

const closeMenuBtn = menu.querySelector('.fa-times-circle');

closeMenuBtn.addEventListener('click', () => {
    let i = 9;

    setTimeout( () => {
        menu.style.transform = '';
    }, 600);

    setTimeout(() => {
        menuBtn.style.display = '';
    }, 1000);

    lis.forEach( li => {
        let timeout = 900;
        setTimeout(() => li.style.transform = '', timeout / --i)
    })
});
