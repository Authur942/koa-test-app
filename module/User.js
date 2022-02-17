const mongoose = require('mongoose')

// 账户的数据库模型
let UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: Number,
  sex: String
})

let User = mongoose.model('UserAlls', UserSchema)

module.exports = User