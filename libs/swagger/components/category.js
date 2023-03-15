module.exports = {
  create: {
    properties: {
      categoryTitle: {
        type: 'string',
        example: 'Dairy'
      },
      categoryIcon: {
        type: 'string',
        example: 'public/uploads/categoryIcon/philly.jpg'
      },
      status: {
        type: 'string',
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
      }
    }
  },
  update: {
    properties: {
      categoryTitle: {
        type: 'string',
        example: 'Dairy'
      },
      categoryIcon: {
        type: 'string',
        example: 'public/uploads/categoryIcon/philly.jpg'
      },
      status: {
        type: 'string',
        default: 'ACTIVE',
        enum: ['ACTIVE', 'INACTIVE', 'DELETED']
      }
    }
  }
}
