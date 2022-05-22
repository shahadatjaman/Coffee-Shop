const express = require('express');

const {PORT, MONGODB} = require('./config')

const mongoose = require('mongoose')

const passport = require('passport')

const bodyParser = require('body-parser')
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json());

app.use(passport.initialize())
require('./passport')(passport)

app.use('/api', require('./router/userAuth'))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORTT = PORT || 4000;

mongoose.connect(MONGODB)
        .then(() => {
            console.log('MongoDB Connected!')
            return app.listen({port : PORTT})
        })
        .then((res) => {
           
            console.log(`server is running on PORT ${PORT}`)
        })
