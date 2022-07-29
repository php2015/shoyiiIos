<template>
	<view class="">
		<view style="height: 90rpx;">
			<view class="toptitle dark-block dark-updown-border" @click="ThreeSelect">
				<text></text>
				<text v-if="electricData.threeModeltitle">{{electricData.threeModeltitle||'未填写'}}</text>
				<view class="changeSwitch">
					<text class="iconfont iconqiehuan" style="margin-right: 20rpx;"></text>
					<text>切换</text>
				</view>
			</view>
		</view>
		<swiper class="swiperBox" v-if="electricData.threemodel&&electricData.threemodel.imgFileModelId" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item  @tap='PreviewPic(index,electricData.threemodel.previewImage)' v-for="(item,index) in electricData.threemodel.previewImage" :key='index'>
				<view class="swiper-item">
					<movable-area class="movable">
						<!-- #ifdef APP-PLUS -->
						<u-lazy-load class='image dark-block' :image="item" img-mode='aspectFit' height='420rpx'></u-lazy-load>
						<!-- #endif -->
						<!-- #ifndef APP-PLUS -->
						<image lazy-load :src='item' mode="aspectFit"></image>
						<!-- #endif -->
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="electricData.threemodel&&electricData.threemodel.stlFileModelId" @tap.stop="shareModel">
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
						<image lazy-load :src='defaultImg' mode="aspectFit" class="dark-block"></image>
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="electricData.threemodel&&electricData.threemodel.stlFileModelId"  @tap.stop="shareModel">
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
			<uni-popup id="popupShare" ref="popupShare" type="share" @change="change">
				<view class="poplist dark-block">
					<view class="pop_header">
						<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type='text' activeColor="#86B0D4"></uni-segmented-control>
					</view>
					<view class="content">
						 <view>
							<scroll-view scroll-y="true" class="classifyItem">
								<view class="content_item dark-font" v-for="(item,index) in dataList" :key='index'>
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
	import {previewImage} from '@/utill/tools/previewImage.js'
	export default {
		data(){
			return{
				Imageplay:true,//轮播图是否自动切换,true自动切换
				current:0,
				items: ['三维文件'],
				boolIndex:0,//底部选中的index
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		methods:{
			ThreeSelect(){
				console.log(this.Bottomcurrent)
				console.log(this.dataList)
				this.$refs.popupShare.open()
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			change(e){},
			// 选中底部menu,切换图片与标题
			changePic(index,id){
				this.boolIndex=index
				console.log(id)
				var modeldata=this.dataList.filter((item)=>{
					if(id==item.id){
						return item
					}
				})
				console.log(modeldata)
				this.bus.$emit('electricData',modeldata[0])//改变轮播图父组件的值
			},
			PreviewPic(index,data){
				console.log(index)
				console.log(data)
				previewImage(index,data)
			},
			// 分享模型数据
			shareModel(){
				console.log('分享模型')
				this.$emit('shareModel',{modelid:0})
			}
		},
		props:{
			electricData:{
				type:Object,
				default:()=>{
					return{}
				},
			},
			dataList:{
				type:Array,
				default:()=>{
					return[]
				},
			},	
		},
	}
</script>

<style scoped>
	@import "@/common/css/caseCommon.css";
	.pop_header /deep/ .segmented-control__item--text{
		border-bottom-width: 0;
	}
</style>
