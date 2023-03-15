const Product = require('../product/schema')

class Service {
  async getTrendingProducts () {
    const trendingProducts = await Product.find({ isTrending: 'true' })
      .populate('categoryId', 'categoryTitle').populate('subCategoryId', 'subCategoryTitle')
      .lean()
    const count = await Product.countDocuments({ isTrending: 'true' })
    return { trendingProducts, count }
  }
}

const TrendingProductsService = new Service()

module.exports = { Service, TrendingProductsService }
