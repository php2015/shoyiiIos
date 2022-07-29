<template>
	<view class="dark-page" style="">
		<u-collapse arrow-color='#999' :arrow='false'>
			<u-collapse-item class="item dark-block dark-bottom-border" title="" v-for="(item,index) in updateItem" :key="index">
				<view class="" slot='title'>
					<view class="content dark-font">
						<text>{{item.title}}</text>
						<text class="time">{{item.createTime|timeStamp}}</text>
					</view>
				</view>
				<view class="" style="">
					<text>{{item.content}}</text>
				</view>
			</u-collapse-item>
		</u-collapse>
		<u-loadmore :status="status"/>
	</view>
</template>

<script>
	import {updateLog} from '@/utill/api/updateLog/updateLog.js'
	export default{
		data(){
			return{
				updateItem:[],
				status:'nomore',
				page:1,
				size:12,
				total:0,
				mark:0,//第一次加载还是多次加载数据
			}
		},
		methods:{
			updateLog(mark,page){
				updateLog({
					pageNum:page,
					pageSize:this.size
				}).then(res=>{
					console.log(res)
					if(res.data.object.list.length==0){//无数据
						this.status='nomore'
						return
					}
					this.total=res.data.object.pages
					if(mark==0){
						this.updateItem=res.data.object.list
					}else if(mark==1){
						this.updateItem=this.updateItem.concat(res.data.object.list)
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			onReachBottom() {
				if(this.page >= this.total) return this.status = 'nomore';;
				this.status = 'loading';
				this.page++;
				this.mark=1
				this.updateLog(this.mark,this.page)
			},
			
		},
		onLoad() {
			this.updateLog(0,1)
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped>
	.item{
		/* #ifndef MP-WEIXIN */
		padding: 0 30rpx;
		/* #endif */
		border-bottom: 1px solid #F8F8F8;
		background-color: #FFFFFF;
	}
	/* #ifdef MP-WEIXIN */
	.item /deep/ .u-collapse-item{
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}
	/* #endif */
	.content{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: #000000;
		font-size: 30rpx;
		line-height: 40rpx;
	}
	.time{
		color: #666666;
		font-size: 24rpx;
	}
	.bgColor{
		background-color: #F8F8F8;
	}
</style>
