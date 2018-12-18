## Aplicación del Clima en NodeJS
Esta es una aplicación para obtener algunos datos basicos referentes al clima desde consola.
El usuario debe ingresar el nombre de alguna ciudad o localidad y se le desplegaran en consola los datos del clima de esa localidad.

Despues de descargar el repositorio ejecutar el siguiente comando:
```
npm install
```
### Requisitos para poder usar la aplicación 
Para que esta aplicación funcione tu necesitas tener una API KEY de Google Maps y una API KEY de OpenWeatherMap ya que esta aplicación ocupa APIs para obtener los datos de ubicación y los datos del clima. 

Obten las API KEYS y **agregalas** en los archivos:

* lugar.js en este archivo necesitamos la API KEY de Google Maps
* clima.js en este archivo necesitamos la API KEY de OpenWeatherMap

Busca las lineas de codigo en estos archivos donde este escrito **YOUR_API_KEY** y remplazalos por tus API KEYs.

### Ejemplos de uso:
```
node app -d "Madrid España"
node app --direccion "Tokyo Japan"
```
puedes usar __-d__ o __--direccion__  como parametros en la aplicacion y acontinuacion de la ciudad o lugar donde quieres obetener el clima, obviamente debes utilizar comillas dobles al enviar la ciudad o lugar de donde quieres obtener el clima.

### Datos que obtiene la aplicación:
    - Latitud del lugar
    - Longitud del lugar
    - Clima
    - Descripcion del clima
    - Temperatura en grados Celsius
    - Presión Atmosférica
    - Humedad
    - Temperatura mínima en grados Celsius
    - Temperatura máxima en grados Celsius

**Si tú quieres cambiar el sistema de medicion de la temperatura lo puedes hacer con libertad.**
El secreto esta en el parametro **units** 
    - default: grados Kelvin 
    - metric: grados Celsius
    - imperial: grados Fahrenheit
Si quieres grados Kelvin **no necesitas pasar el parametro units en la petición de la API** ya que por default es el sistema de medicion de grados que usa la API.

Para más información lee la documentación de la API de OpenWeatherMap.
