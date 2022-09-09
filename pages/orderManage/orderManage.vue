<template>
	<view class="page dark-page" style="padding: 18rpx 30rpx 0;">
		<view class="orderlist dark-block dark-border-none" v-for="(item,index) in orderlist" :key='index'>
			<view class="title">
				<text>{{item.paymentStatus}}</text>
				<text class="time_title">{{item.createTime|timeStamp}}</text>
			</view>
			<view class="count">
				<text class="dark-font">{{item.payAmount}}</text>
				<text class="unit"> 元</text>
			</view>
			<view class="item">
				<text class="time right" style="">订单状态</text>
				<text>{{item.orderStatus}}</text>
			</view>
			<view class="item">
				<text class="time right" style="">订单编号</text>
				<text>{{item.orderNo}}</text>
			</view>
			<view class="item" v-if="item.caseHistoryId">
				<text class="time right" style="">对应病历</text>
				<text>{{item.subordinateName||'未命名'}}</text>
			</view>
			<view class="item" v-if="item.modelLibId">
				<text class="time right" style="">模型名称</text>
				<text>{{item.subordinateName}}</text>
			</view>
			<view class="item" v-if="item.caseHistoryId">
				<text class="time right" style="">编译团队:</text>
				<text>{{item.company}}</text>
			</view>
			<view class="detail dark-top-border" @click="enterDetail(item)">
				<text>查看详情</text>
				<uni-icons type="arrowright" color="#333333" class='dark-font'></uni-icons>
			</view>
		</view>
		<u-loadmore :status="status" />
	</view>
</template>

<script>
	import {
		getOrderList
	} from '@/utill/api/order/order.js'
	export default {
		data() {
			return {
				orderlist: [],
				status: 'nomore',
				page: 1,
				total: 0,
				mark: 0, //第一次加载还是多次加载数据
			}
		},
		methods: {
			getOrderList(mark, page) {
				getOrderList({
					pageNum: page,
					pageSize: 5
				}).then(res => {
					console.log(res)
					if (res.data.code == 0) {
						if (!res.data.object) { //无数据
							this.status = 'nomore'
							return
						}
						this.total = res.data.object.pages
						if (mark == 0) {
							this.orderlist = res.data.object.list
						} else if (mark == 1) {
							this.orderlist = this.orderlist.concat(res.data.object.list)
						}
						this.orderlist.filter(item => {
							if (item.paymentStatus == '901') {
								item.paymentStatus = '待付款'
							}
							if (item.paymentStatus == '902') {
								item.paymentStatus = '已付款'
							}
							if (item.paymentStatus == '903') {
								item.paymentStatus = '待退款'
							}
							if (item.paymentStatus == '904') {
								item.paymentStatus = '已退款'
							}
						})
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						return;
					}
				}).catch(err => {
					console.log(err)
				})
			},
			enterDetail(item) {
				console.log(item)
				uni.navigateTo({
					url: '/pages/orderManage/orderDetail?orderNo='+item.orderNo
				})
			},
			onReachBottom() {
				if (this.page >= this.total) return this.status = 'nomore';;
				this.status = 'loading';
				this.page++;
				console.log(this.page)
				this.mark = 1
				this.getOrderList(this.mark, this.page)
			},
		},
		onLoad() {
			this.page = 1
			this.total = 0
			this.getOrderList(0, 1)
			// this.bus.$on('changeOrderStatus',data=>{//状态发生变化
			//     this.getOrderList(0,1)
			// })
		},
		onBackPress(e) {
			var page = getCurrentPages()[0].route;
			// console.log(page)
			if (page == 'pages/orderManage/orderManage') {
				uni.switchTab({
					url: '/pages/index/index'
				})
			} else {
				uni.switchTab({
					url: '/' + page
				})
			}
			return true
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		},
	}
</script>

<style scoped lang="scss">
	.page{
		min-height: 100%;
	}
	.orderlist {
		margin-top: 18rpx;
		background-color: #FFFFFF;
		border: 1px solid #F8F8F8;
		padding: 26rpx 30rpx 0;
		border-radius: 15rpx;
		.title {
			display: flex;
			justify-content: space-between;
			line-height: 56rpx;
		}

		.time_title {
			color: gray;
		}

		.time {
			color: gray;
			// width: 112rpx;
			display: block;
		}

		.right {
			margin-right: 30rpx;
		}

		.count {
			line-height: 80rpx;
			color: #000000;
			font-size: 60rpx;
			font-weight: bold;
			font-family: PingFang-SC-Bold;

			.unit {
				font-size: 30rpx;
				font-weight: 100;
				font-family: PingFang-SC-Regular;
				color: #333333;
				margin-left: 10rpx;
			}
		}

		.item {
			line-height: 56rpx;
			display: flex;
		}

		.detail {
			margin-top: 40rpx;
			height: 100rpx;
			border-top: 1px solid #EEEEEE;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
