// 导入express
const express = require('express')
// 导入morgan 日志中间件
const morgan = require('morgan')
// 导入bodyParser 解析post数据
const bodyParser = require('body-parser')
// 导入path 
const path = require('path')
// 导入路由中间件
const adminRouter = require(path.join(__dirname,'./routers/adminRouter'))

// 服务器对象
const app = express()

// 注册中间件 日志中间件
app.use(morgan('tiny'))
// 注册中间件 解析post文本
app.use(bodyParser.urlencoded({ extended: false }))
// 注册中间件 admin路由
app.use('/admin',adminRouter)


// 监听
app.listen(8000,()=>{
  console.log('succss')
})