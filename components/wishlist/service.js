const Wishlist = require('./schema')
const user = require('../users/schema')
const product = require('../product/schema')
const jwtDecode = require('jwt-decode')
const { errLogger } = require('../../config/logger')
const _ = require('lodash')

class Service {
  async addOrRemoveWishlist (req, res) {
    // const authToken = req.header('Authorization')
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    const validateUser = await user.findOne(query)
    if (validateUser) {
      // Verify product is available in product table
      const verifyProductIdExists = await product.findOne({ _id: req.body.productId })
      if (verifyProductIdExists) {
      //  Verify UserId and productId is already available in Wishlist table
        const checkProductIdExists = await Wishlist.find({ productId: req.body.productId, userId: validateUser._id })
        if (_.isEmpty(checkProductIdExists)) {
          const validUserDetails = {}
          validUserDetails.productId = req.body.productId
          validUserDetails.userId = validateUser._id
          const data = new Wishlist(validUserDetails)
          return data.save().catch((e) => {
            errLogger.error({ method: 'Wishlist-save', message: e.message })
          })
        } else {
          const getWishlistId = checkProductIdExists.map(function (wishlist) {
            return wishlist._id
          })
          const removeData = await Wishlist.deleteOne({ _id: getWishlistId })
          if (removeData) {
            res.status(400).send({ message: 'Product removed from wishlist' })
          }
        }
      } else {
        res.status(400).send({ message: 'Invalid ProductId' })
      }
    } else {
      res.status(400).send({ message: 'Please login to add item in wishlist' })
    }
  }

  async getWishlist (req, res) {
    // const authToken = req.header('Authorization')
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    // Validate user exists in User table
    const validateUser = await user.findOne(query)
    if (validateUser) {
      const filterUserById = await Wishlist.find({ userId: validateUser._id })
      if (_.isEmpty(filterUserById)) {
        res.status(400).send({ message: 'No product available to display' })
      } else {
        // Filter productId based on UserId
        const availableProducts = await Wishlist.find({ userId: validateUser._id }).select('productId')
          .populate({
            path: 'productId'
            // select: 'productImage productTitle subCategory'
          })
          .lean()
        const count = await Wishlist.countDocuments({ userId: validateUser._id })
        return { availableProducts, count }
      }
    } else {
      res.status(400).send({ message: 'Please login to get items from wishlist' })
    }
  }

  async getWishlistById (id, req, res) {
    // const authToken = req.header('Authorization')
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    // Validate user exists in User table
    const validateUser = await user.findOne(query)
    if (validateUser) {
    // Verify product is available in product table
      const verifyProductIdExists = await product.findOne({ _id: id })
      if (_.isEmpty(verifyProductIdExists)) {
        res.status(400).send({ message: 'Invalid product Id' })
      } else {
        return verifyProductIdExists
      }
    } else {
      res.status(400).send({ message: 'Please login to view product details' })
    }
  }
}

const WishlistService = new Service()

module.exports = { Service, WishlistService }
