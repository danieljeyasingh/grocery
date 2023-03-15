const jwt = require('jsonwebtoken')
const _ = require('lodash')
const { SUCCESS, ERROR } = require('../../libs/constants')
const BaseController = require('../base/controller')
const { AdminService: service } = require('./service')
class Controller extends BaseController {
  async login (req, res, next) {
    try {
      const data = await service.login(req.body)
      if (!_.isEmpty(data)) {
        this.authenticateSuccessAction(req, res, data)
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1006' })
      }
    } catch (e) {
      next(e)
    }
  }

  async authenticateSuccessAction (req, res, resData) {
    const payload = Controller.getPayload(resData)
    const token = Controller.generateToken(payload)
    if (!_.isEmpty(token)) {
      this.sendResponse(req, res, SUCCESS.CODE, {
        code: 213,
        data: {
          token
        }
      })
    } else {
      this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1011' })
    }
  }

  static generateToken (payload) {
    if (typeof payload !== 'object' || payload.constructor !== Object) {
      throw new Error('Payload should be of type object')
    }
    const secret = process.env.JWT_SECRET
    const expiresIn = process.env.JWT_EXPIRES_IN
    return jwt.sign(payload, secret, { expiresIn })
  }

  static getPayload (data) {
    return {
      id: data._id,
      email: data.email,
      mobileNumber: data.mobileNumber,
      name: data.name
    }
  }
}

module.exports = Controller
