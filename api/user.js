import Request from 'luch-request' // 使用npm

const http = new Request();
http.get('/user/login', {
	params: {
		userName: 'name',
		password: '123456'
	}
}).then(res => {

}).catch(err => {

})
