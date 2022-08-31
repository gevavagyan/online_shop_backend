'use strict';
const { categories } = require('../Data/category');
const { subCategories } = require('../Data/subCategories');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', categories);

    return queryInterface.bulkInsert('Categories', subCategories);
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Categories', null, {});
  }
};
