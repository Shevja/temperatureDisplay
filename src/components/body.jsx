import React, { Component } from "react";
import Form from './elements/form'
import Weather from './elements/weather'
import './assets/body.css'
import './assets/weather.css'

const API_KEY = 'e77278944be14c17ae9cd4bc737934a0';
// const API_KEY = "c642b6f7c81d3c42f61081b23d3bded5"

class Body extends Component {

    state = {
        city: undefined,
        weatherInfo: undefined,
        error: undefined
    }

    getDataFromFetch = async (city) => {
        let data;
        const api_url = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}`);
        // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (api_url.status === 200) {
            data = await api_url.json();
        } else {
            data = undefined;
        }
        return data;
    }

    getTimeFromTimeStamp = (timeStamp) => { // Криво работает
        const date = new Date(timeStamp * 1000);
        let dateOffset = (new Date().getTimezoneOffset()) / 60;

        // console.log(dateOffset / 60);
        // console.log(date.toUTCString());

        let hours = date.getUTCHours() + dateOffset < 0 ? 24 + dateOffset : date.getUTCHours() + dateOffset;
        return hours + ':' + date.getUTCMinutes();
    }

    getWeatherInfoFromResponseData = (weatherData) => {
        let weather16days = [];
        weatherData.forEach(element => {
            weather16days.push({
                temperature: {
                    curr: Math.round(element.app_max_temp),
                    max: Math.ceil(element.max_temp),
                    min: Math.floor(element.min_temp),
                    feels_av: Math.floor((element.app_min_temp + element.app_max_temp) / 2),
                    feels_max: element.app_max_temp,
                    feels_min: element.app_min_temp,

                },
                wind: {
                    direction: element.wind_cdir,
                    speed: element.wind_spd,
                    gust: element.wind_gust_spd
                },
                sun: {
                    rise: this.getTimeFromTimeStamp(element.sunrise_ts),
                    set: this.getTimeFromTimeStamp(element.sunset_ts)
                },
                moon: {
                    phase: element.moon_phase_lunation
                },
                date: element.datetime,
                phenomen: element.weather.description,
                pressure: Math.round(element.pres),
                humidity: element.rh,
                clouds: element.clouds,
                uv: element.uv,
                visibility: Math.round(parseFloat(element.vis) * 100) / 100,
                precipitations: element.pop,
                ozone: element.ozone,
                snow_depth: element.snow_depth,

            })
        });
        return weather16days;
    }

    getWeatherInfoByCity = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const data = await this.getDataFromFetch(city);
            if (data) {
                const weatherInfo = this.getWeatherInfoFromResponseData(data.data);
                this.setState({
                    city: data.city_name,
                    weatherInfo: weatherInfo,
                    error: undefined
                })
            } else {
                this.setState({
                    city: undefined,
                    weatherInfo: undefined,
                    error: "Введите название существующего города"
                })
            }
        } else {
            this.setState({
                city: undefined,
                weatherInfo: undefined,
                error: "Введите название города"
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Form weatherMethod={this.getWeatherInfoByCity} />
                <div className="weather-container">
                    <Weather weather={this.state} />
                </div>
            </div>
        );
    };
}

export default Body; 