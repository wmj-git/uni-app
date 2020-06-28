import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		status:'',
		loginUser: {},
		openid: null,
		testvuex: false,
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF']
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading';
		},
		login(state, user) {
			state.hasLogin = true;
			state.loginUser = user;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state) {
			state.testvuex = true
		},
		setTestFalse(state) {
			state.testvuex = false
		},
		setColorIndex(state, index) {
			state.colorIndex = index
		}
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		}
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function() { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		Login({
			commit
		}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				// 向后端发送请求，验证用户名密码是否正确，请求成功接收后端返回的token值，利用commit修改store的state属性，并将token存放在localStorage中
				axios.post('login', user)
					.then(resp => {
						const token = resp.data.token
						const user = resp.data.user
						localStorage.setItem('token', token)
						// 每次请求接口时，需要在headers添加对应的Token验证
						axios.defaults.headers.common['Authorization'] = token
						// 更新token
						commit('auth_success', token, user)
						resolve(resp)
					})
					.catch(err => {
						commit('auth_error')
						localStorage.removeItem('token')
						reject(err)
					})
			})
		}
	}
})

export default store
