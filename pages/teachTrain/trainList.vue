<template>
	<view class="page dark-page">
		<view class="information">
			<view class="list dark-block" v-for="(item,index) in reportInfor" :key='index' @tap='enterDetail(item.id)'>
				<view class="title">
					<text class="classRank">{{item.trainingTypeInfo}}</text>
					<u-tag :text="item.finalConfirmOrNot|fiterData" :type="item.finalConfirmOrNot|fitercolor" size='mini'/>
				</view>
				<view class="list-cell">
					<text class="">姓名:</text>
					<view class="label">
						<text>{{item.name}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">手机号码:</text>
					<view class="label">
						<text>{{item.phoneNumber}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">参与人数:</text>
					<view class="label">
						<text>{{item.trainedNumber}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">参与时间:</text>
					<view class="label">
						<text>{{item.participationTime|timeStamp}}</text>
					</view>
				</view>
			</view>
			<view class="send">
				<button class="btn" @tap='addTrain'>新增报名信息</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {getReportInfor} from '@/utill/api/train/train.js'
	export default{
		data(){
			return{
				reportInfor:[]
			}
		},
		filters:{
			fiterData:function(val){
				if(val==false){
					return '未确定'
				}else{
					return '已确定'
				}
			},
			fitercolor:function(val){
				if(val==false){
					return 'error'
				}else{
					return 'info'
				}
			},
		},
		methods:{
			// 获取报名信息
			getReportInfor(){
				getReportInfor({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						if(res.data.object.length!=0){//有报名信息
							this.reportInfor=res.data.object
						}
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
			addTrain(){
				uni.navigateTo({
					url:'/pages/teachTrain/teachTrain'
				})
			},
			// 进入报名详情
			enterDetail(id){
				uni.navigateTo({
					url:'/pages/teachTrain/teachTrain?id='+id
				})
			}
		},
		onLoad() {
			// 获取报名信息
			this.getReportInfor()
		},
		onBackPress(e){
			console.log(e)
			const page=getCurrentPages()
			var page1 = page[page.length-1];
			var page2=page[page.length-2]
			if(page1.route==page2.route){
				uni.switchTab({
					url:'/pages/index/index'
				})
				return true
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
	.page{
		min-height: 100%;
	}
	.information{
		padding: 30rpx;
		font-size: 28rpx;
		font-family: PingFang-SC-Regular;
		color: #000000;
		.list{
			background-color: #FFFFFF;
			padding: 20rpx 30rpx;
			margin-bottom: 30rpx;
			.title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 0;
				.classRank{
					font-weight: bold;
					font-family: PingFang-SC-Bold;
				}
			}
			.list-cell{
				display: flex;
				align-items: center;
				padding: 10rpx 0;
				.label{
					margin-left: 20rpx;
					flex: 1;
				}
			}
		}
		.send{
			text-align: center;
			margin-top: 60rpx;
			.btn{
				width: auto;
				background-color: #69CDFF;
				color: #FFFFFF;
				width: 330rpx;
				height: 88rpx;
				line-height: 88rpx;
				font-size: 30rpx;
				font-weight: bold;
				font-family: PingFang-SC-Bold;
			}
		}
		
	}
</style>
