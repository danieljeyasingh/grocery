const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true
    },
    mobileNumber: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
      required: true,
      default: 'INACTIVE'
    }
  },
  { timestamps: true, versionKey: false }
)

const Users = mongoose.model('users', schema)
module.exports = Users
