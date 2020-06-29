import Request from 'luch-request' // 使用npm

const request = new Request();
request.get('/user/login', {
	params: {
		userName: 'name',
		password: '123456'
	}
}).then(res => {
	console.log('请求接口', res);
}).catch(err => {

})
