const Category = require('../category/schema')

class Service {
  async getPopularCategory () {
    const popularCategory = await Category.find({ isPopular: 'true' })
      .lean()
    const count = await Category.countDocuments({ isPopular: 'true' })
    return { popularCategory, count }
  }
}

const PopularCategoryService = new Service()

module.exports = { Service, PopularCategoryService }
