<template>
	<view class="page dark-page" style="padding: 0 30rpx;">
		<view class="" style="text-align: center;padding: 100rpx 0 60rpx;">
			<u-icon name="checkmark-circle" color="#86B0D4" size="136"></u-icon>
			<view class="" style="padding-top: 50rpx;">
				<text>支付成功</text>
			</view>
			<!-- <navigator url="/pages/orderManage/orderDetail">跳转订单详情页面</navigator> -->
		</view>
		<view class="dark-block"  style="background-color: #FFFFFF;padding: 30rpx 28rpx;border-radius: 15rpx;margin-bottom: 30rpx;">
			<view class="item dark-font">
				<text class="time right" style="">支付金额</text>
				<text>{{billDetails.totalAmount}}</text><text>元</text>
			</view>
			<view class="item dark-font">
				<text class="time right" style="">交易对象</text>
				<text>{{billDetails.targetName}}</text>
			</view>
			<view class="item dark-font">
				<text class="time right" style="">账单编号</text>
				<text>{{billDetails.billNo}}</text>
			</view>
			<view class="item dark-font">
				<text class="time right" style="">创建时间</text>
				<text>{{billDetails.createTime|time}}</text>
			</view>
			<view class="item dark-font">
				<text class="time right" style="">付款时间</text>
				<text>{{billDetails.paymentTime|time}}</text>
			</view>
		</view>
		<view class="footer" @click="enterBill(billDetails.orderNo)">
			<button type="default" style="height: 100rpx;line-height: 100rpx;background-color: #86B0D4;color: #FFFFFF;">查看订单</button>
		</view>
	</view>
</template>

<script>
	import {billDetail} from '@/utill/api/order/order.js'
	import {time} from '@/utill/tools/timestamp.js'
	export default{
		data(){
			return{
				billDetails:{},
				// caseHistoryId:'',
			}
		},
		filters:{
			time
		},
		methods:{
			billDetail(id){
				billDetail({
					billNo:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.billDetails=res.data.object
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
			enterBill(orderNo){//订单号
				uni.navigateTo({//进入订单详情页面
					url:'/pages/orderManage/orderDetail?orderNo='+orderNo
				})
			},
		},
		onLoad(option) {
			console.log(option)
			console.log(option.billNo)
			// this.caseHistoryId=option.caseHistoryId
			// this.bus.$emit('changeOrderStatus')
			this.billDetail(option.billNo)
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.page{
		min-height: 100%;
	}
	.item{
		line-height: 56rpx;
		color: #000000;
		display: flex;
	}
	.time{
		color: #8F8F8F;
		width: 112rpx;
		display: block;
	}
	.right{
		margin-right: 38rpx;
	}
	.footer{
		position: fixed;
		bottom: 20rpx;
		left: 0;
		right: 0;
		width: 100%;
		padding: 0 30rpx;
	}
</style>
