const weatherFrom = document.querySelector(".weatherFrom");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey ="*************************************";

weatherFrom.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value ;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
            displayWeatherInfo(weatherData);
        }catch(error){
           // console.error(error);
            displayError(error);
        }

    }
    else{
        displayError("Please Enter a City");
    }
})

async function getWeatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    const{
        name: city, 
        main: { temp, humidity },
        weather: [{ description, id }] } = data;
        
        card.textContent ="";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherImoji = document.createElement("p");

        cityDisplay.textContent = city ;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = description;
        weatherImoji.textContent = displayWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        weatherImoji.classList.add("weatherImoji");

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherImoji);
}

function displayWeatherEmoji(weatherid){
    switch(true){
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️";

        case (weatherid >= 300 && weatherid < 400):
            return "🌧️"; 
        case (weatherid >= 500 && weatherid < 600):
            return "🌧️"; 
        case (weatherid >= 600 && weatherid < 700):
            return "🌨️";       
        case (weatherid >= 700 && weatherid < 800):
            return "🌤️";        
        case (weatherid === 800):
                return "☀️";  
        case (weatherid >= 801 && weatherid < 810):
            return "☁️"; 
        default:
            return "❓";                                          
    }
}
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
