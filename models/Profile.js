const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Profile = db.define("Profile", {
  bio: {
    type: DataTypes.STRING,
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING,
  },
});

module.exports = Profile;
