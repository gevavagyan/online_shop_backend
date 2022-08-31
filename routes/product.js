const { Router } = require('express');

const router = Router();

const {
  getProducts
} = require('../controlers/product')

router.get('/products', getProducts);

module.exports = router;
