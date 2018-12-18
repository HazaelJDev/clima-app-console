const {argv} = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors/safe');

const infoLugarClima = async(direccion) => {
    try{
        let infoLugar = await lugar.getLugar(direccion);
        let infoClima = await clima.getClima(infoLugar.lat,infoLugar.lng);
        let informacion = `${colors.blue('Dirección')} ${infoLugar.direccion}\n`;
        informacion += `${colors.blue('Latitud:')} ${infoLugar.lat}\t${colors.blue('Longitud:')} ${infoLugar.lng}\n`;
        informacion += `${colors.blue('Clima:')} ${infoClima.clima}\n`;
        informacion += `${colors.blue('Descripción:')} ${infoClima.descripcion}\n`;
        informacion += `${colors.blue('Temperatura:')} ${infoClima.temperatura} C°\n`;
        informacion += `${colors.blue('Presión Atmosférica:')} ${infoClima.presion_atmos} hPa\n`;
        informacion += `${colors.blue('Humedad:')} ${infoClima.humedad} %\n`;
        informacion += `${colors.blue('Temperatura mínima:')} ${infoClima.temp_min} C°\n`;
        informacion += `${colors.blue('Temperatura máxima:')} ${infoClima.temp_max} C°\n`;
        return informacion;
    }catch(e){
        return colors.red(`No se pudo determinar el clima en ${direccion}`);
    }
};

infoLugarClima(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(colors.red('¡Error!', err)));