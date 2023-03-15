const components = require('../libs/swagger/components/index')

module.exports = {
  openapi: '3.0.2',
  info: {
    version: '1.0.0',
    title: 'Grocery',
    description: ''
  },
  servers: [
    {
      url: `${process.env.SWAGGER_BASEPATH}`
    }
  ],
  paths: {
    // '/auth/login': {
    //   post: {
    //     tags: [
    //       'Auth'
    //     ],
    //     summary: 'Admin login',
    //     operationId: 'admin',
    //     parameters: [
    //       {
    //         $ref: '#/components/schemas/Headers/content_type'
    //       }
    //     ],
    //     requestBody: {
    //       content: {
    //         'application/json': {
    //           schema: {
    //             $ref: '#/components/schemas/Auth/login'
    //           }
    //         }
    //       },
    //       required: false
    //     },
    //     responses: {
    //       200: {
    //         description: {
    //           $ref: '#/components/schemas/Response/auth/login/description'
    //         },
    //         content: {
    //           'application/json': {
    //             schema: {
    //               $ref: '#/components/schemas/Response/auth/login/schema'
    //             }
    //           }
    //         }
    //       },
    //       400: {
    //         description: {
    //           $ref: '#/components/schemas/Response/badRequest/description'
    //         },
    //         content: {
    //           'application/json': {
    //             schema: {
    //               $ref: '#/components/schemas/Response/badRequest/schema'
    //             }
    //           }
    //         }
    //       },
    //       401: {
    //         description: {
    //           $ref: '#/components/schemas/Response/unauthorized/description'
    //         },
    //         content: {
    //           'application/json': {
    //             schema: {
    //               $ref: '#/components/schemas/Response/unauthorized/schema'
    //             }
    //           }
    //         }
    //       },
    //       500: {
    //         description: {
    //           $ref: '#/components/schemas/Response/internalServerError/description'
    //         },
    //         content: {
    //           'application/json': {
    //             schema: {
    //               $ref: '#/components/schemas/Response/internalServerError/schema'
    //             }
    //           }
    //         }
    //       }
    //     },
    //     security: []
    //   }
    // },
    '/userlogin/signup': {
      post: {
        tags: [
          'User SignUp'
        ],
        summary: 'User signup',
        operationId: 'signup',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Usersignup/create'
              }
            }
          },
          required: false
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/userlogin/signup/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/userlogin/signup/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        security: []
      }
    },
    '/userlogin/signupotp': {
      post: {
        tags: [
          'User SignUp'
        ],
        summary: 'User signupotp',
        operationId: 'signupotp',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Signupotp/create'
              }
            }
          },
          required: false
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/userlogin/signupotp/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/userlogin/signupotp/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        security: []
      }
    },
    '/userlogin/generateotplogin': {
      post: {
        tags: [
          'User SignUp'
        ],
        summary: 'User Generateotplogin',
        operationId: 'generateotplogin',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Generateotplogin/create'
              }
            }
          },
          required: false
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/userlogin/generateotplogin/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/userlogin/generateotplogin/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        security: []
      }
    },
    '/userlogin/otpverify': {
      post: {
        tags: [
          'User SignUp'
        ],
        summary: 'User otpverify',
        operationId: 'otpverifylogin',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Otpverify/create'
              }
            }
          },
          required: false
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/userlogin/otpverify/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/userlogin/otpverify/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        security: []
      }
    },
    '/users': {
      get: {
        tags: [
          'Users'
        ],
        summary: 'Get Users',
        operationId: 'getUser',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/users/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/users/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Users'
        ],
        summary: 'Add a new Users',
        operationId: 'createUsers',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/users/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/users/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/users/{id}': {
      get: {
        tags: [
          'Users'
        ],
        summary: 'Find Users by ID',
        description: 'Returns a single Users',
        operationId: 'getUsersById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single Users data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/users/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/users/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      put: {
        tags: [
          'Users'
        ],
        summary: 'Update an existing user',
        operationId: 'updateUsers',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of Users that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          description: 'Updated Users object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Users/update'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/users/update/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/users/update/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: [
          'Users'
        ],
        summary: 'Delete Users by ID',
        description: 'Delete single Users data',
        operationId: 'deleteUsers',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Delete single Users data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/users/delete/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/users/delete/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        'x-codegen-request-body-name': 'user'
      }
    },
    '/category': {
      get: {
        tags: [
          'Categories'
        ],
        summary: 'Get Categories',
        operationId: 'getCategory',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/category/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/category/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Categories'
        ],
        summary: 'Add a new Category',
        operationId: 'createCategory',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Category/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/category/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/category/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/category/{id}': {
      get: {
        tags: [
          'Categories'
        ],
        summary: 'Find Category by ID',
        description: 'Returns a single Category',
        operationId: 'getCategoryById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single Category data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/category/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/category/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      put: {
        tags: [
          'Categories'
        ],
        summary: 'Update an existing category',
        operationId: 'updateCategory',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of Category that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          description: 'Updated Category object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Category/update'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/category/update/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/category/update/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: [
          'Categories'
        ],
        summary: 'Delete Category by ID',
        description: 'Delete single Category data',
        operationId: 'deleteCategory',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Delete single Category data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/category/delete/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/category/delete/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        'x-codegen-request-body-name': 'category'
      }
    },
    '/subcategory': {
      get: {
        tags: [
          'Sub Categories'
        ],
        summary: 'Get Sub-Categories',
        operationId: 'getSubCategory',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/subcategory/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/subcategory/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Sub Categories'
        ],
        summary: 'Add a new Sub-Category',
        operationId: 'createSubCategory',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SubCategory/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/subcategory/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/subcategory/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/subcategory/{id}': {
      get: {
        tags: [
          'Sub Categories'
        ],
        summary: 'Find Sub-Category by ID',
        description: 'Returns a single Sub-Category',
        operationId: 'getSubCategoryById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single Sub-Category data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/subcategory/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/subcategory/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      put: {
        tags: [
          'Sub Categories'
        ],
        summary: 'Update an existing Sub-Category',
        operationId: 'updateSubCategory',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of Sub-Category that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          description: 'Updated Sub-Category object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SubCategory/update'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/subcategory/update/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/subcategory/update/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: [
          'Sub Categories'
        ],
        summary: 'Delete Sub-Category by ID',
        description: 'Delete single SubCategory data',
        operationId: 'deleteSubCategory',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Delete single SubCategory data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/subcategory/delete/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/subcategory/delete/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        'x-codegen-request-body-name': 'category'
      }
    },
    '/product': {
      get: {
        tags: [
          'Products'
        ],
        summary: 'Get Products',
        operationId: 'getProduct',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/product/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/product/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Products'
        ],
        summary: 'Add a new Product',
        operationId: 'createProduct',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/product/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/product/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/product/{id}': {
      get: {
        tags: [
          'Products'
        ],
        summary: 'Find product by ID',
        description: 'Returns a single product',
        operationId: 'getProductById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single product data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/product/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/product/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      put: {
        tags: [
          'Products'
        ],
        summary: 'Update an existing product',
        operationId: 'updateProduct',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of product that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          description: 'Updated product object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product/update'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/product/update/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/product/update/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: [
          'Products'
        ],
        summary: 'Delete products by ID',
        description: 'Delete single product data',
        operationId: 'deleteProduct',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Delete single product data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/product/delete/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/product/delete/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        'x-codegen-request-body-name': 'product'
      }
    },
    '/wishlist': {
      post: {
        tags: [
          'Wishlists'
        ],
        summary: 'Add or remove wishlist',
        operationId: 'createOrRemoveWishlist',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Wishlist/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/wishlist/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/wishlist/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      get: {
        tags: [
          'Wishlists'
        ],
        summary: 'Get Wishlists',
        operationId: 'getWishlist',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/wishlist/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/wishlist/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/wishlist/{id}': {
      get: {
        tags: [
          'Wishlists'
        ],
        summary: 'Find wishlist by ID',
        description: 'Returns a single wishlist',
        operationId: 'getWishlistById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single wishlist data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/wishlist/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/wishlist/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/orders': {
      get: {
        tags: [
          'Orders'
        ],
        summary: 'Get all orders',
        operationId: 'getOrders',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/orders/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/orders/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      post: {
        tags: [
          'Orders'
        ],
        summary: 'Place new order',
        operationId: 'orderPlaced',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Orders/create'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/orders/create/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/orders/create/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/orders/{id}': {
      get: {
        tags: [
          'Orders'
        ],
        summary: 'Find Order by ID',
        description: 'Returns a single order',
        operationId: 'getOrderById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Return single order data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/orders/getById/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/orders/getById/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      put: {
        tags: [
          'Orders'
        ],
        summary: 'Update an existing order status [admin]',
        operationId: 'updateOrderStatus',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of Order-status that needs to be updated',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        requestBody: {
          description: 'Updated Order-status object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Orders/update'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/orders/update/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/orders/update/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      },
      delete: {
        tags: [
          'Orders'
        ],
        summary: 'Delete Order by ID',
        description: 'Delete single order data',
        operationId: 'deleteOrder',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Delete single order data',
            required: true,
            schema: {
              type: 'string'
            }
          },
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/orders/delete/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/orders/delete/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        },
        'x-codegen-request-body-name': 'category'
      }
    },
    '/topoffers': {
      get: {
        tags: [
          'Top Offers'
        ],
        summary: 'Get all top products',
        operationId: 'getOffers',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/topoffers/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/topoffers/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/similarproducts': {
      get: {
        tags: [
          'Similar Products'
        ],
        summary: 'Get all similar products',
        operationId: 'getOffers',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/similarproducts/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/similarproducts/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/fileUploads': {
      post: {
        tags: ['File Upload'],
        name: 'Upload File',
        description: 'Uploads a file to the server.',
        requestBody: {
          // content: {
          //   'application/json': {
          //     schema: {
          //       $ref: '#/components/schemas/Upload/upload'
          //     }
          //   }
          // },
          // required: true
          required: 'true',
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  type: {
                    in: 'formData',
                    type: 'string'
                  },
                  image: {
                    type: 'string',
                    format: 'base64'
                  }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/fileUploads/upload/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/fileUploads/upload/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/popularcategory': {
      get: {
        tags: [
          'Popular Category'
        ],
        summary: 'Get all popular category',
        operationId: 'getPopularCategory',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/popularcategory/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/popularcategory/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    },
    '/trendingproducts': {
      get: {
        tags: [
          'Trending products'
        ],
        summary: 'Get all trending products',
        operationId: 'getTrendingProducts',
        parameters: [
          {
            $ref: '#/components/schemas/Headers/content_type'
          }
        ],
        responses: {
          200: {
            description: {
              $ref: '#/components/schemas/Response/trendingproducts/get/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/trendingproducts/get/schema'
                }
              }
            }
          },
          400: {
            description: {
              $ref: '#/components/schemas/Response/badRequest/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/badRequest/schema'
                }
              }
            }
          },
          401: {
            description: {
              $ref: '#/components/schemas/Response/unauthorized/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/unauthorized/schema'
                }
              }
            }
          },
          500: {
            description: {
              $ref: '#/components/schemas/Response/internalServerError/description'
            },
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Response/internalServerError/schema'
                }
              }
            }
          }
        }
      }
    }
  },
  components,
  security: [
    {
      bearerAuth: []
    }
  ]
}
