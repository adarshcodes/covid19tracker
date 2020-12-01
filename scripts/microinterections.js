// ########## HamBurger Animation ###########//

const hamMenu = document.querySelector('.menu-icons');

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const navigation = document.querySelector('.navigation');

hamMenu.addEventListener('click', function () {
    navigation.classList.toggle('show-navigation');
    line1.classList.toggle('line1style');
    line2.classList.toggle('line2style');
    line3.classList.toggle('line3style');
});

//########### End of HamBurger Animation #############//

//########## Typing Effect ##########//

let typeMain = document.getElementById('type-main');
let typeSub = document.getElementById('type-sub');

let typewriterMain = new Typewriter(typeMain, {
    loop: true,
    delay: 100
});

let typewriterSub = new Typewriter(typeSub, {
    delay: 100,
    loop: true
});

// background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
// background-clip: text; 
// -webkit-background-clip: text;
// color: transparent;

typewriterMain.typeString('Coronavirus')
    .pauseFor(1000)
    .deleteAll()
    .typeString('#Stay<span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 8rem;">Home</span>')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('<strong><span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 8rem;">Safe</span></strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>#Wear<span style="font-size: 7rem;">A</span><span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 8rem;">Mask</span></strong>')
    .pauseFor(1800)
    .deleteAll()
    .typeString('<strong>#Be<span style="font-size: 7rem;">A</span><span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 8rem;">Superhero</span></strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>#Save<span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 8rem;">Lives</span></strong>')
    .pauseFor(1500)
    .start();

typewriterSub.typeString('Live tracker')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Keep Your Distance')
    .pauseFor(800)
    .deleteAll()
    .typeString('Wash Your Hands')
    .pauseFor(800)
    .deleteAll()
    .typeString('Avoid Touching')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<strong>#Stay<span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent;">Strong</span></strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>#Stop<span style="font-size: 2.5rem;">The</span><span style="background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); background-clip: text; -webkit-background-clip: text; color: transparent; font-size: 3rem;">Spread</span></strong>')
    .pauseFor(1000)
    .start();

//########## End of Typing Effect############ //

// ########### Symptoms Card Effect ##############//

let swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

// ########### End of Symptoms Card Effect ##############//

// ############ Prevention Timeline ##############//

var items = document.querySelectorAll(".section-prevention li");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// ############ End Prevention Timeline ##############//
