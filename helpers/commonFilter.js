class CommonFilter {
  static categoryFilter (req, query, skipPageLimit = false) {
    const reqData = req.query
    const sortField = '-createdAt'
    if (reqData.categoryTitle) {
      query.where({ categoryTitle: new RegExp(reqData.categoryTitle, 'i') })
    }
    if (reqData.status) {
      query.where({ status: new RegExp(reqData.status, 'i') })
    }
    query.sort(sortField)
    if (!skipPageLimit) {
      this.pagination(reqData, query)
    }
    return query
  }

  static SubCategoryFilter (req, query, skipPageLimit = false) {
    const reqData = req.query
    const sortField = '-createdAt'
    if (reqData.categoryId) {
      query.where({ categoryId: reqData.categoryId })
    }
    if (reqData.subCategoryTitle) {
      query.where({ subCategoryTitle: new RegExp(reqData.subCategoryTitle, 'i') })
    }
    if (reqData.status) {
      query.where({ status: new RegExp(reqData.status, 'i') })
    }
    query.sort(sortField)
    if (!skipPageLimit) {
      this.pagination(reqData, query)
    }
    return query
  }

  static productFilter (req, query, skipPageLimit = false) {
    const reqData = req.query
    const sortField = '-createdAt'
    if (reqData.productTitle) {
      query.where({ productTitle: new RegExp(reqData.productTitle, 'i') })
    }
    if (reqData.productPrice) {
      query.where({ productPrice: new RegExp(reqData.productPrice, 'i') })
    }
    if (reqData.status) {
      query.where({ status: new RegExp(reqData.status, 'i') })
    }
    query.sort(sortField)
    if (!skipPageLimit) {
      this.pagination(reqData, query)
    }
    return query
  }

  static topOfferFilter (req, query, skipPageLimit = false) {
    const reqData = req.query
    const sortField = '-createdAt'
    if (reqData.productTitle) {
      query.where({ productTitle: new RegExp(reqData.productTitle, 'i') })
    }
    if (reqData.offerProductPrice) {
      query.where({ offerProductPrice: new RegExp(reqData.offerProductPrice, 'i') })
    }
    query.sort(sortField)
    if (!skipPageLimit) {
      this.pagination(reqData, query)
    }
    return query
  }

  static similarProductFilter (req, query, skipPageLimit = false) {
    const reqData = req.query
    const sortField = '-createdAt'
    if (reqData.similarProductTitle) {
      query.where({ similarProductTitle: new RegExp(reqData.similarProductTitle, 'i') })
    }
    if (reqData.similarProductPrice) {
      query.where({ similarProductPrice: new RegExp(reqData.similarProductPrice, 'i') })
    }
    query.sort(sortField)
    if (!skipPageLimit) {
      this.pagination(reqData, query)
    }
    return query
  }

  static pagination (reqData, query) {
    const pageNo = reqData.page ? reqData.page : 1
    const limit = reqData.limit ? reqData.limit : process.env.PAGE_LIMIT
    const skip = (pageNo - 1) * limit
    query.limit(Number(limit))
    query.skip(skip)
    return query
  }
}

module.exports = CommonFilter
