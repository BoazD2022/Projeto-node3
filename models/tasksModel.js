const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Tasks extends Model {}

Tasks.init({
  
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN
   
  }
}, {
  
  sequelize, 
  modelName: 'Tasks' 
});
module.exports = Tasks