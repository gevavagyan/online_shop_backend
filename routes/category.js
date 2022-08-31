const { Router } = require('express');
const {
  getCategoriesWithSubCategories
} = require('../controlers/category');

const router = Router();

router.get('/categories', getCategoriesWithSubCategories);

module.exports = router;

