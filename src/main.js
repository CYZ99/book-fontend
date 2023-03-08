const app = require('./app')

app.listen(3005, () => {
	console.log('服务器启动成功', `localhost:${3005}`);
});
