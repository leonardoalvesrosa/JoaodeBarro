import { Model, Sequelize } from 'sequelize';

class Campaign extends Model {
  static init(sequelize) {
    super.init(
      {
        id_campaigns: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        image_name: Sequelize.STRING,
        image_path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3333/files/campaigns/${this.image_path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Campaign;
