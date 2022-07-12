import React from "react";
import '../assets/weather.css'

const Weather = props => (
    <div>
        {props.city &&
            <div className="weather-container">
                Информация о погоде
                <p>Город: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Восход: {props.sunrise}</p>
                <p>Закат: {props.sunset}</p>
            </div>
        }
        <p>{props.error}</p>
    </div>
)

export default Weather;