const _ = require('lodash')
const { ERROR, SUCCESS } = require('../../libs/constants')
const BaseController = require('../base/controller')
const fileUpload = require('../../libs/fileupload')

class Controller extends BaseController {
  static fileSuccessAction (fileRecived) {
    const fileArr = []
    const result = []
    fileArr.push(fileRecived)
    _.forEach(fileArr, file => {
      result.push({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        size: file.size
      })
    })
    return result
  }

  async fileUpload (req, res, next) {
    console.log('fileUpload', req.body.type)
    fileUpload.upload(req, res, err => {
      const type = req.body.type.toLowerCase()
      if (type === 'category' || type === 'subcategory' || type === 'product' || type === 'topoffers' || type === 'similarproducts') {
        let result
        if (req.file) {
          result = Controller.fileSuccessAction(req.file)
        } if (err) {
          this.sendResponse(req, res, ERROR.CODE, { message: 'File-Uploaded Successfully', code: '551' })
        }
        this.sendResponse(req, res, SUCCESS.CODE, { data: result })
      } else {
        this.sendResponse(req, res, ERROR.CODE, { message: 'Please enter a valid file type', code: '400' })
      }
    })
  }
}

module.exports = Controller
