const _ = require('lodash')
const BaseController = require('../base/controller')
const { UserService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')

class Controller extends BaseController {
  async createUser (req, res, next) {
    try {
      const data = await service.createUser(req.body)
      if (!_.isEmpty(data) && data.id) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1021',
          data: {
            _id: data.id,
            createdAt: data.createdAt
          }
        })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getUsers (req, res, next) {
    try {
      const Users = await service.getUsers(req)
      if (!_.isEmpty(Users)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: Users
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }

  async getUserById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getUserById(id)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async updateUser (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.updateUser({ _id: id }, req.body)
      if (!_.isEmpty(result) && result.nModified !== 0) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1022',
          data: {
            _id: result.id,
            updatedAt: result.updatedAt
          }
        })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async deleteUser (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.deleteUser({ _id: id }, { status: 'DELETED' })
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1023', data: result._id })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }
}
module.exports = Controller
