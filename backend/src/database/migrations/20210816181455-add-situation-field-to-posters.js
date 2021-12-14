module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('posters', 'situation', {
      type: Sequelize.STRING,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('posters', 'situation'),
};
