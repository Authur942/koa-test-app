const ModelUser = require('../model/user')

let loginSignIn = async ctx => {
	let requestBody = ctx.request.body
	await ModelUser.find({ username: requestBody.username, password: requestBody.password }, (err, res) => {
		if (!err && res.length === 1) {
			ctx.body = {
				status: 200,
				result: {
					code: 1,
					userInfo: res[0],
					message: '登录成功'
				}
			}
		} else {
			ctx.body = {
				status: 200,
				result: {
					code: 0,
					message: '登录异常'
				}
			}
		}
	})
}

const adminApiConfig = {
	loginSignIn
}

module.exports = adminApiConfig
