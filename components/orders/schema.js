const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'product'
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: false
  },
  status: {
    type: String,
    enum: ['ORDER_PLACED', 'CONFIRMED', 'ORDER_PROCESSED', 'READY_TO_PICKUP', 'DELIVERY_IN_PROGRESS', 'DELIVERED', 'CANCELLED', 'PENDING', 'PAYMENT_FAILED', 'ACTIVE', 'DELETED'],
    required: false,
    default: 'ACTIVE'
  }
}, schemaOptions
)

const Order = mongoose.model('order', schema)
module.exports = Order
