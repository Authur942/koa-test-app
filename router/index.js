const Router = require('koa-router')

let router = new Router()

/**
 * 接口开发
 */
// 登录
const loginApiConfig = require('../controller/login')

router.get('/api/login', loginApiConfig.loginSignIn)

module.exports = router