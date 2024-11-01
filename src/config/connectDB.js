require("dotenv").config();
const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("restaurant", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
  pool: {
    max: 100,
    min: 0,
    acquire: 1000000,
    idle: 100000,
    evict: 2000,
  },
  port: process.env.PORT || 3306,
  dialectOptions: {
    decimalNumbers: true,
  },
});

let connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connect;
