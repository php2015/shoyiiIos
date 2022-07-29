<template>
	<view style="group">
		<view class="section dark-block" style="" v-if="groupId">
			<view class="tip">
				<text class="dark-white-font">聊天成员</text>
			</view>
			<view class="member-item" style="">
				<view class="list" @click="enterMember(item.id)" v-for="(item,index) in memberList" :key='index'>
					<view class="image" style="">
						<u-image width="100%" height="80rpx" :src="item.avatarLink" mode="aspectFit">
							<view slot="error" style="">
								<u-image width='80rpx' height='80rpx' src='/static/image/person.png' mode="aspectFit"></u-image>
							</view>
						</u-image>
					</view>
					<text class="Membername">{{item.name}}</text>
				</view>
				<view class="list" @click="addOther" v-if="memberId">
					<u-icon name="plus" size='60' color='#999'></u-icon>
				</view>
			</view>
			<view class="complaint dark-block" hover-class="bgcolor" @click="complaint">
				<text>投诉</text>
				<u-icon name="arrow-right" size="30"></u-icon>
			</view>
		</view>
		<!-- 私聊的投诉 -->
		<view v-else class="complaint dark-block" hover-class="bgcolor" @click="complaint">
			<text>投诉</text>
			<u-icon name="arrow-right" size="30"></u-icon>
		</view>
	</view>
</template>

<script>
	import {getGroupMember} from '@/utill/api/connect/connect.js'
	export default{
		data(){
			return{
				userId:uni.getStorageSync('doctorId'),
				memberList:[],
				groupId:'',
				memberId:''
			}
		},
		methods:{
			// 添加其他人
			addOther(){
				console.log(this.groupId)
				uni.navigateTo({
					url:'/pages/shoyiiChat/inviteOther?groupId='+this.groupId
				})
			},
			// 获取成员
			Getmember(){
				getGroupMember({
					groupId:this.groupId
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.memberList=res.data.object.groupNumber
						uni.setNavigationBarTitle({//显示群组名称
							title:res.data.object.name
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
			enterMember(id){
				console.log(id)
			},
			// 投诉
			complaint(){
				if(this.memberId){
					uni.navigateTo({
						url:'/pages/shoyiiChat/complaint?id='+this.memberId
					})
				}else{
					uni.navigateTo({
						url:'/pages/shoyiiChat/complaint?id='+this.groupId
					})
				}
				
			}
		},
		onLoad(options) {
			console.log(options)
			if(options.groupId){//群组的id
				this.groupId=options.groupId
				this.Getmember()
			}else{//私聊id
				this.memberId=options.memberId
				uni.setNavigationBarTitle({//显示群组名称
					title:options.navTitle
				})
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	page{
		width: 100%;
		height: 100%;
	}
	.group{
		width: 100%;
		/* #ifdef H5 */
		height:100%;
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		display: flex;
		flex-direction: column;
		.header{
			padding: 0 30rpx;
		}
	}
	.section{
		flex: 1;
		height: 100%;
		overflow: auto;
		background-color: #FFFFFF;
		.tip{
			padding: 30rpx 30rpx;
			color: #000000;
			font-weight: bold;
			font-size: 36rpx;
		}
		.member-item{
			padding: 0 30rpx 20rpx;
			display: flex;flex-wrap: wrap;justify-content: flex-start;
			.list{
				width: 20%;
				display: flex;flex-direction: column;
				align-items: center;justify-content: center;
				padding: 10rpx 0;
				margin: 10rpx 0;
				.image{
					box-shadow:0 0 5px 1px #efefef ;
					border-radius: 6rpx;
					width: 80rpx;height: 80rpx;
				}
				.Membername{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					word-wrap: break-word;
					word-break: break-all;
				}
			}
		}	
	}
	.complaint{
		display: flex;
		justify-content: space-between;
		padding: 30rpx 30rpx;
		font-size: 30rpx;
		border-top:1px solid #f8f8f8;
		background: #FFFFFF;
	}
	.bgcolor{
		background-color: #F8F8F8;
	}
</style>
