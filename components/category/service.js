const Category = require('./schema')
const { errLogger } = require('../../config/logger')
const CommonFilter = require('../../helpers/commonFilter')
const _ = require('lodash')

class Service {
  async createCategory (req) {
    const data = new Category(req.body)
    return data.save().catch((e) => {
      errLogger.error({ method: 'Category-save', message: e.message })
    })
  }

  async getCategory (req) {
    // Filter & Pagination
    let skipPagination = false
    if (req.query && req.query.skipPagination === 'true') {
      skipPagination = true
    }
    // var updatedStatus = { $and: [ { status: { $ne: 'DELETED' } }, { status: { $ne: 'INACTIVE' }  } ] }
    const countQuery = CommonFilter.categoryFilter(req, Category.find({ status: { $ne: 'DELETED' } }), true)
    const count = await countQuery.countDocuments().lean().exec().catch((e) => {
      errLogger.error({ method: 'Category-getall-count', message: e.message })
    })
    if (count && count > 0) {
      const resultQuery = CommonFilter.categoryFilter(req, Category.find({ status: { $ne: 'DELETED' } }), skipPagination)
      const result = await resultQuery.lean().exec().catch((e) => {
        errLogger.error({ method: 'Category-getall', message: e.message })
      })
      if (!_.isEmpty(result) && result) {
        return { result, count }
      }
      return false
    }
    return false
  }

  async getCategoryById (id) {
    return Category.findById(id)
      .lean().catch((e) => {
        errLogger.error({ method: 'Category-getById', message: e.message })
      })
  }

  async updateCategory (id, updateParams) {
    return Category.findOneAndUpdate(id, updateParams).catch((e) => {
      errLogger.error({ method: 'Category-update', message: e.message })
    })
  }

  async deleteCategory (id, updateParams) {
    return Category.findOneAndDelete(id, updateParams).catch((e) => {
      errLogger.error({ method: 'Category-delete', message: e.message })
    })
  }
}

const CategoryService = new Service()

module.exports = { Service, CategoryService }
