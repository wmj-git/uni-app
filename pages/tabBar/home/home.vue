<template>
	<view class="page">
		<view>
			<uni-search-bar @input="input"></uni-search-bar>
			<!-- <text>当前输入为：{{ msg }}</text> -->
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				msg: '',
				user: ''
			}
		},
		methods: {
			input(res) {
				this.msg = res.value;
			}
		}
	}
</script>

<style scoped>
	
</style>
