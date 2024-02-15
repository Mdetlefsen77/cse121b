const apiKey = '8ad8ac0811da6d288503826ee0879f83';
const historyList = document.getElementById('historyList');
const weatherDetails = document.getElementById('weatherDetails');

async function searchWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value.trim();

    if (location === '') {
        alert('Please enter a valid location.');
        return;
    }

    // Perform weather forecast search using the API and usign async/await and try/catch blocks
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    try {
        const data = await fetch(apiUrl)
        const response = await data.json();
        // Process and display current weather data in the user interface
        displayCurrentWeather(response);
        // Add the search to the history
        addToHistory(location);

    } catch (error) {
        console.error('Error fetching current weather:', error);
        alert('Unable to fetch current weather. Please try again.');
    }

    // Fetch daily forecast data using the API and usign promises with .then() and .catch() blocks
    const dailyApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;

    fetch(dailyApiUrl)
        .then(response => response.json())
        .then(data => {
            // Process and display daily forecast data in the user interface
            displayDailyForecast(data);
        })
        .catch(error => {
            console.error('Error fetching daily forecast:', error);
            alert('Unable to fetch daily forecast. Please try again.');
        });
}

function addToHistory(location) {
    // Add the search to the history and update the list
    const listItem = document.createElement('li');
    listItem.textContent = location;
    listItem.addEventListener('click', () => {
        // When a history item is clicked, perform a new search with the selected location
        document.getElementById('locationInput').value = location;
        searchWeather();
    });
    historyList.appendChild(listItem);
}

function displayCurrentWeather(data) {
    // Clear previous weather details
    weatherDetails.innerHTML = '';
    // Display current weather information
    const currentWeatherDiv = document.createElement('div');
    currentWeatherDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p>Location: ${data.name}, ${data.sys.country}</p>
        <p>Temperature: ${data.main.temp} &deg;C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherDetails.appendChild(currentWeatherDiv);
}

function displayDailyForecast(data) {
    // Clear previous forecast details
    // Assuming the API provides daily forecast data in a list called 'list'
    const dailyForecast = data.list.filter(entry => entry.dt_txt.includes('12:00:00'));

    const dailyForecastDiv = document.createElement('div');
    dailyForecastDiv.innerHTML = '<h2>Daily Forecast</h2>';

    dailyForecast.forEach(entry => {
        const date = new Date(entry.dt * 1000);
        dailyForecastDiv.innerHTML += `
            <p>${formatDate(date)} - ${entry.main.temp} &deg;C - ${entry.weather[0].description}</p>
        `;
    });

    weatherDetails.appendChild(dailyForecastDiv);
}

function applyFilter() {
    // Apply the selected filter (all, current, or daily) when displaying the forecast
    const filterSelect = document.getElementById('filterSelect');
    const selectedFilter = filterSelect.value;

    // Clear previous forecast details
    weatherDetails.innerHTML = '';

    // Display the appropriate forecast based on the selected filter
    if (selectedFilter === 'all') {
        // Fetch and display both current weather and daily forecast
        const locationInput = document.getElementById('locationInput').value;

        // Fetch and display current weather
        const currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}`;

        fetch(currentApiUrl)
            .then(response => response.json())
            .then(data => {
                displayCurrentWeather(data);
            })
            .catch(error => {
                console.error('Error fetching current weather:', error);
                alert('Unable to fetch current weather. Please try again.');
            });

        // Fetch and display daily forecast
        const dailyApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${locationInput}&appid=${apiKey}`;

        fetch(dailyApiUrl)
            .then(response => response.json())
            .then(data => {
                displayDailyForecast(data);
            })
            .catch(error => {
                console.error('Error fetching daily forecast:', error);
                alert('Unable to fetch daily forecast. Please try again.');
            });
    } else if (selectedFilter === 'current' || selectedFilter === 'daily') {
        // Fetch and display either current weather or daily forecast
        const locationInput = document.getElementById('locationInput').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/${selectedFilter === 'current' ? 'weather' : 'forecast'}?q=${locationInput}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (selectedFilter === 'current') {
                    displayCurrentWeather(data);
                } else {
                    displayDailyForecast(data);
                }
            })
            .catch(error => {
                console.error(`Error fetching ${selectedFilter} data:`, error);
                alert(`Unable to fetch ${selectedFilter} data. Please try again.`);
            });
    }
}
const formatDate = function (date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
