<template>
		<view @click="enterDetail(Caseid)" class="dataList">
			<!-- #ifndef MP-WEIXIN -->
			<u-lazy-load class='image dark-block dark-fade-border' :image="imgUrl" img-mode='aspectFit' height='280rpx'></u-lazy-load>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<image lazy-load class='image dark-block' :src="imgUrl" mode="aspectFit"></image>
			<!-- #endif -->
			<view class="textOne dark-white-font">
				<text>{{Uname}}</text>
			</view>
			<view class="textTwo dark-white-font">
				<text>病历号：</text>
				<text>{{casecode}}</text>
			</view>
		</view>
</template>
<script>
	export default {
		data() {
			return {
			};
		},
		props:{
			Caseid:{
				type:Number,
				default:null,
			},
			imgUrl:{//预览图
				type:String,
				default:'',
			},
			Uname:{//患者名称
				type:String,
				default:'',
			},
			casecode:{//病历号
				type:String,
				default:'',
			},
			introduce:{//介绍
				type:String,
				default:'',
			}
		},
		methods:{
			enterDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'/pages/caselist/caselistdetail?id='+id,
					animationType:'pop-in'
				})
			}
		}
	}
</script>

<style scoped>
	.dataList{
		margin-right: 20rpx;
		width: 256rpx!important;
		border: none!important;
		border-radius: 15rpx;
		padding-bottom: 20rpx;
		display: inline-block;
		border-radius: 10rpx;
	}
	.dataList .image{
		width: 100%;
		height: 280rpx;
		max-height: 280rpx;
		border: 1px solid #EEEEEE;
		border-radius: 20rpx;
		background-color: #FFFFFF;
	}
	.dataList uni-view{
		color: #000000;
		font-size: 28rpx;
		font-family: PingFang-SC-Regular;
		text-align: left;
	}
	.dataList .textOne{
		margin: 20rpx 0;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		text-align: left;
		/* #ifdef MP-WEIXIN */
		text-indent: 10rpx;
		/* #endif */
	}
	.textTwo{
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size: 24rpx;
		/* #ifdef MP-WEIXIN */
		text-align: left;
		text-indent: 10rpx;
		/* #endif */
	}
</style>
