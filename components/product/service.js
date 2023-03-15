const Product = require('./schema')
const { errLogger } = require('../../config/logger')
const CommonFilter = require('../../helpers/commonFilter')
const _ = require('lodash')

class Service {
  async createProduct (product) {
    product.status = 'ACTIVE'
    const data = new Product(product)
    return data.save().catch((e) => {
      errLogger.error({ method: 'Product-save', message: e.message })
    })
  }

  async getProduct (req) {
    // Filter & Pagination
    let skipPagination = false
    if (req.query && req.query.skipPagination === 'true') {
      skipPagination = true
    }
    const countQuery = CommonFilter.productFilter(req, Product.find({ status: { $ne: 'DELETED' } }), true)
    const count = await countQuery.countDocuments().lean().exec().catch((e) => {
      errLogger.error({ method: 'product-getall-count', message: e.message })
    })
    if (count && count > 0) {
      const resultQuery = CommonFilter.productFilter(req, Product.find({ status: { $ne: 'DELETED' } }), skipPagination)
      const result = await resultQuery.populate('categoryId', 'categoryTitle')
        .populate('subCategoryId', 'subCategoryTitle')
        .lean().exec().catch((e) => {
          errLogger.error({ method: 'product-getall', message: e.message })
        })
      if (!_.isEmpty(result) && result) {
        return { result, count }
      }
      return false
    }
    return false
  }

  async getProductById (id) {
    return Product.findById(id).populate('categoryId', 'categoryTitle')
      .populate('subCategoryId', 'subCategoryTitle')
      .lean().catch((e) => {
        errLogger.error({ method: 'Product-getById', message: e.message })
      })
  }

  async updateProduct (id, updateParams) {
    return Product.findOneAndUpdate(id, updateParams).catch((e) => {
      errLogger.error({ method: 'Product-update', message: e.message })
    })
  }

  async deleteProduct (id, updateParams) {
    return Product.findOneAndDelete(id, updateParams).catch((e) => {
      errLogger.error({ method: 'Product-delete', message: e.message })
    })
  }
}

const ProductService = new Service()

module.exports = { Service, ProductService }
