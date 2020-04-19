const axios = require('axios');

const getPlaceLat = async (dir) => {

    const encodedUrl = encodeURI( dir );

    var instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key' : 'c5aa4c89c8mshc7121bae743414dp1c3204jsnc5759b038d91' }
        });

    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`There is not results for ${ direccion }`)
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
                  

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {

    getPlaceLat
}








