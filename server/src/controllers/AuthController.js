const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Sign User Object with JWT Token for authentication
// https://jwt.io/
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7 // One Week
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },

    async login (req, res) {
        const loginInformationIncorrect = 'The login information was incorrect.'

        const { email, password } = req.body
        const user = await User.findOne({
            where: { email: email }
        })

        if (!user) {
            res.status(403).send({
                error: loginInformationIncorrect
            })
        }

        const isPasswordValid = await user.comparePassword(password)
        console.log('\nisPasswordValid:\n%o \n%o \n%o\n', isPasswordValid, user.password, password)

        if (!isPasswordValid) {
            res.status(403).send({
                error: loginInformationIncorrect
            })
        }
        try {
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        } catch (err) {
            res.status(500).send({
            error: 'Internal Server Error.'
        })
    }
    }
}
