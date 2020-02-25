const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    }, {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword
      }
    })
  User.prototype.comparePassword = function (password) {
    console.log('\ncomparePassword:\n%o\n%o', password, this.password)
    return bcrypt.compareAsync(password, this.password)
  //   return bcrypt.compareAsync(password, this.password, function (err, result) {
  //     if (err) {
  //       console.log(err)
  //       throw (err)
  //     }
  //     console.log(result)
  //   })
  // }
  }

    return User
}
