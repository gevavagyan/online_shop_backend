const { Category } = require('../models/');

async function getCategoriesWithSubCategories(req, res) {
  try {
    const categories = await Category.findAll({
      include: {
        model: Category,
        as: 'subCategories',
        attributes: ['id', 'name', 'parentId']
      },
      where: {
        parentId: null
      },
      attributes: ['id', 'name', 'parentId']
    });

    return res.json(categories);
  } catch (e) {
    console.log(e, 'erooor');
  }
}

module.exports = {
  getCategoriesWithSubCategories
}
