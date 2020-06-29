<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="demo">
				<block v-if="imageSrc">
					<image :src="imageSrc" class="image" mode="widthFix"></image>
				</block>
				<block v-else>
					<button @click="upload">选择图片上传</button>
				</block>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'uploadFile',
				imageSrc: ''
			}
		},
		onUnload() {
			this.imageSrc = '';
		},
		methods: {
			upload() {
				let that = this;
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						console.log(res);

						that.$http
							.upload('/api/upload/img', {
								filePath: res.tempFilePaths[0],
								name: 'file'
							})
							.then(res => {
								console.log('全局http 上传 get success----');
								console.log(res);
							})
							.catch(err => {
								console.log('全局http 上传 fail----');
								console.log(err);
							});
					}
				});
			}
		}
	}
</script>

<style>
	.image {
		width: 100%;
	}

	.demo {
		background: #FFF;
		padding: 50rpx;
	}
</style>
