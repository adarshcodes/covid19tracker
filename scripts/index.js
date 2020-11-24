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

typewriterMain.typeString('Coronavirus')
    .pauseFor(1000)
    .deleteAll()
    .typeString('#Stay <span style="color: #4DE682; font-size: 8rem;">Home</span>')
    .pauseFor(2000)
    .deleteChars(4)
    .typeString('<strong><span style="color: #4DE682; font-size: 8rem;">Safe</span></strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>#Wear a <span style="color: #4DE682; font-size: 8rem;">Mask</span></strong>')
    .pauseFor(1800)
    .deleteAll()
    .typeString('<strong>#Be a <span style="color: #4DE682; font-size: 8rem;">Superhero</span></strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>#Save <span style="color: #4DE682; font-size: 8rem;">Lives</span></strong>')
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
    .typeString('<strong>#Stay<span style="color: #4DE682;">Strong</span></strong>')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>#Stop the <span style="color: #4DE682;">Spread</span></strong>')
    .pauseFor(1000)
    .start();

//########## End of Typing Effect############ //


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

//############# User Country Code for GeoLocation ################//
let countryCode = geoplugin_countryCode();
let userCountry;

countryList.forEach(country => {
    if (country.code == countryCode) {
        userCountry = country.name;
    }

    if (userCountry == "United States") {
        userCountry = 'USA';
    }
});

//########### End of Country Code #############//

//############## API URL ##############//
const apiURL = 'https://corona.lmao.ninja/v2/countries/';

async function getCovidData() {
    const apiResponse = await fetch(apiURL);
    const data = await apiResponse.json();
    return data;
}

//############### World Data on Startup ###############//
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
            recovered: worldRecovered += data.recovered,
            newRecovered: newWorldRecovered += data.todayRecovered,
            active: worldActive += data.active,
            deaths: worldDeaths += data.deaths,
            newDeath: newWorldDeaths += data.todayDeaths,
            critical: worldCritical += data.critical
        };
    }

    const options = {
        prefix: '+'
    };

    let ror = (worldStats.recovered / worldStats.cases) * 100;
    console.log(Math.ceil(ror) + "%");


    confirmedGlobal.innerHTML = worldStats.cases;
    var confirmedAnim = new countUp.CountUp(confirmedGlobal, worldStats.cases);
    confirmedAnim.start();

    newConfirmedGlobal.innerHTML = worldStats.newCases;
    var newConfirmedAnim = new countUp.CountUp(newConfirmedGlobal, worldStats.newCases, options);
    newConfirmedAnim.start();

    recoveredGlobal.innerHTML = worldStats.recovered;
    var recoveredAnim = new countUp.CountUp(recoveredGlobal, worldStats.recovered);
    recoveredAnim.start();

    newRecoveredGlobal.innerHTML = worldStats.newRecovered;
    var newRecoveredAnim = new countUp.CountUp(newRecoveredGlobal, worldStats.newRecovered, options);
    newRecoveredAnim.start();

    activeGlobal.innerHTML = worldStats.active;
    var activeAnim = new countUp.CountUp(activeGlobal, worldStats.active);
    activeAnim.start();

    deceasedGlobal.innerHTML = worldStats.deaths;
    var deceasedAnim = new countUp.CountUp(deceasedGlobal, worldStats.deaths);
    deceasedAnim.start();

    newDeceasedGlobal.innerHTML = worldStats.newDeath;
    var newDeceasedAnim = new countUp.CountUp(newDeceasedGlobal, worldStats.newDeath, options);
    newDeceasedAnim.start();

    criticalGlobal.innerHTML = worldStats.critical;
    var criticalAnim = new countUp.CountUp(criticalGlobal, worldStats.critical);
    criticalAnim.start();
}
//############### Enf of the World Data on Startup ###############//

