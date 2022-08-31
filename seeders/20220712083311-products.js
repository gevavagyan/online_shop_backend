'use strict';
const { products } = require('../Data/product')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', products);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
