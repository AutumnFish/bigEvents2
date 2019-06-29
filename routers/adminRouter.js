const express = require('express')
const router = express.Router()
const path = require('path')
// 导入控制器
const adminController = require(path.join(
  __dirname,
  '../controller/adminController.js'
))
// 导入验证中间件
const v = require(path.join(__dirname, '../utils/validateMiddleware.js'))

// 用户登录
router.post(
  '/login',
  v.checkIsUndefined(['username', 'password']),
  v.checkIsEmpty(['username', 'password']),
  adminController.login
)
// 用户登出
router.get('/logout',adminController.logout)
// 获取用户信息
router.get('/getuser',adminController.getuser)

module.exports = router
