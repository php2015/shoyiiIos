<template>
	<view class="allModel">
		<!-- #ifndef MP-WEIXIN -->
		<u-navbar :is-back="false" title="" :background="$store.getters.isDark?darkbackground:background">
			<view class="slot-wrap">
				<view class="" style="flex: 1;">
					<u-search @search='search' @custom='search' @clear='clear' placeholder="输入分类名称"
					 v-model="inputContent" shape="round" :bg-color="$store.getters.isDark?'#333333':'#F8F8F8'" 
					 placeholder-color='#666666' 
					 clearabled show-action action-text="搜索" animation></u-search>
				</view>
				<uni-icons type="chat" :color="$store.getters.isDark?'#8F8F8F':'#999'" size='26' @click="help" style="margin-left: 30rpx;"></uni-icons>
			</view>
		</u-navbar>
		<!-- #endif -->
		<view class="section">
			<view class="addBtn dark-block" @click="plusClassify">
				<text class="dark-font">添加分类</text>
			</view>
			<view style="margin-top: 20rpx;">
				<view class="classifyItems dark-block" v-for="(item,index) in modelData" :key='item.id'  @click="enterType(item)">
					<view class="classifyTitle">
						<text class="dark-font">{{item.modelLibTypeName}}</text>
						<view class="">
							<u-tag :text="handleShare(item.share)" :type="handleStatus(item.share)" size='mini' mode="plain"/>
						</view>
					</view>
					<view class="items dark-top-border" v-if="item.modelLibs.length!=0" hover-class="bgColor darkbgColor">
						<view class="items_list" v-for="(s_item,s_index) in item.modelLibs" :key='s_item.id'>
							<view class="imgpic dark-fade-border">
								<u-image height="100%" mode="aspectFit" :src="s_item.fristImgFileId?s_item.previewImage[s_item.fristImgFileId]:'/static/image/shoyiiLogo.png'">
									<template slot='loading'>
										<uni-icons type="spinner-cycle"></uni-icons>
									</template>
									<template slot='error'>
										<view style="font-size: 24rpx;color: #000000;">error</view>
									</template>
								</u-image>
							</view>
							<view class="items_content" style="">
								<text class="dark-font model_text">{{s_item.modelName}}</text>
								<text class="description model_text">{{s_item.createTime|timeStamp}}</text>
							</view>
						</view>
					</view>
					<view class="" v-else>
						<u-empty text="数据为空" mode="data"></u-empty>
					</view>
				</view>
			</view>
		</view>
		<view class="bottomTip">
			<load-more :loadtext='loadtextAll'></load-more>
		</view>
		<view class="">
			<u-empty class="empty" text="无数据" mode="data" :show="emptyShow"></u-empty>
		</view>		
		<!-- 新增分类 -->
		<u-modal v-model="addshow" width='650' title="新增分类" confirm-color='#000000' mask-close-able
		negative-top='140rpx' :show-cancel-button='true' ref="uModal" @confirm="addConfirm"
		:title-style="$store.getters.isDark?{background:'#3A3A3A',color:'#8F8F8F'}:{}">
			<view class="dark-block" style="padding: 60rpx 30rpx;display: flex;justify-content: space-between;">
				<u-input v-model="addTypeName" type="text" :border="true" placeholder='输入分类名称' 
				style="width: 100%;"
				:style="{background:$store.getters.isDark?'#8F8F8F':''}"/>
			</view>
		</u-modal>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {getMyModel,editClassify} from '@/utill/api/model/getModel.js'
	import modellist from '@/components/model/modellist.vue'
	import {mapGetters,mapState} from 'vuex'
	import {aemdTabbar} from '@/utill/tools/checkdark.js'
	var stopTimer=null;
	export default {
		components:{
			modellist,
		},
		data(){
			return{
				miniObject:{
					placeHolder:'Mymodel'
				},
				inputContent:'',
				menuButtonInfo:{},
				modelData:[],//模型库数据
				page:1,
				totalPages:null,//总页数
				loadtextAll:'',//底部提示,
				emptyShow:false,//无数据时的组件
				addshow:false,//新增分类的弹窗
				addTypeName:'',//新增的分类名称
				background: {
					backgroundColor: '#ffffff',
				},
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
			}
		},
		computed:{
			...mapGetters (['DataStatus']),
		},
		methods:{
			help(){
				if(uni.getStorageSync('token')){
					uni.navigateTo({
						url:'/pages/shoyiiChat/index'
					})
				}else{
					uni.showToast({
						title:'未登录',
						icon:'none'
					})
				}
			},
			search(){
				console.log(this.inputContent)
				if(!this.inputContent){
					uni.showToast({
						title:'搜索内容不能为空',
						icon:'none'
					})
					return
				}
				this.searchContent(this.inputContent)
			},
			searchContent(content){
				getMyModel({
					modelTypeName:content
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						if(res.data.object.total==0){
							this.emptyShow=true
						}else{
							this.emptyShow=false
						}
						this.modelData=res.data.object.list
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 点击搜索框清除按钮，重新获取数据
			clear(){
				this.emptyShow=false
				this.page=1
				this.totalPages=null//总页数
				this.modelData=[]//清空数据，避免报错
				this.getData(1)
			},
			handleShare(value){
				if(value){//存在，已公开
					return '已公开'
				}else{//不存在，未公开
					return '未公开'
				}
			},
			handleStatus(value){
				if(value){//存在，已公开
					return 'success'
				}else{//不存在，未公开
					return 'info'
				}
			},
			getData(page,bool){//bool用于做监听事件的触发，以不同的方式更新数据
				if(!this.checkAudit()){//审核通过后获取数据
					getMyModel({
						pageNum:page,
						pageSize:4
					}).then(res=>{
						console.log(res)
						if(res.data.code==0){
							if(bool){
								this.modelData=res.data.object.list
							}else{
								this.modelData=[...this.modelData,...res.data.object.list] 
							}
							console.log(this.modelData)
							this.totalPages=res.data.object.pages
							this.page++
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
						}
					}).catch(err=>{
						console.log(err)
					})
				}
			},
			// 进入分类的列表
			enterType(data){
				var data={
					id:data.id,//分类id
					modelLibTypeName:data.modelLibTypeName,//分类名称
					share:data.share,//该分类是否公开
					downloadBoolean:data.downloadBoolean ,//是否下载，
					ownId:data.ownId//医生id
				}
				console.log('test')
				// uni.navigateTo({
				// 	url:'/pages/publicModel/modelDetail?modelId='+data.id
				// })
				uni.navigateTo({
					url:'/pages/model/myClassify?data='+encodeURIComponent(JSON.stringify(data)),
				})
			},
			plusClassify(){
				// #ifndef H5
				this.addshow=true
				// #endif
				// #ifdef H5
				uni.showToast({
					title:'网页端不能操作',
					icon:'none'
				})
				// #endif
			},
			// 新增分类名称的确定
			addConfirm(){
				console.log(this.addTypeName,uni.getStorageSync('doctorId'))
				editClassify({
					modelLibTypeName:this.addTypeName,//模型分类名称	
					ownId:uni.getStorageSync('doctorId'),//医生id	
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){//刷新数据
						this.page=1,
						this.totalPages=null,//总页数
						this.getData(1,'emitBool')
					}
					uni.showToast({
						title:res.data.msg,
						icon:'none'
					})
				}).catch(err=>{
					console.log(err)
				})
			},
		},
		onLoad() {
			uni.$on('editModelData',value=>{
				if(value.updataBool){
					this.page=1,
					this.totalPages=null,//总页数
					this.getData(1,'emitBool')
				}
			})
			uni.$on('refreshModel',(value)=>{
				console.log('监听',value)
				this.page=1,
				this.totalPages=null,//总页数
				this.getData(1,'emitBool')
			})
		},
		onShow() {
			// #ifdef APP-PLUS
			aemdTabbar()//暗黑设置
			// #endif
			if(this.checkLogin('/pages/model/model',1)){//token 存在
				if(this.modelData.length==0||this.DataStatus){//有没有数据去加载
					this.getData(1)//初始化时，加载所有的数据
				}
			}
		},
		onUnload(){
			uni.$off('editModelData', ()=>{})
			clearTimeout(stopTimer)
		},
		onReachBottom(){
			console.log(this.page)
			console.log(this.totalPages)
			if(this.page > this.totalPages) return this.loadtextAll = 'nomore';
			this.loadtextAll = 'loading';
			this.getData(this.page)
		},
		// 下拉刷新
		onPullDownRefresh(){
			this.page=1,
			this.totalPages=null,//总页数
			this.getData(1,'emitBool')
			stopTimer=setTimeout(function () {
				uni.stopPullDownRefresh();//停止刷新，这边可以进行数据的更新
			}, 2000);
		}
		
	}
</script>
<style lang="scss" scoped>
	page{
		background-color: #F8F8F8!important;
		height: auto;
	}
	.allModel{
		width: 100%;
		.slot-wrap{
			width: 100%;padding: 0 30rpx;display: flex;align-items: center;
		}
	}
	.section{
		padding: 0 30rpx;
		.addBtn{
			margin-top: 20rpx;height: 80rpx;line-height: 80rpx;
			font-size:28rpx;color: #000000;text-align: center;background-color: #FFFFFF;
			border-radius: 15rpx;
		}
	}
	.classifyItems{
		padding:20rpx;background-color: #FFFFFF;
		margin-bottom: 20rpx;
		border-radius: 15rpx;
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
			padding-top: 30rpx;border-top: 1px solid #EEEEEE;
			.items_list{
				display: flex;
				.imgpic{
					min-width: 156rpx;height: 148rpx;border: 1px solid #EEEEEE;border-radius: 10rpx;
				}
				.items_content{
					flex: 1;padding-left: 20rpx;display: flex;flex-direction: column;justify-content: center;
					.model_text{
						display: -webkit-box;
						-webkit-box-orient: vertical;
						overflow: hidden;
						word-wrap: break-word;
						word-break: break-all;
					}
					uni-text:nth-child(1){
						color: #000000;font-size: 30rpx;line-height: 60rpx;
						-webkit-line-clamp:2;
					}
					.description{
						color: #8F8F8F;font-size: 24rpx;line-height: 36rpx;
						-webkit-line-clamp:1;
					}
				}
			}
			.items_list{
				padding: 10rpx 0;
			}
		}
		.bgColor{
			background-color: #F8F8F8;
		}
	}
	.bottomTip{
		color: #86B0D4;
		text-align: center;
		margin: 10rpx 0;
		font-size: 28rpx;
	}
</style>
