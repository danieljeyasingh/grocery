
const OtpCheck = require('./schema')
const { tokenGenarator } = require('../../helpers/token')
const _ = require('lodash')
const Users = require('../users/schema')
const { UserService: service } = require('./service')

class Controller {
  async generateotpmobileNumber (req, res) {
    try {
      const otpNumber = 1234
      const existingUser = await Users.findOne({ mobileNumber: req.body.mobileNumber, status: { $ne: 'DELETED' } })
      if (existingUser) {
        req.body.otp = otpNumber
        req.body.signStatus = 'SIGNIN'
        await service.otpSave(req.body)
        res.status(200).send({ message: 'OTP Successfully' })
      } else {
        res.status(400).send({ message: 'MobileNumber Not Register' })
      }
    } catch (error) {
    }
  }

  async otpverifymobileNumber (req, res) {
    try {
      const existingUser = await OtpCheck.findOne({ mobileNumber: req.body.mobileNumber, verifiedStatuse: 'UN-VERIFIED', signStatus: 'SIGNIN', status: 'ACTIVE' }).sort({ createdAt: -1 }).lean().exec()
      if (existingUser) {
        if (existingUser.otp === req.body.otp) {
          const getData = await Users.findOne({ mobileNumber: req.body.mobileNumber, status: 'ACTIVE' }).lean().exec()
          const token = await tokenGenarator(getData)
          if (token) {
            await OtpCheck.findByIdAndUpdate({ _id: existingUser._id }, { status: 'INACTIVE', verifiedStatus: 'VERIFIED' }).lean().exec()
            const data = {
              user: getData,
              accessToken: token
            }
            res.status(200).send({ message: 'OTP Verified Successfully', data })
          }
        } else {
          res.status(400).send({ message: 'OTP Is Invalid' })
        }
      } else {
        res.status(400).send({ message: 'Not found please register' })
      }
    } catch (error) {
    }
  }

  async signup (req, res) {
    try {
      const existingUser = await Users.findOne({ email: req.body.email, status: { $eq: 'ACTIVE' } })
      if (_.isEmpty(existingUser)) {
        const mobileNumber = await Users.findOne({ mobileNumber: req.body.mobileNumber, status: { $eq: 'ACTIVE' } })
        if (_.isEmpty(mobileNumber)) {
          const values = await new Users(req.body).save()
          if (values) {
            req.body.otp = 1234
            req.body.signStatus = 'SIGNUP'
            await service.otpSave(req.body)
            res.status(200).send({ message: 'Otp Send to your mobile number', values })
          } else {
            res.status(400).send({ message: 'failed to ad data' })
          }
        } else {
          res.status(400).send({ message: 'Mobile Number is already registered' })
        }
      } else {
        res.status(400).send({ message: 'E-mail id is already registered' })
      }
    } catch (e) {

    }
  }

  async signupotp (req, res) {
    try {
      console.log('signupotp', req.body)
      const existingUser = await OtpCheck.findOne({ mobileNumber: req.body.mobileNumber, status: 'ACTIVE', verifiedStatus: 'UN-VERIFIED', signStatus: 'SIGNUP' }).sort({ createdAt: -1 }).lean().exec()
      console.log('existingUser', existingUser)
      if (existingUser) {
        if (existingUser.otp === req.body.otp) {
          const getData = await Users.findOne({ mobileNumber: req.body.mobileNumber, status: 'INACTIVE' }).lean().exec()
          if (getData) {
            await Users.findByIdAndUpdate({ _id: getData._id }, { status: 'ACTIVE' }).lean().exec()
            await OtpCheck.findByIdAndUpdate({ _id: existingUser._id }, { status: 'INACTIVE', verifiedStatus: 'VERIFIED' }).lean().exec()
            console.log('getData', getData)
            const token = await tokenGenarator(getData)
            console.log('token', token)
            if (token) {
              const data = {
                user: getData,
                accessToken: token
              }
              res.status(200).send({ message: ' OTP Verified Successfully', data })
            } else {
              res.status(400).send({ message: 'Unable to create Token' })
            }
          } else {
            res.status(400).send({ message: 'No Data Found' })
          }
        } else {
          res.status(400).send({ message: 'OTP Is Invalid' })
        }
      } else {
        res.status(400).send({ message: 'Not found please register' })
      }
    } catch (error) {
      res.status(400).send({ message: 'Re-try' })
    }
  }
}

module.exports = Controller
