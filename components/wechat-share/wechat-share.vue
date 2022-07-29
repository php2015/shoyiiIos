<template>
	<view class="">
		<u-popup v-model="shareshow" mode="bottom"  border-radius="14" @open="open" @close='close'>
			<view  class="dark-block" style="padding: 30rpx 30rpx;">
				<text>分享到:</text>
				<view class="" style="display: flex;justify-content: space-around;padding: 30rpx 0;">
					<view class="" v-if="ifThird.ifweixin" style="display: flex;flex-direction: column;line-height: 60rpx;align-items: center;" @click="shareWeixin">
						<!-- #ifdef H5 -->
						<svg class="icon" aria-hidden="true">
						  <use xlink:href='#iconweixin'></use>
						</svg>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS -->
						<image lazy-load src="../../static/image/wechat.png" mode="" style="width: 60rpx; height: 60rpx;"></image>
						<!-- #endif -->
						<text>微信</text>
					</view>
					<view class="" v-if="ifThird.ifweixin" style="display: flex;flex-direction: column;line-height: 60rpx;align-items: center;" @click="shareFriend">
						<!-- #ifdef H5 -->
						<svg class="icon" aria-hidden="true">
						  <use xlink:href='#iconpengyouquan' size='40'></use>
						</svg>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS -->
						<image lazy-load src="../../static/image/friend.png" mode="" style="width: 60rpx; height: 60rpx;"></image>
						<!-- #endif -->
						<text>朋友圈</text>
					</view>
				</view>
				<view class="" style="text-align: center;">
					<text @click="cancelshare">取消</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				shareshow:false,
				ifThird:{
					ifweixin:true,
					ifqq:true
				}
			}
		},
		props:{	
		},
		methods:{
			open(){
				this.shareshow=true
			},
			close(){
				this.shareshow=false
			},
			// 分享到微信聊天列表
			shareWeixin(){
				this.$emit('shareWeixin')
			},
			// 分享微信朋友圈
			shareFriend(){
				this.$emit('shareFriend')
			},
			shareQq(){
				// uni.share({
				//     provider: 'weixin',
				//     scene: "WXSceneSession",
				//     type: 5,
				//     imageUrl: 'https://shoyii-open-1258143571.cos.ap-guangzhou.myqcloud.com/images/e805d13aa09a421cbe92e3d3b21f93ae/0a95371a0a0e4bff8f96f27f188bcf49.jpg',
				//     title: '欢迎体验shoyii小程序',
				//     miniProgram: {
				//         id: 'gh_088556d792b9',
				//         path: 'pages/surgicalData/surgicalDetail?id=370',
				//         type: 0,
				//         webUrl: 'https://mobile.shoyii.com/#/'
				//     },
				//     success: ret => {
				//         console.log(JSON.stringify(ret));
				//     }
				// });
				uni.share({
					provider:'qq',
					title:'标题测试',
					type:0,
					href: 'http://uniapp.dcloud.io',
					summary:'我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！',
					imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png',
					success(e) {
						uni.showToast({
							title:'分享成功',
							icon:'none'
						})
						console.log(e)
					},
					fail(e) {
						uni.showToast({
							title:'分享失败',
							icon:'none'
						})
						console.log(e)
					},
					complete(e) {
						console.log('全返')
						console.log(e)
					}
				})
			},
			// 取消分享
			cancelshare(){
				this.$emit('cancelshare')
			},
		},
		created() {
			if(!getApp().globalData.ifThird.ifweixin){
				this.ifThird.ifweixin=false
			}
			if(!getApp().globalData.ifThird.ifqq){
				this.ifThird.ifqq=false
			}
		}
	}
</script>

<style scoped lang='scss'>
	.icon{
	  width: 1em;
	  height: 1em; 
	  font-size: 48rpx;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	}
</style>
