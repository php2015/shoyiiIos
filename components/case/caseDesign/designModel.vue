<template>
	<view class="">
		<view style="height: 90rpx;">
			<view class="toptitle dark-block dark-updown-border" @click="ThreeSelect">
				<text></text>
				<text>{{surcigalDesignData.titleDesign||'未填写'}}</text>
				<view class="changeSwitch">
					<text class="iconfont iconqiehuan" style="margin-right: 20rpx;"></text>
					<text>切换</text>
				</view>
			</view>
		</view>
		<swiper class="swiperBox" v-if="Object.keys(surcigalDesignData.DesignBanner).length!=0" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item @tap='PreviewPic(index,surcigalDesignData.DesignBanner)' v-for="(item,index) in surcigalDesignData.DesignBanner" :key='index'>
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
							<view class="matchTitle"  @tap.stop="shareModel" v-if="surcigalDesignData.designStlId">
								<text class='iconfont iconzhuanfa' style="margin-right: 20rpx;"></text>
								<text>转发模型</text>
							</view>
							<!-- #endif -->
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<swiper v-else class="swiperBox" :indicator-dots="true" :autoplay="Imageplay" :interval="3000" :duration="1000" indicator-color="#333333" indicator-active-color="#ffffff" circular="true">
			<swiper-item>
				<view class="swiper-item">
					<movable-area class="movable">
						<image lazy-load :src='defaultImg' mode="aspectFit" class="dark-block"></image>
						<!-- 图片对应的名称 -->
						<movable-view direction="all" class="matchPic">
							<!-- #ifdef APP-PLUS -->
							<view class="matchTitle"  @tap.stop="shareModel" v-if="surcigalDesignData.designStlId">
								<text class='iconfont iconzhuanfa' style="margin-right: 20rpx;"></text>
								<text>转发模型</text>
							</view>
							<!-- #endif -->
						</movable-view>
					</movable-area>
				</view>
			</swiper-item>	
		</swiper>
		<uni-popup id="popupShare" ref="popupShare" type="share" @change="change">
			<view class="poplist dark-block">
				<view class="pop_header dark-white-content">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type='text' activeColor="#86B0D4"></uni-segmented-control>
				</view>
				<view class="content">
					 <view>
						<scroll-view scroll-y="true" class="classifyItem">
							<view v-show="current === 0">
								<scroll-view scroll-y="true" class="classifyItem dark-font">
									<view class="content_item" v-for="(item,index) in surcigalDesignData.matching" :key='index'>
										<text @click="changePicAll(item.id,item)" :class="item.id==boolIndexAll?'textColor':''">{{item.name||'暂无数据'}}</text>
									</view>
								</scroll-view>
							</view>
							<view v-show="current === 1">
								<scroll-view scroll-y="true" class="classifyItem dark-font">
									<view class="content_item" v-for="(item,index) in surcigalDesignData.DesignGuid" :key='index'>
										<text @click="changePicGuide(item.id,item)" :class="item.id==boolIndexGuide?'textColor':''">{{item.name||'暂无数据'}}</text>
									</view>
								</scroll-view>
							</view>
							<view v-show="current === 2">
								<scroll-view scroll-y="true" class="classifyItem dark-font">
									<view class="content_item" v-for="(item,index) in surcigalDesignData.DesignInstrument" :key='index'>
										<text @click="changePicInstru(item.id,item)" :class="item.id==boolIndexInstru?'textColor':''">{{item.name||'暂无数据'}}</text>
									</view>
								</scroll-view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {previewImage} from '@/utill/tools/previewImage.js'
	export default {
		data(){
			return{
				Imageplay:true,//轮播图是否自动切换,true自动切换
				current:0,
				items: ['匹配情况','导板','器械'],
				boolIndexAll:0,
				boolIndexGuide:0,
				boolIndexInstru:0,
				defaultImg:uni.getStorageSync('uploadLogo')
			}
		},
		props:{
			surcigalDesignData:{
				type:Object,
				default:()=>{
					return{}
				},
			},
			
		},
		methods:{
			// 分享三维模型数据
			shareModel(){
				this.$emit('shareModel',{modelid:0})
			},
			ThreeSelect(){
				this.$refs.popupShare.open()
			},
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			change(e){},
			changeemit(item,count){
				this.bus.$emit('designData',{DesignBanner:item.stlPictureUrl,designStlId:item.stlModelIds,titleDesign:item.name,count:count,designId:item.id})//替换轮播图
			},
			// 点击title,更换图片
			changePicAll(id,item){
				console.log(item)
				this.boolIndexAll=id
				this.boolIndexGuide=''
				this.boolIndexInstru=''
				this.changeemit(item,0)
			},
			changePicGuide(id,item){
				console.log(item)
				this.boolIndexGuide=id
				this.boolIndexInstru=''
				this.boolIndexAll=''
				this.changeemit(item,1)
			},
			changePicInstru(id,item){
				console.log(item)
				this.boolIndexInstru=id
				this.boolIndexAll=''
				this.boolIndexGuide=''
				this.changeemit(item,2)
			},
			PreviewPic(index,data){
				console.log(index)
				console.log(data)
				previewImage(index,data)//图片的保存及分享
			},
		},
		created(){
			console.log(this.surcigalDesignData)
		}
	}
</script>

<style scoped>
	@import "@/common/css/caseCommon.css";
</style>
