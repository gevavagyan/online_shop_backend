const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const categoryRouter = require('./category');
const productRouter = require('./product');

router.use('/', authRouter);
router.use('/', categoryRouter);
router.use('/', productRouter);

module.exports = router;
