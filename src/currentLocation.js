import React from 'react';
import Clock from 'react-live-clock';
import ReactAnimatedWeather from 'react-animated-weather';

const dateBuilder = (d) => {
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date}, ${month}, ${year}`;
};

class Weather extends React.Component {
    state = {
        lat: undefined,
        lon: undefined,
        errorMessage: undefined,
        temperatureC: undefined,
        temperatureF: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: "CLEAR_DAY",
        sunrise: undefined,
        sunset: undefined,
        errorMsg: undefined,
    };

    componentDidMount() {
        if (navigator.geolocation) {
            this.getPosition() 
               .then((position) => {
                
               })
        }
    }

    componentWillUnmount() {
        
    }

    getPosition = (options) => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };

    get
}

export default Weather;