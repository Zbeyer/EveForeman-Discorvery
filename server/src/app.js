const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models') // Database manager for SQLite
const config = require('./config/config') // Configs...

const app = express()
app.use(morgan('combined')) // good for logging
app.use(bodyParser.json()) // allow server to recieve json requests
app.use(cors()) // Allow multi-clients to talk to server

require('./routes')(app) // All Route Requests...

// DEBUG: FORCE CLEAR ENTIRE DATABASE: sequelize.sync({force:  true})
sequelize.sync({force: false})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
