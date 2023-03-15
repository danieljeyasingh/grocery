const express = require('express')
const router = express.Router()
const Controller = require('./controller')
const Validator = require('../base/Validator')
const requestValidator = require('./requestValidator')
const authValidate = require('../../helpers/authVerification')

const controller = new Controller()
const validator = new Validator()

router
  .route('/')
  .post(
    authValidate.bind(controller),
    validator.validateRequest.bind(
      new Validator().init(requestValidator.create)
    ),
    controller.createProduct.bind(controller)
  )

router
  .route('/')
  .get(
    validator.validateRequest.bind(
      new Validator().init(requestValidator.list)
    ),
    controller.getProduct.bind(controller)
  )

router
  .route('/:id')
  .get(
    authValidate.bind(controller),
    validator.validateRequest.bind(
      new Validator().init(requestValidator.read)
    ),
    controller.getProductById.bind(controller)
  )

router
  .route('/:id')
  .put(
    authValidate.bind(controller),
    validator.validateRequest.bind(
      new Validator().init(requestValidator.update)
    ),
    controller.updateProduct.bind(controller)
  )

router
  .route('/:id')
  .delete(
    authValidate.bind(controller),
    validator.validateRequest.bind(
      new Validator().init(requestValidator.remove)
    ),
    controller.deleteProduct.bind(controller)
  )

module.exports = router
