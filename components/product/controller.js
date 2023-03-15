const _ = require('lodash')
const BaseController = require('../base/controller')
const { ProductService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')
const Product = require('./schema')
const { validateAdminAccess } = require('../../helpers/token')

class Controller extends BaseController {
  async createProduct (req, res, next) {
    try {
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const validateAlreadyExists = await Product.findOne({ productTitle: req.body.productTitle })
        if (_.isEmpty(validateAlreadyExists)) {
          req.body.productImage = await req.body.productImage
          const data = await service.createProduct(req.body)
          if (!_.isEmpty(data) && data.id) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              message: 'Product Added Successfully',
              code: '1030',
              data
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Product already exist.' })
        }
      } else {
        res.status(400).json({ message: 'you dont have access to add product' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getProduct (req, res, next) {
    try {
      const Product = await service.getProduct(req)
      if (!_.isEmpty(Product)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: Product
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }

  async getProductById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getProductById(id)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async updateProduct (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the productId already exist in product table.
        const validateAlreadyExists = await Product.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.updateProduct({ _id: id }, req.body)
          if (!_.isEmpty(result) && result.nModified !== 0) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              code: '1031',
              data: {
                _id: result.id,
                updatedAt: result.updatedAt
              }
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Product not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to update product' })
      }
    } catch (e) {
      next(e)
    }
  }

  async deleteProduct (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the ProductId already exist in product table.
        const validateAlreadyExists = await Product.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.deleteProduct({ _id: id }, { status: 'DELETED' })
          if (!_.isEmpty(result)) {
            this.sendResponse(req, res, SUCCESS.CODE, { code: '1032', data: result._id })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Produdy not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to delete product' })
      }
    } catch (e) {
      next(e)
    }
  }
}
module.exports = Controller
