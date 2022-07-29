<template>
	<view class="box">
		<view class="list dark-block" @tap="enterDetail(Surgicalid)" hover-class="bgColor darkbgColor">
			<view class="surgical_image">
				<!-- #ifdef APP-PLUS -->
				<u-lazy-load class='image' :image="imgUrl" height='214rpx' img-mode='aspectFit'></u-lazy-load>
				<!-- #endif -->
				<!-- #ifndef APP-PLUS -->
				<image lazy-load class='image' :src="imgUrl" mode="aspectFit"></image>
				<!-- #endif -->
			</view>
			<view class="content">
				<view class="">
					<text class="content_titlename dark-font">{{content_title}}</text>
					<view class="content_item dark-font">
						<text>{{content}}</text>
					</view>
				</view>
				<view class="title">
					<view class="title_top dark-font">
						<image lazy-load v-if="doctor&&doctor.avatarLinks" :src="doctor.avatarLinks" mode="aspectFit"></image>
						<image lazy-load v-else src="/static/image/person.png" mode="aspectFit"></image>
						<text>{{docName}}</text>
					</view>
					<view class="time">
						<text>{{time|timeStamp}}</text>
					</view>	
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			Surgicalid:{
				type:Number,
				default:null,
			},
			doctor:{
				type:Object,
				default:()=>{
					return{}
				}
			},
			docName:{
				type:String,
				default:'',
			},
			time:{
				// type:Number,
				// default:'',
			},
			imgUrl:{
				type:String,
				default:'',
			},
			content_title:{
				type:String,
				default:'',
			},
			content:{
				type:String,
				default:'',
			}
		},
		methods:{
			enterDetail(id){
				uni.navigateTo({
					url:'/pages/surgicalData/surgicalDetail?id='+id,
					animationType:'pop-in'
				})
			}
		}
	}
</script>

<style>
	.box{
		padding: 0 30rpx;
		margin-bottom: 20rpx;
		width: 100%;
	}
	.list{
		display: flex;
		align-items: flex-start;
		padding: 12rpx;
		background-color: #FFFFFF;
		/* border: 1px solid #EEEEEE; */
		border-radius: 10rpx;
	}
	.bgColor{
		background-color: #F8F8F8;
	}
	.surgical_image{
		height: 214rpx;
		width: 226rpx;
		margin-right: 21rpx;	
	}
	.surgical_image .image{
		width: 100%;
		min-width: 226rpx;
		height: 214rpx;
		background: #adabff;
	}
	.content{
		flex:1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 214rpx;
		overflow: hidden;
		margin-top: 0;
		padding: 0 10rpx;
	}
	.content .content_titlename{
		color: #000000;
		font-size: 30rpx;
		font-weight: bold;
		font-family: PingFang-SC-Bold;
		/* margin-bottom: 22rpx; */
		/* line-height: 24rpx; */
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.content .content_item{
		color: #000000;
		font-family: PingFang-SC-Regular;
		font-size: 24rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
		line-height: 30rpx;
		margin: 22rpx 0 30rpx;

	}
	.title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		color: #000000;
		font-size: 24rpx;
		font-family: PingFang-SC-Regular;
	}
	.title .time{
		color: #909090;
	}
	.title_top{
		display: flex;
		align-items: center;
	}
	.title_top image{
		width: 36rpx;
		height: 36rpx;
		border-radius: 50%;
		margin-right: 7px;
		display: block;
	}
	
</style>
