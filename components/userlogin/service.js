const Jwtusers = require('../users/schema')
const OtpCheck = require('./schema')

class Service {
  async signup (params) {
    const data = new Jwtusers(params)
    console.log('data', data)
    return data.save()
  }

  async otpSave (params) {
    const data = new OtpCheck(params)
    return data.save()
  }
}

const UserService = new Service()

module.exports = { Service, UserService }
