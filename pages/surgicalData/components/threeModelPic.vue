<template>
	<view class="">
		<view style="height: 90rpx;">
			<view class="toptitle dark-block dark-updown-border" @click="ThreeSelect">
				<text></text>
				<text>{{titleName||'未填写'}}</text>
				<view class="changeSwitch">
					<text class="iconfont iconqiehuan" style="margin-right: 20rpx;"></text>
					<text>切换</text>
				</view>
			</view>
		</view>
		<swiper v-if="bannerList.length!=0" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item @tap='PreviewPic(index,bannerList)' v-for="(item,index) in bannerList" :key='index'>
				<view class="swiper-item">
					<movable-area class="movable">
						<!-- #ifdef APP-PLUS -->
						<u-lazy-load class='image dark-block' :image="item" img-mode='aspectFit' height='420rpx'></u-lazy-load>
						<!-- #endif -->
						<!-- #ifndef APP-PLUS -->
						<image lazy-load class='image' :src='item' mode="aspectFit"></image>
						<!-- #endif -->
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<swiper v-else>
			<swiper-item>
				<view class="swiper-item">
					<image :src='defaultImg' mode="aspectFit" class="dark-block"></image>
				</view>
			</swiper-item>
		</swiper>	
	</view>
</template>

<script>
	import {methodsPreview} from '@/utill/tools/previewImage.js'
	export default{
		data(){
			return{
				Imageplay:true,//轮播图是否自动切换,true自动切换
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		props:{
			titleName:{
				type:String,
				default:""
			},
			arrData:{
				type:Object,
				default:()=>{
					return{}
				}
			},
			bannerList:{
				type:Array,
				default:()=>{
					return[]
				}
			}
		},
		methods:{
			// 预览图片
			PreviewPic(index,data){
				methodsPreview(index,data)
			},
			// 三维图形选择
			ThreeSelect(){
				this.$emit('threeSelect')
			}
		},
	}
</script>

<style scoped>
	@import "@/common/css/caseCommon.css";
	/* #ifdef MP-WEIXIN */
	swiper{
		height: 420rpx!important;
	}
	/* #endif */
</style>
