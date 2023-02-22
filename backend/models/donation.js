'use strict';

// const Project = require('../models').Project;
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Project, { foreignKey: 'projectId' });
    }
  }
  Donation.init({
    projectId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};