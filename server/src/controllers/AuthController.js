const { User } = require('../models')

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

    login (req, res) {
        res.send({
            message: `${req.body.email} Attempted to login but the end point has not been written`
        })
    }
}
