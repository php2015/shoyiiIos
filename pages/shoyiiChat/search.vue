<template>
	<view>
		<view class="slot-wrap dark-block">
			<view class="title" style="">
				<u-search @search='search' 
				bg-color="$store.getters.isDark?'#3A3A3A':'#ffffff'"
				shape="square" :clearabled="true" :show-action="false" action-text="搜索" :animation="true" placeholder="输入名称/手机号/医院地址" v-model="searchFriends"></u-search>	
			</view>
		</view>
	</view>
</template>

<script>
	import {searchFriends} from '@/utill/api/connect/connect.js'
	export default {
		data() {
			return {
				userId:uni.getStorageSync('doctorId'),
				searchFriends:'',
			}
		},
		methods: {
			search(){
				console.log(this.searchFriends)
				searchFriends({
					value:this.searchFriends,
					userId:this.userId,
					userType:'D'
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						if(res.data.object.length==0){
							uni.showToast({
								title:'暂无数据',
								icon:'none'
							})
						}else{
							uni.navigateTo({
								url:'/pages/shoyiiChat/searchInfor?data='+encodeURIComponent(JSON.stringify(res.data.object[0]))
							})
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
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.slot-wrap{
		width: 100%;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f2f2f2;
		.title{
			padding: 20rpx 0;width: 100%;
			display: flex;justify-content: space-between;align-items: center;
		}
	}
</style>
