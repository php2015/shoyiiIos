<template>
	<view class="">
		<u-row gutter="16" class='headerRow dark-block'>
			<u-col span="3">
				<view class="case image">
					<image lazy-load style="width: 100%;height: 100rpx;" :src="infor.anotherUserProfile?infor.anotherUserProfile:'/static/image/person.png'" mode="aspectFit"></image>
				</view>
			</u-col>
			<u-col span="9">
				<view class="case">
					<view class="name dark-white-font">
						<text>{{infor.anotherUserName||'暂无数据'}}</text>
					</view>
					<view class="address dark-font">
						<text>地区：</text>
						<text>{{infor.hospital||'暂无数据'}}</text>
					</view>
				</view>
			</u-col>
		</u-row>
		<button type="default" v-if="tipshow" class="btn" @click="addFriends">添加好友</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id:uni.getStorageSync('doctorId'),
				infor:{},
				tipshow:true
			}
		},
		methods:{
			//添加好友
			addFriends(){
				uni.navigateTo({
					url:'/pages/shoyiiChat/addFriends?sendId='+this.id+'&receiveId='+this.infor.anotherUserId+'&receiveType='+this.infor.anotherUserType
				})
			}
		},
		onLoad(options) {
			console.log(options)
			this.infor=JSON.parse(decodeURIComponent(options.data))
			console.log(this.infor)
			if(this.infor.isFriend=='1'){
				this.tipshow=false
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang='scss'>
	.headerRow{
		background-color: #FFFFFF;
		padding: 30rpx 0;
		.case{
			color: #000;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			.name {
				font-size: 36rpx;
				font-weight: bold;
			}
			.address{
				color: #666666;
				font-size: 24rpx;
			}
		}
	}
	/* #ifdef MP-WEIXIN */
	.headerRow /deep/ .u-row{
		background-color: #FFFFFF;
		padding: 30rpx 0;
	}
	/* #endif */
	.btn{
		background-color: #FFFFFF;
		color: #86B0D4;
		margin: 30rpx 0;
		border: none;
	}
	
</style>
