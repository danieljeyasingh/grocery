const jsonwebtoken = require('jsonwebtoken')
const user = require('../components/users/schema')
const jwtDecode = require('jwt-decode')

const tokenGenarator = async (data) => {
  const payload = {
    // id: data._id,
    // name: data.fullName ? data.fullName: data.name,
    email: data.email,
    mobileNumber: data.mobileNumber
    // empId: data.empId,
    // team: data.team,
    // role: data.role ? data.role:"employee"
  }
  const token = await jsonwebtoken.sign(
    payload,
    process.env.TOKEN_KEY,
    { expiresIn: '10h' }
  )
  return token
}
const tokenValidator = (token) => {
  try {
    const data = jsonwebtoken.verify(token, process.env.TOKEN_KEY)
    return data
  } catch (error) {
    return false
  }
}

const validateUserAccess = async (verifyUser) => {
  try {
    const decodedHeader = jwtDecode(verifyUser.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' } }
    const validateUser = await user.findOne(query)
    return validateUser
  } catch (error) {
    return false
  }
}

const validateAdminAccess = async (verifyUser) => {
  try {
    const decodedHeader = jwtDecode(verifyUser.header('Authorization'))
    const query = { mobileNumber: decodedHeader.mobileNumber, status: { $eq: 'ACTIVE' }, role: { $eq: 'ADMIN' } }
    const validateUser = await user.findOne(query)
    return validateUser
  } catch (error) {
    return false
  }
}

module.exports.tokenGenarator = tokenGenarator
module.exports.tokenValidator = tokenValidator
module.exports.validateUserAccess = validateUserAccess
module.exports.validateAdminAccess = validateAdminAccess
