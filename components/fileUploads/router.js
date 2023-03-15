const express = require('express')
const router = express.Router()
const Controller = require('./controller')

const controller = new Controller()

router
  .route('/')
  .post(
    controller.fileUpload.bind(controller)
  )

module.exports = router
