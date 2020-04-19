const axios = require('axios');
const color = require('colors');

const getWeather = async (lat,long) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9e3bfce24325298747620cf44d7550ad
    `)

    let kelvin = 273.15;

    let centi = parseInt(resp.data.main.temp - kelvin);

    return `${centi}º`;

}

module.exports = {

    getWeather

}