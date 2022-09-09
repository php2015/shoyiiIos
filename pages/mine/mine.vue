<template>
	<view class="center dark-page">
		<u-navbar class="navBar" :is-back="false"  title="" title-color="#000000" :background="$store.getters.isDark?darkbackground:background">
			<view class="slot-wrap">
				<text class="iconfont iconsaoyisao dark-font" @tap="scan"></text>
				<text style="font-weight: bold;" class="dark-font">个人中心</text>
				<text class="iconfont iconxiaoxi dark-font" @tap="notice"></text>
			</view>
		</u-navbar>
		<view class="logo dark-block" :hover-class="!login ? 'logo-hover':''">
			<image lazy-load @click="previewPic(uerInfo.avatarUrl)" class="logo-img" :src="login ? uerInfo.avatarUrl :avatarUrl"></image>
			<view class="logo-title" v-if="!login" @tap="goLogin">
				<text class="uer-name dark-font">您未登录</text>
				<text class="go-login navigat-arrow dark-font" >&#xe65e;</text>
			</view>
			<view class="logo-title" v-else @tap="amendInfor">
				<view class="logoName">
					<text class="uer-name dark-font">{{uerInfo.name||'未填写'}}</text>
					<view class="docInfor dark-font">
						<text class="text1">{{uerInfo.department||'未填写'}}</text>
						<text class="text2">|</text>				
						<text class="text3">{{uerInfo.hospital||'未填写'}}</text>
					</view>
				</view>
				<text class="go-login navigat-arrow dark-font" >&#xe65e;</text>
			</view>
		</view>
		<view class="center-list dark-block">
			<view class="center-list-item dark-bottom-border" @tap='enterPage(index)' v-for="(item,index) in listTop" :key='index' hover-class="bgColor darkbgColor">
				<!-- <svg class='list-icon' aria-hidden="true">
					<use :xlink:href="'#'+item.icon"></use>
				</svg> -->
				<image :src="$store.getters.isDark?item.dark_url:item.url" mode="scaleToFill" class="image_icon"></image>
				<text class="list-text dark-font">{{item.title}}</text>
				<text class="navigat-arrow dark-font">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list dark-block">
			<view class="center-list-item dark-bottom-border" @tap='enterPageBottom(index)' v-for="(item,index) in listBottom" :key='index' hover-class="bgColor darkbgColor">
				<image :src="$store.getters.isDark?item.dark_url:item.url" mode="scaleToFill" class="image_icon"></image>
				<text class="list-text dark-font">{{item.title}}</text>
				<text class="navigat-arrow dark-font">&#xe65e;</text>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<!-- <button type="default" open-type='launchApp' app-parameter="wechat" binderror="launchAppError">打开app</button> -->
		<!-- #endif -->
		<button class="exitBtn btn dark-block" v-if="login" @tap="switchLogin">切换账号</button>
		<button class="exitBtn dark-block" v-if="login" @tap="exitLogin">退出登录</button>
	</view>
</template>

