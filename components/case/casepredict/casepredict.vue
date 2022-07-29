<template>
	<view class="predict">
		<view style="height: 90rpx;">
			<view class="toptitle dark-block dark-updown-border" @click="ThreeSelect">
				<text></text>
				<text>{{predictData.predictName||'未填写'}}</text>
				<view class="changeSwitch">
					<text class="iconfont iconqiehuan" style="margin-right: 20rpx;"></text>
					<text>切换</text>
				</view>
			</view>
		</view>
		<!-- banner图 -->
		<swiper class="swiperBox" v-if="predictData.casePredictbanner.length!=0" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item  @tap='PreviewPic(index,predictData.casePredictbanner)' v-for="(item,index) in predictData.casePredictbanner" :key='index'>
				<view class="swiper-item">
					<movable-area class="movable">
						<!-- #ifdef APP-PLUS -->
						<u-lazy-load class='image dark-block' :image="item" img-mode='aspectFit' height='420rpx'></u-lazy-load>
						<!-- #endif -->
						<!-- #ifndef APP-PLUS -->
						<!-- <image :src='item.fileDownloadUrl' mode="aspectFit"></image> -->
						<image :src='item' mode="aspectFit"></image>
						<!-- #endif -->
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- <text class="iconTip"></text> -->
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="predictData.predictStlId" @tap.stop="shareModel">
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
						<image :src='defaultImg' mode="aspectFit" class="dark-block"></image>
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- <text class="iconTip"></text> -->
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle" v-if="predictData.predictStlId"  @tap.stop="shareModel">
								<text>转发模型</text>
							</view>
							<!-- #endif -->
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<!-- 术后随访数据 -->
		<view class="follow dark-block" v-for="(item,index) in predictData.casePredict" :key='index'>
			<view class="title dark-font dark-bottom-border">
				<text>效果预测</text>
				<text>{{index+1}}</text>
			</view>
			<view class="content dark-font">
				<text>{{item.name||'暂无数据'}}</text>
			</view>
		</view>
		<uni-popup id="popupShare" ref="popupShare" type="share" @change="change">
			<view class="poplist dark-block">
				<view class="pop_header dark-white-content">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type='text' activeColor="#86B0D4"></uni-segmented-control>
				</view>
				<view class="content">
					 <view>
						<scroll-view scroll-y="true" class="classifyItem dark-font">
							<view class="content_item" v-for="(item,index) in predictData.casePredict" :key='index'>
								<text @click="changePic(index,item)" :class="index==boolIndex?'textColor':''">{{item.name||'未填写'}}</text>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {casePredictView} from '@/utill/tools/previewImage.js'
	export default{
		data(){
			return{
				Imageplay:true,
				current:0,
				items: ['效果预测'],
				boolIndex:0,//底部选中的index
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		props:{
			predictData:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		methods:{
			shareModel(){
				this.$emit('shareModel',{modelid:0})
			},
			ThreeSelect(){
				this.$refs.popupShare.open()
			},
			PreviewPic(index,data){
				casePredictView(index,data)
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			change(e){},
			// 选中底部menu,切换图片与标题
			changePic(index,item){
				this.boolIndex=index
				console.log(item)
				if(!item.id){
					var predictData=[]
					this.bus.$emit('predictData',{predictData:predictData,name:item.name,predictId:item.id,predictStlId:item.stlModelIds})//改变轮播图父组件的值
					return;
				}
				var predictData=[]
				predictData=Object.values(item.stlPictureUrl)
				console.log(predictData)
				this.bus.$emit('predictData',{predictData:predictData,name:item.name,predictId:item.id,predictStlId:item.stlModelIds})//改变轮播图父组件的值
			},
		},
		created() {
			// console.log(this.predictData.casePredictbanner)
		}
	}
</script>

<style scoped>
	@import "@/common/css/caseCommon.css";
	.follow{
		margin-top: 20rpx;
		background-color: #FFFFFF;
		padding: 0 30rpx;
	}
	.title{
		color: #242424;
		font-size: 28rpx;
		font-weight: Bold;
		font-family: PingFang-SC-Bold;
		padding: 20rpx 0;
		border-bottom: 1px solid #F0F0F0;
	}
	.content{
		color: #000000;
		font-size: 28rpx;
		padding: 20rpx 0;
		font-family: PingFang-SC-Regular;
	}
	.pop_header /deep/ .segmented-control__item--text{
		border-bottom-width: 0;
	}
</style>
