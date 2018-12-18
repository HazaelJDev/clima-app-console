const axios = require('axios');
const getLugar = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=YOUR_API_KEY`);
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad: ${direccion}`);
    }
    const { formatted_address } = resp.data.results[0];
    let coors = resp.data.results[0].geometry.location;
    return {
        direccion: formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}
module.exports = {
    getLugar
};