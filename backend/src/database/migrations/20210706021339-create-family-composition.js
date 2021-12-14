'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('family_composition', {
      id_family: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      id_nominees_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'indicateds', key: 'id_indicateds' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      name: {
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
      kinship: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('family_composition');
  }
};
