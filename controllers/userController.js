const User = require('../module/User')
const _ = require('loadsh')
const xss = require('xss')

// 获取用户列表
exports.getUserList = async (ctx, next) => {
	let val = null
	const data = await User.find()
	console.log('data', data)
	const result = {
		code: 200,
		response: data
	}
	ctx.response.body = result
	return result
}
// 添加用户
exports.addUser = async (ctx, next) => {
	let val = null
	const jsonRequestBody = ctx.request.body
	console.info(jsonRequestBody.username)
	let newUser = new User({
		username: xss(_.trim(jsonRequestBody.username)),
		password: xss(_.trim(jsonRequestBody.password)),
		email: xss(_.trim(jsonRequestBody.email)),
		age: xss(_.trim(jsonRequestBody.age)),
		sex: xss(_.trim(jsonRequestBody.sex))
	})
	let data = await newUser.save()
	console.log('data', data)
	const result = {
		code: 200,
		response: data,
		ts: 12345
	}
	ctx.response.body = result
	return result
}
// 删除用户
exports.deleteUser = async (ctx, next) => {
	let val = null
	const data = await User.remove({ _id: ctx.params.id })
	const result = {
		code: 200,
		response: data
	}
	ctx.response.body = result
	return result
}
// 更新用户
exports.updateUser = async (ctx, next) => {
	let val = null
	const jsonRequestBody = ctx.request.body
	console.info(jsonRequestBody.username)
	const data = await User.updateOne(
		{
			_id: xss(_.trim(jsonRequestBody.id))
		},
		{
			$set: {
				username: xss(_.trim(jsonRequestBody.username)),
				password: xss(_.trim(jsonRequestBody.password)),
				email: xss(_.trim(jsonRequestBody.email)),
				age: xss(_.trim(jsonRequestBody.age)),
				sex: xss(_.trim(jsonRequestBody.sex))
			}
		}
	)
  console.log('data', data)
  const result = {
    code: 200,
    response: data
  }
  ctx.response.body = result
  return result
}
// 根据id获取用户信息
exports.getUserInfoById = async (ctx,next) => {
  let val = null
  console.log(ctx.params.id)
  const data = await User.findOne({_id: ctx.params.id})
  console.log('data',data)
  const result = {
    code: 200,
    response: data
  }
  ctx.response.body = result
  return result
}
