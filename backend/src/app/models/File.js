import { Model, Sequelize } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        poster_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/posters/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Poster, { foreignKey: 'poster_id', as: 'poster' });
  }
}

export default File;
