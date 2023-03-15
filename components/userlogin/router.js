const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const controller = new Controller()

router
  .route('/generateotplogin')
  .post(
    controller.generateotpmobileNumber.bind(controller)
  )

router
  .route('/otpverify')
  .post(
    controller.otpverifymobileNumber.bind(controller)
  )

router
  .route('/signup')
  .post(
    controller.signup.bind(controller)
  )

router
  .route('/signupotp')
  .post(
    controller.signupotp.bind(controller)
  )

module.exports = router
