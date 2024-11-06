const { Sequelize } = require("sequelize");

const db = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
});

module.exports = {
  db,
};
