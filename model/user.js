const mongoose = require('mongoose')

let contentUrl = 'mongodb://localhost/admin'

//链接数据库
mongoose.connect(contentUrl).catch(err => console.log(err))

// mongoose.set('useCreateIndex', true)
// 建立数据库模型
const userSchem = new mongoose.Schema({
  username: {
    type: String,
    default: 'admin'
  },
  userage: {
    type: Number,
    default: 0
  },
  usersex: {
    type: Number, //1 男 2 女 3 未知
    default: 3
  },
  userphone: {
    type: String,
    default: ''
  },
  usernick: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: '123456'
  }
})
// 到处模型
const UserModel = mongoose.model('users', userSchem)
module.exports = UserModel