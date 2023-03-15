const Product = require('../product/schema')

class Service {
  async getSimilarProducts () {
    const availableProducts = await Product.find()
      .populate('categoryId', 'categoryTitle').populate('subCategoryId', 'subCategoryTitle')
      .limit(2)
      .lean()
    const count = await Product.countDocuments()
    return { availableProducts, count }
  }
}

const SimilarProductService = new Service()

module.exports = { Service, SimilarProductService }
