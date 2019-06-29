module.exports = {
  login(req,res){
    // 接收数据
    const {username,password} = req.body

    // 返回
    res.send('/login')
  }
}