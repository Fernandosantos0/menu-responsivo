'use strict'

const iconeMobile = document.querySelector('#icone-mobile');
const containerMobileMenu = document.querySelector('#container-mobile');
const imgNav = document.getElementById('img-nav');

const telaResize = () => {
    const larguraNavegador = window.innerWidth;

    if(larguraNavegador > 747) {
        if(containerMobileMenu.style.display === 'block') {
            containerMobileMenu.style.display = 'none';
            imgNav.src = 'assets/img/menu_white_36dp.svg';
            imgNav.setAttribute('alt', 'Ìcone para abrir o menu mobile');
        }
    }
};

iconeMobile.addEventListener('click', function() {
    if(containerMobileMenu.style.display === 'block') {
        containerMobileMenu.style.display = 'none';
        imgNav.src = 'assets/img/menu_white_36dp.svg';
        imgNav.setAttribute('alt', 'Ìcone para abrir o menu mobile');
    } else {
        containerMobileMenu.style.display = 'block';
        imgNav.setAttribute('src', 'assets/img/close_white_36dp.svg');
        imgNav.alt = 'Ìcone para fechar o menu mobile';
    }
});