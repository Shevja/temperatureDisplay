import React from "react";
import '../assets/cityForecastContainer.css'
import ForecastTodayCard from "./forecastTodayCard"
import ForecastTodayOptInfo from "./forecastTodayOptInfo"
import ForecastTodayMap from "./forecastTodayMap"
import ForecastDailyCard from "./forecastDailyCard";

const Weather = props => (
    <div className="weather-container animate__animated animate__fadeIn">
        {props.weather.city &&
            <div className="weather-info">
                <ForecastTodayCard weatherForToday={props.weather.weatherInfo[0]} selectedCity={props.weather.city} />
                <ForecastTodayMap />
                <ForecastTodayOptInfo weatherForToday={props.weather.weatherInfo[0]} />
                <ForecastDailyCard WeatherForecast={props.weather.weatherInfo} />
            </div>
        }
        {/* <p>{props.weather.error}</p> */}
    </div>
)

export default Weather;