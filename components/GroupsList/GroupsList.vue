<template>
	<view @click="enterDevice(Deviceid,Uname)" hover-class="bgColor">
		<view class="DName dmark">
			<text>组别名称：</text>
			<text>{{Uname}}</text>
		</view>
		<view class="Dcontent">
			<view class="dmark">
				<text>设备数量 : </text>
				<text v-if="devices"> {{devices.length}}</text>
				<text v-else>0</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		props:{
			devices:{
				type:Array,
				default:()=>{
					return[]
				}
			},
			Uname:{
				type:String,
				default:''
			},
			Deviceid:{
				type:Number,
				default:null
			}
		},
		methods:{
			enterDevice(id,name){
				uni.navigateTo({
					url:'/pages/deviceManage/groupDevices?groupId='+id+'&Uname='+name
				})
			},
		}
	}
</script>

<style scoped>
	.DName{
		/* color: #000000; */
		font-size: 30rpx;
		font-family: PingFang-SC-Regular;
		margin-bottom: 20rpx;
	}
	.Dcontent{
		display: flex;
		align-items: center;
		color: #909090;
		font-size: 24rpx;
		font-family: PingFang-SC-Regular;
	}
	.Dcontent .dmark{
		margin-right: 42rpx;
	}
	.Dcontent .dmark uni-text{
		margin-right: 10rpx;
	}
	.Color{
		background-color: #EEEEEE;
	}
</style>
