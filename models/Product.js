'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { User, Category } = models

      Product.belongsTo(User, {
        foreignKey: 'userId'
      });

      // Product.hasMany(Category, { //true
      //   foreignKey: 'productId',
      // });

    }
  }
  Product.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
