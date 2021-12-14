module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'phone', {
      type: Sequelize.INTEGER,
      allowNull: true,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('users', 'phone'),
};
