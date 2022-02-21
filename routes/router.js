const Router = require('koa-router')

// const home = require('./home')()
// const page = require('./page')()
const api = require('./userRouter')()

// 装载所有的路由
module.exports = () => {
  let router = new Router()
  // router.use('/', home.routes(), home.allowedMethods())
  // router.use('/page',page.routes(), page.allowedMethods())
  router.use('/api',api.routes(), api.allowedMethods())
  return router
}