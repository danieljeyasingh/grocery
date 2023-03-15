const _ = require('lodash')
const BaseController = require('../base/controller')
const { SimilarProductService: service } = require('./service')
const { SUCCESS } = require('../../libs/constants')

class Controller extends BaseController {
  async getSimilarProducts (req, res, next) {
    try {
      const similarProducts = await service.getSimilarProducts(req)
      if (!_.isEmpty(similarProducts)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: similarProducts
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }
}
module.exports = Controller
