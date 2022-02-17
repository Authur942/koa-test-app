const Router = require('koa-router')

const setController = require('../controllers/setController')

module.exports = () => {
	const api = new Router()
	api.get('/settings', setController.getSettings)

	return api
}
