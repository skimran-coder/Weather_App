# Weather App README

## Overview

The Weather App is a simple web application that allows users to check the weather for their current location or search for the weather in a specific city. It provides weather information such as temperature, description, wind speed, humidity, and cloud cover. This README provides an overview of the app's structure, features, and usage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credit)

## Features

### 1. Tab-based Navigation

- The app features two tabs: "Your Weather" and "Search Weather." Users can switch between these tabs by clicking on them.

### 2. Location Access

- The "Your Weather" tab allows users to grant location access to obtain weather information for their current location.
- If location access is granted, the app displays weather information based on the user's current coordinates.
- If location access is denied or unavailable, users can still search for weather by city.

### 3. Search Weather

- In the "Search Weather" tab, users can enter the name of a city and search for its weather information.
- The app retrieves weather data for the specified city and displays it to the user.

### 4. Loading Screen

- A loading screen is displayed while the app fetches weather data from the OpenWeatherMap API.
- Users are informed that data is being retrieved, ensuring a smooth user experience.

### 5. Weather Information

- Weather data for the selected location or city is displayed, including the city name, country flag icon, weather description, temperature, wind speed, humidity, and cloud cover.

### 6. Error Handling

- If the app encounters an error while fetching weather data for a city (e.g., invalid city name), it displays an error message to the user.

## Installation

To run the Weather App locally, follow these steps:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Open the `index.html` file in a web browser to use the app.

## Usage

1. When you open the Weather App, you will see two tabs: "Your Weather" and "Search Weather."

2. Click on the "Your Weather" tab to grant location access and view the weather for your current location.

3. If location access is granted, the app will display weather information for your current coordinates. If not, you can still search for weather by city.

4. Click on the "Search Weather" tab to enter the name of a city and search for its weather information.

5. Enter the city name in the search bar and press the Enter key or click the search button.

6. The app will display the weather data for the specified city, including temperature, description, wind speed, humidity, and cloud cover.

7. If an error occurs during the search (e.g., invalid city name), the app will display an error message.

## Credit

This Weather App was inspired by the idea of **Love Babbar**. I, **Sk. Imran Hussain** recreated it by following their guidance and watching their course. I want to express my gratitude for their valuable mentorship and guidance in building this application.

Feel free to customize and enhance the Weather App according to your preferences. Enjoy using the app and exploring weather conditions!
