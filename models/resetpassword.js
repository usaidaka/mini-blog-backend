"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResetPassword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ResetPassword.belongsTo(models.User, {
        foreignKey: "UserId",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  ResetPassword.init(
    {
      UserId: DataTypes.INTEGER,
      otp: DataTypes.STRING,
      otpCreatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ResetPassword",
    }
  );
  return ResetPassword;
};
