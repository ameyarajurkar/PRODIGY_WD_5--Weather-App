const apiKey = "d695511a3c5f5163103ae5fb1f47f2fd"; 
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

async function checkWeather(city) {
    if (!city) return alert("Please type a city name!");

    // Temporary feedback so you know the button click worked
    document.getElementById("cityName").innerText = "Searching...";

    // IMPORTANT: Use backticks ` (next to the 1 key) not single quotes '
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // If the API returns an error (like 401 for key or 404 for city)
        if (!response.ok) {
            document.getElementById("cityName").innerText = "Error!";
            alert(`Message from API: ${data.message}`);
            return;
        }

        // 1. Update text content
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp);
        document.getElementById("description").innerText = data.weather[0].description;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

        // 2. Update icon
        const iconCode = data.weather[0].icon;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        // 3. Update background
        const weatherCondition = data.weather[0].main.toLowerCase();
        changeBackground(weatherCondition);

    } catch (error) {
        document.getElementById("cityName").innerText = "Network Error";
        console.error("The error is:", error);
        alert("Connection failed. Check your API key or Internet.");
    }
}

function changeBackground(condition) {
    let imageUrl = "";

    // Convert condition to lowercase to avoid matching errors
    const weather = condition.toLowerCase();

    switch (true) {
        case weather.includes("clear"):
            imageUrl = "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1920&q=80";
            break;
        case weather.includes("cloud"):
            imageUrl = "https://images.unsplash.com/photo-1534088568595-a066f710b81f?auto=format&fit=crop&w=1920&q=80";
            break;
        case weather.includes("rain") || weather.includes("drizzle"):
            imageUrl = "https://images.unsplash.com/photo-1534274988757-a28bf1f539cf?auto=format&fit=crop&w=1920&q=80";
            break;
        case weather.includes("thunderstorm"):
            imageUrl = "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80";
            break;
        case weather.includes("snow"):
            imageUrl = "https://images.unsplash.com/photo-1517299321529-639f40bd78a9?auto=format&fit=crop&w=1920&q=80";
            break;
        case weather.includes("mist") || weather.includes("haze") || weather.includes("fog"):
            imageUrl = "https://images.unsplash.com/photo-1487621167305-5d248087c724?auto=format&fit=crop&w=1920&q=80";
            break;
        default:
            // High-quality landscape if weather doesn't match specific categories
            imageUrl = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80";
    }

    console.log("Setting background for:", weather); // Look at your console to see what it matched
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}
searchBtn.addEventListener("click", () => checkWeather(cityInput.value));
