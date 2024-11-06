const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
