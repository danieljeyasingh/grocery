const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  categoryTitle: {
    type: String,
    required: true
  },
  categoryIcon: {
    type: String,
    required: false
  },
  isPopular: {
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

const Category = mongoose.model('category', schema)
module.exports = Category
