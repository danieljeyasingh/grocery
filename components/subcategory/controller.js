const _ = require('lodash')
const BaseController = require('../base/controller')
const SubCategory = require('./schema')
const { SubCategoryService: service } = require('./service')
const { SUCCESS, ERROR } = require('../../libs/constants')
const { validateAdminAccess } = require('../../helpers/token')

class Controller extends BaseController {
  async createSubCategory (req, res, next) {
    try {
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const validateAlreadyExists = await SubCategory.findOne({ subCategoryTitle: req.body.subCategoryTitle })
        if (_.isEmpty(validateAlreadyExists)) {
          req.body.subCategoryIcon = await req.body.subCategoryIcon
          const data = await service.createSubCategory(req.body)
          if (!_.isEmpty(data) && data.id) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              message: 'Sub-Category Added Successfully',
              code: '1027',
              data
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'subcategory already exist.' })
        }
      } else {
        res.status(400).json({ message: 'you dont have access to add subcategory' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getSubCategory (req, res, next) {
    try {
      const { result, count } = await service.getSubCategory(req)
      if (result) {
        this.sendResponse(req, res, SUCCESS.CODE, {
          code: '200',
          data: result,
          count
        })
      } else {
        this.sendResponse(req, res, ERROR.CODE, { message: 'No Records Found', code: '201' })
      }
    } catch (e) {
      next(e)
    }
  }

  async getSubCategoryById (req, res, next) {
    try {
      const { id } = req.params
      const result = await service.getSubCategoryById(id)
      if (!_.isEmpty(result)) {
        this.sendResponse(req, res, SUCCESS.CODE, { code: '1004', data: result })
      } else {
        this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
      }
    } catch (e) {
      next(e)
    }
  }

  async updateSubCategory (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the SubCategoryId already exist in SubCategory table.
        const validateAlreadyExists = await SubCategory.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.updateSubCategory({ _id: id }, req.body)
          if (!_.isEmpty(result) && result.nModified !== 0) {
            this.sendResponse(req, res, SUCCESS.CODE, {
              code: '1028',
              data: {
                _id: result.id,
                updatedAt: result.updatedAt
              }
            })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Sub-category not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to update sub-category' })
      }
    } catch (e) {
      next(e)
    }
  }

  async deleteSubCategory (req, res, next) {
    try {
      // Validate User authorization
      const validUser = await validateAdminAccess(req)
      if (validUser) {
        const { id } = req.params
        // Check if the SubCategoryId already exist in SubCategory table.
        const validateAlreadyExists = await SubCategory.findOne({ _id: id })
        if (validateAlreadyExists) {
          const result = await service.deleteSubCategory({ _id: id }, { status: 'DELETED' })
          if (!_.isEmpty(result)) {
            this.sendResponse(req, res, SUCCESS.CODE, { code: '1029', data: result._id })
          } else {
            this.sendResponse(req, res, ERROR.CLIENT_ERROR.BAD_REQUEST, { code: '1003' })
          }
        } else {
          res.status(400).json({ message: 'Sub-category not exists' })
        }
      } else {
        res.status(400).json({ message: 'You dont have access to delete sub-category' })
      }
    } catch (e) {
      next(e)
    }
  }
}
module.exports = Controller
