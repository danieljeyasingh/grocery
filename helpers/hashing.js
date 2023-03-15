const bcrypt = require('bcryptjs')
const saltRounds = 10
const hashGenarate = async (plainmobileNumber) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(plainmobileNumber, salt)
  return hash
}
const hashValidator = async (plainmobileNumber, hashedmobileNumber) => {
  try {
    const result = await bcrypt.compare(plainmobileNumber, hashedmobileNumber)
    return result
  } catch (error) {
    return false
  }
}
module.exports.hashGenarate = hashGenarate
module.exports.hashValidator = hashValidator
