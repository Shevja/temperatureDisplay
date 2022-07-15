import React from "react";
import '../functions/weatherEventIcon'
import '../assets/weather.css'
import WeatherEventIcon from "../functions/weatherEventIcon";
import WeatherPararmeterIcon from "../functions/weatherParameterIcon";

const Weather = props => {
    console.log(props.weather)

    return (
        <div>
            {props.weather.city &&
                <div className="weather-container">
                    <div className="main-info-container">
                        <div className="main-info info-card">
                            <p style={{ fontSize: '72px' }}>
                                {props.weather.weatherInfo[0].temperature.curr}°
                            </p>
                            <div>
                                <WeatherEventIcon weatherEvent={props.weather.weatherInfo[0].phenomen} />
                                <p style={{ display: 'flex', justifyContent: 'center', margin: '-3px' }}>
                                    {props.weather.weatherInfo[0].phenomen}
                                </p>
                            </div>
                        </div>
                        <div className="main-info info-card">
                            <p>Ощущается: {props.weather.weatherInfo[0].temperature.feels}°</p>
                            <p>Макс.: {props.weather.weatherInfo[0].temperature.max}°</p>
                            <p>Мин.: {props.weather.weatherInfo[0].temperature.min}°</p>
                        </div>
                    </div>
                    <div className="optional-info">
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='sunrise' />
                                <p>{props.weather.weatherInfo[0].sun.rise}</p>
                            </div>
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='sunset' />
                                <p>{props.weather.weatherInfo[0].sun.set}</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='pressure' />
                                <p>{props.weather.weatherInfo[0].pressure} ГПа</p>
                            </div>
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='humidity' />
                                <p>{props.weather.weatherInfo[0].humidity}%</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='windSpeed'/>
                                <p>{props.weather.weatherInfo[0].wind.speed} м/c ({props.weather.weatherInfo[0].wind.gust} м/c)</p>
                            </div>
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='windDir'/>
                                <p>{props.weather.weatherInfo[0].wind.direction}</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='precip' />
                                <p>{props.weather.weatherInfo[0].precipitations}%</p>
                            </div>
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='uv' />
                                <p>{props.weather.weatherInfo[0].uv}</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherPararmeterIcon weatherParameter='cloud' />
                                <p>{props.weather.weatherInfo[0].clouds}%</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        Заглушка: выбор дня для прогноза
                    </div>
                </div>
            }
            < p > {props.weather.error}</p>
        </div >
    )
}

export default Weather;