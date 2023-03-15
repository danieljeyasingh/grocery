const path = require('path')
const multer = require('multer')
const mkdirp = require('mkdirp')
// const { ERROR, SUCCESS } = require('../libs/constants')
const storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    console.log('file Upload', req.body)
    const type = req.body.type.toLowerCase()
    // const newfiletypes = /category|subcategory|products/
    if (type === 'category' || type === 'subcategory' || type === 'product' || type === 'topoffers' || type === 'similarproducts') {
      const prefix = `${process.env.UPLOAD}/${type}/`
      await mkdirp(prefix)
      cb(null, prefix)
    } else {
      // cb('Error: Please enter a valid file type- ' + newfiletypes)
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const maxSize = 100 * 1024 * 1024
const upload = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|JPG/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(
      file.originalname).toLowerCase())
    if (mimetype && extname) {
      return cb(null, true)
    }
    // cb('Error: File upload only supports the ' +
    //   'following filetypes - ' + filetypes)
  }

}).single('image')

const multiUploads = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|JPG/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(
      file.originalname).toLowerCase())
    if (mimetype && extname) {
      return cb(null, true)
    }
    // cb('Error: File upload only supports the ' +
    //   'following filetypes - ' + filetypes)
  }
}).array('image', 10)

const pdf = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    const filetypes = /|docx|pdf|txt/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(
      file.originalname).toLowerCase())
    if (mimetype && extname) {
      return cb(null, true)
    }
    // cb('Error: File upload only supports the ' +
    //   'following filetypes - ' + filetypes)
  }
}).array('pdf', 10)

const txt = multer({
  storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    const filetypes = /|docx|pdf|txt/
    const mimetype = filetypes.test(file.mimetype)
    const extname = filetypes.test(path.extname(
      file.originalname).toLowerCase())
    if (mimetype && extname) {
      return cb(null, true)
    }
    // cb('Error: File upload only supports the ' +
    //   'following filetypes - ' + filetypes)
  }
}).array('txt ', 10)

module.exports = { upload, multiUploads, pdf, txt }
