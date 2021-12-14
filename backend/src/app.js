import express from 'express';
import path from 'path';
const cors = require('cors');
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files/campaigns',
      express.static(path.resolve(__dirname, '..', 'images', 'uploads', 'campaigns'))
    );
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'images', 'uploads'))
    );
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    // this.server.use(cors());
  }
}

export default new App().server;
