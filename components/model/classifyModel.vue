<template>
	<view>
		<view class="classifyItems dark-block" v-for="(item,index) in publicData" :key='index'>
			<view class="classifyTitle">
				<text class="dark-block">{{item.modelLibTypeName}}</text>
				<u-rate :current="item.collectionFlag|filterData" :count='count' @change="saveModel($event,item.id)" active-color="#FFCB20" inactive-color="#888888"  size='40' gutter="20"></u-rate>
			</view>
			<view class="items dark-updown-border" hover-class="bgColor darkbgColor" v-if="item.modelLibs.length!=0" @click="checkModel(item.id,item.modelLibTypeName,item.collectionFlag,item.downloadBoolean)">
				<view class="items_list" v-for="(s_item,s_index) in item.modelLibs" :key='s_index'>
					<view class="imgpic">
						<u-image v-if="s_item.previewImage?Object.keys(s_item.previewImage).length>0:false" height="100%" mode="aspectFit" :src="s_item.previewImage[s_item.fileModelImgId.split(',')[0]]">
							<uni-icons type="spinner-cycle" slot="loading"></uni-icons>
							<view slot="error">
								<view slot="error" style="font-size: 24rpx;color: #000000;">error</view>
							</view>
						</u-image>
						<u-image v-else height="100%" mode="aspectFit" :src="defaultImg">
						</u-image>
					</view>
					<view class="items_content" style="">
						<text class="dark-font">{{s_item.modelName||'无数据'}}</text>
						<text class="description">{{s_item.createTime|timeStamp}}</text>
					</view>
				</view>
			</view>
			<view class="" v-else>
				<u-empty text="数据为空" mode="data"></u-empty>
			</view>
			<view class="checkAll" @click="checkModel(item.id,item.modelLibTypeName,item.collectionFlag,item.downloadBoolean)" v-if="item.modelLibs.length!=0" style="display: flex;justify-content: space-between;align-items: center;">
				<view class="">
					<view class="Uname" v-if="item.modelLibs.length!=0" style="display: flex;justify-content: space-between;align-items: center;">
						<u-image width="40" height="40" style="margin-right: 10rpx;" mode="" shape="circle" :src="item.modelLibs[0].avatarLinks">
							<uni-icons type="spinner-cycle" slot="loading"></uni-icons>
							<view slot="error">
								<view slot="error" style="font-size: 24rpx;color: #000000;">error</view>
							</view>
						</u-image>
						<text>{{item.modelLibs[0].doctorName}}</text>
					</view>
					<view class="Uname" v-else>
						<u-image width="40" height="40" style="margin-right: 10rpx;" mode="" shape="circle" :src="defaultImg">
						</u-image>
						<text>暂无数据</text>
					</view>
				</view>
				<view class="">
					<u-tag :text="item.downloadBoolean|filterdownload" :type="item.downloadBoolean|filterStatus" size='mini'/>
				</view>
			</view>
		</view>
	</view>
		
</template>
<script>
	import {handlecollect} from '@/utill/api/model/getModel.js'
	export default{	
		data(){
			return{
				count:1,
				collectionFlag:0,//默认无收藏
				defaultImg:uni.getStorageSync('uploadLogo'),
				token:uni.getStorageSync('token'),
			}
		},
		props:{
			publicData:{
				type:Array,
				default:()=>{
					return[]
				}
			},
			current:{
				type:Number,
				default:null
			}
		},
		filters:{
			filterData:value=>{
				console.log(value)
				if(value){
					return 1
				}else{
					console.log('shiniba')
					return 0
				}
			},
			filterdownload:value=>{
				if(value){//存在，可下载
					return '可下载'
				}else{//不存在，仅能观看
					return '仅观看'
				}
			},
			filterStatus:value=>{
				if(value){//存在，可下载
					return 'success'
				}else{//不存在，仅能观看
					return 'info'
				}
			}
		},
		methods:{
			// 收藏模型
			saveModel(e,id){
				if(!this.token){
					uni.showToast({
						title:'未登录，不能操作',
						icon:'none'
					})
					return
				}
				var addFlag;
				if(e==0){//取消收藏
					addFlag=false
				}else{//为1 收藏
					addFlag=true
				}
				handlecollect({
					addFlag:addFlag,
					modelTypeId:id
				}).then(res=>{
					console.log(res)
					// if(res.data.code==0){
					// 	this.bus.$emit('changeSave',{current:this.current,id:id,addFlag:addFlag})
					// }
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
				}).catch(err=>{
					console.log(err)
					uni.showToast({
						title:'err',
						icon:'none'
					})
				})
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			notice(){},
			search(){},
			// 进入模型详情
			enterDetail(modelId,classifyId){
				console.log(modelId)
				uni.navigateTo({
					url:'/pages/publicModel/modelDetail?modelId='+modelId+'&classifyId='+classifyId
				})
			},
			// 进入该分类下的所有模型
			checkModel(classifyId,modelLibTypeName,collectionFlag,isdownload){
				console.log(classifyId)
				uni.navigateTo({
					url:'/pages/publicModel/classifyModel?classifyId='+classifyId+'&modelLibTypeName='+modelLibTypeName+'&isCollect='+collectionFlag+'&isdownload='+isdownload+'&current='+this.current
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.classifyItems{
		padding:20rpx;background-color: #FFFFFF;
		margin-bottom: 20rpx;
		.classifyTitle{
			color: #000000;
			font-family: PingFang-SC-Bold;
			font-size: 30rpx;
			font-weight: bold;
			display: flex;
			justify-content: space-between;
			padding-bottom: 28rpx;
			.Uname{
				font-size: 26rpx;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
				display: flex;
				align-items: center;
			}
		}
		.items{
			padding-top: 30rpx;padding-bottom: 30rpx;border-top: 1px solid #EEEEEE;border-bottom: 1px solid #EEEEEE;
			.items_list{
				display: flex;
				.imgpic{
					min-width: 156rpx;height: 148rpx;border: 1px solid #EEEEEE;border-radius: 10rpx;
				}
				.items_content{
					flex: 1;padding-left: 20rpx;display: flex;flex-direction: column;justify-content: center;
					uni-text:nth-child(1){
						color: #000000;font-size: 30rpx;line-height: 60rpx;
					}
					.description{
						color: #8F8F8F;font-size: 24rpx;line-height: 36rpx;display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp:2;
						overflow: hidden;
						word-wrap: break-word;
						word-break: break-all;
					}
				}
			}
			.items_list:nth-child(1){
				padding-bottom: 10rpx;
			}
			.items_list:nth-child(2){
				padding-top: 10rpx;
			}
		}
		.checkAll{
			font-size: 24rpx;padding-top: 24rpx;text-align: center;
		}
		.bgColor{
			background-color: #F8F8F8;
		}
	}
	
</style>
