// 导入路径模块
const path = require('path')
// 导入模型
const { User } = require('../model/db/index')
module.exports = {
  // 登录
  async login(req, res) {
    // 接收数据
    const { username, password } = req.body

    let data = await User.findAll()
    if (data.length == 0) {
      await User.create({
        username: 'admin',
        nickname: 'jack',
        email: 'jack@qq.com',
        userpic: 'admin.png',
        password: '123456'
      })
    }
    const user = await User.findAll({
      where: {
        username,
        password
      }
    })
    if (user.length == 0) {
      return res.send({
        msg: '用户名或密码错误',
        code: 400
      })
    }
    return res.send({
      msg: '登陆成功',
      code: 200
    })
  },
  // 登出
  logout(req, res) {
    res.send({
      msg: '登出成功',
      code: 200
    })
  },
  // 获取用户信息
  async getuser(req, res) {
    // 查询 并初始化
    let data = await User.findAll()
    if (data.length == 0) {
      await User.create({
        username: 'admin',
        nickname: 'jack',
        email: 'jack@qq.com',
        userpic: 'admin.png',
        password: '123456'
      })
    }
    const users = await User.findAll({
    })
    return res.send({
      msg:'获取成功',
      code:200,
      data:users[0]
    })
  }
}
