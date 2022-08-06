import React from "react";
import '../functions/weatherEventIcon'
import '../assets/weather.css'
import WeatherForecastCard from "./weatherForecastCard";
import WeatherEventIcon from "../functions/weatherEventIcon";
import WeatherMoonPhase from "../functions/weatherMoonPhase";
import WeatherParameterIcon from "../functions/weatherParameterIcon";

const Weather = props => {
    console.log(props.weather)

    return (
        <div>
            {props.weather.city &&
                <div className="weather-info">
                    <div className="main-info info-card">
                        <p style={{alignItems: 'center'}}>
                            <WeatherEventIcon weatherEvent={props.weather.weatherInfo[0].phenomen} />
                            {props.weather.weatherInfo[0].phenomen}
                        </p>
                        <div>
                            <p style={{ fontSize: '72px' }}>
                                {props.weather.weatherInfo[0].temperature.curr}°C
                            </p>
                            <p>Ощущается как: {props.weather.weatherInfo[0].temperature.feels}°</p>
                            <p>
                                {props.weather.city}
                            </p>
                            <p>
                                {props.weather.weatherInfo[0].date}
                            </p>
                        </div>
                    </div>
                    <div className="main-info info-card">
                        <p>Ощущается: {props.weather.weatherInfo[0].temperature.feels}°</p>
                    </div>
                    <div className="optional-info opt-left-side">
                        <div className="info-card">
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='thermometer' />
                                        {props.weather.weatherInfo[0].temperature.max}°/
                                        {props.weather.weatherInfo[0].temperature.min}°
                                        <br />
                                        <span>Макс/Мин</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='windSpeed' />
                                        {props.weather.weatherInfo[0].wind.speed}({props.weather.weatherInfo[0].wind.gust}) м/c
                                        <br />
                                        <span>скорость ветра</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='pressure' />
                                        {props.weather.weatherInfo[0].pressure} ГПа
                                        <br />
                                        <span>Давление</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='windDir' />
                                        {props.weather.weatherInfo[0].wind.direction}
                                        <br />
                                        <span>Направление</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='humidity' />
                                        {props.weather.weatherInfo[0].humidity}%
                                        <br />
                                        <span>Влажность</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='visibility' />
                                        {props.weather.weatherInfo[0].visibility} км
                                        <br />
                                        <span>Видимость</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='uv' />
                                        {props.weather.weatherInfo[0].uv} из 11
                                        <br />
                                        <span>УФ индекс</span>
                                    </p>
                                </div>
                            </div>
                            <div className="optional-info-content">
                                <div className="optional-info-element">
                                    <p>
                                        <WeatherParameterIcon weatherParameter='moonPhase' />
                                        <WeatherMoonPhase moonPhase={props.weather.weatherInfo[0].moon.phase} />
                                        <br />
                                        <span>Фаза луны</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='precip' />
                                <p>{props.weather.weatherInfo[0].precipitations}%</p>
                            </div>
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='uv' />
                                <p>{props.weather.weatherInfo[0].uv}</p>
                            </div>
                        </div>
                    </div>
                    <div className="optional-info opt-right-side">
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='sunrise' />
                                <p>{props.weather.weatherInfo[0].sun.rise}</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='sunset' />
                                <p>{props.weather.weatherInfo[0].sun.set}</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='pressure' />
                                <p>{props.weather.weatherInfo[0].pressure} ГПа</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='humidity' />
                                <p>{props.weather.weatherInfo[0].humidity}%</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='cloud' />
                                <p>{props.weather.weatherInfo[0].clouds}%</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='cloud' />
                                <p>{props.weather.weatherInfo[0].clouds}%</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="optional-info-content">
                                <WeatherParameterIcon weatherParameter='cloud' />
                                <p>{props.weather.weatherInfo[0].clouds}%</p>
                            </div>
                        </div>
                    </div>
                    <WeatherForecastCard WeatherForecast={props.weather.weatherInfo} />
                </div>
            }
            <p> {props.weather.error}</p>
        </div >
    )
}

export default Weather;