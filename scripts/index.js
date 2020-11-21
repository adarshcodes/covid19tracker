// HamBurger Animation //

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

//End of HamBurger Animation //


// Typing Effect //

let typeMain = document.getElementById('type-main');
let typeSub = document.getElementById('type-sub');

let typewriterMain = new Typewriter(typeMain, {
    delay: 300
});

let typewriterSub = new Typewriter(typeSub, {
    delay: 300
})

typewriterMain.typeString('Coronavirus')
    .start()

typewriterSub.typeString('Live tracker')
    .pauseFor(5000)
    .start()

// End of Typing Effect //


//########## Selecting all the Global Data Elements ############//

// Confirmed Global Data
const confirmedCardGlobal = document.querySelector('.stats-cards__confirmed-card');
const confirmedGlobal = document.getElementById('global-confirmed');
const newConfirmedGlobal = document.getElementById('global-confirmed-new');

// Recovered Global Data
const recoveredCardGlobal = document.querySelector('.stats-cards__recovered-card');
const recoveredGlobal = document.getElementById('global-recovered');
const newRecoveredGlobal = document.getElementById('global-recovered-new');

// Active Global Data
const activeCardGlobal = document.querySelector('.stats-cards__active-card');
const activeGlobal = document.getElementById('global-active');
const newActiveGlobal = document.getElementById('global-active-new');

// Deceased Global Data
const deceasedCardGlobal = document.querySelector('.stats-cards__deceased-card');
const deceasedGlobal = document.getElementById('global-deceased');
const newDeceasedGlobal = document.getElementById('global-deceased-new');

// Critical Global Data
const criticalCardGlobal = document.querySelector('.stats-cards__critical-card');
const criticalGlobal = document.getElementById('global-critical');
const newCriticalGlobal = document.getElementById('global-critical-new');

//########## End of Global Data Elements ############//


//############# Selecting Country Data Elements #############/

// country name heading

const countryName = document.querySelector('.heading-secondary');

// Tests Country Data
const testCardCountry = document.querySelector('.stats-cards__tests-card');
const testCountry = document.getElementById('country-test');
const newTestCountry = document.getElementById('country-test-new');

// Tests Country Data
const confirmedCardCountry = document.querySelector('.stats-cards__confirmed-card');
const confirmedCountry = document.getElementById('country-confirmed');
const newConfirmedCountry = document.getElementById('country-confirmed-new');

// Tests Country Data
const recoveredCardCountry = document.querySelector('.stats-cards__recovered-card');
const recoveredCountry = document.getElementById('country-recovered');
const newRecoveredCountry = document.getElementById('country-recovered-new');

// Tests Country Data
const activeCardCountry = document.querySelector('.stats-cards__active-card');
const activeCountry = document.getElementById('country-active');
const newActiveCountry = document.getElementById('country-active-new');

// Tests Country Data
const deceasedCardCountry = document.querySelector('.stats-cards__deceased-card');
const deceasedCountry = document.getElementById('country-deceased');
const newDeceasedCountry = document.getElementById('country-deceased-new');

// Tests Country Data
const criticalCardCountry = document.querySelector('.stats-cards__critical-card');
const criticalCountry = document.getElementById('country-critical');
const newCriticalCountry = document.getElementById('country-critical-new');

//############# End of Country Data Elements #############/



// App Variables
let appData = [],
    casesList = [],
    recoveredList = [],
    activeList = [],
    deathList = [],
    criticalList = [];

// User Country Code

let countryCode = geoplugin_countryCode();
let userCountry;

countryList.forEach(country => {
    if (country.code == countryCode) {
        userCountry = country.name;
    }
});


///############## API URL ##############//

const apiURL = 'https://corona.lmao.ninja/v2/countries/';

function fetchData(userCountry) {
    fetch(apiURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            dates = Object.keys(data);

            dates.forEach(date => {
                let DATA = data[date];
                console.log(DATA.userCountry);
            })
        })
}

fetchData(userCountry);

// Update UI Function