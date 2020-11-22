// import {
//     CountUp
// } from './countUp.min.js';
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
});

typewriterMain.typeString('Coronavirus')
    .start()

typewriterSub.typeString('Live tracker')
    .pauseFor(5000)
    .start()


// End of Typing Effect //


//########## Selecting all the Global Data Elements ############//

// Confirmed Global Data
const confirmedGlobal = document.getElementById('global-confirmed');
const newConfirmedGlobal = document.getElementById('global-confirmed-new');

// Recovered Global Data
const recoveredGlobal = document.getElementById('global-recovered');
const newRecoveredGlobal = document.getElementById('global-recovered-new');

// Active Global Data
const activeGlobal = document.getElementById('global-active');
const newActiveGlobal = document.getElementById('global-active-new');

// Deceased Global Data
const deceasedGlobal = document.getElementById('global-deceased');
const newDeceasedGlobal = document.getElementById('global-deceased-new');

// Critical Global Data
const criticalGlobal = document.getElementById('global-critical');
const newCriticalGlobal = document.getElementById('global-critical-new');

//########## End of Global Data Elements ############//


//############# Selecting Country Data Elements #############/

// country name heading
const countryName = document.querySelector('.heading-country');

// Population Country Data
const populationCountry = document.getElementById('country-population');

// Tests Country Data
const testCountry = document.getElementById('country-test');
const newTestCountry = document.getElementById('country-test-new');

// Confirmed Country Data
const confirmedCountry = document.getElementById('country-confirmed');
const newConfirmedCountry = document.getElementById('country-confirmed-new');


// Recovered Country Data
const recoveredCountry = document.getElementById('country-recovered');
const newRecoveredCountry = document.getElementById('country-recovered-new');

// Active Country Data
const activeCountry = document.getElementById('country-active');
const newActiveCountry = document.getElementById('country-active-new');

// Deceased Country Data
const deceasedCountry = document.getElementById('country-deceased');
const newDeceasedCountry = document.getElementById('country-deceased-new');

// Critical Country Data
const criticalCountry = document.getElementById('country-critical');
const newCriticalCountry = document.getElementById('country-critical-new');

//############# End of Country Data Elements #############/

// User Country Code

let countryCode = geoplugin_countryCode();
let userCountry;

countryList.forEach(country => {
    if (country.code == countryCode) {
        userCountry = country.name;
    }
});

if (userCountry == "United States") {
    userCountry = 'USA';
}

function fetchCountry(countrySelect) {
    userCountry = countrySelect;
    console.log(userCountry);
}

userCountry = userCountry.toUpperCase();



///############## API URL ##############//

const apiURL = 'https://corona.lmao.ninja/v2/countries/';

async function getCovidData() {
    const apiResponse = await fetch(apiURL);
    const data = await apiResponse.json();
    return data;
}


// World Data


async function worldData() {

    const response = await getCovidData();
    let worldCases = 0;
    let newWorldCases = 0;
    let worldRecovered = 0;
    let newWorldRecovered = 0;
    let worldActive = 0;
    let worldDeaths = 0;
    let newWorldDeaths = 0;
    let worldCritical = 0;
    let worldStats = '';

    for (const data of response) {
        worldStats = {
            cases: worldCases += data.cases,
            newCases: newWorldCases += data.todayCases,
            recoverd: worldRecovered += data.recovered,
            newRecovered: newWorldRecovered += data.todayRecovered,
            active: worldActive += data.active,
            deaths: worldDeaths += data.deaths,
            newDeath: newWorldDeaths += data.todayDeaths,
            critical: worldCritical += data.critical
        };
    }

    confirmedGlobal.innerHTML = worldStats.cases;
    newConfirmedGlobal.innerHTML = `+ ` + worldStats.newCases;
    recoveredGlobal.innerHTML = worldStats.recoverd;
    newRecoveredGlobal.innerHTML = `+ ` + worldStats.newRecovered;
    activeGlobal.innerHTML = worldStats.active;
    deceasedGlobal.innerHTML = worldStats.deaths;
    newDeceasedGlobal.innerHTML = `+ ` + worldStats.newDeath;
    criticalGlobal.innerHTML = worldStats.critical;
}

// CountryData

async function countryData() {
    const response = await getCovidData();

    let countryPopulation = 0;
    let countryTest = 0;
    let countryCases = 0;
    let newCountryCases = 0;
    let countryRecovered = 0;
    let newCountryRecovered = 0;
    let countryActive = 0;
    let countryDeaths = 0;
    let newCountryDeaths = 0;
    let countryCritical = 0;
    let countryStats = '';

    for (const data of response) {

        if (data.country.toUpperCase() == userCountry) {
            countryStats = {
                population: countryPopulation = data.population,
                test: countryTest = data.tests,
                cases: countryCases = data.cases,
                newCases: newCountryCases = data.todayCases,
                recoverd: countryRecovered = data.recovered,
                newRecovered: newCountryRecovered = data.todayRecovered,
                active: countryActive = data.active,
                deaths: countryDeaths = data.deaths,
                newDeath: newCountryDeaths = data.todayDeaths,
                critical: countryCritical = data.critical
            };
        }
    }

    countryName.innerHTML = userCountry + ` Statistics <sup>Live <sup>&#x2764;</sup></sup>`;

    populationCountry.innerHTML = countryStats.population;
    testCountry.innerHTML = countryStats.test;
    confirmedCountry.innerHTML = countryStats.cases;
    newConfirmedCountry.innerHTML = `+ ` + countryStats.newCases;
    recoveredCountry.innerHTML = countryStats.recoverd;
    newRecoveredCountry.innerHTML = `+ ` + countryStats.newRecovered;
    activeCountry.innerHTML = countryStats.active;
    deceasedCountry.innerHTML = countryStats.deaths;
    newDeceasedCountry.innerHTML = `+ ` + countryStats.newDeath;
    criticalCountry.innerHTML = countryStats.critical;
}

worldData();
countryData();
