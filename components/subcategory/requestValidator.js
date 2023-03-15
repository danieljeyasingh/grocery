const joi = require('@hapi/joi')

const read = joi.object().keys()

const list = joi.object().keys()

const create = joi.object().keys(
  {
    categoryId: joi.string().required(),
    subCategoryTitle: joi.string().required(),
    subCategoryIcon: joi.string(),
    status: joi.valid('ACTIVE', 'INACTIVE').required()
  }
)

const update = joi.object().keys(
  {
    categoryId: joi.string().required(),
    subCategoryTitle: joi.string().required(),
    subCategoryIcon: joi.string(),
    status: joi.valid('ACTIVE', 'INACTIVE').required()
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
