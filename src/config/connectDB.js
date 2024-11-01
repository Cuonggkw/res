require("dotenv").config();
const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("restaurant", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
  port: 3306,
  dialectOptions: {
    connectTimeout: 60000, // 60 giây
  },
  dialectModule: require("mysql2"),
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
