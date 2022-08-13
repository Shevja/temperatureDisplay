import React from "react";
import ForecastParameterIcon from "../functions/forecastParameterIcon";
import ForecastMoonPhase from "../functions/forecastMoonPhase";

const ForecastTodayOptInfoElement = props => {
    switch (props.weatherParameter) {
        case 'temperature':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='thermometer' />
                            {props.weatherInfo.temperature.max}°/
                            {props.weatherInfo.temperature.min}°
                            <br />
                            <span>Макс/Мин</span>
                        </p>
                    </div>
                </div>
            );
        case 'windSpeed':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='windSpeed' />
                            {props.weatherInfo.wind.speed}({props.weatherInfo.wind.gust}) м/c
                            <br />
                            <span>Скорость ветра</span>
                        </p>
                    </div>
                </div>
            );
        case 'pressure':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='pressure' />
                            {props.weatherInfo.pressure} ГПа
                            <br />
                            <span>Давление</span>
                        </p>
                    </div>
                </div>
            );
        case 'cloud':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='cloud' />
                            {props.weatherInfo.clouds}%
                            <br />
                            <span>Облачность</span>
                        </p>
                    </div>
                </div>
            );
        case 'humidity':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='humidity' />
                            {props.weatherInfo.humidity}%
                            <br />
                            <span>Влажность</span>
                        </p>
                    </div>
                </div>
            );
        case 'visibility':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='visibility' />
                            {props.weatherInfo.visibility} км
                            <br />
                            <span>Видимость</span>
                        </p>
                    </div>
                </div>
            );
        case 'uv':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='uv' />
                            {props.weatherInfo.uv} из 11
                            <br />
                            <span>УФ индекс</span>
                        </p>
                    </div>
                </div>
            );
        case 'precip':
            return (
                <div className="optional-info-content">
                    <div className="optional-info-element">
                        <p>
                            <ForecastParameterIcon weatherParameter='precip' />
                            {props.weatherInfo.precipitations}%
                            <br />
                            <span>Осадки</span>
                        </p>
                    </div>
                </div>
            );
        case 'moonPhase':
            return (
                <div className="optional-info-element">
                    <p>
                        <ForecastParameterIcon weatherParameter='moonPhase' />
                        <ForecastMoonPhase moonPhase={props.weatherInfo.moon.phase} />
                        <br />
                        <span>Фаза луны</span>
                    </p>
                </div>
            );
        case 'windDir':
            return (
                <div className="optional-info-element">
                    <p>
                        <ForecastParameterIcon weatherParameter='windDir' />
                        {props.weatherInfo.wind.direction}
                        <br />
                        <span>Напраление ветра</span>
                    </p>
                </div>
            );
        case 'ozone':
            return (
                <div className="optional-info-element">
                    <p>
                        <ForecastParameterIcon weatherParameter='ozone' />
                        {props.weatherInfo.ozone}
                        <br />
                        <span>Уровень озона</span>
                    </p>
                </div>
            );
        case 'snow_depth':
            return (
                <div className="optional-info-element">
                    <p>
                        <ForecastParameterIcon weatherParameter='snow_depth' />
                        {props.weatherInfo.snow_depth}
                        <br />
                        <span>Глубина снега (мм)</span>
                    </p>
                </div>
            );
        default:
            return (
                <div>err</div>
            );
    }
}

export default ForecastTodayOptInfoElement;