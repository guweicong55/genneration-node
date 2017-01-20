var views = require('../app/controller/views');
var mongoose = require('mongoose');

//链接数据库
var db = mongoose.connect('mongodb://localhost/node');
db.connection.on('error', function (err) {
	console.log('数据库连接失败' + err);
});
/*db.connection.on('open', function () {
	console.log('数据库链接成功');
});*/

module.exports = function (app) {
	app.get('/', views.main);
	app.post('/signup/', views.signUp);
	app.post('/signin/', views.signIn);
} 