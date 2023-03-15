const SubCategory = require('./schema')
const { errLogger } = require('../../config/logger')
const Helpers = require('../../libs/helper')
const CommonFilter = require('../../helpers/commonFilter')
const _ = require('lodash')

class Service {
  constructor () {
    this.helpers = new Helpers()
  }

  async createSubCategory (subcategory) {
    const data = new SubCategory(subcategory)
    return data.save().catch((e) => {
      errLogger.error({ method: 'SubCategory-save', message: e.message })
    })
  }

  async getSubCategory (req) {
    // Filter & Pagination
    let skipPagination = false
    if (req.query && req.query.skipPagination === 'true') {
      skipPagination = true
    }
    const countQuery = CommonFilter.SubCategoryFilter(req, SubCategory.find({ status: { $ne: 'DELETED' } }), true)
    const count = await countQuery.countDocuments().lean().exec().catch((e) => {
      errLogger.error({ method: 'SubCategory-getall-count', message: e.message })
    })
    if (count && count > 0) {
      const resultQuery = CommonFilter.SubCategoryFilter(req, SubCategory.find({ status: { $ne: 'DELETED' } }), skipPagination)
      const result = await resultQuery.populate('categoryId', 'categoryTitle')
        .lean().exec().catch((e) => {
          errLogger.error({ method: 'SubCategory-getall', message: e.message })
        })
      if (!_.isEmpty(result) && result) {
        return { result, count }
      }
      return false
    }
    return false
  }

  async getSubCategoryById (id) {
    return SubCategory.findById(id)
      .lean().catch((e) => {
        errLogger.error({ method: 'SubCategory-getById', message: e.message })
      })
  }

  async updateSubCategory (id, updateParams) {
    return SubCategory.findOneAndUpdate(id, updateParams).catch((e) => {
      errLogger.error({ method: 'SubCategory-update', message: e.message })
    })
  }

  async deleteSubCategory (id, updateParams) {
    return SubCategory.findOneAndDelete(id, updateParams).catch((e) => {
      errLogger.error({ method: 'SubCategory-delete', message: e.message })
    })
  }
}

const SubCategoryService = new Service()

module.exports = { Service, SubCategoryService }
