<template>
		<view class="">
			<view class="classifyItems dark-block" v-for="(item,index) in surgicalData" :key='index'>
				<view class="items" v-if="surgicalData.length!=0">
					<view class="items_list" @tap="enterDetail(item.surgicalPlanId)">
						<view class="imgpic">
							<u-image v-if="item.previewList.length!=0" height="100%" mode="aspectFit" :src="item.previewList[0].fileDownloadUrl">
								<uni-icons type="spinner-cycle" slot="loading"></uni-icons>
								<view slot="error">
									<view slot="error" style="font-size: 24rpx;color: #000000;">加载失败</view>
								</view>
							</u-image>
							<u-image v-else height="100%" mode="aspectFit" :src="defaultImg">
							</u-image>
						</view>
						<view class="items_content" style="">
							<text class="dark-white-font">{{item.surgicalPlanName||'无数据'}}</text>
							<text>{{item.title||'无数据'}}</text>
						</view>
					</view>
				</view>
				<view class="" v-else>
					<u-empty text="数据为空" mode="data"></u-empty>
				</view>
			</view>
		</view>
</template>
<script>
	export default{	
		data(){
			return{
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		props:{
			surgicalData:{
				type:Array,
				default:()=>{
					return[]
				}
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			notice(){},
			search(){},
			// 进入模型详情
			enterDetail(id){
				uni.navigateTo({
					url:'/pages/surgicalData/surgicalDetail?id='+id,
				})
			},
			// 查询分类下的模型
			checkModel(classifyId){
				console.log(classifyId)
				uni.navigateTo({
					url:'/pages/publicModel/classifyModel?classifyId='+classifyId
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.classifyItems{
		padding:20rpx;background-color: #FFFFFF;margin-top: 30rpx;
		.items{
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
					uni-text:nth-child(2){
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
	}
	
</style>
