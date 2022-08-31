'use strict';

const { users } = require("../Data/user");


module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
