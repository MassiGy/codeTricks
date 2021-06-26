require('dotenv').config();
const axios = require('axios');
const option = { headers: { accept: 'application/json' } };


axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.apiKey}`, option)
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.message);
    })