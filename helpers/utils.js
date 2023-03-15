const { expressjwt: jwt } = require('express-jwt')

const openApis = [
  '/api/v1/auth/'
]
const secret = process.env.JWT_SECRET

const auth = jwt({ secret, algorithms: ['HS256'] }).unless({ path: openApis })

module.exports = {
  auth
}
