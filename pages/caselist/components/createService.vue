<template>
	<view class="order">
		<view style="padding: 0 30rpx;">
			<view class="orderDesign" :class="orderStatus?'disableColor':'normalColor'" @click="createorder">
				<text>生成一个辅助三维设计订单</text>
			</view>
		</view>
		<view v-if="orderData.length!=0" class="orderInfor dark-block">
			<view class="orderbtn" v-for="(item,index) in orderData" :key='index'
			 @click="orderSure(item)">
				<view class="status_title dark-font" style="">
					<text>{{item.content}}</text>
				</view>
				 <!-- :style="{'text-align':item.logisticsNumber?'center':'left'}" -->
				<view class="status_title dark-font" style="text-align:center;">
					<text>￥{{item.price}}</text>
				</view>
				<view class="order_status">
					<!-- 物流信息 -->
					<view class="btn" style="margin-right: 20rpx;" v-if="item.logisticsNumber">
						<text>已发货</text>
					</view>
					<!-- <view class="btn" @click="orderSure()" :class="orderData.statusCode=='201'?'btn3':'btn4'"> -->
					<view class="btn" :class="{'waitDesign':item.statusCode=='201',
					'designIng':item.statusCode=='203','waitSure':item.statusCode=='701',
					'waitPay':item.statusCode=='901','complete':item.statusCode=='902',
					}"
					>
						<text>{{item.status}}</text>
					</view>
					<!-- <view class="arrowLeft">
						<u-icon name="arrow-right" color="#666666" class='dark-font'></u-icon>
					</view> -->
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// WXD("101", "未下单"),DSJ("201", "待设计"),SJZ("203", "设计中"),DQR("701", "待确认"),DFK("901", "待付款"),YWC("902", "已完成"),
	import {ensureService} from '@/utill/api/order/order.js'
	export default{
		filters:{
			filterData:(data)=>{
				console.log(data)
				var type;
				data.forEach(item=>{
					console.log(item.productType)
					if(item.productType==1||item.productType==2||item.productType==3){
						switch (item.productType){
							case 1: 
								type='三维重建'
							break; 
							case 2:
								type='模型观察、分析、测量'
							break; 
							case 3:
								type='手术方案设计(包含：1:三维重建,2:模型观察、分析、测量)'
							break; 
							default:
								type='三维重建'
							break; 
						}
					}
				})
				return type
			},
			filterStatus:data=>{
				console.log(data)
				return true
			}
		},
		props:{
			orderData:{
				type:Array,
				default:()=>{
					return []
				}
			},
		},
		computed:{
			orderStatus(){
				// 当上一个订单的状态为901或902，101时，才能下新的订单
				if(this.orderData.length!=0){
					if(this.orderData[this.orderData.length-1].statusCode=='901'||this.orderData[this.orderData.length-1].statusCode=='902'||this.orderData[this.orderData.length-1].statusCode=='101'){
						return false
					}else{//禁用
						return true
					}
				}else{
					return false
				}
			}
		},
		methods:{
			// 生成订单服务
			createorder(){
				console.log(this.orderData)
				if(this.orderData.length==0){//为101时，订单是未下单，数据处理为空数组
					this.$emit('help')
				}else{
					// 当上一个订单的状态为901或902，101时，才能下新的订单
					if(this.orderData[this.orderData.length-1].statusCode=='901'||this.orderData[this.orderData.length-1].statusCode=='902'){
						this.$emit('help')
					}else{
						//上一个订单已完成后，才能下另一个订单
						uni.showToast({
							title:'上一个订单未完成',
							icon:'none'
						})
					}
				}
			},
			orderSure(data){
				uni.navigateTo({
					url:'/pages/orderManage/orderDetail?orderNo='+data.orderNo
				})
			},
		},
	}
</script>

<style scoped lang="scss">
	.order{
		padding:30rpx 0 0;
	}
	.orderDesign{
		color: #FFFFFF;
		padding: 30rpx 0;
		text-align: center;
		border-radius: 30rpx;
	}
	.disableColor{
		background-color: #8F8F8F;
	}
	.normalColor{
		background-color: #9AE37E;
	}
	.orderInfor{
		background-color: #FFFFFF;
		margin-top: 20rpx;
		padding:20rpx 30rpx;
		.orderbtn{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 20rpx;
			.status_title{
				color: #000000;font-size: 28rpx;
				flex:1;text-align: left;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.order_status{
				display: flex;align-items: center;justify-content: center;
				.btn{
					padding: 8rpx 16rpx;
					background-color: #FFFFFF;
					color: #000000;
					font-size: 24rpx;
					font-weight: bold;
					font-family: PingFang-SC-Bold;
					border: 1px solid #8F8F8F;
				}
				// 待设计
				.waitDesign{
					border: 1px solid #CCCCCC;
					color: #8F8F8F;
				}
				// 设计中
				.designIng{
					border: 1px solid #999999;
					color: #333333;
				}
				// 待确认
				.waitSure{
					border: 1px solid #FF993F;
					color: #FF993F;
				}
				// 待支付
				.waitPay{
					border: 1px solid #52D17F;
					color: #52D17F;
				}
				// 已完成
				.complete{
					border: 1px solid #69CDFF;
					color: #69CDFF;
				}
				.arrowLeft{
					margin-left: 20rpx;
				}
			}
			
		}
	}
</style>
