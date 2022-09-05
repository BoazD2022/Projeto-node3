const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    host: './tasks.sqlite',
    dialect:  'sqlite' 
  });

  module.exports = sequelize 