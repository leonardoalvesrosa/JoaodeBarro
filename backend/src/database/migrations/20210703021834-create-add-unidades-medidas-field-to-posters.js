module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('posters', 'unities', {
      type: Sequelize.STRING,
      allowNull: true,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('posters', 'unities'),
};
