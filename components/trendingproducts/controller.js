const _ = require('lodash')
const BaseController = require('../base/controller')
const { TrendingProductsService: service } = require('./service')
const { SUCCESS } = require('../../libs/constants')

class Controller extends BaseController {
  async getTrendingProducts (req, res, next) {
    try {
      const trendingProducts = await service.getTrendingProducts(req)
      if (!_.isEmpty(trendingProducts)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: trendingProducts
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
