require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DEV_DB,
    },
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },

  test: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_TEST_DB,
    },
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },
};
