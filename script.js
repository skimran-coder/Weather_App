const tabs = document.querySelectorAll('.tab')
const yourWeather = document.querySelector('[userWeather]');
const searchWeather = document.querySelector('[searchWeather]');
const grantAccessScreen = document.querySelector('.grant-access-container')
const accessButton = document.querySelector('.grant-access-btn')
const loadingScreen = document.querySelector('.loading-container')
const searchScreen = document.querySelector('.search-weather-container')
const weatherScreen = document.querySelector('.weather-container')
const searchButton = document.querySelector('#search-btn')
const searchBar = document.querySelector('#search-bar')
const errorPage = document.querySelector('.error')

const API_key = 'd7f8e1a8f9bf07da8fd33aa4650f59b2';


let currentTab = yourWeather
checkAccess()





// switching tab using eventlisteners on each element

tabs.forEach((element)=>{
    element.addEventListener('click', changeTab)
})

function changeTab(e) {
    // when clicked on unclicked tab
    if (e.target != currentTab) {
        currentTab.style.backgroundColor = "transparent";
        e.target.style.backgroundColor = "#dbe2ef6f";
        currentTab = e.target;
    }

    // when on clicked on your weather tab
    if (e.target === yourWeather) {
        searchScreen.style.display = 'none';
        errorPage.style.display = 'none';
        displayLoadingScreen()
        checkAccess()
    }
    
    // when on clicked on search tab tab
    else{
        displaySearchbar()
    }
}

// display search bar
function displaySearchbar(){
    grantAccessScreen.style.display = 'none';
    weatherScreen.style.display = 'none';
    searchScreen.style.display = 'flex';
}


// displaying loading screen
function displayLoadingScreen(){
    loadingScreen.style.display = 'flex';
}

// checking location access
function checkAccess() {
    // Check if coordinates are already in local storage
    const storedLatitude = localStorage.getItem("latitude");
    const storedLongitude = localStorage.getItem("longitude");

    if (storedLatitude && storedLongitude) {
        // Coordinates are in local storage, use them
        const latitude = parseFloat(storedLatitude);
        const longitude = parseFloat(storedLongitude);
        
        loadingScreen.style.display = 'flex';
        findWeather(latitude, longitude);
    } else {
        // Coordinates are not in local storage, show access screen
        loadingScreen.style.display = 'none';
        displayAccessScreen();
    }
}


// displaying access screen
function displayAccessScreen(){
    grantAccessScreen.style.display = 'flex';
}

accessButton.addEventListener('click', grantAccess)

// getting location when clicked on button
function grantAccess(){
    if (navigator.geolocation) {
        grantAccessScreen.style.display = 'none';
        loadingScreen.style.display = 'flex';
        navigator.geolocation.getCurrentPosition(storeLocation)
    }
    else {
        alert("Geolocation is not supported in your device");
    }

    // getting co-ordiantes -- will save in local storage
    function storeLocation(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude
        
        console.log(`${latitude} & ${longitude}`);
        // have to save co-ords in local storage??
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
    
        // calling function to find weather by sending lat/long
        findWeather(latitude, longitude)
        

    }
}




// api call to get response
async function findWeather(latitude, longitude){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`)
        const result = await response.json()
        displayWeather(result)
    } catch (error) {
        alert('error')
    }
}

searchBar.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
    console.log('Enter key was pressed');
    weatherScreen.style.display = 'none'
    errorPage.style.display = 'none';
    loadingScreen.style.display = 'flex';
    const userInput = searchBar.value
    getWeather(userInput)
    searchBar.value = "";
}
})
searchButton.addEventListener('click', takeInput)

function takeInput(){
    errorPage.style.display = 'none';
    loadingScreen.style.display = 'flex';
    weatherScreen.style.display = 'none'
    const userInput = searchBar.value
    getWeather(userInput)
    searchBar.value = "";

}

// api call using city name
async function getWeather(userInput){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${API_key}`)
        const result = await response.json();
        errorPage.style.display = 'none';
        displayWeather(result)
    } catch (error) {
        loadingScreen.style.display = 'none';
        weatherScreen.style.display = 'none'
        errorPage.style.display = 'flex';
    }
}

function displayWeather(result){
    const weatherCity = document.querySelector('.weather-city')
    const weatherCountryIcon = document.querySelector('.weather-country-icon')
    const weatherDesc = document.querySelector('.weather-desc')
    const weatherIcon = document.querySelector('.weather-icon')
    const weatherTemp = document.querySelector('.weather-temp')
    const windspeed = document.querySelector('.windspeed')
    const humidity = document.querySelector('.humidity')
    const clouds = document.querySelector('.clouds')

    // hide loading screen
    loadingScreen.style.display = 'none';
    // hide grant acces screen
    grantAccessScreen.style.display = 'none';
    // hide error screen
    errorPage.style.display = 'none';
    // visible weather screen
    weatherScreen.style.display = 'flex';

    weatherCity.innerText = result?.name
    weatherCountryIcon.src = `https://flagcdn.com/48x36/${result?.sys?.country.toLowerCase()}.png`
    weatherDesc.innerText = result?.weather[0]?.description
    weatherIcon.src = `https://openweathermap.org/img/w/${result?.weather[0]?.icon}.png`
    weatherTemp.innerText = `${(result?.main?.temp - 273).toFixed(2)} °C`;

    windspeed.innerText = `${result?.wind?.speed}m/s`
    humidity.innerText = `${result?.main?.humidity}%`
    clouds.innerText = `${result?.clouds?.all}%`
}