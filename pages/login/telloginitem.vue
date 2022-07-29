<template>
	<view class="loginSure">
		<login-top @close="close" @register="register"></login-top>
		<view class="login-main">
			<view class="">
				<view class="title_tip">
					<text class="title">输入验证码</text>
					<view class="tip">
						<text>短信验证码已发送至</text>
						<text class="areaCode">{{areaCode}}</text>
						<text class="telephone">{{phone}}</text>
					</view>
				</view>
				<view class="tel_login">
					<input type="number" maxlength="11" v-model="vertifyCode" placeholder="请输入验证码"/>
					<button type="default" :disabled="disabled" class="codeimg" @click.stop="getCode()" :style="styleObject">{{getCodeText}}</button>
				</view>
				<button type="default" hover-class="button-hover" class="getcodeBtn" @click.stop="login">验证</button>
				<view class="login-tip">
					没收到验证码？倒计时结束后可重新获取
				</view>
			</view>
		</view>
		<view class="footer">
			<checkbox-group name="" @change="selects">
				<label>
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
	import {loginsendCode} from '@/utill/api/login/loginsendCode.js'
	import {loginCode} from '@/utill/api/login/loginCode.js'
	import {loginTip} from '@/utill/tools/loginTip.js'
	export default{
		components:{},
		data(){
			return{
				getCodeText: '获取验证码',
				areaCode:"+86",
				phone:'',
				styleObject: {
					color: 'black',
					background:"#ffffff"
				},
				a:"",
				vertifyCode:"",//验证码
				Timer:'',//定时器
				disabled:true,
				check:false
			}
		},
		methods:{
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
			// 关闭注册登陆页面
			close(){
				uni.navigateBack({
					delta:1,
				})
			},
			register(){
				uni.navigateTo({
					url:"/pages/register/register"
				})
			},
			selects(e){
				this.check=!this.check
			},
			// 再次获取验证码
			getCode(){
				console.log(this.disabled)
				if(this.disabled){//禁用
					return
				}
				loginsendCode({
					telephone:this.phone
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
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
			setTimer() {
				let holdTime = 59,
				_this = this;
				_this.getCodeText = "重新获取(60)"
				_this.Timer = setInterval(() => {
					if (holdTime <=0) {
						_this.disabled = false;//可以获取验证码
						_this.styleObject.color = "#ffffff";
						_this.styleObject.background = "#86B0D4";
						_this.getCodeText = "获取验证码"
						clearInterval(_this.Timer);
						return;
					}
					_this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;
				}, 1000)
			},
			// 验证/登录
			login(){
				console.log(this.check)
				if(this.vertifyCode==''){
					uni.showToast({
						title: '验证码不能为空',
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
				loginCode({
					telephone:this.phone,
					smsVerCode:this.vertifyCode
				}).then(res=>{
					console.log(res)
					// 消除定时器
					clearInterval(this.Timer)
					console.log(res)
					if(res.data.code==0){
						uni.report('codeLogin',{//验证码登陆统计上报
							telephone:this.phone,
						})
						console.log(typeof(res.data.object))
						console.log(Array.isArray(res.data.object))
						if(Array.isArray(res.data.object)){
							uni.navigateTo({
								url:'/pages/login/accountLogin?data='+encodeURIComponent(JSON.stringify(res.data.object))
							})
						}else{//直接登录
							loginTip(res,this.$store.state.PagesUrl,this.$store.state.PagesType)
						}
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					// 消除定时器
					clearInterval(this.Timer)
					console.log(err)
				})
			},
			// 同意隐私政策
			select(e){
				this.check=true
			},
		},
		onLoad(options) {
			setTimeout(()=>{
				this.setTimer()
			},1000)
			console.log(this.$store.state.PagesUrl)
			this.phone=options.phone
			this.areaCode=options.area
		},
	}
</script>
	
<style>
	.loginSure{
		padding: 0 30rpx;
	}
	.login-main {
		flex: 1;
		padding: 0 70rpx;
		margin-top: 260rpx;
	}
	.tel_login{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 0;
		border-bottom: 4rpx solid #EEEEEE;
		margin-top: 50rpx;
	}
	.tel_login .uni-icons{
		margin: 0 16rpx;
	}
	.title_tip {
		font-family: PingFang-SC-Medium;
		letter-spacing: 2rpx;
	}
	.title_tip .title{
		color: #000000;
		font-size: 42rpx;
		font-weight: 600;
	}
	.title_tip .tip{
		font-size: 24rpx;
		margin-top: 30rpx;
	}
	.areaCode{
		margin: 0 10rpx;
	}
	.codeimg{
		padding: 0rpx 16rpx;
		border: 2rpx solid #909090;
		color: #909090;
		font-size: 24rpx;
		border-radius:12rpx;
	}
	.getcodeBtn{
		background: #EBEBEB;
		color: #8F8F8F;
		margin-top: 45rpx;
		font-size: 32rpx;
		border-radius: 12rpx;
		padding:6rpx 0;
		width: 514rpx;
		margin-bottom: 35rpx;
	}
	.button-hover{
		color: #FFFFFF;
		background: #86B0D4;
	}
	.login-tip{
		color: #666666;
		font-size: 24rpx;
		text-align: center;
		margin-bottom: 45rpx;
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
</style>
