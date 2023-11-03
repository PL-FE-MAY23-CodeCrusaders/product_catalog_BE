'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: Sequelize.STRING,
      phoneId: Sequelize.STRING,
      itemId: Sequelize.STRING,
      name: Sequelize.STRING,
      fullPrice: Sequelize.DECIMAL,
      price: Sequelize.DECIMAL,
      screen: Sequelize.STRING,
      capacity: Sequelize.STRING,
      color: Sequelize.STRING,
      ram: Sequelize.STRING,
      year: Sequelize.INTEGER,
      image: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  },
};
