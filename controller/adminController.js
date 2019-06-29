module.exports = {
  login(req, res) {
    // 接收数据
    const { username, password } = req.body
    // 正确性判断
    if (username == 'admin' && password == '123456') {
      return res.send({
        msg: '登录成功',
        code: 200
      })
    }
    return res.send({
      msg: '用户名或密码错误',
      code: 400
    })
  }
}
