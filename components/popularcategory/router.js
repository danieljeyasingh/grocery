const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const Validator = require('../base/Validator')
const requestValidator = require('./requestValidator')

const controller = new Controller()
const validator = new Validator()

router
  .route('/')
  .get(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.list)
    ),
    controller.getPopularCategory.bind(controller)
  )

module.exports = router
