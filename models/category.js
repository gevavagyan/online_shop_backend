'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Product } = models;

      Category.hasMany(Category, { //true
        foreignKey: 'parentId',
        as: 'subCategories',
      });

      Category.belongsTo(Category, { //true
        foreignKey: 'parentId'
      });

      Category.belongsToMany(Product, {
        through: 'ProductCategory',
        foreignKey: 'categoryId'
      })
    }
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
