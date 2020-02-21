
const AuthController = require('./controllers/AuthController')

const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

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

    app.post('/register', AuthControllerPolicy.register, AuthController.register)

    app.post('/login', AuthControllerPolicy.login, AuthController.login)

}
