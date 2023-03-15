const _ = require('lodash')
const BaseController = require('../base/controller')
const { WishlistService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')

class Controller extends BaseController {
  async addOrRemoveWishlist (req, res, next) {
    try {
      const data = await service.addOrRemoveWishlist(req, res)
      if (!_.isEmpty(data) && data.id) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          message: 'Successfully added in wishlist',
          code: '1033',
          data
        })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      // next(e)
    }
  }

  async getWishlist (req, res, next) {
    try {
      const wishlists = await service.getWishlist(req, res)
      if (!_.isEmpty(wishlists)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: wishlists
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }

  async getWishlistById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getWishlistById(id, req, res)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }
}

module.exports = Controller
