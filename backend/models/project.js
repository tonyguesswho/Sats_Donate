'use strict';

// const Donation = require('../models').Donation;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Donation, { foreignKey: 'projectId',as: 'donations' });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    balance: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project
};