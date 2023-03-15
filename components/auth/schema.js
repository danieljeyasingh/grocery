const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    },
    mobileNumber: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
      required: true
    }
  },
  { timestamps: true, versionKey: false }
)

const Admin = mongoose.model('admins', schema)
module.exports = Admin
