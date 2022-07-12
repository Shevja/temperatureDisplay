import React, { Component } from "react";
import Form from './elements/form'
import Weather from './elements/weather'
import Info from './elements/info'
import './assets/body.css'
import './assets/info.css'
import './assets/weather.css'

const API_KEY = "c642b6f7c81d3c42f61081b23d3bded5"

class Body extends Component {

    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        windSpeed: undefined,
        pressure: undefined,
        humidity: undefined,
        event: undefined,
        error: undefined
    }

    getData = async (city) => {
        let data;
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        if (api_url.status === 200) {
            data = await api_url.json();
        } else {
            data = undefined;
        }
        return data;
    }

    getTimeFromTimeStamp = (timeStamp) => {
        let date = new Date();
        date.setTime(timeStamp);
        return date.getHours() + ':' + date.getMinutes();
    }

    getWeatherInfo = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const data = await this.getData(city);

            if (data) {
                this.setState({
                    city: data.name,
                    temp: Math.round(data.main.temp),
                    country: data.sys.country,
                    sunrise: this.getTimeFromTimeStamp(data.sys.sunrise),
                    sunset: this.getTimeFromTimeStamp(data.sys.sunset),
                    windSpeed: data.wind.speed,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    event: data.weather[0].main,
                    error: undefined
                })
            } else {
                this.setState({
                    city: undefined,
                    temp: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    windSpeed: undefined,
                    pressure: undefined,
                    humidity: undefined,
                    event: undefined,
                    error: "Введите название существующего города"
                })
            }
        } else {
            this.setState({
                city: undefined,
                temp: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                windSpeed: undefined,
                pressure: undefined,
                humidity: undefined,
                event: undefined,
                error: "Введите название города"
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="col-sm-4 info-container">
                        <Info />
                    </div>
                    <div className="col-sm-8 weather-container">
                        <Form weatherMethod={this.getWeatherInfo} />
                        <Weather
                            city={this.state.city}
                            temp={this.state.temp}
                            country={this.state.country}
                            sunrise={this.state.sunrise}
                            sunset={this.state.sunset}
                            humidity={this.state.humidity}
                            pressure={this.state.pressure}
                            windSpeed={this.state.windSpeed}
                            event={this.state.event}
                            error={this.state.error}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Body; 