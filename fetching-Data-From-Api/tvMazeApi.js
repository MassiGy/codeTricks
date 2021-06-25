const axios = require('axios');
let config = { headers: { Accept: 'application/json' } }




const fetcher = async(query) => {
    let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`, config)
        .then((res) => {
            for (let movie of res.data) {
                let formatedData = new Object({
                    name: movie.show.name,
                    url: movie.show.url,
                    rating: movie.score * 10,
                })
                console.log(formatedData)
            }
        })
        .catch(err => {
            console.log(err.details)
        })

}


fetcher('dark')