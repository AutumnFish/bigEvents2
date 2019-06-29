const path = require('path')
const { Sequelize, sequelize } = require(path.join(__dirname, './db.js'))

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_pic: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
async function init() {
  const data = await User.findAll()
  if (data.length == 0) {
    const admin = await User.create({
      username: 'admin',
      nickname: '管理员',
      email: 'jack@qq.com',
      password: '123456',
      user_pic: 'admin.png'
    })
  }
  return true
}
// 暴露出去
module.exports = {
  User,
  login({ username, password }) {
    // 初始化
    if (init()) {
      return User.findAll({
        where: {
          username,
          password
        },
        attributes: ['id','username', 'password', 'nickname', 'email']
      })
    }
  },
  async getuser() {
    if (init()) {
      const users = await User.findAll({
        attributes: ['id','username', 'password', 'nickname', 'email']
      })
      return users[0]
    }
  }
}
