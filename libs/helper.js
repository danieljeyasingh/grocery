const { QUERY } = require('./constants.js')
class Helpers {
  getPage (query) {
    const value = query.page
    if (value && !isNaN(value)) {
      const page = parseInt(value, 10)
      if (page >= 1) {
        return page
      }
    }
    return QUERY.PAGE
  }

  getLimit (query) {
    const value = query.limit
    if (value && !isNaN(value)) {
      const limit = parseInt(value, 10)
      if (limit >= 1) {
        return limit
      }
    }
    return QUERY.LIMIT
  }
}

module.exports = Helpers
