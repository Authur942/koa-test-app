const Koa = require('koa')
// const Routes = require('./router/index')
// const bodyParse = require('koa-bodyparser') //解析ctx.body的中间件
// const cors = require('koa-cors') // 跨域中间件


// 实例化koa
const app = new Koa()

const port = process.env.PORT || 4000

// 使用ctx.body解析中间件
// app.use(bodyParse())
// // 使用跨域中间件，解决跨域问题
// app.use(cors())

// 配置并初始化路由中间件
const router = require('./routes/router')()
app.use(router.routes()).use(router.allowedMethods())

// 错误处理
app.on('error', (err,ctx) => {
  console.log(`server Error: ${err}`)
})


// 设置端口检测
app.listen(port, () => {
	console.log(`server start on ${port}`)
})
