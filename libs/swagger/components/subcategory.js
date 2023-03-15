module.exports = {
  create: {
    properties: {
      categoryId: {
        type: 'string',
        example: '60fe9abf5443083ea1213977'
      },
      subCategoryTitle: {
        type: 'string',
        example: 'Milk and Curd'
      },
      subCategoryIcon: {
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
      categoryId: {
        type: 'string',
        example: '60fe9abf5443083ea1213977'
      },
      subCategoryTitle: {
        type: 'string',
        example: 'Milk and Curd'
      },
      subCategoryIcon: {
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
