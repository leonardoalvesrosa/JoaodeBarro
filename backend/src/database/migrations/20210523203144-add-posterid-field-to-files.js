
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('files', 'poster_id', {
      type: Sequelize.INTEGER,
      references: { model: 'posters', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.removeColumn('files', 'poster_id'),
};
