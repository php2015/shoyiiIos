<template>
	<view class="paymentOrder dark-page">
		<text class="tip" v-if="this.paymentData.length>1">该账单已超过单笔支付最高金额￥6000，已自动拆分为两个账单</text>
		<!-- <navigator url="/pages/orderManage/orderSuccess">跳转支付成功页面</navigator> -->
		<view class="" style="margin-top: 48rpx;">
			<view class="items dark-block" v-for="(item,index) in paymentData" :key='index'>
				<text v-if="item.billStatus=='WFK'">未付款</text>
				<text v-if="item.billStatus=='YFK'">已付款</text>
				<view class="count" style="">
					<text>￥</text><text>{{item.totalAmount}}</text>
				</view>
				<text class="tip">*仅支持微信支付</text>
				<view class="btn" style="">
					<button type="default" @click='payment(item)' v-if="item.billStatus=='WFK'||item.billStatus=='YQ'" class="btn1">立即支付</button>
					<button type="default" v-if="item.billStatus=='YFK'" class="btn1">已付款</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {orderDetail,paymentResult,getOpenid} from '@/utill/api/order/order.js'
	export default{
		data(){
			return{
				paymentData:[],//账单的信息
				flag:true,//避免用户在短时间内点击
				timerID:null,
				orderData:{},//订单的数据
				
			}
		},
		methods:{
			orderDetail(id){
				orderDetail({
					orderNo:id,
					flag:'bill'
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.orderData=res.data.object
						this.paymentData=res.data.object.omsBills
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					console.log(err)
					uni.showToast({
						title:'err',
						icon:'none'
					})
				})
			},
			// 获取code
			getJscode(){
				uni.login({
					success:(e)=> {
						console.log(e)
						console.log(e.code)
						this.getOpenid(e.code)
					},
					fail:(err) =>{
						console.log(err)
						console.log('err')
					}
				})
			},
			getOpenid(code){
				getOpenid({
					jsCode:code
				}).then(res=>{
					console.log(res)//存储到本地
					if(res.data.code==0){
						uni.setStorageSync('openid',res.data.object);
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
			randomStr(length){
			  const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			  let noceStr='';
			  let maxPos=chars.length;
			  while (length--) noceStr += chars[Math.random()*maxPos |0]
			  return noceStr
			},
			payment(data){
				console.log(data)
				if(this.flag){
					this.flag=false
					if(data.totalAmount=='未报价'||data.totalAmount=='0.00'||data.totalAmount=='0'){
						uni.showToast({
							title:'暂不能支付'
						})
						return;
					}
					var openId=uni.getStorageSync('openid')
					// #ifdef MP-WEIXIN
					if(!openId){
						uni.showToast({
							title:'暂不能支付'
						})
						return;
					}
					// #endif
					var outTradeNo=this.randomStr(3)//随机数
					var subject=data.billDescription//app支付的副标题，
					if(!data.billSubject){
						uni.showToast({
							title:'订单描述错误',
							icon:'none'
						})
						return
					}
					var body=data.billSubject//订单描述
					var outTradeNo=data.billNo+outTradeNo//订单号
					var totalFee=Number((data.totalAmount)*100).toFixed(0)//总金额，分
					uni.showLoading({//避免接口调用时间长， 没反应
						title:'加载中'
					})
					uniCloud.callFunction({
						name: 'getOrderInfo',
						data:{
							// #ifdef MP-WEIXIN
							plateForm:'miniparamWeixin',
							// #endif
							// #ifdef APP-PLUS
							plateForm:'appWeixin',
							// #endif
							body:body,
							outTradeNo:outTradeNo,
							totalFee:totalFee,
							// #ifdef APP-PLUS
							subject:subject,//app的副标题
							// #endif
							openid:openId,
						},
						success(res) {
							uni.hideLoading()
							console.log(res)
							uni.requestPayment({
						  // #ifdef APP-PLUS
						   provider: 'wxpay', // App端此参数必填，可以通过uni.getProvider获取
						  // #endif
						  // #ifdef MP-WEIXIN
						  ...res.result.orderInfo,
						  // #endif
						  // #ifdef APP-PLUS || MP-ALIPAY
						  orderInfo: res.result.orderInfo,
						  // #endif
							...res.result.orderInfo,
								success(e){
									console.log('3')
									console.log(e)
									// errMsg: "requestPayment:ok"
									// 支付成功后,需要进行支付的禁止
									// 点击支付完成之后,如果需要跳转页面,可以在这里设置逻辑
									uni.showLoading({
										title:'加载中'
									})
									uniCloud.callFunction({//查询订单
										name: 'orderQuery',
										data:{
											// #ifdef MP-WEIXIN
											plateForm:'miniparamWeixin',
											// #endif
											// #ifdef APP-PLUS
											plateForm:'appWeixin',
											// #endif
											outTradeNo:outTradeNo
										},
										success(e) {
											uni.hideLoading()
											console.log(e)
											if(e.result.tradeState=='SUCCESS'&&e.result.totalFee==totalFee){//支付成功，将结果返给后端，后端通过与微信发送的消息去修改订单的状态
												paymentResult({
													resultCode:e.result.resultCode,
													returnCode:e.result.returnCode,
													outTradeNo:e.result.outTradeNo,
													tradeType:e.result.tradeType,
													totalFee:e.result.totalFee,//总金额，分
													openId:e.result.openid,
													timeEnd:e.result.timeEnd,//交易完成时间
													transactionId:e.result.transactionId//微信交易号
												}).then(res=>{
													console.log(res)
													if(res.data.code==0){
														uni.navigateTo({//订单查询完之后，进行跳转页面
															url:'/pages/orderManage/orderSuccess?billNo='+data.billNo
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
											}
										},fail(err) {
											uni.hideLoading()
											console.log(err)//订单不存在， 返回值为ORDERNOTEXIST
										}
									})
								},
								fail(err){//取消支付
									// console.log('2')
									console.log(JSON.stringify(err))
									uni.showToast({
										title:'取消支付',
										icon:'none'
									})
									uni.report('订单支付时报错',{
										outTradeNo:outTradeNo,
										err:JSON.stringify(err)
									})
									// 小程序取消支付
									// {"errMsg":"requestPayment:fail 系统错误，错误码：1, [20201229 14:38:04][touristappid]"}
									// {"errMsg":"requestPayment:fail cancel"}
									// app取消支付
									 // {"errMsg":"requestPayment:fail [payment微信:-2]User canceled","errCode":-100,"code":-100} 
								}
							})
						},
						fail(err) {
							uni.report('获取订单支付参数时报错',{
								outTradeNo:outTradeNo,
								err:err
							})
							uni.hideLoading()
							console.log(err)
							uni.showToast({
								title:'err1'
							})
						}
					})
				}
				this.timerID = setTimeout(()=> {
					console.log('你有执行吗')
					this.flag = true
				}, 4000)
			}
		},
		onLoad(option) {
			// console.log(option.orderNo)
			this.orderDetail(option.orderNo)
			// #ifdef MP-WEIXIN
			if(uni.getStorageSync('openid')){
			}else{
				this.getJscode()//不需要登录就可以支付
			}
			// #endif
		},
		onUnload(){
			clearTimeout(this.timerID)
		},
		onBackPress(e){
			// console.log(getCurrentPages())
			var page =getCurrentPages()[0].route;
			// console.log(page)
			uni.navigateTo({
				url:'/pages/orderManage/orderDetail?orderNo='+this.orderData.orderNo
			})
			return true
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.paymentOrder{
		padding: 30rpx;
		font-size: 24rpx;
		font-family: PingFang-SC-Medium;
		/* #ifdef APP-PLUS */
		height: 100%;
		/* #endif */
		color: #000000;
		.tip{
			color: #8F8F8F;
		}
		.items{
			padding: 50rpx 30rpx;text-align: center;
			background-color: #FFFFFF;margin-bottom: 30rpx;
			.count{
				font-size: 48rpx;font-weight: bold;font-family: PingFang-SC-Bold;
				margin: 10rpx 0;
			}
			.btn{
				margin-top: 80rpx;
				.btn1{
					height: 88rpx;line-height: 88rpx;background-color: #52D17F;color: #FFFFFF;
					font-size: 30rpx;font-family: PingFang-SC-Bold;font-weight: bold;
				}
			}
		}
	}
</style>
