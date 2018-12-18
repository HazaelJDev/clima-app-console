const axios = require('axios');

let getClima = async(lat,lng) =>{
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=YOUR_API_KEY`);
    return {
        clima: resp.data.weather[0].main,
        descripcion: resp.data.weather[0].description,
        temperatura: resp.data.main.temp,
        presion_atmos: resp.data.main.pressure,
        humedad: resp.data.main.humidity,
        temp_min: resp.data.main.temp_min,
        temp_max: resp.data.main.temp_max
    };
}

module.exports = {
    getClima
}