'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('indicateds', {
      id_indicateds: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_indicator_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'indicators', key: 'id_indicator' },
        allowNull: false,
        
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      schooling: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      income_amount: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      income_origin: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      health_problems: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      complement: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone_3: {
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
    return queryInterface.dropTable('indicateds');
  }
};
