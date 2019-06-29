const Sequelize = require('sequelize')
const path = require('path')
const { database, username, password, host } = require(path.join(
  __dirname,
  '../config/config.json'
))

// Option 1: Passing parameters separately
module.exports = {
  sequelize: new Sequelize(database, username, password, {
    host: host,
    dialect: 'mysql',
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      // 显示修改和创建时间
      timestamps: true,
      // 强制更新
      sync: { force: true }
    }
  }),
  Sequelize
}
