const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  productImage: {
    type: String,
    required: true
  },
  productTitle: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String,
    required: false
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
  },
  productType: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  productQuantity: {
    type: String,
    required: true
  },
  productPrice: {
    type: String,
    required: true
  },
  salePrice: {
    type: String,
    required: true
  },
  productTag: {
    type: String,
    required: true
  },
  isTrending: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: 'ACTIVE',
    enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
    required: true
  }
}, schemaOptions
)

const Product = mongoose.model('product', schema)
module.exports = Product
