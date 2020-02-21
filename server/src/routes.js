
const AuthController = require('./controllers/AuthController')
module.exports = (app) => {

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

    app.post('/register', AuthController.register)

    app.post('/login', AuthController.login)

}
