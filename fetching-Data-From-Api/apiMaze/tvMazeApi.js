const axios = require('axios');
let config = { headers: { Accept: 'application/json' } }
const exec = require('child_process').exec




const fetcher = async(query) => {
    await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`, config)
        .then((res) => {
            res.data.length = 5;
            for (let movie of res.data) {
                let formatedData = new Object({
                    name: movie.show.name,
                    url: movie.show.url,
                    rating: movie.score * 10,
                })

                exec(`start chrome ${movie.show.url}`, function(err) {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log("success open")
                    }
                })
                console.log(formatedData)
            }
        })
        .catch(err => {
            console.log(err.details)
        })

}


fetcher('dark')