const _ = require('lodash')
const BaseController = require('../base/controller')
const { PopularCategoryService: service } = require('./service')
const { SUCCESS } = require('../../libs/constants')

class Controller extends BaseController {
  async getPopularCategory (req, res, next) {
    try {
      const popularCategory = await service.getPopularCategory(req)
      if (!_.isEmpty(popularCategory)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: popularCategory
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
