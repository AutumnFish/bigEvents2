const express = require('express')
const router = express.Router()
const path = require('path')
const adminController = require(path.join(__dirname,'../controller/adminController.js'))

// 用户登录
router.post('/login',adminController.login)


module.exports = router