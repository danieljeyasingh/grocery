const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  ProductId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'product'
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'category'
  },
  subCategoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'subcategory'
  }
}, schemaOptions
)

const Trendingproducts = mongoose.model('trendingproducts', schema)
module.exports = Trendingproducts
