const express = require('express')

const {MONGODB} = require('./config')

const mongoose = require('mongoose')

const passport = require('passport')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended : false}))

app.use(bodyParser.json())

app.use(passport.initialize())
require('./passport')(passport)

app.use('/api', require('./router/userAuth'))

mongoose.connect(MONGODB)
        .then(() => {
            console.log('MongoDB Connected!')
            return app.listen({port : 4000})
        })
        .then((res) => {
           
            console.log(`server is running on PORT 4000`)
        })
