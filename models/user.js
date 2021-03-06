'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING,
    profileImg: DataTypes.STRING,
    nickName: DataTypes.STRING,
    description: DataTypes.STRING,
    private:DataTypes.BOOLEAN,
  }, 
  {
    sequelize,
    modelName: 'user',
  });
  return user;
};