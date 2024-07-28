module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  return Users
}