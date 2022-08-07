import React from "react";
import WeatherEventIcon from "../functions/weatherEventIcon";

const WeatherForecastCard = props => {
    const getForecastCard = props => {
        let wForecastCard = [];
        props.WeatherForecast.forEach(element => {
            wForecastCard.push(
                <div className="day-card" key={element.date}>
                    <p>{element.date}</p>
                    <WeatherEventIcon weatherEvent={element.phenomen} />
                    <div className="day-card-temp">
                        <p style={{color: '#ffce5f'}}>{element.temperature.max}°</p>
                        <p style={{color: '#5da6ff'}}>{element.temperature.min}°</p>
                    </div>
                </div>
            )
        })
        return wForecastCard;
    }

    return (
        <div className="day-forecast-selector info-card">
            {getForecastCard(props)}
        </div>
    );
}

export default WeatherForecastCard;