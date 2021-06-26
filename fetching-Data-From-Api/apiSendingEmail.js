require('dotenv').config()
const mailjet = require('node-mailjet').connect(process.env.apiConnectFirstArg, process.env.apiConnectSecondArg)
const express = require('express');
const app = express();
const fetch = require('node-fetch');
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/demo', (req, res) => {
    res.render('demo.ejs')
})

app.post('/', (req, res) => {
    console.log(req.body)
    fetch(`https://api.eva.pingutil.com/email?email=${req.body.email}`, requestOptions)
        .then(() => {
            const request = mailjet
                .post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [{
                        "From": {
                            "Email": req.body.email,
                            "Name": req.body.emailUsername
                        },
                        "To": [{
                            "Email": "ghernaoutmassi@gmail.com",
                            "Name": "Massi gy"
                        }],
                        "Subject": req.body.emailSubject,
                        "TextPart": req.body.emailText,
                        "HTMLPart": "",
                        "CustomID": ""
                    }]
                })
            request
                .then((result) => {
                    console.log(result.body)
                })
                .catch((err) => {
                    console.log(err.message)
                })

        })
        .catch(error => alert(error));
    res.redirect('/demo')
})



app.listen(3000, () => {
    console.log('listening on port 3000')
})