module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('posters', 'advertiser_id', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('posters', 'advertiser_id'),
};
