const axios = require('axios').default;



let options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': 'f737424565mshada3e11b55650a8p130639jsn5302a8c9c18f',
        'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
        'Authorization': 'Bearer '
    },


    data: {
        personalizations: [{ to: [{ email: 'arabfellah06@gmail.com' }], subject: 'Hello, World!' }],
        from: { email: 'ghernaoutmassi@gmail.com' },
        content: [{ type: 'text/plain', value: 'Hello, World!' }]
    }
}

axios.request(options)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })