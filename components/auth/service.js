const bcrypt = require('bcrypt')
const Admin = require('./schema')
const { errLogger } = require('../../config/logger')

class Service {
  async login (req) {
    const admin = await Admin.findOne({ email: req.email, status: 'ACTIVE' }, 'name email mobileNumber password status')
    if (admin) {
      const validPassword = await bcrypt.compare(req.password, admin.password).catch((e) => {
        errLogger.error({ method: 'Admin-Login', message: e.message })
      })
      if (validPassword === true) { return admin } else { return false }
    } else {
      return false
    }
  }
}
const AdminService = new Service()

module.exports = { Service, AdminService }
