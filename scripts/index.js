const hamMenu = document.querySelector('.menu-icons');

const ham1 = document.querySelector('.line1');
const ham2 = document.querySelector('.line2');
const ham3 = document.querySelector('.line3');

const navigation = document.querySelector('.navigation');

hamMenu.addEventListener('click', function () {
    navigation.classList.toggle('show-navigation');
    ham1.classList.toggle('ham1style');
    ham2.classList.toggle('ham2style');
    ham3.classList.toggle('ham3style');
});