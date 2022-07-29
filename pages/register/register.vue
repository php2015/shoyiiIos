<template>
	<view class="login dark-page">
		<view class="login-main">
			<view class="login-logo">
			</view>
			<view class="">
				<view class="title_tip dark-font">
					<text>注册</text>
				</view>
				<view class="tel_login">
					<!-- <text @click="areaCode">{{areacode}}</text>
					<uni-icons type="arrowdown"></uni-icons> -->
					<input type="number" maxlength="11" v-model="phone" placeholder="请输入手机号码"/>
				</view>
				<view class="tel_login">
					<input type="number" maxlength="11" v-model="vertifyCode" placeholder="请输入验证码"/>
					<u-button :disabled="disabled" @click.stop="getCode()" :custom-style="customStyle" type="primary" size="mini" :ripple="true" ripple-bg-color="#909399">{{getCodeText}}</u-button>
				</view>
				<input type="password" class="tel_login" v-model="password" placeholder="设置密码"/>
				<button type="default" hover-class="button-hover" class="getcodeBtn" @click.stop="register()">注册</button>
			</view>
		</view>
		<view class="footer">
			<checkbox-group name="" @change="select">
				<label class="label">
					<checkbox :checked="check" style="transform:scale(0.7)" color='#86B0D4'/>
					<text>我已阅读并同意</text>
					<text class="user" @click.stop="userAgree">《用户协议》</text>
					<text>和</text>
					<text class="secret" @click.stop="userPravicy">《隐私政策》</text>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	import {registerCode} from '@/utill/api/register/registerCode.js'
	import {register} from '@/utill/api/register/register.js'
	import {passwordLogin} from '@/utill/api/login/passwordLogin.js'
	import {loginTip} from '@/utill/tools/loginTip.js'
	export default {
		data() {
			return {
				// areacode:'+86',
				phone: "",
				getCodeText: '获取验证码',
				disabled:false,//验证码禁用
				vertifyCode:"",//验证码
				Timer:'',//定时器
				password:'',//密码
				check:false,//协议选框
				customStyle:{
					background:"#86B0D4"
				},
			}
		},
		methods: {
			// 进入区号选择页面
			// areaCode(){
				
			// },
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
			// 再次获取验证码
			getCode(){
				console.log(this.disabled)
				if(this.disabled){//禁用
					return
				}
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
				registerCode({
					telNum:this.phone
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.disabled=true//获取验证码禁用
						this.setTimer()
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
			// 定时器
			setTimer() {
				let holdTime = 59,
				_this = this;
				_this.getCodeText = "重新获取(60)"
				_this.Timer = setInterval(() => {
					if (holdTime <=0) {
						_this.disabled = false;//可以获取验证码
						_this.getCodeText = "获取验证码"
						clearInterval(_this.Timer);
						return;
					}
					_this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
				}, 1000)
			},
			// 同意隐私政策
			select(e){
				this.check=true
			},
			// 注册
			register(){
				console.log(this.password)
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
				if(this.vertifyCode==''){
					uni.showToast({
						title: '验证码不能为空',
						icon: "none"
					});
					return;
				}
				if(this.password==''){
					uni.showToast({
						title: '密码不能为空',
						icon: "none"
					});
					return;
				}
				if(!this.check){
					uni.showToast({
						title: '请同意用户协议',
						icon: "none"
					});
					return;
				}
				uni.showLoading({
				  title: '注册中...',
				})
				// 注册
				register({
					telephone:this.phone,
					password:this.password,
					smsVerCode:this.vertifyCode
				}).then(res=>{
					console.log(res)
					uni.hideLoading();
					if(res.data.code==0){
						uni.report('register',{//注册统计上报
							telephone:this.phone,
						})
						// 注册完之后,默认登陆,再进入审核页面
						uni.showLoading({
						  title: '登录中...',
						})
						passwordLogin({
							telephone:this.phone,
							password:this.password,
						}).then(res=>{
							console.log(res)
							if(res.data.code==0){
								uni.hideLoading();
								// 登陆成功后,跳转审核信息页面
								var datas={
									data:{
										object:{
											auditStatus:'ZC',
											token:res.data.object.token,
											doctorId:res.data.object.doctorId
										},
									},
								}
								loginTip(datas,'','')
							}
						}).catch(err=>{
							console.log(err)
							uni.showToast({
								title:'err',
								icon:'none'
							})
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
			},
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>
<style lang="scss" scoped>
	.title_tip{
		color: #000000;
		font-size: 42rpx;
		font-weight: 600;
		margin-bottom: 50rpx;
	}
	.tel_login{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 0;
		border-bottom: 4rpx solid #EEEEEE;
		margin-top: 40rpx;
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
		border: none;
	}
	.button-hover{
		color: #FFFFFF;
		background: #86B0D4;
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
		// flex: 1;
		padding: 0 70rpx;
		padding-bottom: 40rpx;
		.login-logo {
			width: 248rpx;
			// height: 100rpx;
			padding-bottom: 50rpx;
			margin: 100rpx auto 0 auto;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.footer{
		display: flex;
		justify-content: center;
		color: #909090;
		font-size: 28rpx;
	}
	.footer .user{
		color: #86B0D4;
	}
	.footer .secret{
		color: #86B0D4;
	}
	.footer .uni-label-pointer{
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	/* #ifdef MP-WEIXIN */
	.footer .label{
		width: 100%;
		display: flex;
		align-items: center;
	}
	/* #endif */
</style>