//############# Country Data Based on IP-Address ################//
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

        if (data.country == userCountry) {
            countryStats = {
                population: countryPopulation = data.population,
                test: countryTest = data.tests,
                cases: countryCases = data.cases,
                newCases: newCountryCases = data.todayCases,
                recovered: countryRecovered = data.recovered,
                newRecovered: newCountryRecovered = data.todayRecovered,
                active: countryActive = data.active,
                deaths: countryDeaths = data.deaths,
                newDeath: newCountryDeaths = data.todayDeaths,
                critical: countryCritical = data.critical
            };
        }
    }


    countryName.innerHTML = userCountry + ` Statistics <sup>Live <sup>&#x2764;</sup></sup>`;

    const options = {
        duration: 3,
        prefix: '+'
    };

    populationCountry.innerHTML = countryStats.population;
    var populationAnim = new countUp.CountUp(populationCountry, countryStats.population);
    populationAnim.start();

    testCountry.innerHTML = countryStats.test;
    var testAnim = new countUp.CountUp(testCountry, countryStats.test);
    testAnim.start();

    confirmedCountry.innerHTML = countryStats.cases;
    var confirmedAnim = new countUp.CountUp(confirmedCountry, countryStats.cases);
    confirmedAnim.start();

    newConfirmedCountry.innerHTML = +countryStats.newCases;
    var newConfirmedAnim = new countUp.CountUp(newConfirmedCountry, countryStats.newCases, options);
    newConfirmedAnim.start();

    recoveredCountry.innerHTML = countryStats.recovered;
    var recoveredAnim = new countUp.CountUp(recoveredCountry, countryStats.recovered);
    recoveredAnim.start();

    newRecoveredCountry.innerHTML = +countryStats.newRecovered;
    var newRecoveredAnim = new countUp.CountUp(newRecoveredCountry, countryStats.newRecovered, options);
    newRecoveredAnim.start();

    activeCountry.innerHTML = countryStats.active;
    var activeAnim = new countUp.CountUp(activeCountry, countryStats.active);
    activeAnim.start();

    deceasedCountry.innerHTML = countryStats.deaths;
    var deceasedAnim = new countUp.CountUp(deceasedCountry, countryStats.deaths);
    deceasedAnim.start();

    newDeceasedCountry.innerHTML = +countryStats.newDeath;
    var newDeceasedAnim = new countUp.CountUp(newDeceasedCountry, countryStats.newDeath, options);
    newDeceasedAnim.start();

    criticalCountry.innerHTML = countryStats.critical;
    var criticalAnim = new countUp.CountUp(criticalCountry, countryStats.critical);
    criticalAnim.start();
}
//############# End of Country Data Based on IP-Address ################//

//########## Fetching Country Data based on Selection #############//

function fetchCountry(country) {
    userCountry = country;
    input.value = country;

    if (userCountry == "United States") {
        userCountry = 'USA';
    }

    // Country Data Searching

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

            if (data.country == userCountry) {
                countryStats = {
                    population: countryPopulation = data.population,
                    test: countryTest = data.tests,
                    cases: countryCases = data.cases,
                    newCases: newCountryCases = data.todayCases,
                    recovered: countryRecovered = data.recovered,
                    newRecovered: newCountryRecovered = data.todayRecovered,
                    active: countryActive = data.active,
                    deaths: countryDeaths = data.deaths,
                    newDeath: newCountryDeaths = data.todayDeaths,
                    critical: countryCritical = data.critical
                };
            }
        }

        countryName.innerHTML = userCountry + ` Statistics <sup>Live <sup>&#x2764;</sup></sup>`;

        const options = {
            duration: 3,
            prefix: '+'
        };

        populationCountry.innerHTML = countryStats.population;
        var populationAnim = new countUp.CountUp(populationCountry, countryStats.population);
        populationAnim.start();

        testCountry.innerHTML = countryStats.test;
        var testAnim = new countUp.CountUp(testCountry, countryStats.test);
        testAnim.start();

        confirmedCountry.innerHTML = countryStats.cases;
        var confirmedAnim = new countUp.CountUp(confirmedCountry, countryStats.cases);
        confirmedAnim.start();

        newConfirmedCountry.innerHTML = +countryStats.newCases;
        var newConfirmedAnim = new countUp.CountUp(newConfirmedCountry, countryStats.newCases, options);
        newConfirmedAnim.start();

        recoveredCountry.innerHTML = countryStats.recovered;
        var recoveredAnim = new countUp.CountUp(recoveredCountry, countryStats.recovered);
        recoveredAnim.start();

        newRecoveredCountry.innerHTML = +countryStats.newRecovered;
        var newRecoveredAnim = new countUp.CountUp(newRecoveredCountry, countryStats.newRecovered, options);
        newRecoveredAnim.start();

        activeCountry.innerHTML = countryStats.active;
        var activeAnim = new countUp.CountUp(activeCountry, countryStats.active);
        activeAnim.start();

        deceasedCountry.innerHTML = countryStats.deaths;
        var deceasedAnim = new countUp.CountUp(deceasedCountry, countryStats.deaths);
        deceasedAnim.start();

        newDeceasedCountry.innerHTML = +countryStats.newDeath;
        var newDeceasedAnim = new countUp.CountUp(newDeceasedCountry, countryStats.newDeath, options);
        newDeceasedAnim.start();

        criticalCountry.innerHTML = countryStats.critical;
        var criticalAnim = new countUp.CountUp(criticalCountry, countryStats.critical);
        criticalAnim.start();
    }

    countryData();
}
//########## End of Fetching Country Data based on Selection #############//

worldData();
countryData();