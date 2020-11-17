// HamMenu Animation //

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

//End of HamMenu Animation //


// Typing Effect? //
// import Typewriter from 'typewriter-effect/dist/core';

let typeMain = document.getElementById('type-main');
let typeSub = document.getElementById('type-sub');

let typewriterMain = new Typewriter(typeMain, {
    // loop: true
    delay: 200
});

let typewriterSub = new Typewriter(typeSub, {
    delay: 200
})

typewriterMain.typeString('Coronavirus')
    .pauseFor(2500)
    // .deleteAll()
    // .typeString('Stay Home...')
    // .pauseFor(2500)
    // .deleteAll(7)
    // .typeString('Save <strong>Yourself!</strong>')
    // .pauseFor(2500)
    // .deleteChars(9)
    // .typeString('<strong>The Word!</strong>')
    // .pauseFor(2500)
    .start()

typewriterSub.typeString('Live tracker')
.pauseFor(5000)
.start()

// End of Typing Effect //