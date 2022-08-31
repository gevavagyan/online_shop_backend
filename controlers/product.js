const { Product } = require('../models/')

async function getProducts(req, res) {
  try {
    const data = await  Product.findAll({
      attributes: [
        'id',
        'title',
        'description',
        'image',
        'price',
      ]
    });
    // res.json(products);
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({ msg: 'something went wrong' })
  }
}

module.exports = {
  getProducts
}

