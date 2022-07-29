<template>
	<view >
		<navbar :leftIconBool='false' :rightBool='false' Navtitle='树蚁App下载' @back='back' :navBoolean='false'></navbar>
		<!-- <view class="status-contents">
		    <view class="status top-view"></view>  
			<view class="title" style="">
				<u-icon name="arrow-left" size="36"></u-icon>
				<text>树蚁App下载</text>
				<text></text>
			</view>
		</view> -->
		<view class="download" style="padding: 0 30rpx;">
			<view class="" style="padding: 70rpx 30rpx;">
				<view class="image" style="width: 146rpx;height:210rpx;margin: 0 auto;text-align: center;">
					<u-image mode='aspectFit' width="100%" height="210rpx" :src="src" style="margin-bottom: 16rpx;"></u-image>
					<text style="color: #0000000;font-weight: bold;font-size: 30rpx;">树蚁</text>
				</view>
				<view class="" style="text-align: center;margin-top: 70rpx;">
					<text>版本：{{version}}</text>
				</view>
			</view>
			<view class="" style="display: flex;justify-content: center;margin-bottom: 20rpx;">
				<view class="" @click="downloadApp" style="width:80%;height:60px;padding: 5px 0;border-radius: 10px;display: flex;align-items: center;justify-content: center;border: 1px solid #65B6FF;">
					<u-icon name="android-fill" size="60" color="#068dff" style="margin-right: 20rpx;"></u-icon>
					<text style="font-size:30rpx;color: #000000;font-size: 15px;font-weight: bold;">立即下载</text>
				</view>
			</view>
		</view>
		<u-mask :show="showTip" :mask-click-able='false' :custom-style="{background: 'rgba(149, 149, 149)'}">
			<view class="warp">
				 <view class="rect" style="position: fixed;right: 50px;top:112px;letter-spacing: 2px;">
					 <view class="" style="display: flex;align-items: center;position: relative;">
					 	<text style="font-size: 15px;color: #FFFFFF;">点击右上角</text>
						<view class="" style="background-color: #FFFFFF;margin: 0 4px;text-align: center;padding: 0 4px;">
							<uni-icons type="more-filled"></uni-icons>
						</view>
					 	<text style="font-size: 15px;color: #FFFFFF;">按钮,</text>
						<image lazy-load src="../../static/image/arrow.png" mode="" style="width: 144rpx;height: 173rpx;position: absolute;left: 100px;bottom: 25px;"></image>
					 </view>
					 <text style="font-size: 15px;color: #FFFFFF;">选择浏览器打开</text>
				 </view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:uni.getStorageSync('uploadLogo'),
				version:'1.1.28',
				showTip:false,//遮盖层是否展示
				isWeixin:false,//是否是在微信环境
			}
		},
		methods: {
			back(){
				// #ifdef H5
				uni.showToast({
					title:'无效',
					icon:'none'
				})
				// #endif
				// #ifdef APP-PLUS||MP-WEIXIN
				uni.navigateBack({
					delta:1
				})
				// #endif
			},
			downloadApp(){
				if(this.isWeixin){
					this.showTip=true
				}else{
					this.showTip=false
					location.href='https://app-1258143571.cos.ap-guangzhou.myqcloud.com/app/shoyii-doctor.apk'
				}
			},
			 isWx(){
				let en = navigator.userAgent.toLowerCase()
				// 匹配en中是否含有MicroMessenger字符串
				if (en.match(/MicroMessenger/i) == 'micromessenger') {//微信
					this.isWeixin=true
				}
				if(en.match(/MicroMessenger/i) != 'micromessenger'){
					this.isWeixin=false
					location.href='https://app-1258143571.cos.ap-guangzhou.myqcloud.com/app/shoyii-doctor.apk'
				}
			}, 
		},
		onLoad() {
			// #ifdef H5
			   this.isWx()
			// #endif
		},
	}
</script>

<style scoped lang="scss">
	.status-contents{
	    height: calc(var(--status-bar-height) + 88rpx);  
	}  
	.top-view{
	    width: 100%;  
	    position: fixed;  
	    top:0;  
	} 
	 .status{
	     height:var(--status-bar-height);  
	 }
	 .title{
	 	 width: 100%;  
	 	 position: fixed;  
	 	 top: var(--status-bar-height);  
		 height: 88rpx;
		 background-color: #fff;
		 line-height: 88rpx;
		 text-align: center;
		 display: flex;
		 justify-content: space-between;
		 padding: 0 30rpx;
	 }
</style>
