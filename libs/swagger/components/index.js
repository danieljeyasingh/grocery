const response = require('./response')
const success = require('./success')
const errors = require('./errors')
const headers = require('./header')
// const auth = require('./admin')
const users = require('./users')
const usersignup = require('./usersignup')
const signupotp = require('./signupotp')
const generateotplogin = require('./generateotplogin')
const otpverify = require('./otpverify')
const category = require('./category')
const subcategory = require('./subcategory')
const product = require('./product')
const wishlist = require('./wishlist')
const order = require('./orders')
const topoffers = require('./topoffers')
const similarproducts = require('./similarproducts')
const upload = require('./fileUpload')

module.exports = {
  schemas: {
    Success: success,
    Errors: errors,
    Request: response,
    Response: response,
    Headers: headers,
    // Auth: auth,
    Users: users,
    Usersignup: usersignup,
    Signupotp: signupotp,
    Generateotplogin: generateotplogin,
    Otpverify: otpverify,
    Category: category,
    SubCategory: subcategory,
    Product: product,
    Wishlist: wishlist,
    Orders: order,
    Topoffers: topoffers,
    SimilarProducts: similarproducts,
    Upload: upload
  },
  securitySchemes: {
    bearerAuth: {
      type: 'apiKey',
      description: 'JWT authorization of an API',
      name: 'Authorization',
      in: 'header'
    }
  }
}
