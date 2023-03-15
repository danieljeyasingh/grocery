const joi = require('@hapi/joi')

const read = joi.object().keys()

const list = joi.object().keys()

const create = joi.object().keys(
  {
    productId: joi.string(),
    userId: joi.string(),
    status: joi.string()
  }
)

const update = joi.object().keys(
  {
    productId: joi.string(),
    userId: joi.string(),
    status: joi.string()
  }
)

const remove = joi.object().keys()

module.exports = {
  list,
  read,
  create,
  update,
  remove
}
