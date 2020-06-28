<template>
	<view class="page">
		<view class="user">
			<button v-if="this.user == ''" class="login" @click="loginFn">点击登录</button>
			<view v-else-if="this.user !== ''">
				<text>当前用户： {{ user }} </text>
				<navigator url="../../login/login" class="exit" @click="exit">退出登录</navigator>
			</view>
		</view>
		<view>
			<uni-search-bar @input="input"></uni-search-bar>
			<!-- <text>当前输入为：{{ msg }}</text> -->
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		components: {},
		data() {
			return {
				msg: '',
				user: ''
			}
		},
		computed: {
			...mapState(['hasLogin']),
			...mapGetters(['currentColor'])
		},
		onLoad() {
			uni.getStorage({
				key: 'user',
				success: (res) => {
					this.user = res.data
				}
			})
		},
		onUnload() {
			// 移除监听事件  
			uni.$off('userInfo');
		},
		methods: {
			input(res) {
				this.msg = res.value;
			},
			loginFn() {
				uni.navigateTo({
					url: '../../login/login'
				})
			},
			exit() {
				this.user = ''
				uni.removeStorage({
					key: 'user'
				});
			}
		}
	}
</script>

<style scoped>
	.page {
		padding: 15rpx;
	}

	.user {
		width: 100%;
	}

	.login {
		width: 200rpx;
		margin-right: 10px;
		margin-top: 10px;
	}

	.exit {
		float: right;
		margin-right: 20rpx;
		color: #0A98D5;
	}
</style>
