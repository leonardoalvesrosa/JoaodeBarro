'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('immobile', {
      id_immobile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_indicateds_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'indicateds', key: 'id_indicateds' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_type_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'immobile_type', key: 'id_type' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_condition_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'immobile_condition', key: 'id_condition' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      rent_amount: {
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      owner_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imo_deed_contract: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      has_land: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      land_owner_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      land_deed_contract: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_necessity_fk: {
        type: Sequelize.INTEGER,
        references: { model: 'necessity', key: 'id_necessity' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      how_long_live_franca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      where_they_lived: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      details: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('immobile');
  }
};
