const axios = require('axios');
let config = { headers: { Accept: 'application/json' } }




const fetcher = async(query) => {
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`, config)
        .then((res) => {
            console.log(res.data[1].show.name)
        })
        .catch(err => {
            console.log(err.details)
        })

}


fetcher('dark')