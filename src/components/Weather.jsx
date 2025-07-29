import './Weather.css'
import { useEffect, useState } from "react"

export default function Weather() {
    const [city, setCity] = useState(null);

    const [weathers, setWeathers] = useState(null);

    async function getWeathers(e) {
        e.preventDefault();
        
        try {
            const responseUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR,IN&appid=ec867f243a2b23cb5ea2f59e6fba33e6`);
            const result = await responseUrl.json();
            // console.log('=========',result);
            setWeathers(result);
            
        } catch (error) {
            console.error("Error Fetching Data ", error);
        }
    };

    return (
        <div className="weather-card">
            <h2>WeatherWatch</h2>
            <form onSubmit={getWeathers}>
                <input type="text" placeholder="Enter city name" onChange={(e) => setCity(e.target.value)} />
                <button type="submit">Get Weather</button>
            </form>
            {weathers && (
                <div>
                    <h2>Weather in {city}</h2>
                    <p>Temperature : {weathers.main.temp}</p>
                    <p>Weather : {weathers.weather[0].description}</p>
                    <p>Humidity : {weathers.main.humidity}</p>
                    <p>Wind Speed : {weathers.wind.speed}</p>
                </div>)
            }
        </div>
    )
}