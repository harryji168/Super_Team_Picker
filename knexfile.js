module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'Super_Team_Picker',
      username:'harry',
      password:'12345678'
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
};