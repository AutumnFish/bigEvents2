const Sequelize = require('sequelize');
const UserModel = require('./models/user.js');
const CategoryModel = require('./models/category.js');
const {host,username,password,database,dialect} = require('../../config/config.json')

const sequelize = new Sequelize(database,username,password,{
  host,
  dialect,
  define: {
    charset:'utf8',
    timestamps: false
  }
});

const User = UserModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);

User.associate(Category)


module.exports = {
  sequelize,
  Sequelize,
  User,
  Category
}