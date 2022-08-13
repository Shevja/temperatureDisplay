import React from "react";

const CityForecastForToday = props => {
    const iconId = `https://www.weatherbit.io/static/img/icons/${props.weatherForToday.phenomen.icon}.png`;

    return (
        <div className="main-info info-card">
            <div style={{ alignItems: 'center' }}>
                <img src={iconId} alt="bad" />
                <p>{props.weatherForToday.phenomen.description}</p>
            </div>
            <div>
                <p style={{ fontSize: '72px' }}>
                    {props.weatherForToday.temperature.curr}°C
                </p>
                <p>Ощущается как: {props.weatherForToday.temperature.feels_av}°</p>
                <p>
                    {props.selectedCity}
                </p>
                <p>
                    {props.weatherForToday.date}
                </p>
            </div>
        </div>
    );
}

export default CityForecastForToday;