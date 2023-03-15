const joi = require('@hapi/joi')

const read = joi.object().keys()

const list = joi.object().keys()

const create = joi.object().keys(
  {
    ProductId: joi.string()
  }
)

const update = joi.object().keys(
  {
    ProductId: joi.string()
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
