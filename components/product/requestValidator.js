const joi = require('@hapi/joi')

const read = joi.object().keys()

const list = joi.object().keys()

const create = joi.object().keys(
  {
    productImage: joi.string().required(),
    productTitle: joi.string().regex(/^[A-Za-z\s]+$/i).required(),
    productDescription: joi.string().required(),
    additionalInformation: joi.string(),
    categoryId: joi.string().required(),
    subCategoryId: joi.string().required(),
    productType: joi.string().required(),
    unit: joi.string().required(),
    productQuantity: joi.string().required(),
    productPrice: joi.string().required(),
    salePrice: joi.string().required(),
    productTag: joi.string().required(),
    isTrending: joi.string(),
    status: joi.valid('ACTIVE', 'INACTIVE')
  }
)

const update = joi.object().keys(
  {
    productImage: joi.string().required(),
    productTitle: joi.string().regex(/^[A-Za-z\s]+$/i).required(),
    productDescription: joi.string().required(),
    additionalInformation: joi.string(),
    categoryId: joi.string().required(),
    subCategoryId: joi.string().required(),
    productType: joi.string().required(),
    unit: joi.string().required(),
    productQuantity: joi.string().required(),
    productPrice: joi.string().required(),
    salePrice: joi.string().required(),
    productTag: joi.string().required(),
    isTrending: joi.string(),
    status: joi.valid('ACTIVE', 'INACTIVE')
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
