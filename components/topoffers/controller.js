const _ = require('lodash')
const BaseController = require('../base/controller')
const { OfferProductService: service } = require('./service')
const { SUCCESS } = require('../../libs/constants')

class Controller extends BaseController {
  async getTopOffers (req, res, next) {
    try {
      const topProduct = await service.getTopOffers(req)
      if (!_.isEmpty(topProduct)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: topProduct
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