<script> 
	import {doctorScan} from '@/utill/api/login/doctorScan.js'
	import {getInfor} from '@/utill/api/personalInfor/getInfor.js'
	import {aemdTabbar} from '@/utill/tools/checkdark.js'
	var loginRes;
	export default {
		data() {
			return {
				login: false,
				avatarUrl: "../../static/image/person.png",
				uerInfo: {},
				background: {
					backgroundColor: '#ffffff',
				},
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
				listTop:[
					{url:'/static/image/svg/surgical.svg',dark_url:'/static/image/svg/surgical_dark.svg',title:'我的方法库'},
					{url:'/static/image/svg/order.svg',dark_url:'/static/image/svg/order_dark.svg',title:'我的订单管理'},
					{url:'/static/image/svg/devicemanage.svg',dark_url:'/static/image/svg/devicemanage_dark.svg',title:'我的设备管理'},
				],
				listBottom:[
					{url:'/static/image/svg/account.svg',dark_url:'/static/image/svg/account_dark.svg',title:'账号安全'},
					{url:'/static/image/svg/general.svg',dark_url:'/static/image/svg/general_dark.svg',title:'通用'},
					{url:'/static/image/svg/aboutshoyii.svg',dark_url:'/static/image/svg/aboutshoyii_dark.svg',title:'关于树蚁'},
				],
				phone:'',//用于进入账号安全页面 
			}
		},
		methods: {
			// 扫一扫
			scan(){
				uni.scanCode({
					success(e) {
						console.log(e)
						console.log(e.errMsg)
						if(e.errMsg=='scanCode:ok'){
							console.log(JSON.parse(e.result))
							var uuid=JSON.parse(e.result).loginScanUUID
							var token=uni.getStorageSync('token')
							console.log(uuid)
							// console.log(uni.getStorageSync('token'))
							if(!token){
								// #ifdef APP-PLUS
								uni.showToast({
									title:'请先登录APP',
									icon:'none',
									duration:2000
								})
								// #endif
								// #ifdef MP-WEIXIN
								uni.showToast({
									title:'请先登录小程序',
									icon:'none',
									duration:2000
								})
								// #endif
								return
							}
							if(!uuid){
								uni.showToast({
									title:'扫码失败',
									icon:'none'
								})
								return
							}
							// 跳转登陆
							uni.navigateTo({
								url:'/pages/doctorLogin/doctorLogin?uuid='+uuid,
								animationType:'slide-in-top'
							})
						}else{//扫码失败
							uni.showToast({
								title:'fail',
								icon:'none'
							})
						}
					},
					fail(e){
						uni.showToast({
							title:'fail',
							icon:'none'
						})
					},
				})
			},
			// 消息
			notice(){
				uni.navigateTo({
					url:'/pages/notice/notice'
				})
			},
			// 预览头像
			previewPic(avatarUrl){
				console.log(avatarUrl)
				if(!avatarUrl){
					return
				}
				var Allarr=[]
				Allarr.push(avatarUrl)
				console.log(Allarr)
				uni.previewImage({
					current:0,//预览的第一张图，可以使index，可以是路径
					urls:Allarr,//必须是数组
					indicator:'number',
					loop:true,
					success(e){
						console.log(e)
					}
				})
			},
			// 登录
			goLogin(){
				// console.log(!this.login)
				if (!this.login) {//false未登录
					uni.navigateTo({
						url:"/pages/login/tellogin?pages="+'/pages/mine/mine'+'&pagetype='+1,
						animationType:'pop-in',
						success(e){},
						fail(error) {}
					})
				}
			},
			// 修改个人资料
			amendInfor(){
				uni.navigateTo({
					url:'/pages/PersonalInfor/PersonalInfor'
				})
			},
			// 我的设备管理
			enterPage(index){
				if(index==0){//我的手术方法库
					uni.navigateTo({
						url:'/pages/surgicalData/Mysurgical'
					})
				}
				if(index==1){//我的订单管理
					uni.navigateTo({
						url:'/pages/orderManage/orderManage'
					})
				}
				if(index==2){//我的设备管理
					uni.navigateTo({
						url:'/pages/deviceManage/deviceManage'
					})
				}	
			},
			enterPageBottom(index){
				if(index==0){//账号安全
					if(this.login){
						uni.navigateTo({
							url:'/pages/AccoutSecurity/AccoutSecurity?phone='+this.phone
						})
					}else{
						uni.navigateTo({
							url:'/pages/login/tellogin'
						})
						return
					}
				}else if(index==1){//通用
					uni.navigateTo({
						url:'/pages/GeneralSetting/GeneralSetting'
					})
				}else if(index==2){//关于树蚁
					uni.navigateTo({
						url:'/pages/aboutShoyii/aboutShoyii'
					})
				}
			},
			// 切换账号
			switchLogin(){
				// 切换成功后,进行登录状态的修正
				// this.$store.commit('hasLogin',true) //更改全局状态
				// console.log(this.$store.state.hasLogin)
				uni.navigateTo({
					url:'/pages/login/tellogin',
					success(e) {
						console.log('切换账号')
					},
					fail() {
						uni.showToast({
							title:'切换失败',
							icon:'none'
						})
					}
				})
			},
			// 退出登录
			exitLogin(){
				this.$myRequest({
					url:'/login/loginOut'
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						// 退出登录后,进行首页，病历数据为空的发送，以备账号切换时，重新进行数据刷新
						// this.$store.commit('hasLogin',true) //更改全局状态
						// console.log(this.$store.state.hasLogin)
						this.login=false
						uni.removeStorageSync('doctorId');
						uni.removeStorageSync('token');
						uni.removeStorageSync('auditstatus');
						uni.removeStorageSync('openid');
						uni.removeStorageSync('userInfo');
						// uni.clearStorageSync();//清除所有缓存，清除缓存时要注意openid，这个也是要清除的
						// 除了first_flag,全部清除
						// 微信的退出登录
						// #ifdef APP-PLUS
						// plus.oauth.getServices(function(services){
						// 	console.log(services)
						// 	if(services.length!=0){
						// 		services.forEach(item=>{
						// 			if(item.id=='weixin'){
						// 				item.logout(function(e){
						// 					console.log(e)
						// 				}, function(e){
						// 					console.log(e)
						// 				});
						// 			}
						// 		})
						// 	}
						// })
						// // ios账号退出登录
						// if(plus.os.name=='iOS'){
						// 	plus.oauth.getServices(function(services){
						// 		console.log(services)
						// 		if(services.length!=0){
						// 			services.forEach(item=>{
						// 				if(item.id=='apple'){
						// 					item.logout(function(e){
						// 						console.log(e)
						// 					}, function(e){
						// 						console.log(e)
						// 					});
						// 				}
						// 			})
						// 		}
						// 	})
						// }
						// #endif
						// 关闭socket
						this.$store.commit('SOCKET_CLOSE')
					}else{
						uni.showToast({
							title:res.data.object
						})
					}
				}).catch(err=>{
					console.log(err)
				})
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			aemdTabbar()//暗黑设置
			// #endif
			console.log(uni.getStorageSync('token'))
			if(uni.getStorageSync('token')){//token存在
				this.login=true
				getInfor({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						var data=res.data.object
						this.phone=data.telephone
						this.uerInfo={
							name:data.name,
							hospital:data.hospital,
							department:data.departmentName,
							avatarUrl:data.avatarLinks||this.avatarUrl
						}
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{ 
					console.log(err)
				})
			}else{
				this.login=false
			}
		},
		onLoad() {
		}
	}
</script>

<style scoped>
	@font-face {
		font-family: texticons;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* 如果让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果让slot内容与导航栏左右有空隙 */
		padding: 0 30rpx;
	}
	.slot-wrap uni-text:nth-child(2){
		color: #000000;
		font-family: PingFang-SC-Bold;
		font-size: 30rpx;
		font-weight: bold;
	}
	/* #ifdef MP-WEIXIN */
	.navBar /deep/ .u-line-1 {
		display: none!important;
	}
	/* #endif */
	page,view {
		display: flex;
	}
	page {
		background-color: #f8f8f8;
	}
	.center {
		flex-direction: column;
		min-height: 100%;
	}
	.logo {
		width: 750rpx;
		height: 186rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		flex-direction: row;
		align-items: center;
	}
	.logo-hover {
		opacity: 0.8;
	}
	.logo-img {
		width: 126rpx;
		height: 126rpx;
		border-radius: 126rpx;
	}
	.logo-title {
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20rpx;	
	}
	.logoName{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.docInfor{
		font-size: 24rpx;
		display: flex;
	}
	.docInfor .text1{
		flex: 1;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		word-wrap: break-word;
		word-break: break-all;
	}
	.docInfor .text2{
		margin: 0 10rpx;
	}
	.docInfor .text3{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 200px;
	}
	.uer-name {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 30rpx;
		font-weight: bold;
		font-family: PingFang-SC-Bold;
		color: #000000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		word-wrap: break-word;
		word-break: break-all;
	}
	.go-login .navigat-arrow {
		font-size: 30rpx;
		color: #000000;
	}
	.center-list {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 750rpx;
		flex-direction: column;
	}
	.center-list-item {
		box-sizing: border-box;
		flex-direction: row;
		padding: 40rpx 30rpx;
		border-bottom: 1px solid #EEEEEE;
		align-items: center;
	}
	.list-icon {
		width: 40rpx;
		height: 40rpx;
		/* font-size: 34rpx; */
		color: #343434;
		/* text-align: center; */
		/* font-family: texticons; */
		margin-right: 20rpx;
	}
	.image_icon{
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}
	.list-text {
		font-size: 30rpx;
		color: #000000;
		font-family: PingFang-SC-Regular;
		flex: 1;
		text-align: left;
	}
	.navigat-arrow {
		font-size: 34rpx;
		color: #333333;
		text-align: right;
		font-family: texticons;
	}
	.exitBtn{
		margin-bottom: 20rpx;
		width: 100%;
		font-size: 28rpx;
		background-color: #FFFFFF;
		height: 84rpx;
		line-height: 84rpx;
	}
	.btn{
		margin-top: 20rpx;
	}
	.bgColor{
		background-color: #F8F8F8;
	}
</style>