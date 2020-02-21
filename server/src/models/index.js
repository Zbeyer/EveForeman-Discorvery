// Sequelize Model documentation: https://sequelize.org/
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')

const db = {}

// Load sequelize configs
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// Automatically import all data models from ./
fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        // Join them to the db
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize // make object available
db.Sequelize = Sequelize // make Class available
module.exports = db // return to caller
