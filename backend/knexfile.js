// Update with your config settings.

const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {

  test: {
    client: 'mysql',
    connection: {
      host: 'database',
      user: 'root',
      password: 'root',
      database: 'vehicles_api_test'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

  development: {
    client: 'mysql',
    connection: {
      host: 'database',
      user: 'root',
      password: 'root',
      database: 'vehicles_api'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

};
