module.exports = {
  create: {
    properties: {
      name: {
        type: 'string',
        example: 'test'
      },
      email: {
        type: 'string',
        example: 'test@gmail.com'
      },
      mobileNumber: {
        type: 'string',
        example: '1234567890'
      },
      status: {
        type: 'string',
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE']
      }
    }
  },
  update: {
    properties: {
      name: {
        type: 'string',
        example: 'test'
      },
      email: {
        type: 'string',
        example: 'test@gmail.com'
      },
      mobileNumber: {
        type: 'string',
        example: '1234567890'
      },
      status: {
        type: 'string',
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE']
      }
    }
  }
}
