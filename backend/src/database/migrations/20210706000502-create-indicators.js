'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('indicators', {
      id_indicator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      visit_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      register_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      knows_family: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      indicator_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('indicadores');
  }
};
