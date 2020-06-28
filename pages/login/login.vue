<template>
	<view class="login_page">
		<form class="login_form">
			<view class="uni-form-item uni-column">
				<view class="title">用户:</view>
				<input class="uni-input" name="nickname" placeholder="请输入用户名" type="text" v-model="userName" auto-focus="true" />
			</view>
			<view class="uni-form-item uni-column">
				<view class="title">密码:</view>
				<input class="uni-input" name="nickname" placeholder="请输入密码" type="password" v-model="password" />
			</view>
			<view class="login_group">
				<button form-type="reset" class="login_btn" @click="reset">Reset</button>
				<button form-type="submit" class="login_btn login_submit" @click="submit">Login</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				userName: '',
				password: ''
			}
		},
		created() {},
		methods: {
			submit() {
				// let params = {
				// 	'username': this.userName,
				// 	'password': this.password
				// };
				// uni.request({
				// 	url: 'api/login',
				// 	method: 'GET',
				// 	header: {
				// 		'custom-header': 'hello' //自定义请求头信息
				// 	},
				// 	dataType: 'json',
				// 	data: params,
				// 	success: (res) => {
				// 		if (res.statusCode === 200) {
				// 			uni.switchTab({ // 跳转tabBar只能使用switchTab，不能使用navigateTo
				// 				url: '../tabBar/home/home'
				// 			});
				// 		}
				// 	}
				// })
				if (this.userName && this.userName === 'admin' && this.password && this.password === '123456') {
					uni.switchTab({ // 跳转tabBar只能使用switchTab，不能使用navigateTo
						url: '../tabBar/home/home'
					});
					uni.setStorage({
					    key: 'user',
					    data: this.userName,
					    success: function () {
					        console.log('success');
					    }
					});
				} else if (this.userName === '') {
					uni.showToast({
						title: '用户名不能为空',
						icon: 'none'
					})
				} else if (this.password === '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none'
					})
				} else {
					uni.showToast({
						title: '用户名或密码错误',
						icon: 'none'
					})
				}
			},
			reset() {
				this.userName = '',
					this.password = ''
			}
		},
	}
</script>

<style lang="scss">
	.login_page {
		box-shadow: inset 0 0 30px #a9a9ac;
		height: 220px;
		padding: 30px 10px;

		.uni-form-item {
			display: inline-block;
		}

		.login_group {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.uni-input {
			background-color: transparent;
		}

		.login_btn {
			width: 150px;
			float: left;

			&.login_submit {
				margin-right: 10px;
			}
		}
	}
</style>
