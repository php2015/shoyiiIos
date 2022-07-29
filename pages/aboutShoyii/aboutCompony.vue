<template>
	<view class="about">
		<!-- 用于公众号菜单 公司简介项 -->
		<navbar class="Nav" :leftIconBool='false' :rightBool='false' :Navtitle='Navtitle' @back='back' :navBoolean='false'></navbar>
		<view class="wrap">
			<u-tabs-swiper ref="uTabs" :list="menu" :current="current" @change="tabsChange" font-size='24' active-color='#86B0D4' :is-scroll="false"
			swiperWidth="750"></u-tabs-swiper>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height:100%;width: 100%;">
						<text v-html="aboutUsData.aboutUs"></text>
						<video class="video" :src="videoUrl" show-mute-btn="true" controls poster='' muted="true" danmu-btn="true" enable-danmu="true" page-gesture="true">
						</video>						
					</scroll-view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height:100%;width: 100%;">
						<timeline>
							<timelineItem :leftTime='item.historyYear' color="#86B0D4" v-for="(item,index) in courseData" :key='index'>
								<view class="tripItem">
									<view class="title">{{item.title}}</view>
									<view class="tips">{{item.content}}</view>
								</view>
							</timelineItem>
						</timeline>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {aboutUs,course} from '@/utill/api/aboutUs/aboutUs.js'
	import timeline from './components/chenbin-timeline/timeLine.vue'
	import timelineItem from './components/chenbin-timeline/timelineItem.vue'
	export default{
		components:{
			timeline,
			timelineItem
		},
		data(){
			return{
				Navtitle:'公司简介',
				menu:[
					{name:"关于我们"},
					{name:"我们的历程"}
				],
				current:0,
				swiperCurrent:0,
				aboutUsData:{},
				courseData:[],
				videoUrl:"",
			}
		},
		methods:{
			back(){
				// #ifdef H5
				uni.showToast({
					title:'无效',
					icon:'none'
				})
				// #endif
				// #ifndef H5
				uni.navigateBack({
					delta:1
				})
				// #endif
			},
			tabsChange(index){
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				if(current==0){
					this.Navtitle='关于我们'
				}else{
					this.Navtitle='我们的历程'
				}
			},
			aboutUs(){
				aboutUs({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.aboutUsData=res.data.object
						this.videoUrl=this.aboutUsData.loadLink[this.aboutUsData.showVideo]
						console.log(this.aboutUsData)
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'数据错误',
						icon:'none'
					})
				})
			},
			// 我们的历程
			course(){
				course({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.courseData=res.data.object
						console.log(this.courseData)
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
		onLoad() {
			this.aboutUs()
			this.course()
		}
	}
</script>

<style scoped>
	.about{
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.Nav /deep/ .uni-navbar__header{
		background-color: #F8F8F8!important;
	}
	.wrap{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.swiper-box{
		flex: 1;
		padding: 0 30rpx;
	}
	.swiper-item{
		height: 100%;
	}
	.tripItem {
		padding: 0px 5px;
		box-sizing: border-box;
		background:rgba(255,255,255,1);
	}
	.title {
		font-size:16px;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:600;
		line-height: 16px;
		margin-bottom: 10px;
		color:#86B0D4;
	}
	.tips {
		font-size:14px;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		line-height: 20px;
		color: #333333;
	}
	.video{
		width: 100%;
	}
</style>
