const User = require('./schema')
const { errLogger } = require('../../config/logger')

class Service {
  async createUser (params) {
    const data = new User(params)
    return data.save().catch((e) => {
      errLogger.error({ method: 'User-save', message: e.message })
    })
  }

  async getUsers () {
    return User.find({ status: 'ACTIVE' })
      .lean().catch((e) => {
        errLogger.error({ method: 'User-gets', message: e.message })
      })
  }

  async getUserById (id) {
    return User.findById(id)
      .lean().catch((e) => {
        errLogger.error({ method: 'User-getById', message: e.message })
      })
  }

  async updateUser (id, updateParams) {
    return User.findOneAndUpdate(id, updateParams).catch((e) => {
      errLogger.error({ method: 'User-update', message: e.message })
    })
  }

  async deleteUser (id, updateParams) {
    return User.findOneAndUpdate(id, updateParams).catch((e) => {
      errLogger.error({ method: 'User-delete', message: e.message })
    })
  }
}

const UserService = new Service()

module.exports = { Service, UserService }
