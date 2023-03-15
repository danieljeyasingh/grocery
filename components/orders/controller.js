const _ = require('lodash')
const BaseController = require('../base/controller')
const { OrderService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')

class Controller extends BaseController {
  async placeOrder (req, res, next) {
    try {
      const data = await service.placeOrder(req, res)
      if (!_.isEmpty(data) && data.id) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          message: 'Successfully added in order',
          code: '1036',
          data
        })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getOrderlist (req, res, next) {
    try {
      const orders = await service.getOrderlist(req, res)
      if (!_.isEmpty(orders)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: orders
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }

  async getOrderlistById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getOrderlistById(id, req, res)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async updateOrder (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.updateOrder({ _id: id }, req, res)
      if (!_.isEmpty(result) && result.nModified !== 0) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1037',
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

  async deleteOrder (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.deleteOrder({ _id: id }, { status: 'DELETED' }, req, res)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1038', data: result._id })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }
}

module.exports = Controller
