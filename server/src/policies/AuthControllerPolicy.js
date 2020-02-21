const Joi = require('joi') // Validation of Requests

module.exports = {
    register (req, res, next) {
        // Express middleware for validation of registration request
        // User must have a valid email
        // Passwords may only be alphanumeric and must be between 8 and 32 characters long.
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        // Return error if validation fails
        // { error, value } might be needed ?
        const { error } = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'The password failed to meet requirements.'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration attempt.'
                    })
            }
        } else {
            next()
        }
    },

    login (req, res, next) {
        next()
    }
}
