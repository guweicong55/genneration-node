/*
	使用mongoose链接数据库
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
	user_name: { type: String },
	user_email: { type: String },
	password: { type: String },
	creat_at: { type: Date, default: Date.now}
},{
	//去除数据库的_v
	versionKey: false
});

exports.user = mongoose.model('user', user);