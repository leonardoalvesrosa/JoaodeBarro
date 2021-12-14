import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Poster from '../app/models/Poster';
import Campaign from '../app/models/Campaign';
import Material from '../app/models/Material';

import databaseConfig from '../config/database';

const models = [User, File, Poster, Campaign, Material];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
