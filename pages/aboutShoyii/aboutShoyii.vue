<template>
	<view class="page dark-page">
		<view class="" style="padding: 70rpx 30rpx;">
			<view class="image" style="width: 300rpx;height:300rpx;margin: 0 auto;">
				<u-image width="100%" height="300rpx" :src="src"></u-image>
			</view>
			<view class="" style="text-align: center;margin-top: 30rpx;">
				<text>版本：{{version}}</text>
			</view>
		</view>
		<!-- #ifdef APP-PLUS || H5 -->
		<view class="center-list-item dark-block dark-bottom-border" @tap='updataApp()'>
			<text class="list-text dark-font">检测更新</text>
			<uni-icons type="arrowright" size="34rpx" color="#333333" class='dark-font'></uni-icons>
		</view>
		<!-- #endif -->
		<view class="center-list-item dark-block dark-bottom-border" @tap='enterPage(index)' v-for="(item,index) in menu" :key='index' hover-class="bgColor darkbgColor">
			<text class="list-text dark-font">{{item.title}}</text>
			<uni-icons type="arrowright" size="34rpx" color="#333333" class='dark-font'></uni-icons>
		</view>
		<view class="componyMark">
			<view class="tip">
				<text @click="userAgree(0)">用户协议</text>
				<text style="margin: 0 20rpx;color: #DDDDDD;">|</text>
				<text @click="userAgree(1)">隐私政策</text>
			</view>
			<text>广州诺曼数字化医疗科技有限公司 版权所有</text>
		</view>
		<wechat-share ref='sonWechatShare' @shareWeixin='shareWeixin' @shareFriend='shareFriend' @cancelshare='cancelshare'></wechat-share>
		<!-- 客服的弹窗 -->
		<u-modal v-model="contactShow" title='联系方式' :show-cancel-button='true' :show-confirm-button='false' cancel-text='关闭' :mask-close-able='true'>
			<view class="slot-content" style="margin-top: 20rpx;">
				<u-subsection :list="list" :current="curNow" active-color="#69CDFF" @change="sectionChange"></u-subsection>
				<view class="" style="padding: 30rpx;">
					<!-- 微信添加 -->
					<view class="" v-if="curNow==0" style="display: flex;justify-content: center;align-items: center;">
						<!-- <view class="" @click="addWechat">
							<text>复制到微信</text>
						</view> -->
						<view class="" @click="addWechat" style="background-color: #69CDFF;color: #FFFFFF;margin-right: 30rpx;padding: 10rpx 20rpx;">
							<text>点击进入客服</text>
						</view>
					</view>
					<!-- 拨打电话 -->
					<view v-if="curNow==1" style="display: flex;justify-content: center;align-items: center;">
						<view class="" @click="callPhone" style="background-color: #69CDFF;color: #FFFFFF;margin-right: 30rpx;padding: 10rpx 20rpx;">
							<text>点击拨打电话</text>
						</view>
					</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {update} from '@/utill/tools/update/checkUpdate.js'
	export default {
		data() {
			return {
				src:uni.getStorageSync('uploadLogo'),
				menu:[
					{title:'功能介绍'},
					{title:'投诉'},
					// #ifdef APP-PLUS
					{title:'分享ShoYii'},
					{title:'小程序'},
					{title:' 给我评分'},
					// #endif
					{title:' 联系客服'},
				],
				version:'1.0.0',
				contactShow:false,
				list: [
					{
						name: '微信客服'
					}, 
					{
						name: '拨打电话'
					}
				],
				curNow: 0
			}
		},
		methods: {
			sectionChange(index) {
				console.log(index)
				this.curNow = index;
			},
			// 添加微信
			addWechat(){
				// #ifdef H5
				uni.setClipboardData({
				    data: '树蚁科技',
					success: (e) => {
						console.log(e)
					},
					complete:(e)=> {
						console.log(e)
					}
				});
				// #endif
				// #ifdef APP-PLUS
				// 进入微信客服
				var sweixin = null;
				plus.share.getServices(function(res){
					var sweixin = null;  
					for(var i=0;i<res.length;i++){  
						var t = res[i];  
						if(t.id == 'weixin'){  
							sweixin = t;  
						}  
					}  
					console.log(sweixin)
					sweixin?sweixin.openCustomerServiceChat({
							corpid:'ww3c862994b46ac04a', //微信客服ID,企业id。
							url:'https://work.weixin.qq.com/kfid/kfc07321f0b00f3d24a',//微信客服的页面路径
					},res=>console.log(1,res),err=>console.log(2,err)):plus.nativeUI.alert('当前环境不支持微信操作!');
				},function(res){  
					console.log(res)
					console.log(JSON.stringify(res));  
				});
				// 跳转到微信，复制微信公众号
				// var isExit=plus.runtime.isApplicationExist({
				// 	pname:'com.tencent.mm',
				// 	action:'weixin://'
				// });
				// uni.setClipboardData({
				//     data: '树蚁科技',
				// 	success: (e) => {
				// 		console.log(isExit)
				// 		if(isExit){
				// 			plus.runtime.launchApplication({
				// 				name: '微信',  
				// 				 pname: 'com.tencent.mm',  
				// 				 scheme: 'weixin://'  
				// 			}, (Error)=>{console.log(Error)} );  
				// 		}else{
				// 			uni.showToast({
				// 				title:'检测到手机上未安装微信',
				// 				icon:'none'
				// 			})
				// 		}
				// 	},
				// 	complete:(e)=> {
				// 		console.log(e)
				// 	}
				// });
				// #endif
				// #ifdef MP-WEIXIN
				wx.openCustomerServiceChat({
					extInfo:{
						url:'https://work.weixin.qq.com/kfid/kfc07321f0b00f3d24a',
					},
					corpId:'ww3c862994b46ac04a',
					complete(res) {
						console.log(res)
						// res.errCode==0 成功
					},
				})
				// #endif
			},
			// 拨打电话
			callPhone(){
				uni.makePhoneCall({
				    phoneNumber: '020-89883433',
					complete:(e)=>{
						console.log(e)
					}
				});
			},
			updataApp(){
				plus.runtime.getProperty(plus.runtime.appid,(infor)=>{
					this.$myRequest({
						url:'/App/getDoctorIosAppLatestEdition',
					}).then(res=>{
					 console.log(res)
					 if(res.data.code==0){
						 var type=res.data.object.updateType//更新方式，1是整包更新 2是资源热更新
						 if(type=='1'){
							 var url=res.data.object.latestDoctorPkgDownloadUrl
						 }else{
							 var url=res.data.object.updateUrl//热更新
						 }
						 console.log(type,url)
						 if(infor.version<res.data.object.codeVersion){
							 uni.showModal({
								title:'新版发布',
								content:'发现重要版本，请马上升级',
								cancelText:'取消更新',
								confirmText:'确定更新',
								success(e){
									console.log(e)
									if(e.confirm){//确定下载	
									  update(type,url) //下载
									}
								},
								fail(e){
									console.log(e)
								}
							 })
						 }else{//最新版本
							uni.showToast({
								title:'当前为最新版本',
								icon:'none'
							}) 
						 }
					 }
					}).catch(err=>{
						console.log(err)
					})
				})
			},
			enterPage(index){
				if(index==0){//功能介绍
					uni.navigateTo({
						url:'/pages/aboutShoyii/introduce'
					})
				}else if(index==1){//投诉
					uni.navigateTo({
						url:'/pages/aboutShoyii/complain'
					})
				}
				// #ifdef APP-PLUS
				else if(index==2){//分享shoyii
					this.$refs.sonWechatShare.open()
				}else if(index==3){//进入小程序
					plus.share.getServices(function(res){  
						console.log(res)
						var sweixin = null;  
						for(var i=0;i<res.length;i++){  
							var t = res[i];  
							if(t.id == 'weixin'){  
								sweixin = t;  
							}  
						}  
						if(sweixin){  
							sweixin.launchMiniProgram({  
								id: 'gh_088556d792b9',  
								path:"/pages/index/index",
								type: 0   
							});  
						}  
					},function(res){  
						console.log(res)
						console.log(JSON.stringify(res));  
					});
				}else if(index==4){//给我评分
					let appleId= 1569553374
					plus.runtime.launchApplication({
						action:`itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8&action=write-review`
					},function(err){
						console.log(err)
					})
				}
				// #endif
				else if(index==5){//联系客服
					this.contactShow=true
				}
			},
			shareWeixin(){
				uni.share({
					provider:'weixin',
					title:'树蚁医生',
					type:0,
					href:this.$onlineUrl+'pages/download/download',
					summary:'树蚁医疗是一个方便医生进行精准外科三维数据展示与运用，从而关联XR影像系统，自研三维重建系统。真正帮助医生阅读精准三维诊断数据，精准外科学习与运用以及医患沟通',
					scene:'WXSceneSession',
					imageUrl:'/static/image/shoyiilogo.png',
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
					}
				})
			},
			shareFriend(){
				uni.share({
					provider:'weixin',
					title:'树蚁医生',
					type:0,
					href: this.$onlineUrl+'pages/download/download',
					summary:'树蚁医疗是一个方便医生进行精准外科三维数据展示与运用，从而关联XR影像系统，自研三维重建系统。真正帮助医生阅读精准三维诊断数据，精准外科学习与运用以及医患沟通',
					scene:'WXSenceTimeline',
					imageUrl: '/static/image/shoyiilogo.png',
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
					}
				})
			},
			cancelshare(){
				this.$refs.sonWechatShare.close()
			},
			userAgree(index){
				if(index==0){//用户协议
					uni.navigateTo({
						url:'/pages/aboutShoyii/userAgree'
					})
				}else if(index==1){//隐私政策
					uni.navigateTo({
						url:'/pages/aboutShoyii/privacyPolicy'
					})
				}
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
				plus.runtime.getProperty(plus.runtime.appid,(infor)=>{
					console.log(infor.version);
					this.version=infor.version
				})
			// #endif 
			// #ifdef MP-WEIXIN
			　　const accountInfo = wx.getAccountInfoSync();
			    // console.log(accountInfo)//miniProgram {appId: "wx347cba31a8aac486" envVersion: "develop"version: ""}
			　　this.version = accountInfo.miniProgram.version // 小程序 版本号
			// #endif
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped>
	.page{
		min-height: 100%;
	}
	.center-list-item {
		box-sizing: border-box;
		padding: 30rpx 30rpx;
		border-bottom: 1px solid #EEEEEE;
		align-items: center;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}
	.list-text {
		font-size: 30rpx;
		color: #000000;
		font-family: PingFang-SC-Regular;
		flex: 1;
		text-align: left;
	}
	.bgColor{
		background-color: #F8F8F8;
	}
	.componyMark{
		text-align: center;
		color: gray;
		font-size: 28rpx;
		padding: 30rpx 0;
	}
	.tip{
		padding: 10rpx 0;
		color: #86B0D4;
		font-size: 24rpx;
	}
</style>
