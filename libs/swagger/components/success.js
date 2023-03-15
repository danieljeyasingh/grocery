module.exports = {
  // auth: {
  //   login: {
  //     description: 'login success response',
  //     schema: {
  //       type: 'object',
  //       properties: {
  //         status: {
  //           type: 'string',
  //           example: 'ok'
  //         },
  //         message: {
  //           type: 'string',
  //           example: 'login successfully'
  //         },
  //         data: {
  //           type: 'object',
  //           example: {
  //             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTlkOWQxM2U0YjA3YzBjMDZhMjk3ZCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwibW9iaWxlTnVtYmVyIjoiOTc4ODI1NDIyOSIsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY3MjE1MTIxOSwiZXhwIjoxNjgwNzkxMjE5fQ.vUOJft_SZeDcCcEBZ-GaCKi3899ZE1LnJl1byKY7m_M'
  //           }
  //         }
  //       }
  //     }
  //   }
  // },
  userlogin: {
    signup: {
      description: 'Otp Send to your mobile number',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Otp sent successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '64030a8b6aa6880f817ec550'
              },
              email: {
                type: 'string',
                example: 'sam@gmail.com'
              },
              mobileNumber: {
                type: 'string',
                example: '9994816789'
              },
              status: {
                type: 'string',
                example: 'INACTIVE'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    signupotp: {
      description: 'Otp verification success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Otp verified successfully'
          },
          // Need to modified later
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '64030a8b6aa6880f817ec550'
              },
              email: {
                type: 'string',
                example: 'ragul@gmail.com'
              },
              mobileNumber: {
                type: 'string',
                example: '9999333111'
              },
              status: {
                type: 'string',
                example: 'INACTIVE'
              },
              token: {
                type: 'string',
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZ3VsQGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6Ijk5OTkzMzMxMTEiLCJpYXQiOjE2Nzc5MzI5OTUsImV4cCI6MTY3Nzk2ODk5NX0.LkGcYVS6TkC2nUjjAsqeiFDeBoxKcBXaZuLljvAAbOY'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    generateotplogin: {
      description: 'Generate otp for login success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Otp sent successfully'
          }
          // Need to modified later
          // data: {
          //   type: 'object',
          //   properties: {
          //     _id: {
          //       type: 'string',
          //       example: '64030a8b6aa6880f817ec550'
          //     },
          //     createdAt: {
          //       type: 'string',
          //       format: 'date-time'
          //     }
          //   }
          // }
        }
      }
    },
    otpverify: {
      description: 'Login otp verification success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Otp verified successfully'
          },
          // Need to modified later
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '64030a8b6aa6880f817ec550'
              },
              email: {
                type: 'string',
                example: 'ragul@gmail.com'
              },
              mobileNumber: {
                type: 'string',
                example: '9999333111'
              },
              status: {
                type: 'string',
                example: 'INACTIVE'
              },
              token: {
                type: 'string',
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZ3VsQGdtYWlsLmNvbSIsIm1vYmlsZU51bWJlciI6Ijk5OTkzMzMxMTEiLCJpYXQiOjE2Nzc5MzI5OTUsImV4cCI6MTY3Nzk2ODk5NX0.LkGcYVS6TkC2nUjjAsqeiFDeBoxKcBXaZuLljvAAbOY'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    }
  },
  users: {
    create: {
      description: 'Create new users success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'users created successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    update: {
      description: 'Update users success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'users updated sucessfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    get: {
      description: 'Get all users success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'users record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
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
                  enum: ['ACTIVE', 'INACTIVE', 'DELETED']
                }
              }
            }
          }
        }
      }
    },
    getById: {
      description: 'Get users success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'users record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e44d5edc15cf7a0b7492b'
              },
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
                enum: ['ACTIVE', 'INACTIVE', 'DELETED']
              }
            }
          }
        }
      }
    },
    delete: {
      description: 'Delete users success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'users deleted successfully'
          }
        }
      }
    }
  },
  category: {
    create: {
      description: 'Create new category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category created successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    update: {
      description: 'Update category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category updated sucessfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    get: {
      description: 'Get all categories success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
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
        }
      }
    },
    getById: {
      description: 'Get category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60fe9abf5443083ea1213977'
              },
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
      }
    },
    delete: {
      description: 'Delete category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category deleted successfully'
          }
        }
      }
    }
  },
  subcategory: {
    create: {
      description: 'Create new sub-category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'sub-category created successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    update: {
      description: 'Update sub-category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'sub-category updated sucessfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    get: {
      description: 'Get all sub-categories success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'sub-category record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                categoryId: {
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6410814ea4d3bfaa8e0d0200'
                    },
                    categoryTitle: {
                      type: 'string',
                      example: 'Dairy,Bread & Eggs'
                    }
                  }
                },
                subCategoryTitle: {
                  type: 'string',
                  example: 'Milk and Curd'
                },
                subCategoryIcon: {
                  type: 'string',
                  example: 'public/uploads/subcategory/philly.jpg'
                },
                status: {
                  type: 'string',
                  default: 'ACTIVE',
                  enum: ['ACTIVE', 'INACTIVE', 'DELETED']
                }
              }
            }
          }
        }
      }
    },
    getById: {
      description: 'Get sub-category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'sub-category record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60fe9abf5443083ea1213977'
              },
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
      }
    },
    delete: {
      description: 'Delete sub-category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'sub-category deleted successfully'
          }
        }
      }
    }
  },
  product: {
    create: {
      description: 'Create new product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'product created successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    update: {
      description: 'Update product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'product updated sucessfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    get: {
      description: 'Get all product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'product record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/productImage/fish.jpeg'
                },
                productTitle: {
                  type: 'string',
                  example: 'Home Appliences'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available Home Appliences'
                },
                additionalInformation: {
                  type: 'string',
                  example: 'Diff variety of available Home Appliences based on cost and specification'
                },
                categoryId: {
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6410814ea4d3bfaa8e0d0200'
                    },
                    categoryTitle: {
                      type: 'string',
                      example: 'Dairy,Bread & Eggs'
                    }
                  }
                },
                subCategoryId: {
                  properties: {
                    _id: {
                      type: 'string',
                      example: '6410814ea4d3bfaa8e0d0200'
                    },
                    subCategoryTitle: {
                      type: 'string',
                      example: 'Milk and Curd'
                    }
                  }
                },
                productType: {
                  type: 'string',
                  example: 'Device'
                },
                unit: {
                  type: 'string',
                  example: '1.5Kg'
                },
                productQuantity: {
                  type: 'string',
                  example: '1'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                },
                salePrice: {
                  type: 'string',
                  example: '60000'
                },
                productTag: {
                  type: 'string',
                  example: 'test'
                }
              }
            }
          }
        }
      }
    },
    getById: {
      description: 'Get product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'product record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60fe9abf5443083ea1213977'
              },
              productImage: {
                type: 'string',
                example: 'public/uploads/productImage/fish.jpeg'
              },
              productTitle: {
                type: 'string',
                example: 'Home Appliences'
              },
              productDescription: {
                type: 'string',
                example: 'Type of available Home Appliences'
              },
              additionalInformation: {
                type: 'string',
                example: 'Diff variety of available Home Appliences based on cost and specification'
              },
              category: {
                type: 'string',
                example: 'Tv'
              },
              subCategory: {
                type: 'string',
                example: 'Samsung'
              },
              productType: {
                type: 'string',
                example: 'Device'
              },
              unit: {
                type: 'string',
                example: '1.5Kg'
              },
              productQuantity: {
                type: 'string',
                example: '1'
              },
              productPrice: {
                type: 'string',
                example: '55000'
              },
              salePrice: {
                type: 'string',
                example: '60000'
              },
              productTag: {
                type: 'string',
                example: 'test'
              }
            }
          }
        }
      }
    },
    delete: {
      description: 'Delete product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'product deleted successfully'
          }
        }
      }
    }
  },
  wishlist: {
    create: {
      description: 'Create or remove wishlist success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'wishlist created successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              productId: {
                type: 'string',
                example: '63ff06ae5fd58899ee432dca'
              },
              userId: {
                type: 'string',
                example: '6406e588066033845942b9a7'
              },
              status: {
                type: 'string',
                example: 'ACTIVE'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    get: {
      description: 'Get all wishlists success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'wishlist record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                productTitle: {
                  type: 'string',
                  example: 'Dairy'
                },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/categoryIcon/philly.jpg'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available electronic device'
                },
                category: {
                  type: 'string',
                  example: 'Mobile'
                },
                subCategory: {
                  type: 'string',
                  example: 'Samsung'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                }
              }
            }
          }
        }
      }
    },
    getById: {
      description: 'Get category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'category record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60fe9abf5443083ea1213977'
              },
              productTitle: {
                type: 'string',
                example: 'Dairy'
              },
              productImage: {
                type: 'string',
                example: 'public/uploads/categoryIcon/philly.jpg'
              },
              productDescription: {
                type: 'string',
                example: 'Type of available electronic device'
              },
              category: {
                type: 'string',
                example: 'Mobile'
              },
              subCategory: {
                type: 'string',
                example: 'Samsung'
              },
              productPrice: {
                type: 'string',
                example: '55000'
              }
            }
          }
        }
      }
    }
  },
  orders: {
    get: {
      description: 'Get all order success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'order record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/productImage/fish.jpeg'
                },
                productTitle: {
                  type: 'string',
                  example: 'Home Appliences'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available Home Appliences'
                },
                additionalInformation: {
                  type: 'string',
                  example: 'Diff variety of available Home Appliences based on cost and specification'
                },
                category: {
                  type: 'string',
                  example: 'Tv'
                },
                subCategory: {
                  type: 'string',
                  example: 'Samsung'
                },
                productType: {
                  type: 'string',
                  example: 'Device'
                },
                unit: {
                  type: 'string',
                  example: '1.5Kg'
                },
                productQuantity: {
                  type: 'string',
                  example: '1'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                },
                salePrice: {
                  type: 'string',
                  example: '60000'
                },
                productTag: {
                  type: 'string',
                  example: 'test'
                }
              }
            }
          }
        }
      }
    },
    create: {
      description: 'order placed success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'order placed successfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              createdAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    getById: {
      description: 'Get order success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'order record(s) found'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '60fe9abf5443083ea1213977'
              },
              productImage: {
                type: 'string',
                example: 'public/uploads/productImage/fish.jpeg'
              },
              productTitle: {
                type: 'string',
                example: 'Home Appliences'
              },
              productDescription: {
                type: 'string',
                example: 'Type of available Home Appliences'
              },
              additionalInformation: {
                type: 'string',
                example: 'Diff variety of available Home Appliences based on cost and specification'
              },
              category: {
                type: 'string',
                example: 'Tv'
              },
              subCategory: {
                type: 'string',
                example: 'Samsung'
              },
              productType: {
                type: 'string',
                example: 'Device'
              },
              unit: {
                type: 'string',
                example: '1.5Kg'
              },
              productQuantity: {
                type: 'string',
                example: '1'
              },
              productPrice: {
                type: 'string',
                example: '55000'
              },
              salePrice: {
                type: 'string',
                example: '60000'
              },
              productTag: {
                type: 'string',
                example: 'test'
              }
            }
          }
        }
      }
    },
    update: {
      description: 'Update order-status success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Order-status updated sucessfully'
          },
          data: {
            type: 'object',
            properties: {
              _id: {
                type: 'string',
                example: '621e1e4f53eb67a7cd4052a9'
              },
              updatedAt: {
                type: 'string',
                format: 'date-time'
              }
            }
          }
        }
      }
    },
    delete: {
      description: 'Delete order success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'order deleted successfully'
          }
        }
      }
    }
  },
  topoffers: {
    get: {
      description: 'Get all top product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Top product record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                // categoryId: {
                //   type: 'string',
                //   id: "64080bfd0eb75c53fe2a3592"
                // },
                // subCategoryId: {
                //   type: 'string',
                //   id: "640b460dc9513457b10783ac"
                // },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/productImage/fish.jpeg'
                },
                productTitle: {
                  type: 'string',
                  example: 'Home Appliences'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available Home Appliences'
                },
                additionalInformation: {
                  type: 'string',
                  example: 'Diff variety of available Home Appliences based on cost and specification'
                },
                category: {
                  type: 'string',
                  example: 'Tv'
                },
                subCategory: {
                  type: 'string',
                  example: 'Samsung'
                },
                productType: {
                  type: 'string',
                  example: 'Device'
                },
                unit: {
                  type: 'string',
                  example: '1.5Kg'
                },
                productQuantity: {
                  type: 'string',
                  example: '1'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                },
                salePrice: {
                  type: 'string',
                  example: '60000'
                },
                productTag: {
                  type: 'string',
                  example: 'test'
                }
              }
            }
          }
        }
      }
    }
  },
  similarproducts: {
    get: {
      description: 'Get all similar product success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Similar product record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                // categoryId: {
                //   type: 'string',
                //   id: "64080bfd0eb75c53fe2a3592"
                // },
                // subCategoryId: {
                //   type: 'string',
                //   id: "640b460dc9513457b10783ac"
                // },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/productImage/fish.jpeg'
                },
                productTitle: {
                  type: 'string',
                  example: 'Home Appliences'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available Home Appliences'
                },
                additionalInformation: {
                  type: 'string',
                  example: 'Diff variety of available Home Appliences based on cost and specification'
                },
                category: {
                  type: 'string',
                  example: 'Tv'
                },
                subCategory: {
                  type: 'string',
                  example: 'Samsung'
                },
                productType: {
                  type: 'string',
                  example: 'Device'
                },
                unit: {
                  type: 'string',
                  example: '1.5Kg'
                },
                productQuantity: {
                  type: 'string',
                  example: '1'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                },
                salePrice: {
                  type: 'string',
                  example: '60000'
                },
                productTag: {
                  type: 'string',
                  example: 'test'
                }
              }
            }
          }
        }
      }
    }
  },
  popularcategory: {
    get: {
      description: 'Get all popular category success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Popular category record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                categoryTitle: {
                  type: 'string',
                  example: 'Dairy'
                },
                categoryIcon: {
                  type: 'string',
                  example: 'public/uploads/categoryIcon/philly.jpg'
                },
                isPopular: {
                  type: 'string',
                  example: 'true'
                },
                status: {
                  type: 'string',
                  default: 'ACTIVE',
                  enum: ['ACTIVE', 'INACTIVE', 'DELETED']
                }
              }
            }
          }
        }
      }
    }
  },
  trendingproducts: {
    get: {
      description: 'Get all trending products success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'Trending products record(s) found'
          },
          data: {
            type: 'array',
            items: {
              properties: {
                _id: {
                  type: 'string',
                  example: '60fe9abf5443083ea1213977'
                },
                productImage: {
                  type: 'string',
                  example: 'public/uploads/productImage/fish.jpeg'
                },
                productTitle: {
                  type: 'string',
                  example: 'Home Appliences'
                },
                productDescription: {
                  type: 'string',
                  example: 'Type of available Home Appliences'
                },
                additionalInformation: {
                  type: 'string',
                  example: 'Diff variety of available Home Appliences based on cost and specification'
                },
                category: {
                  type: 'string',
                  example: 'Tv'
                },
                subCategory: {
                  type: 'string',
                  example: 'Samsung'
                },
                productType: {
                  type: 'string',
                  example: 'Device'
                },
                unit: {
                  type: 'string',
                  example: '1.5Kg'
                },
                productQuantity: {
                  type: 'string',
                  example: '1'
                },
                productPrice: {
                  type: 'string',
                  example: '55000'
                },
                salePrice: {
                  type: 'string',
                  example: '60000'
                },
                productTag: {
                  type: 'string',
                  example: 'test'
                }
              }
            }
          }
        }
      }
    }
  },
  fileUploads: {
    upload: {
      description: 'Create new file success response',
      schema: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'ok'
          },
          message: {
            type: 'string',
            example: 'file created successfully'
          },
          data: {
            type: 'object',
            properties: {
              originalname: {
                type: 'string',
                example: 'orange.jpeg'
              },
              filename: {
                type: 'string',
                example: 'orange.jpeg'
              },
              path: {
                type: 'string',
                example: 'public/uploads/subcategory/orange.jpeg'
              },
              size: {
                type: 'string',
                example: '5751'
              }
            }
          }
        }
      }
    }
  }

}
