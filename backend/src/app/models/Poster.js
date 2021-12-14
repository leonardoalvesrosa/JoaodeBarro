import { Model, Sequelize } from 'sequelize';

class Poster extends Model {
  static init(sequelize) {
    super.init(
      {
        type_post: Sequelize.STRING,
        mode_post: Sequelize.STRING,
        poster_name: Sequelize.STRING,
        advertiser_name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        description: Sequelize.STRING,
        product: Sequelize.STRING,
        quantity: Sequelize.STRING,
        unities: Sequelize.STRING,
        service: Sequelize.STRING,
        situation: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'advertiser_id', as: 'advertiser' });
  }
}

export default Poster;