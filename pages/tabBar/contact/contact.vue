<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item banner banner_one"></view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item banner banner_two">
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item banner banner_three">
				</view>
			</swiper-item>
		</swiper>
		<view class="example-body">
			<uni-grid :column="3" :highlight="true" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<image :src="item.url" class="image" mode="aspectFill" />
						<text class="text">{{ item.text }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
		<uni-pagination title="" show-icon="" total="" current=""></uni-pagination>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				list: [{
						text: 'Grid1',
						url: '../../../static/c1.png'
					},
					{
						text: 'Grid2',
						url: '../../../static/c2.png'
					},
					{
						text: 'Grid3',
						url: '../../../static/c3.png'
					}
				]
			}
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			}
		},
	}
</script>

<style scoped>
	.banner {
		height: 350rpx;
	}

	.banner_one {
		background-color: #3F536E;
	}

	.banner_two {
		background-color: #333333;
	}

	.banner_three {
		background-color: #808080;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.grid-item-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 29px 0;
	}

	.image {
		width: 50rpx;
		height: 50rpx;
	}

	.text {
		font-size: 26rpx;
		margin-top: 10rpx;
	}
</style>
