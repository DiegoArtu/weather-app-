const place = require('./place/place');
const weather = require('./clima/weather')
const colors = require('colors');

const argv = require('yargs').options({

    direccion:{
        alias: 'd',
        desc: 'Direccion para obtener una ciudad',
        demand: true
    }

}).argv;



const getInfo = async (dir) => {

    try {
        const coords = await place.getPlaceLat( dir );
        const temp = await weather.getWeather( coords.lat, coords.lng );    
        return `${temp} in ${ coords.direccion }`.green;
    } catch (error) {
        return `There is not info in ${ dir }`.red;
    }

    
    

}

getInfo( argv.direccion ).then( console.log )
                         .catch(console.log)



//
//weather.getWeather( -38.730000 , -72.580002 )
//       .then( console.log )
//       .catch( console.log )
//
//place.getPlaceLat( argv.direccion )
//     .then( resp => console.log(resp) )
//     .catch( e => console.log(e) );

