module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("Patient", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
      contactNumber: {
        type: DataTypes.STRING,
      },
    });
    return Patient;
  };
  