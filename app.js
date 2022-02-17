const Koa = require('koa')
const fs = require('fs')
// const Routes = require('./router/index')
// 解析ctx.body的中间件
const bodyParser = require('koa-bodyparser')
// 跨域中间件
// const cors = require('koa-cors')
const mongoose = require('mongoose')

// !实例化koa
const app = new Koa()

const port = process.env.PORT || 4000

app.use(async (ctx, next) => {
	await next()
	ctx.response.type = 'application/json;chartset=UTF-8'
})

const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

// !链接数数据库
mongoose.connect('mongodb://127.0.0.1/koa-test-app', dbOptions).then(
	() => {
		console.info('connect success message: MongoDB is ready!')
	},
	err => {
		console.error('connect error:', err)
	}
)

// !bodyParser中间件需要在加载路由之前加载
app.use(bodyParser())

// !配置并初始化路由中间件，加载路由中间件
const router = require('./routes/router')()
app.use(router.routes()).use(router.allowedMethods())

// !错误处理
app.on('error', (err, ctx) => {
	console.log(`server Error: ${err}`)
})

// !设置端口检测
app.listen(port, () => {
	console.log(`server start on ${port}!`)
})
