module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    slug: {
      type: DataTypes.STRING
    }
  })

  Category.associate = function(models) {
    // associations can be defined here
  }

  return Category
}