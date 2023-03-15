const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaOptions = {
  timestamps: true,
  versionKey: false
}

const schema = new Schema({
  categoryId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'category'
  }
}, schemaOptions
)

const Popularcategory = mongoose.model('popularcategory', schema)
module.exports = Popularcategory
