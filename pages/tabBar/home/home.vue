<template>
	<view class="page">
		<view>
			<uni-search-bar @input="input"></uni-search-bar>
			<uni-grid :column="2" :highlight="true">
				<uni-grid-item v-for="(item, index) in dataList" :index="index" :key="index">
					<view class="grid-item-box">
						<text class="name">{{ item.name}}</text>
						<text class="age">{{ item.age }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script>
	import {
		test
	} from '../../../common/common/service.js'; // 局部引入
	export default {
		components: {},
		data() {
			return {
				msg: '',
				dataList: []
			}
		},
		methods: {
			input(res) {
				this.msg = res.value;
			}
		},
		onLoad() {
			// 获取用户列表
			test
				.get('/api/user/list')
				.then(res => {
					console.log('局部test 获取用户列表 get success----',res.data);
					this.dataList = res.data.data.list;
				})
				.catch(err => {
					console.log('局部test 获取用户列表 get fail----');
					console.log(err);
				});
		}
	}
</script>

<style scoped>
.name,.age{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
