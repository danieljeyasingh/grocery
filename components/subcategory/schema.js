const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'category'
  },
  subCategoryTitle: {
    type: String,
    required: true
  },
  subCategoryIcon: {
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

const SubCategory = mongoose.model('subcategory', schema)
module.exports = SubCategory
