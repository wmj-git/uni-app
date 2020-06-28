<template>
	<view class="uni-container">
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				<text class="uni-panel-text">{{item.name}}</text>
				<text class="uni-panel-icon uni-icon">&#xe470;</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				navigateFlag: false,
				lists: [{
					name: "购物车",
					url: "shopCar"
				},
				{
					name:'获取手机系统信息',
					url:'get-system-info'
				},
				{
					name: "公告",
					url: "notice-bar"
				}]
			}
		},
		methods: {
			goDetailPage(path) {
				console.log(123, path);
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				uni.navigateTo({
					url: '/pages/view/' + path + '/' + path
				});
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			}
		},
	}
</script>

<style>
	@import '../../../common/uni-nvue.css';
	.uni-panel-h{
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	   -webkit-flex-shrink: 0;
	    flex-shrink: 0; 
	    -webkit-box-flex: 0;
	    -webkit-flex-grow: 0;
	    flex-grow: 0;
	    -webkit-flex-basis: auto;
	    flex-basis: auto;
	    -webkit-align-content: flex-start;
	    align-content: flex-start;
	}
</style>
