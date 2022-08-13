import React from "react";
import ForecastTodayOptInfoElement from "../functions/forecastTodayOptInfoElement"
import ForecastParameterIcon from "../functions/forecastParameterIcon";
import ForecastMoonPhase from "../functions/forecastMoonPhase";

const CityForecastForTodayOptionalInfo = props => (
    <div className="optional-info opt-left-side">
        <div className="info-card">
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='temperature' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='windSpeed' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='pressure' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='cloud' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='humidity' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='visibility' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='uv' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='precip' />
        </div>
        <div className="info-card ic-right-side">
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='moonPhase' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='windDir' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='ozone' />
            <ForecastTodayOptInfoElement weatherInfo={props.weatherForToday} weatherParameter='snow_depth' />  
        </div>
    </div>
)

export default CityForecastForTodayOptionalInfo;