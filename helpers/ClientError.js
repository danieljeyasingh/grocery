const { apimsgconfig } = require('../libs/api_message')

class ClientError extends Error {
  constructor (code, statusCode = 400) {
    super(apimsgconfig.en[code])
    this.name = 'ClientError'
    this.code = code
    this.statusCode = statusCode
  }
}

module.exports = ClientError
