<template>
	<view class="">
		<view style="height: 90rpx;">
			<view class="toptitle" @click="ThreeSelect">
				<text></text>
				<text v-if="bannerList.title">{{bannerList.title||'未填写'}}</text>
				<view class="changeSwitch">
					<text class="iconfont iconqiehuan" style="margin-right: 20rpx;"></text>
					<text>切换</text>
				</view>
			</view>
		</view>
		<swiper class="swiperBox" v-if="bannerList.previewUrl" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item  @tap='PreviewPic(bannerList.previewUrl)' v-for="(item,index) in bannerList.previewUrl" :key='index'>
				<view class="swiper-item">
					<movable-area class="movable">
						<image lazy-load :src='item' mode="aspectFit"></image>
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- <text class="iconTip"></text> -->
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="bannerList.id" @tap.stop="shareModel">
								<text class='iconfont iconzhuanfa' style="margin-right: 20rpx;"></text>
								<text>转发模型</text>
							</view>
							<!-- #endif -->
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<swiper class="swiperBox" v-else :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item>
				<view class="swiper-item">
					<movable-area class="movable">
						<image lazy-load :src='defaultImg' mode="aspectFit"></image>
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- <text class="iconTip"></text> -->
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="bannerList.id"  @tap.stop="shareModel">
								<text>转发模型</text>
							</view>
							<!-- #endif -->
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<!-- 三维文件的popup -->
		<view class="popUpBox">
			<uni-popup id="popupShare" ref="popupShare" type="share">
				<view class="poplist">
					<view class="pop_header">
						<uni-segmented-control :current="current" :values="items" style-type='text' activeColor="#86B0D4"></uni-segmented-control>
					</view>
					<view class="content">
						 <view>
							<scroll-view scroll-y="true" class="classifyItem">
								<view class="content_item" v-for="(item,index) in threemodel" :key='index'>
									<text @click="changePic(index,item.id)" :class="index==boolIndex?'textColor':''">{{item.title}}</text>
								</view>
							</scroll-view>
						</view>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				Imageplay:true,
				current:0,
				items: ['三维文件'],
				boolIndex:0,//底部选中的index
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		props:{
			bannerList:{
				type:Object,
				default:()=>{
					return{}
				}
			},
			threemodel:{
				type:Array,
				default:()=>{
					return[]
				}
			}
		},
		methods:{
			ThreeSelect(){
				this.$refs.popupShare.open()
			},
			// 选中底部menu,切换图片与标题
			changePic(index,id){
				this.boolIndex=index
				console.log(id)
				var modeldata=this.threemodel.filter((item)=>{
					if(id==item.id){
						return item
					}
				})
				console.log(modeldata)
				this.bus.$emit('successelectric',modeldata[0])//改变轮播图父组件的值
			},
			PreviewPic(data){
				console.log(data)
			}
		},
		created() {
			console.log(this.threemodel)
		}
	}
</script>

<style scoped>
	@import "@/common/css/caseCommon.css";
</style>
