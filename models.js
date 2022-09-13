const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
  },
  chatId: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.CHAR(100), allowNull: false },
});

module.exports = User;
