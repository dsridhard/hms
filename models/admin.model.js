module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adminType: {
        type: DataTypes.STRING,
      },
    });
    return Admin;
  };
  