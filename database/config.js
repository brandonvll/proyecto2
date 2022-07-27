const { Sequelize, DataTypes } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const db = new Sequelize({
  dialect: "postgres",
  host: process.env.SECURITY_HOST,
  username: process.env.SECURITY_USER,
  password: process.env.SECURITY_PASSWORD,
  port: process.env.SECURITY_PORT,
  database: process.env.SECURITY,
  logging: false,
  dialectOptions:
    process.env.NODE_ENV === "production"
      ? {
          ssl: {
            required: true,
            rejectUnauthorized: false,
          },
        }
      : {},
});

module.exports = { db };
