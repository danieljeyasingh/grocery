const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product'
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: false
  },
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
    required: false,
    default: 'ACTIVE'
  }
}, schemaOptions
)

const Wishlist = mongoose.model('wishlist', schema)
module.exports = Wishlist
