const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined')) // good for logging
app.use(bodyParser.json()) // allow server to recieve json requests
app.use(cors()) // Allow multi-clients to talk to server

require('./routes')(app)

sequelize.sync()
    .then( () => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })