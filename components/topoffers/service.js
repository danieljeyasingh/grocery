const Product = require('../product/schema')

class Service {
  async getTopOffers () {
    const availableProducts = await Product.find()
      .populate('categoryId', 'categoryTitle').populate('subCategoryId', 'subCategoryTitle')
      .limit(2)
      .lean()
    const count = await Product.countDocuments()
    return { availableProducts, count }
  }
}

const OfferProductService = new Service()

module.exports = { Service, OfferProductService }
