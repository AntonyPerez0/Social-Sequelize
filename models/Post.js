const { DataTypes } = require("sequelize");
const { db } = require("../db/connection");

const Post = db.define("Post", {
  title: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.STRING,
  },
});

module.exports = Post;
