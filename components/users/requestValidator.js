const joi = require('@hapi/joi')

const read = joi.object().keys()

const list = joi.object().keys()

const create = joi.object().keys(
  {
    email: joi.string().email({ tld: { allow: false } }).required(),
    mobileNumber: joi.string().regex(/^[0-9]*$/i).min(6).max(14),
    role: joi.string(),
    status: joi.valid('ACTIVE', 'INACTIVE')
  }
)

const update = joi.object().keys(
  {
    email: joi.string().email({ tld: { allow: false } }).required(),
    mobileNumber: joi.string().regex(/^[0-9]*$/i).min(6).max(14),
    role: joi.string(),
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
