const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema(
  {
    otp: {
      type: String,
      required: true
    },
    mobileNumber: {
      type: String,
      required: true
    },
    verifiedStatus: {
      type: String,
      enum: ['VERIFIED', 'UN-VERIFIED'],
      required: true,
      default: 'UN-VERIFIED'
    },
    signStatus: {
      type: String,
      enum: ['SIGNIN', 'SIGNUP'],
      required: true
    },
    role: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
      required: true,
      default: 'ACTIVE'
    }
  },
  { timestamps: true, versionKey: false }
)

const OtpCheck = mongoose.model('otp_check', schema, 'otp')
module.exports = OtpCheck
