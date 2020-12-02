import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherData = ({ city, api_key }) => {
    const [currentWeather, setCurrentWeather] = useState('');

    // Get weather forecast for capital city
    useEffect(() => {
        // Update state in the callback only if component is mounted
        let mounted = true;
        console.log('weather')
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
            .then(response => {
                if (mounted) {
                    console.log('promise fulfilled');
                    console.log(response.data);
                    setCurrentWeather(response.data.current);
                }
            })
        return () => mounted = false;
    }, [])

    const isValid = currentWeather ? true : false;

    return (
        <div>
            {isValid &&
                <div>
                    <h3>Weather in {city}</h3>
                    <b>temperature: {currentWeather.temperature} celsius</b>
                    <br />
                    <img src={currentWeather.weather_icons[0]} alt="" />
                    <br />
                    <b>wind: {currentWeather.wind_speed} direction {currentWeather.wind_dir}</b>
                </div>
            }
        </div>
    );
}

export default WeatherData;