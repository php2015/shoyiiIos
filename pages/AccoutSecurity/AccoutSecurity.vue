<template>
	<view class="accountSecurity dark-page">
		<view class="center-list-item dark-block dark-bottom-border" @tap='enterPage(0)' hover-class="bgColor darkbgColor">
			<text class="list-text dark-font">修改账号</text>
			<view class="dark-font">
				<text>{{filterPhone(phone)}}</text>
				<uni-icons type="arrowright" class='dark-font'></uni-icons>
			</view>
		</view>
		<view class="center-list-item dark-block dark-bottom-border" @tap='enterPage(1)' hover-class="bgColor darkbgColor">
			<text class="list-text dark-font">修改密码</text>
			<uni-icons type="arrowright" class='dark-font'></uni-icons>
		</view>
		<view class="center-list-item dark-block dark-bottom-border" @tap='enterPage(2)' hover-class="bgColor darkbgColor">
			<text class="list-text dark-font">二级密码</text>
			<text class="dark-font">{{ifSetting}}</text>
			<uni-icons type="arrowright" class="dark-font"></uni-icons>
		</view>
		<view class="center-list-item dark-block dark-bottom-border" 
		v-if='$store.state.user.hasLogin'
		@tap='enterPage(3)' hover-class="bgColor darkbgColor">
			<text class="list-text dark-font">注销账号</text>
			<uni-icons type="arrowright" class="dark-font"></uni-icons>
		</view>
		<u-modal v-model="cancelshow" title='注销账号' 
		show-cancel-button confirm-text='确认注销'
		confirm-color='#FF5860'
		@confirm='confirm'>
			<view class="slot-content">
				<text>账户注销，树蚁将删除该账号所有相关信息，再次登录将会创建一个新的账号。请慎重操作。</text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {logoutaccount} from '@/utill/api/register/register.js'
	export default {
		data() {
			return {	
				phone:'',
				ifSetting: '未启用',
				ifSecond:true,
				cancelshow:false,
			}
		},
		methods: {
			filterPhone(data){
				var telChange=data.substring(3,data.length-4)
				return data.replace(telChange,"****")
			},
			enterPage(index){
				if(index==0){//修改账号
					uni.navigateTo({
						url:'/pages/AccoutSecurity/amendPhone?phone='+this.phone
					})
				}else if(index==1){//修改密码
					uni.navigateTo({
						url:'/pages/AccoutSecurity/amendPwd'
					})
				}else if(index==2){//修改二级密码
                    uni.navigateTo({
                        url: '/pages/AccoutSecurity/secondPwd?phone='+this.phone+'&ifSecond='+this.ifSecond
                    })
                }else{//注销账号
					// #ifdef APP-PLUS
					this.cancelshow=true
					// #endif
					// #ifndef APP-PLUS
					uni.showToast({
						title:'请在App端操作',
						icon:'none'
					})
					// #endif
				}
			},
			confirm(){
				logoutaccount({
					doctorId:this.$store.getters['user/info'].doctorId
				}).then(res=>{
					if(res.data.code==0){
						uni.removeStorageSync('doctorId');
						uni.removeStorageSync('token');
						uni.removeStorageSync('auditstatus');
						uni.removeStorageSync('openid');
						uni.removeStorageSync('userInfo');
						plus.runtime.restart(); //重启
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'error',
						icon:'error'
					})
				})
			},
			getDocinfor(){
				this.ifSecond=this.$store.getters['user/info'].secondSwitch
				if(this.ifSecond){
					this.ifSetting='已启用'
				}else{
					this.ifSetting='未启用'
				}
			}
		},
		onLoad(options) {
			this.phone=options.phone
			this.getDocinfor()
			console.log(this.$store.getters['user/info'])
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
	.accountSecurity{
		min-height: 100%;
	}
	.center-list-item {
		padding: 30rpx 30rpx;
		border-bottom: 1px solid #EEEEEE;
		align-items: center;
		justify-content: space-between;
		display: flex;
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
	.slot-content{
		padding: 30rpx;
		text-align: center;
		color: #000000;
	}
</style>
