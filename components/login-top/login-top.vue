<template>
	<view class="header">
		<uni-icons type="closeempty" size="28" @click="close" class='dark-font'></uni-icons> 
		<text @click="register" class="tip dark-font">注册</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			close(){
				this.$emit('close')
			},
			register(){
				this.$emit('register')
			}
		},
		
	}
</script>

<style scoped>
	/* #ifdef MP-WEIXIN */
	.header{
		margin-top: 100rpx;
	}
	/* #endif */
	.header{
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		/* line-height: 80rpx; */
		position: fixed;
		top: 60rpx;
		left: 0px;
		right: 0px;
	}
	.header .tip{
		display: block;
		color: #000000;
		font-size: 32rpx;
	}
</style>
