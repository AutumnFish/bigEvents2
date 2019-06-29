// 导入路径模块
const path = require('path')
// 导入模型
const User  = require(path.join(__dirname, '../model/userModel.js'))
module.exports = {
  // 登录
  async login(req, res) {
    // 接收数据
    const { username, password } = req.body
    
    let user = await User.login({username,password})
    if(user.length==0){
      return res.send({
        code:400,
        msg:'用户名或密码不对'
      })
    }
    return res.send({
      code:200,
      msg:'登陆成功'
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
    const data = await User.getuser()
    // 查找数据
    res.send({
      msg:'获取成功',
      code:200,
      data
    })
    

    // res.send('/getuser')
  }
}
