<template>
	<view class="addFriends">
		<!-- navbar -->
		<u-navbar :is-back="false" title="">
			<view class="slot-wrap">
				<u-icon name="arrow-left" size='40' color='#999' @click='back'></u-icon>
				<u-tag @click='sendMessage' text="发送" type="success" bg-color='#86B0D4' color='#fff' border-color='#86B0D4'/>
			</view>
		</u-navbar>
		<view class="apply">
			<view class="title">
				<text>申请加为朋友</text>
			</view>
			<view class="tip">
				<text>发送添加朋友申请</text>
				<u-input v-model="addcontent" placeholder='请求添加你为朋友' :custom-style='customStyle' placeholder-style='background:#f8f8f8' type="textarea" :border="false" :height="height" />
			</view>
		</view>
	</view>
</template>

<script>
	import {sendMessage,agreeQuest} from '@/utill/api/connect/connect.js'
	export default{
		data(){
			return{
				customStyle:{
					borderRadius:'10rpx'
				},
				userId:'',
				receiveId:'',
				receiveType:'',
				addcontent:'',
				height: 150,
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			sendMessage(){
				console.log(this.addcontent)
				if(!this.addcontent){//如果不填写，默认
					this.addcontent='请求添加你为朋友'
				}
				agreeQuest({
					userId:this.userId,
					userType:'D',
					anotherUserId:this.receiveId,
					anotherUserType:this.receiveType,
					content:this.addcontent,
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.InputContent=''
						uni.navigateTo({//发送成功后，进入聊天首页
							url:'/pages/shoyiiChat/index'
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
		onLoad(options) {
			console.log(options)
			this.userId=options.sendId
			this.receiveId=options.receiveId
			this.receiveType=options.receiveType
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #FFFFFF;
	}
	.addFriends{
		background-color: #FFFFFF;
	}
	.apply{
		padding: 20rpx 30rpx 0;
		.title{
			color: #000;
			font-size: 42rpx;
			text-align: center;
			font-weight: bold;
			padding: 30rpx 0;
		}
		.tip{
			color: #86B0D4;
			font-size: 24rpx;
		}
	}
	.slot-wrap{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
	}
</style>
