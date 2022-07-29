<template>
	<view class="login dark-page">
		<login-top @close="close" @register="register"></login-top>
		<view class="login-main">
			<view class="">
				<view class="title_tip dark-font">
					<text>短信登录</text>
				</view>
				<view class="tel_login">
					<!-- <text @tap="areaCode">{{areacode}}</text>
					<uni-icons type="arrowdown"></uni-icons> -->
					<input type="number" maxlength="11" v-model="phone" placeholder="请输入手机号码"/>
				</view>
				<button type="default" hover-class="button-hover" class="getcodeBtn" @tap.stop="getCode()" :class="boolean?'bgColor':''">{{getCodeText}}</button>
				<view class="password_login">
					<text @tap='pwdLogin'>密码登录</text>
				</view>
			</view>
		</view>
		<!-- #ifdef APP-PLUS||H5 -->
		<view class="login-footer">
			<view class="" style="text-align: center;padding-bottom: 20px;">
				<u-checkbox 
					class="readprivacy"
					v-model="readchecked" 
					name="我已阅读并同意"
				>我已阅读并同意</u-checkbox>
				<text style="color: #86B0D4;" @click.stop="userAgree">《用户协议》</text>
				<text>和</text> 
				<text style="color: #86B0D4;" @click.stop="userPravicy">《隐私政策》</text>
			</view>
			<view class="footer-tip flex">其他登录方式</view>
			<view class="footer-other flex">
				<view class="other-list" v-if="ifThird.ifweixin">
					<image lazy-load src="../../static/image/wechat.png" mode="aspectFill" @tap="login_weixin()"></image>
				</view>
				<view class="other-list">
					<image lazy-load src="../../static/image/telephone.png" mode="aspectFill" @tap="telephoneLogin()"></image>
				</view>
				<view class="other-list" v-if="applebool">
					<image lazy-load src="../../static/image/apple.png" mode="aspectFill" @tap="appleLogin()"></image>
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
			<view class="" style="position: fixed;bottom: 100rpx;left: 0;width: 100%;padding: 0 70rpx;">
				<u-button :custom-style="customStyle" @click="paramLogin">微信用户快捷登录</u-button>
			</view>
			<u-modal v-model="wechatshow" :show-title='false' :show-confirm-button='false'>
				<view class="slot-content" style="padding: 40rpx 0;">
					<view class="" style="text-align: center;">
						<uni-icons type="weixin" size="40" color="#04be13"></uni-icons>
					</view>
					<view class="" style="padding: 40rpx 0;text-align: center;">
						<text>微信授权注册后完成登录</text>
					</view>
					<view class="" style="padding: 0 30rpx;">
						<button :custom-style="btncustomStyle" style="font-size:15px;height: 100rpx;line-height: 100rpx;color: #FFFFFF;background-color:#04be13 ;" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" withCredentials="true">授权登录</button>
						<view class="" style="text-align: center;padding: 15px 0 0px;font-size: 12px;">
							<text @click="cancelLogin" style="">暂不登录</text>
						</view>
					</view>
				</view>
			</u-modal>
			<u-modal v-model="getUserInfo" :show-title='false' :show-confirm-button='false'>
				<view class="slot-content" style="padding: 40rpx 0;">
				<view class="" style="text-align: center;">
					<uni-icons type="weixin" size="40" color="#04be13"></uni-icons>
				</view>
				<view class="" style="padding: 40rpx 0;text-align: center;">
					<text>微信授权获取用户信息</text>
				</view>
				<view class="" style="padding: 0 30rpx;">
					<!-- <button :custom-style="btncustomStyle" style="font-size:15px;height: 100rpx;line-height: 100rpx;color: #FFFFFF;background-color:#04be13 ;" @getuserinfo="getUserInfor" withCredentials="true">授权</button> -->
					<button :custom-style="btncustomStyle" style="font-size:15px;height: 100rpx;line-height: 100rpx;color: #FFFFFF;background-color:#04be13 ;" @click="getUserInfor">授权</button>
					<view class="" style="text-align: center;padding: 15px 0 0px;font-size: 12px;">
						<text @click="canceluserInfor" style="">暂不授权</text>
					</view>
				</view>
			</view>
		    </u-modal>
		<!-- #endif -->
	</view>
