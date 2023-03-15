const express = require('express')
const _ = require('lodash')
const app = express()
const compression = require('compression')
const multer = require('multer')
const morgan = require('morgan')
const helmet = require('helmet')
const moment = require('moment')
require('./database')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger')
const api = require('../components')
const { logger, errLogger } = require('./logger')
const cors = require('cors')

app.set('trust proxy', true)
app.use(compression())
if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
} else {
  app.use(helmet.hidePoweredBy())
}

morgan.token('ip', (req) => {
  let reqIp
  if (_.has(req, 'headers') && _.has(req.headers, 'x-client-ip')) {
    reqIp = req.headers['x-client-ip']
  } else {
    reqIp = req.ip ? req.ip : ''
  }
  return reqIp
})

app.use(morgan(':ip [:date[iso]] ":method :url HTTP/:http-version" :status  :response-time ms - :res[content-length]', { stream: logger.stream }))

app.use(express.json())
app.use(cors())
app.use('/', api)
// app.use(express.static('uploads'))
app.use('/public', express.static('public'))
app.use(express.static('templates'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// app.get('/api-docs', async function (req, res) {
//   const swaggerui = '//swagger-ui.now.sh'
//   const myorigin = `${req.protocol}://${req.headers.host}`
//   const url = `${swaggerui}?url=${myorigin}/swagger`
//   res.setHeader('Location', url)
//   res.sendStatus(307)
//   res.send(JSON.stringify(swaggerDocument))
// })

app.get('/swagger', async function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(swaggerDocument))
})
// catch 404 and forward to error handler
// app.use((req, res) => {
//   res.status(404).send({
//     status: 'error',
//     message: 'requested source not found'
//   })
// })
// error handler
app.use(function (e, req, res, next) {
  let statusCode = e.status || 500
  let message
  let code
  const dev = {}
  if (e.name === 'UnauthorizedError') {
    // jwt middleware // && e.inner.name === 'JsonWebTokenError'
    message = 'Unauthorized' || e.message || e.inner.message || 'Please login and proceed'
  } else if (e.code === 11000) {
    // custom error
    statusCode = e.statusCode
    message = 'Created record already exist'
  } else if (e.name === 'ClientError') {
    // custom error
    statusCode = e.statusCode
    message = e.message
    code = e.code
  } else if (e instanceof multer.MulterError) {
    // multer error
    message = e.message
  } else {
    message = 'Something went wrong'
  }

  if (process.env.NODE_ENV !== 'production' && e.name !== 'ClientError') {
    dev._errorData = { name: e.name, message: e.message }
    dev._error = e
  }

  const logMsg = {
    reqTime: moment().format('DD-MM-YYYY HH:mm:ss'),
    reqUrl: req.originalUrl ? req.originalUrl : '',
    reqMethod: req.method ? req.method : '',
    reqIp: req.ip ? req.ip : '',
    reqParams: req.params ? req.params : '',
    reqBody: req.body ? req.body : '',
    reqQuery: req.query ? req.query : '',
    reqUserId: req.user && req.user.id ? req.user.id : '',
    reqUserRole: req.user && req.user.role ? req.user.role : '',
    response: res,
    message: e.message
  }

  errLogger.error({ method: 'Internal-error', message: logMsg })
  res.status(statusCode).send({ success: 'error', message, code, ...dev })
})

module.exports = app
