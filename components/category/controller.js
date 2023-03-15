const _ = require('lodash')
const BaseController = require('../base/controller')
const Category = require('./schema')
const { CategoryService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')
const { validateAdminAccess } = require('../../helpers/token')

class Controller extends BaseController {
  async createCategory (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        // Check if the category already exist in category table.
        const validateAlreadyExists = await Category.findOne({ categoryTitle: req.body.categoryTitle })
        if (_.isEmpty(validateAlreadyExists)) {
          req.body.categoryIcon = await req.body.categoryIcon
          const data = await service.createCategory(req)
          if (!_.isEmpty(data) && data.id) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              message: 'Category Added Successfully',
              code: '1024',
              data
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'category already exist.' })
        }
      } else {
        res.status(400).json({ message: 'you dont have access to add category' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getCategory (req, res, next) {
    try {
      const Category = await service.getCategory(req)
      if (!_.isEmpty(Category)) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '1004',
          data: Category
        })
      } else {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1005', data: [] })
      }
    } catch (e) {
      next(e)
    }
  }

  async getCategoryById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getCategoryById(id)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async updateCategory (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the categoryId already exist in category table.
        const validateAlreadyExists = await Category.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.updateCategory({ _id: id }, req.body)
          if (!_.isEmpty(result) && result.nModified !== 0) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              code: '1025',
              data: {
                _id: result.id,
                updatedAt: result.updatedAt
              }
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Category not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to update category' })
      }
    } catch (e) {
      next(e)
    }
  }

  async deleteCategory (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the categoryId already exist in category table.
        const validateAlreadyExists = await Category.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.deleteCategory({ _id: id }, { status: 'DELETED' })
          if (!_.isEmpty(result)) {
            this.sendResponse(req, res, SUCCESS.CODE, { code: '1026', data: result._id })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Category not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to delete category' })
      }
    } catch (e) {
      next(e)
    }
  }
}
module.exports = Controller
