var path = require('path');
var session = require('express-session');
var mongoose = require('mongoose');
var crypto = require('crypto');
var bcrypt = require('bcryptjs')

var user = require('../model/base').user;

var md5 = crypto.createHash('md5'); 

exports.main = function (req, res) {
	res.send('asdasdERER');
	/*new user({
		userid: 'rt11243215',
		password: '4532154321'
	}).save(function (err) {
		if (err) {
			console.log('储存失败');
		}else {
			console.log('储存成功');
		};
	});*/
}

exports.signUp = function (req, res) {
	var data = req.body;
	bcrypt.hash(data.password, 10, function (err, hash) {
		console.log(hash);
	});
	if (data.username.length < 6 || data.username.length > 15) {
		res.send('用户名长度必须大于6,小于15');
	} else {
		/*md5.update(data.password);
		var d = md5.digest('sha1');*/
		new user({
			user_name: data.username,
			user_email: data.usermail,
			password: data.password
		}).save();
		res.send('注册成功');
	}
}

exports.signIn = function (req, res) {
	var data = req.body;
	/*md5.update(data.password);
	var d = md5.digest('sha1');*/
	var filter = user.find({user_name: data.username, password: data.password}, function (err, doc) {
		if (doc.length === 0) {
			res.send('账号密码错误');
		} else {
			res.send('账号密码正确');
		}
		console.log(err, doc);
	});
	
}

