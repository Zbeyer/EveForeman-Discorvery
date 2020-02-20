const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined')) // good for logging
app.use(bodyParser.json()) // allow server to recieve json requests
app.use(cors()) // Allow multi-clients to talk to server

// CRUD Methods in Express...
// get
// post
// put
// patch
// delete

/**
 * Status returns if the server is online
 */
app.get('/status', (req, res) => {
    res.send({
        message: 'online'
    })
})

app.post('/register', (req, res) => {
    console.log('REQUEST: %o', req.body)
    res.send({
        message: `Register... ${req.body.email}`
    })
})

app.post('/login', (req, res) => {
    res.send({
        message: `${req.body.email} Attempted to login but the end point has not been written`
    })
})

app.listen(process.env.PORT || 8081)