</template>
<script> 
	import {loginsendCode} from '@/utill/api/login/loginsendCode.js'
	import {wechatLogin} from '@/utill/api/login/wechatLogin.js'
	import {getLoginStatus} from '@/utill/api/login/getLoginStatus.js'
	import {miniBind,miniGetuserInfor} from '@/utill/api/login/miniBind.js'
	import {localTelLogin} from '@/utill/api/login/localTelLogin.js'
	import {loginTip} from '@/utill/tools/loginTip.js'
	import {appleLogin} from '@/utill/api/login/apple.js'
	export default {
		data() {
			return {
				readchecked:false,
				boolean:false,//获取验证码背景色
				customStyle: {
					color: '#86B0D4'
				},
				btncustomStyle:{
					fontSize:'15px'
				},
				phone: "",
				code: '',
				key: '',
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false,
				// areacode:'+'+86,
				wechatshow:false,//微信获取手机号的授权弹窗
				sessionkey:'',//用户不存在情况下,返回的状态,用于获取用户手机号时传给后端
				getUserInfo:false,//获取用户授权信息的弹窗
				unionId:null,
				openId:null,
				applebool:false,
				ifThird:{
				    ifweixin:true,
				},
				iosType:'iPad',
			}
		},
		onReady() {
			if(getApp().globalData.preloginStatus=='true'){//预登录成功，就可以调用一键登录了
				this.telephoneLogin()
			}
			// 是否存在微信
		   if(!getApp().globalData.ifThird.ifweixin){
			 this.ifThird.ifweixin=false
		   }
		},
		onLoad(options) {
			// #ifdef APP-PLUS
			// 是否展示apple登录
			plus.oauth.getServices((services)=> {  
			    for (var i in services) {  
					console.log(services)
			        var service = services[i];  
			        // 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service    
			        if (service.id == 'apple') {    
						this.applebool=true
			            break;  
			        } 
			    }  
			}, (err)=> {  
			    // 获取 services 失败  
				this.applebool=false
			})
			// #endif
			// 获取系统类型
			uni.getSystemInfo({
			    success: (res)=> {
			        console.log(res.model); //苹果账号登录，iPhone 需绑定手机号，iPad不需要绑定
					this.iosType=res.model
			    }
			});
			console.log(options)//获取到想进入的页面数据
			// 将这个数据存在在vuex中
			this.$store.commit('savePages',options)
			console.log(this.$store.state.PagesUrl)
			console.log(this.$store.state.PagesType)
		},
		watch:{
			phone(newValue,oldValue){
				if ((/^1(3|4|5|6|7|8|9)\d{9}$/.test(newValue))) {
					this.boolean=true
				}else{
					this.boolean=false
				}
			}
		},
		methods: {
			// apple账号登录
			appleLogin(){
				if(!this.readchecked){//没有勾选
					uni.showToast({
						title:'请同意用户协议及隐私政策',
						icon:'none'
					})
					return;
				}
				 var appleOauth = null; 
				 var _this=this
				plus.oauth.getServices(function(services) {  
				    for (var i in services) {  
				        var service = services[i];  
				        // 获取苹果授权登录对象，苹果授权登录id 为 'apple' iOS13以下系统，不会返回苹果登录对应的 service    
				        if (service.id == 'apple') {  
				            appleOauth = service;  
				            break;  
				        }  
				    }  
					// console.log(appleOauth) 
				    appleOauth.login(function(oauth){  
				        // 授权成功，苹果授权返回的信息在 oauth.target.appleInfo 中    
						console.log(oauth)
						console.log(oauth.target.appleInfo.identityToken)
						console.log(_this.iosType)
						appleLogin({ 
							identityToken:oauth.target.appleInfo.identityToken,
							iPhone:_this.iosType
						}).then(res=>{
							console.log(res)
							if(res.data.code==0){//已经绑定可手机号，根据不同的审核状态，判断是否看到页面
								if(Array.isArray(res.data.object)){
									uni.navigateTo({
										url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
									})
								}else{//直接登录
									loginTip(res,_this.$store.state.PagesUrl,_this.$store.state.PagesType)
								}
							}else if(res.data.code==11){
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
								return
							}else if(res.data.code==10){//没有绑定手机号，属于新用户,跳转到绑定手机号页面,需要将苹果标识数据传送过来
								uni.hideLoading()
								uni.navigateTo({
									url:'/pages/login/bindTel?appleUserId='+encodeURIComponent(JSON.stringify(res.data.object)),
									animationType:'pop-in',
								})
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}
						}).catch(err=>{
							console.log(err)
						})
				    }, function(err) {  
						console.log(err)
						uni.showToast({
							title:err.message,
							icon:'none'
						})
				        // 授权失败 error  
				    }, {  
				        // 默认只会请求用户名字信息，如需请求用户邮箱信息，需要设置 scope: 'email'    
				        scope: 'email'  
				    })  
				}, function(err) {  
				    // 获取 services 失败  
				})
			},
			// 本地手机号一键登录
			telephoneLogin(){
				let _this = this;
				uni.login({
					provider: 'univerify',
					univerifyStyle: { // 自定义登录框样式
					"fullScreen": true,
					 "backgroundColor": "#ffffff",  
						"icon": {
							"path": "",//可选 自定义本地图片 默认显示logo 
							"width": "60",
							"height": "60"
						},
						"phoneNum": {
							"color": "#000000",
							"fontSize": "18"
						},
						"slogan": {
							"color": "#8a8b90",
							"fontSize": "12"
						},
						"authButton": {
							"normalColor": "#3479f5",
							"highlightColor": "#2861c5",
							"disabledColor": "#73aaf5",//仅ios支持
							"textColor": "#ffffff",
							"title": "本机号码一键登录"
						},
						"otherLoginButton": {
							"visible": "true", //是否显示其他登录按钮，默认显示
							"normalColor": "#f8f8f8",
							"highlightColor": "#dedede",
							"textColor": "#000000",
							"title": "其他登录方式",
							"borderWidth": "1px",//仅ios支持
							"borderColor": "#c5c5c5"//仅ios支持
						},
						"privacyTerms": {
							"defaultCheckBoxState":"false", // 条款勾选框初始状态 默认值： true 
							"checkBoxSize":18,
							"textColor": "#8a8b90", //文字颜色
							"termsColor": "#1d4788", //协议文字颜色
							"prefix": "我已阅读并同意",
							"suffix": "并使用本机号码登录",
							"fontSize": 12,
							"privacyItems": [
								{
									"url": "https://mobile.shoyii.com/#/pages/aboutShoyii/userAgree",
									"title": "用户服务协议"
								},{
									"url": "https://mobile.shoyii.com/#/pages/aboutShoyii/privacyPolicy",
									"title": "隐私政策"
								}
							]
						}
					},
					success(res){ // 登录成功
						console.log(res.authResult);  // {openid:'deviceIDlength+deviceID+gyuid',access_token:'接口返回的 token'}
						uniCloud.callFunction({//获取本机号码
						  name: 'getPhoneNumber',
						  data: {
							'access_token':res.authResult.access_token, // 客户端一键登录接口返回的access_token
							'openid':res.authResult.openid  // 客户端一键登录接口返回的openid
						  }
						}).then(res => {
							// 登录成功，可以关闭一键登陆授权界面了
							console.log(res)
							console.log(res.result)
							var phoneNumber=res.result.res.phoneNumber
							if(res.result.res.code==0){
								localTelLogin({
									telephone:phoneNumber
								}).then(res=>{//成功之后，再跳转页面
									console.log(res)
									uni.report('telephoneLogin',{//一键登陆统计上报
										telephone:phoneNumber,
									})
									if(res.data.code==0){
										if(Array.isArray(res.data.object)){
											uni.navigateTo({
												url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
											})
										}else{//直接登录
											loginTip(res,_this.$store.state.PagesUrl,_this.$store.state.PagesType)
										}
										uni.closeAuthView()
									}else{
										uni.showToast({
											title:res.data.msg,
											icon:'none'
										})
										uni.closeAuthView()
									}
								}).catch(err=>{
									console.log(err)
									uni.closeAuthView()
								})
							}
						}).catch(err=>{
							//4100:errCode: 4100 | errMsg: 获取手机号码失败：uni一键登录账户余额不足
							console.log(err) 
							uni.showToast({
								title:'请选择其他方式登录',
								icon:'none',
								duration:4000,
							})
							uni.closeAuthView()
						  // 处理错误
						})
					},
					fail(res){  // 登录失败
						console.log(res.errCode)
						console.log(res.errMsg)
						uni.report('telLoginFail',{//登录失败统计上报
							error_data:res
						})
						// 30002 login:fail 用户点击了其他登录方式
						if(res.errCode=='30002'){
							uni.closeAuthView()
						}else if(res.errCode=='30003'){//用户关闭验证界面
							console.log('用户关闭验证界面')
						}else if(res.errCode=='30006'){// login:fail -20202{"error_data":"没有开启数据流量 或者是 当前网络不可用"}
							uni.showToast({
								title:'当前移动网络不可用',
								icon:'none'
							})
						}else if(res.errCode=='30005'){
							uni.showToast({
								title:'数据流量未开启',
								icon:'none'
							})
						}else{
							uni.showToast({
								title:'请使用其他登录方式',
								icon:'none'
							})
						}
					}
				})
			},
			// 关闭注册登陆页面
			close(){
				uni.navigateBack({
					delta:1
				})
			},
			register(){
				uni.navigateTo({
					url:"/pages/register/register"
				})
			},
			// 进入获取区号页面
			// areaCode(){
			// 	uni.navigateTo({
			// 		url:"",
			// 	})
			// },
			// 密码登陆
			pwdLogin(){
				uni.navigateTo({
					url:"/pages/login/pwdLogin?telephone="+this.phone,
					animationType:"pop-in"
				})
			},
			getCode() {
				console.log(this.phone)
				if(this.phone==''){
					uni.showToast({
						title: '手机号码不能为空',
						icon: "none"
					});
					return;
				}
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return;
				}
				console.log(this.readchecked)
				if(!this.readchecked){//没有勾选
					uni.showToast({
						title:'请同意用户协议及隐私政策',
						icon:'none'
					})
					return;
				}
				loginsendCode({
					telephone:this.phone
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						uni.navigateTo({
							url:"/pages/login/telloginitem?phone="+this.phone+'&'+'area=' + '86',
							animationType:"slide-in-top",
						})
					}else{
						uni.showToast({
							title: res.data.msg,
							icon: "none"
						});
					}
					// 验证码发送成功，则进入登陆页面				
				}).catch(err=>{
					console.log(err)
				})
			},
			setTimer() {
				let holdTime = 59,
					_this = this;
				_this.getCodeText = "重新获取(60)"
				_this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						_this.getCodeisWaiting = false;
						_this.getCodeBtnColor = "#ffffff";
						_this.getCodeText = "获取验证码"
						clearInterval(_this.Timer);
						return;
					}
					_this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
				}, 1000)
			},
			//微信登录
			login_weixin() {
				if(!this.readchecked){//没有勾选
					uni.showToast({
						title:'请同意用户协议及隐私政策',
						icon:'none'
					})
					return;
				}
				var aweixin=null;
				// // 当前环境支持的所有授权登录对象
				// var auths = {};
				// // 获取登录授权认证服务列表，单独保存微信登录授权对象
				// // 5+APP在plusready事件中调用，uni-app在vue页面的onLoad中调用
				var _this=this
				plus.oauth.getServices(function(services){
					console.log(services)
					services.forEach((item)=>{
						if(item.id=='weixin'){
							aweixin = item;
							console.log(aweixin)
						}
					})
					if(!aweixin){//没有取得微信登陆的服务
						uni.showToast({
							title:'当前环境不支持微信登录',
							icon:'none'
						})
						return;
					}
					if(!aweixin.authResult){//是否登录认证过
						aweixin.authorize((e)=>{
							console.log(e) //为什么授权两次 //返回的code可以上传服务器获取数据
							if(!e.code){//用户如果拒绝，则不存在code
								uni.showToast({
									title:'用户已拒绝',
									icon:'none'
								})
							}
							uni.showLoading({
								title:'加载中'
							})
							// 调取后端登录接口
							wechatLogin({
								code:e.code
							}).then(res=>{
								uni.hideLoading()
								console.log(res)
								if(res.data.code==0){//已经绑定可手机号，根据不同的审核状态，判断是否看到页面
									if(Array.isArray(res.data.object)){
										uni.navigateTo({
											url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
										})
									}else{//直接登录
										loginTip(res,_this.$store.state.PagesUrl,_this.$store.state.PagesType)
									}
								}else if(res.data.code==11){
									uni.showToast({
										title:res.data.msg,
										icon:'none'
									})
									return
								}else if(res.data.code==10){//没有绑定手机号，属于新用户,跳转到绑定手机号页面,需要将微信数据传送过来
									uni.hideLoading()
									uni.navigateTo({
										url:'/pages/login/bindTel?openId='+encodeURIComponent(JSON.stringify(res.data.object)),
										animationType:'pop-in',
									})
								}else{
									uni.showToast({
										title:res.data.msg,
										icon:'none'
									})
								}
							}).catch(err=>{
								uni.hideLoading()
								console.log(err)
							})
						},(e)=>{
							uni.showToast({
								title:'用户取消授权',
								icon:'none'
							})
						},{scope:'snsapi_userinfo',state:'authorize',appid:'wxdbe07c2bfb651890'})
					}else{
						console.log('已经登录过了')
						uni.showToast({
							title:'请使用其他登录方式',
							icon:'none'
						})
						aweixin.getUserInfo(function(e){
							console.log(e.target.userInfo)
						},function(err){
							console.log(err)
						})
					}
				}, function(e){
					console.log(e)
					uni.showToast({
						title:'获取登录授权服务列表失败',
						icon:'none'
					})
					} );
				// 通常登录前需要先调用authorize方法进行授权
			},
			// #ifdef MP-WEIXIN
			// 获取用户手机号
			getPhoneNumber (e) {//同意之后，才能使用
				console.log('一键登陆')
				console.log(e)
				if(e.detail.errMsg=="getPhoneNumber:ok"){//用户接受授权
					console.log(e.detail.errMsg)
					console.log(e.detail.iv)
					console.log(e.detail.encryptedData)
					miniBind({
						code:this.sessionkey,
						encryptedData:e.detail.encryptedData,
						iv:e.detail.iv
					}).then(res=>{
						console.log(res)
						if(res.data.code==0){//用户授权成功后,需要再进行个人信息的授权
							if(Array.isArray(res.data.object)){
								uni.navigateTo({
									url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
								})
							}else{//直接登录
								loginTip(res,this.$store.state.PagesUrl,this.$store.state.PagesType)
							}
						}else{//
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}
					}).catch(err=>{
						console.log(err)
					})
				}else{//用户取消授权,则注册失败,返回一键登陆的页面
					this.wechatshow=false
				}
			},
			// 暂不登录
			cancelLogin(){
				this.wechatshow=false
			},
			// 获取用户信息取消授权
			canceluserInfor(){
				this.getUserInfo=false
			},
			// 用户信息授权
			getUserInfor(){
				var _this=this
				wx.getUserProfile({
					desc:'个人信息页面展示',
					success(e){
						console.log(e)
						if(e.errMsg=="getUserProfile:ok"){
							console.log(_this.sessionkey)
							miniGetuserInfor({
								code:_this.sessionkey,
								wxUser:{
									openId:_this.openId,
									unionId:_this.unionId,
									sex:e.userInfo.gender,
									nickName:e.userInfo.nickName,
									headImgUrl:e.userInfo.avatarUrl,
									country:e.userInfo.country,
									province:e.userInfo.province,
									city:e.userInfo.city,
									language:e.userInfo.language,
									subscribe:'',
									subscribetime:'',
								},
							}).then(res=>{ 
								console.log(res)
								if(res.data.code==0){//用户授权成功后,需要再进行手机号的授权
									_this.getUserInfo=false
									_this.wechatshow=true 
								}else{//
									uni.showToast({
										title:res.data.msg,
										icon:'none'
									})
								} 
							}).catch(err=>{
								console.log(err)
							})
						}else{//用户取消授权
							_this.getUserInfo=false
						}
					},
					fail(err){
						console.log(err)
					}
				})
			},
			// 小程序的登陆
			paramLogin(){
				uni.login({
					success:(e)=> {//发送code到后端,换取登陆状态
						console.log(e)
						console.log(e.code) 
						uni.showLoading({
							title:'加载中'
						})
						getLoginStatus({
							jsCode:e.code
						}).then(res=>{
							uni.hideLoading()
							console.log(res)
							if(res.data.code==0){//用户存在,并且登录成功
								if(Array.isArray(res.data.object)){
									uni.navigateTo({
										url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
									})
								}else{//直接登录
									loginTip(res,this.$store.state.PagesUrl,this.$store.state.PagesType)
								}
							}else if(res.data.code==10){//用户未绑定,弹窗,用户进行手机号码的获取,并将返回的状态同微信参数返回给后端
								this.sessionkey=res.data.object.code
								this.unionId=res.data.object.unionId
								this.openId=res.data.object.openId
								this.getUserInfo=true
							}else if(res.data.code==40029){//code失效,
								uni.showToast({
									title:'请重新授权登录',
									icon:'none'
								})   
							}
							else{//其他情况 
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}
						}).catch(err=>{
							uni.hideLoading()
							console.log(err)
						})
					},
					fail(err) {
						console.log(err)
						console.log('err')
					}
				})
			},
			// #endif
			// 用户协议
			userAgree(){
				uni.navigateTo({
					url:'/pages/aboutShoyii/userAgree'
				})
			},
			// 隐私政策
			userPravicy(){
				uni.navigateTo({
					url:'/pages/aboutShoyii/privacyPolicy'
				})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.bgColor{
		background-color: #86B0D4!important;
		color: #FFFFFF!important;
	}
	.login {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 30rpx;
	}
	.login-main {
		padding: 0 70rpx;
		margin-top: 260rpx;
	}
	.title_tip{
		color: #000000;
		font-size: 42rpx;
		font-weight: 600;
	}
	.tel_login{
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		border-bottom: 4rpx solid #EEEEEE;
		margin-top: 70rpx;
	}
	.tel_login .uni-icons{
		margin: 0 16rpx;
	}
	.getcodeBtn{
		background: #EBEBEB;
		color: #8F8F8F;
		margin-top: 45rpx;
		font-size: 32rpx;
		border-radius: 12rpx;
	}
	.getcodeBtn::after{
		border:none;
	}
	.button-hover{
		color: #FFFFFF;
		background: #86B0D4;
	}
	.password_login{
		text-align: center;
		padding: 60rpx 0;
		color: #666666;
		font-size: 28rpx;
	}
	.flex{
		display: flex;
	}
	.readprivacy /deep/ .u-checkbox__label{
		margin-right: 0;
	}
	.login-footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
		padding: 0 60rpx;
		.footer-tip {
			align-items: center;
			font-size: 24rpx;
			color: #999999;
			text-align: center;
			&:before {
				flex: 1;
				content: '';
				height: 2rpx;
				background: #D0D0D0;
				margin-right: 30rpx;
			}
			&:after {
				margin-left: 30rpx;
				flex: 1;
				content: '';
				height: 2rpx;
				background: #D0D0D0;
			}
		}
		.footer-other {
			padding: 40rpx 0 100rpx 0;
			display: flex;
			justify-content: space-around;
			.other-list {
				width: 80rpx;
				height: 80rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
