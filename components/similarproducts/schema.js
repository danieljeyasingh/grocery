const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  similarProductTitle: {
    type: String,
    required: true
  },
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

const Similarproducts = mongoose.model('similarproducts', schema)
module.exports = Similarproducts
