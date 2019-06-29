// 导入路径模块
const path = require('path')
// 导入模型
const { User, Category } = require('../model/db/index')

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
    // 非空判断
    if (data.length == 0) {
      await User.create({
        username: 'admin',
        nickname: 'jack',
        email: 'jack@qq.com',
        userpic: 'admin.png',
        password: '123456'
      })
    }
    const users = await User.findAll({})
    return res.send({
      msg: '获取成功',
      code: 200,
      data: users[0]
    })
  },
  // 获取分类
  async category_search(req, res) {
    // res.send('/category_search')
    let data = await Category.findAll()
    res.send({
      msg: '获取成功',
      code: 200,
      data
    })
  },
  // 新增分类
  async category_add(req, res) {
    // 接收参数
    const { name, slug } = req.body
    // 判断是否存在
    try {
      await Category.create({
        name,
        slug
      })
      return res.send({
        code: 201,
        msg: '创建成功'
      })
    } catch (error) {
      return res.send({
        code: 400,
        msg: 'name,slug不能重复哦'
      })
    }
  }
}
