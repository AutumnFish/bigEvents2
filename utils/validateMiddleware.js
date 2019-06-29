module.exports = {
  // 验证文本 是否为undefined
  checkIsUndefined(keyArr) {
    return (req, res, next) => {
      // 获取参数
      let paramsArr = keyArr.map(v => req.body[v])
      // undefined判断
      let undefinedIndex = paramsArr.indexOf(undefined)
      if (undefinedIndex != -1) {
        return res.send({
          msg: `参数 ${keyArr[undefinedIndex]} 没有传递`,
          code:400
        })
      }
      // 下一个
      next()
    }
  },
  // 验证文本 是否为空字符串
  checkIsEmpty(keyArr) {
    return (req, res, next) => {
      // 获取参数
      let paramsArr = keyArr.map(v => req.body[v].trim())
      // undefined判断
      let emptyIndex = paramsArr.indexOf('')
      if (emptyIndex != -1) {
        return res.send({
          msg: `参数 ${keyArr[emptyIndex]} 不能为空`,
          code:400
        })
      }
      // 下一个
      next()
    }
  }
}
