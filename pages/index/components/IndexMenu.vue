<template>
	<view class="menu dark-block">
		<view class="list" @click="enter(index)" v-for="(item,index) in menu" :key='index'>
			<view class="pic">
				<image lazy-load class="img" :src=item.imgurl mode=""></image>
			</view>
			<view class="">
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	import {getReportInfor} from '@/utill/api/train/train.js'
	export default{
		data(){
			return{
				menu:[
					{imgurl:'/static/image/pic1.png',title:'公开模型'},
					{imgurl:'/static/image/pic2.png',title:'设备管理'},
					{imgurl:'/static/image/pic3.png',title:'树蚁说明'},
					{imgurl:'/static/image/pic6.png',title:'树蚁案例'},
					{imgurl:'/static/image/pic4.png',title:'订单管理'},
					{imgurl:'/static/image/pic5.png',title:'教学培训'},
					{imgurl:'/static/image/pic7.png',title:'经典案例'},
					// {imgurl:'/static/image/pic8.png',title:'专家团队'
				]
			}
		},
		methods:{
			enter(index){
				 if(index==0){
					 uni.navigateTo({
					 	url:'/pages/publicModel/publicModel'
					 })
				}else if(index==1){
					uni.navigateTo({
						url:'/pages/deviceManage/deviceManage'
					})
				}else if(index==2){//树蚁说明
					uni.navigateTo({
						url:'/pages/news/news?id='+2
					})
				}else if(index==3){//树蚁案例
					uni.navigateTo({
						url:'/pages/news/news?id='+1
					})
				}
				else if(index==4){//订单管理
					uni.navigateTo({
						url:'/pages/orderManage/orderManage'
					})
				}else if(index==5){//培训
					if(!uni.getStorageSync('token')){//没登陆，进入报名信息页面
						uni.navigateTo({
							url:'/pages/teachTrain/teachTrain'
						})
					}else{
						// 获取报名信息
						getReportInfor({}).then(res=>{
							console.log(res)
							if(res.data.code==0){
								if(res.data.object.length!=0){//有报名信息，则进入报名列表页面
									uni.navigateTo({
										url:'/pages/teachTrain/trainList'
									})
								}else{//无则进入报名信息页面
									uni.navigateTo({
										url:'/pages/teachTrain/teachTrain'
									})
								}
							}else{
								uni.navigateTo({
									url:'/pages/teachTrain/teachTrain'
								})
							}
						}).catch(err=>{
							console.log(err)
							uni.navigateTo({
								url:'/pages/teachTrain/teachTrain'
							})
						})
					}
				}else if(index==6){//经典案例
					uni.navigateTo({
						url:'/pages/caselist/classifycase'
					})
				}
				else if(index==7){//专家团队
					uni.navigateTo({
						url:'/pages/experts/experts'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.menu{
		display:flex;
		align-items: center;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		font-size: 24rpx;
		color: #000000;
	}
	.list{
		width: 20%;
		text-align: center;
		padding-bottom: 20rpx;
	}
	.pic{
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 4rpx;
	}
	.menu :nth-child(1) .img{
		width: 56rpx;
		height: 56rpx;
	}
	.menu :nth-child(2) .img{
		width:70rpx ;
		height: 70rpx;
	}
	.menu :nth-child(3) .img{
		width:58rpx ;
		height: 58rpx;
	}
	.menu :nth-child(4) .img{
		width:60rpx ;
		height: 60rpx;
	}
	.menu :nth-child(5) .img{
		width: 56rpx;
		height: 56rpx;
	}
	.menu :nth-child(7) .img{
		width: 60rpx;
		height: 60rpx;
	}
</style>
