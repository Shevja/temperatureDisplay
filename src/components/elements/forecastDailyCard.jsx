import React from "react";

const WeatherForecastCard = props => {
    const getForecastCard = props => {
        let wForecastCard = [];
        let weatherEventIcon;
        props.WeatherForecast.forEach(element => {
            weatherEventIcon = `https://www.weatherbit.io/static/img/icons/${element.phenomen.icon}.png`;
            wForecastCard.push(
                <div className="day-card" key={element.date}>
                    <p>{element.date}</p>
                    <img src={weatherEventIcon} alt="bad" />
                    <p>{element.phenomen.description}</p>
                    <div className="day-card-temp">
                        <p style={{ color: '#ffce5f' }}>{element.temperature.max}°</p>
                        <p style={{ color: '#5da6ff' }}>{element.temperature.min}°</p>
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