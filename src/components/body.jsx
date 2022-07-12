import React, { Component } from "react";
import Form from './elements/form'
import Weather from './elements/weather'

const API_KEY = "c642b6f7c81d3c42f61081b23d3bded5"

class Body extends Component {

    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    getData = async (city) => {
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data)
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

            this.setState({
                city: data.name,
                temp: data.main.temp,
                country: data.sys.country,
                sunrise: this.getTimeFromTimeStamp(data.sys.sunrise),
                sunset: this.getTimeFromTimeStamp(data.sys.sunset),
                error: undefined
            })
        } else {
            this.setState({
                city: undefined,
                temp: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Введите название города"
            })
        }
    }

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Form weatherMethod={this.getWeatherInfo} />
                <Weather
                    city={this.state.city}
                    temp={this.state.temp}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    };
}

export default Body; 