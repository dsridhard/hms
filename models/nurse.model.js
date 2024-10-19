module.exports = (sequelize, DataTypes) => {
    const Nurse = sequelize.define("Nurse", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      dob: {
        type: DataTypes.DATE,
      },
      dept: {
        type: DataTypes.STRING,
      },
      contactNumber: {
        type: DataTypes.STRING,
      },
    });
    return Nurse;
  };
  