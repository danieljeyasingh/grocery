module.exports = {
  HEADER: {
    CONTENT_TYPE: 'application/json'
  },
  ERROR: {
    CLIENT_ERROR: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      ALREADY_EXIST: 409,
      SUCCESS_REQUEST: 200
    },
    SERVER_ERROR: {
      INTERNAL_SERVER_ERROR: 500
    },
    CODE: 500,
    MSG: 'error'
  },
  SUCCESS: {
    CODE: 200,
    MSG: 'success'
  },
  ROLES: {
    ADMIN: 'admin'
  },
  QUERY: {
    PAGE: 1,
    LIMIT: 20
  },
  BASE_URL: {
    URL: 'http://localhost:4000/'
  }
}
