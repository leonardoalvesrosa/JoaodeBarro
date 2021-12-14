module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('posters', 'quantity', {
      type: Sequelize.INTEGER,
      allowNull: true,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('posters', 'quantity'),
};
