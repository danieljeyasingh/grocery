const joi = require('@hapi/joi')

const login = joi.object().keys({
  email: joi.string().regex(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$||^[A-Za-z]\\w{5, 29}$/).required(),
  password: joi.string()
})

module.exports = {
  login
}
