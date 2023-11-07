'use strict';

const phonesData = require('../api/phones.json');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', phonesData.map(phone => ({
      ...phone,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', {
      id: phonesData.map(phone => phone.id)
    }, {});
  }
};
