const Order = require('./schema')
const user = require('../users/schema')
const product = require('../product/schema')
const jwtDecode = require('jwt-decode')
const { errLogger } = require('../../config/logger')
const _ = require('lodash')

class Service {
  async placeOrder (req, res) {
    // const authToken = req.header('Authorization')
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    const validateUser = await user.findOne(query)
    if (validateUser) {
      // Verify product is available in product table
      const verifyProductIdExists = await product.findOne({ _id: req.body.productId })
      if (verifyProductIdExists) {
      //  Verify UserId and productId is already available in Order table
        const checkProductIdExists = await Order.find({ productId: req.body.productId, userId: validateUser._id })
        if (_.isEmpty(checkProductIdExists)) {
          const validUserDetails = {}
          validUserDetails.productId = req.body.productId
          validUserDetails.userId = validateUser._id
          validUserDetails.status = 'ORDER_PLACED'
          const data = new Order(validUserDetails)
          return data.save().catch((e) => {
            errLogger.error({ method: 'Order-save', message: e.message })
          })
        } else {
          res.status(400).send({ message: 'Product already exists orders' })
        }
      } else {
        res.status(400).send({ message: 'Invalid ProductId' })
      }
    } else {
      res.status(400).send({ message: 'Please login to place order' })
    }
  }

  async getOrderlist (req, res) {
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    // Validate user exists in User table
    const validateUser = await user.findOne(query)
    if (validateUser) {
      const filterUserById = await Order.find({ userId: validateUser._id })
      if (_.isEmpty(filterUserById)) {
        res.status(200).send({ message: 'No product available to display' })
      } else {
        // Filter productId based on UserId
        const availableProducts = await Order.find({ userId: validateUser._id }).select('productId')
          .populate({
            path: 'productId'
            // select: 'productImage productTitle subCategory'
          })
          .lean()
        const count = await Order.countDocuments({ userId: validateUser._id })
        return { availableProducts, count }
      }
    } else {
      res.status(400).send({ message: 'Please login to get items order list' })
    }
  }

  async getOrderlistById (id, req, res) {
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

  async updateOrder (id, req, res) {
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' }, role: { $eq: 'ADMIN' } }
    const validateUser = await user.findOne(query)
    if (validateUser) {
      // Status modify by admin
      return Order.findOneAndUpdate(id, req.body).catch((e) => {
        errLogger.error({ method: 'Order-status-update', message: e.message })
      })
    } else {
      res.status(400).send({ message: 'Dont have access to modify status' })
    }
  }

  async deleteOrder (id, updateParams, req, res) {
    const decodedHeader = jwtDecode(req.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    const validateUser = await user.findOne(query)
    if (validateUser) {
      //  Verify UserId already available in Order table
      const checkProductIdExists = await Order.find({ userId: validateUser._id })
      if (checkProductIdExists) {
        return Order.findOneAndDelete(id, updateParams).catch((e) => {
          errLogger.error({ method: 'Order-delete', message: e.message })
        })
        // console.log("deleteData",deleteData)
      } else {
        res.status(400).send({ message: 'Invalid not have access to delete orders' })
      }
    } else {
      res.status(400).send({ message: 'Please login to place order' })
    }
  }
}

const OrderService = new Service()

module.exports = { Service, OrderService }
