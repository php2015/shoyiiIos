<template>
	<view class="dark-page">
		<view class="list">
			<view class="list-item u-skeleton dark-block" v-for="(item,index) in list.slice(0,6)" :key='item.id' @click="enterDetail(item.id)" hover-class="bgColor darkbgColor">
				<view class="" style="position: relative;">
					<u-image class='u-skeleton-circle' width="100rpx" height="100rpx" :src="item.previewImage[item.targetIcon]" mode='aspectFit'>
						<view slot="error" style="font-size: 24rpx;">
							<u-image width="100rpx" height="100rpx"  src="/static/image/person.png" mode="aspectFit"></u-image>
						</view>
					</u-image>
					<u-badge v-if="item.messageContent.isRead==0?true:false" size="mini" type="error" :is-dot="true" :is-center='true'></u-badge>
				</view>
				<view class="item-content u-skeleton-rect">
					<view class="item-middle">
						<view class="text">
							<text v-if='item.messageContent.title'>{{item.messageContent.title}}</text>
						</view>
						<view class="text">
							<text>{{item.messageContent.content}}</text>
						</view>
					</view>
					<view class="item-right">
						<text>{{item.messageContent.createTime|timeStamp}}</text>
					</view>
				</view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class="" v-if="list.length>6">
				<view class="ad-view">
				     <ad adpid="1542457411"></ad>
				</view>
			</view>
			<!-- #endif -->
			<view class="list-item u-skeleton dark-block" v-for="(item,index) in list.slice(6)" :key='item.id' @click="enterDetail(item.id)" hover-class="bgColor darkbgColor">
				<view class="" style="position: relative;">
					<u-image class='u-skeleton-circle' width="100rpx" height="100rpx" :src="item.previewImage[item.targetIcon]" mode='aspectFit'>
						<view slot="error" style="font-size: 24rpx;">
							<u-image width="100rpx" height="100rpx"  src="/static/image/person.png" mode="aspectFit"></u-image>
						</view>
					</u-image>
					<u-badge v-if="item.messageContent.isRead==0?true:false" size="mini" type="error" :is-dot="true" :is-center='true'></u-badge>
				</view>
				<view class="item-content u-skeleton-rect">
					<view class="item-middle">
						<view class="text">
							<text v-if='item.messageContent.title'>{{item.messageContent.title}}</text>
						</view>
						<view class="text">
							<text>{{item.messageContent.content}}</text>
						</view>
					</view>
					<view class="item-right">
						<text>{{item.messageContent.createTime|timeStamp}}</text>
					</view>
				</view>
			</view>
			<!-- #ifdef APP-PLUS -->
			<view class="" v-if="list.length>12">
				<view class="ad-view">
				     <ad adpid="1043381001"></ad>
				</view>
			</view>
			<!-- #endif -->
			<!-- 要有初始化的数据，否则会报错 -->
			<u-skeleton :loading="loading" el-color="#ddd" bg-color="#fff"></u-skeleton>
			<u-back-top :scroll-top="scrollTop" top="1000"></u-back-top>
			<u-loadmore :status="status" />
		</view>
	</view>
</template>
<script>
	import {getNotice} from '@/utill/api/notice/notice.js'
	export default {
		data() {
			return {
				status:'loadmore',
				list:[],
				skeletonlist:[ //骨架屏的初始化数据
					{
						createTime:'1610102765000',
						doctorHospital:'医院',
						id:'0',
						massageType:2,
						massageTypeId:2,
						messageContent:{
							content: "病历的手术设计辅助订单已发出。",
							createTime: "2021-01-08 18:46:05",
							id: 1639,
							ifAccept: 0,
							ifCancel: 0,
							ifDelete: 0,
							isRead: 1,
							title: "订单支付测试病例 病历（1944）"
						},
						previewImage:{
							62546: "https://shoyii-open-1258143571.cos.ap-guangzhou.myqcloud.com/images/febcf5b022454a7f80f584660f8a9309/tmp_b390bbf7cd5d9bafdc41ad4f9d5739beee379edaa2e4aaca.jpg"
						},
						targetIcon: "62546",
						targetId: 42,
						targetUser: "D",
						userName: "李明",
					}
				],
				page:1,
				size:10,
				total:0,
				mark:0,//第一次加载还是多次加载数据
				scrollTop:0,
				loading:true
			}
		},
		methods: {
			enterDetail(id){
				uni.navigateTo({
					url:'/pages/notice/noticeDetail?id='+id
				})
				console.log(this.list)
				this.list.forEach((item,index)=>{
					if(id==item.id){
						this.list[index].messageContent.isRead=1//点击之后，更改Wie消息已读状态
					}
				})
			},
			getNotice(mark,page){
				getNotice({
					pageNum:page,
					pageSize:this.size,
					// massageType:""
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.total=res.data.object.pages
						this.loading=false
						console.log(mark)
						if(mark==0){
							this.list=res.data.object.list
						}else if(mark==1){
							this.list=this.list.concat(res.data.object.list)
						}
						console.log(this.list)
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
			onReachBottom() {
				console.log(this.page)
				console.log(this.total)
				if(this.page >= this.total) return this.status = 'nomore';
				this.status = 'loading';
				this.page++;
				this.mark=1
				this.getNotice(this.mark,this.page)
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		onLoad() {
			this.list=this.skeletonlist //骨架屏的初始化数据
			this.getNotice(0,1)
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	// .noticeLogo{
	// 	position: fixed;
	// 	 top:0;
	// 	 right:0;
	// 	 bottom:0;
	// 	 left:0;
	// 	 margin:auto;
	// }
	.list-item{
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
	}
	.item-middle{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.text{
			line-height: 50rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}
	}
	.item-content{
		padding-left: 20rpx;
		flex: 1;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		.item-right{
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			line-height: 50rpx;
			color: gray;
			font-size: 24rpx;
		}
	}
	.bgColor{
		background-color: #F8F8F8;
	}
</style>
