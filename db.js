const { Sequelize } = require("sequelize");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

module.exports = new Sequelize("postgres", "postgres", "nopoliceplease", {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: "postgres",
});
