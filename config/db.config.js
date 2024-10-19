// config/db.config.js
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "RootAdmin@123",
    DB: "hospital_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  