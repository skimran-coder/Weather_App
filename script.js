const tabs = document.querySelectorAll('.tab')
const yourWeather = document.querySelector('[userWeather]');
const searchWeather = document.querySelector('[searchWeather]');
const grantAccessScreen = document.querySelector('.grant-access-container')
const accessButton = document.querySelector('.grant-access-btn')
const loadingScreen = document.querySelector('.loading-container')
const searchScreen = document.querySelector('.search-weather-container')
const weatherScreen = document.querySelector('.weather-container')


const API_key = 'd7f8e1a8f9bf07da8fd33aa4650f59b2';

let storedLocation;
let currentTab = yourWeather



// switching tab using eventlisteners on each element

tabs.forEach((element)=>{
    element.addEventListener('click', changeTab)
})

function changeTab(e) {
    // when clicked on unclicked tab
    if (e.target != currentTab) {
        currentTab.style.backgroundColor = "white";
        e.target.style.backgroundColor = "gray";
        currentTab = e.target;
    }

    // when on clicked on your weather tab
    if (e.target === yourWeather) {
        searchScreen.style.display = 'none';
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
function checkAccess(){

    // checking if co-ordinates are already in local storage
    if (false) {
        console.log("will write condition if access already given");
    }

    // if co-ordinates are not in local storage
    else{
        loadingScreen.style.display = 'none';
        displayAccessScreen()
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
    
        // calling function to find weather by sending lat/long
        findWeather(latitude, longitude)
    }
}




// api call to get response
async function findWeather(latitude, longitude){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_key}`)
    const result = await response.json()
    console.log(result);
}