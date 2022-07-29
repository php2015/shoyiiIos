<template>
	<view class="">
		<u-navbar :is-back="false" title="" class='navbar'
		:background="$store.getters.isDark?darkbackground:background">
			<view class="slot-wrap" style="width: 100%;">
				<view style="width: 100%;padding: 0 30rpx;display: flex;justify-content: space-between;align-items: center;">
					<view class="left" style="display: flex;align-items: center;">
						<u-icon @click="back" name="arrow-left" :color="$store.getters.isDark?'#8F8F8F':'#333333'" size="40"></u-icon>
						<text style="margin: 0 20rpx;font-size: 30rpx;font-weight: bold;"
						:style="{color:$store.getters.isDark?'#8F8F8F':'#000000'}">{{classifyName}}</text>
						<u-tag :text="tips" :type="status" size="mini"/>
					</view>	
					<view class="center" @click="setting(classifyInfor)">
						<uni-icons type="gear" size="22" :color="$store.getters.isDark?'#8F8F8F':'#333333'"></uni-icons>
					</view>
				</view>
			</view>
		</u-navbar>
		<view class="" style="padding: 0 30rpx;">
			<modellist v-for="(item,index) in classifyData" :key='item.id' :items='item' :MyModel='0'/>
		</view>
		<view class="bottomTip">
			<load-more :loadtext='loadtextAll'></load-more>
		</view>
	</view>
</template>

<script>
	import modellist from '@/components/model/modellist.vue'
	import {getMyclassify} from '@/utill/api/model/getModel.js'
	export default{
		components:{
			modellist,
		},
		data(){
			return {
				background: {
					backgroundColor: '#ffffff',
				},
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
				classifyData:[],
				classifyName:'分类名称',
				tips:'',//是否公开
				status:'info',
				classifyId:'',//分类的id
				loadtextAll:'',//底部提示,
				page:1,
				totalPage:null,//所有页面
				classifyInfor:{},//分类的相关信息
			}
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			setting(data){
				uni.navigateTo({
					url:'/pages/model/setting?&data='+encodeURIComponent(JSON.stringify(data)),
					events:{
						editModel:(emitData)=>{
							console.log(emitData)
							//更新数据，修改了下载或者公开,或者分类名称了
							this.classifyInfor={//修改从model过来的数据
								share:emitData.share,
								downloadBoolean:emitData.downloadBoolean,
								modelLibTypeName:emitData.modelLibTypeName,//模型分类名称	
								id:emitData.id//模型分类id
							}
							if(emitData.share){
								this.tips='公开'
								this.status='success'
							}else{
								this.tips='未公开'
								this.status='info'
							}
							this.classifyName=emitData.modelLibTypeName
						}
					},
				})
				return
				// #ifndef H5
				console.log(data)
				uni.navigateTo({
					url:'/pages/model/setting?&data='+encodeURIComponent(JSON.stringify(data)),
					events:{
						editModel:function(emitData){
							console.log(emitData)
							//更新数据，修改了下载或者公开,或者分类名称了
							this.classifyInfor={//修改从model过来的数据
								share:emitData.share,
								downloadBoolean:emitData.downloadBoolean,
								modelLibTypeName:emitData.modelLibTypeName,//模型分类名称	
								id:emitData.id//模型分类id
							}
							console.log(this.classifyInfor)
							if(emitData.share){
								this.tips='公开'
								this.status='success'
							}else{
								this.tips='未公开'
								this.status='info'
							}
							this.classifyName=emitData.modelLibTypeName
							console.log(emitData.modelLibTypeName)
							console.log(this.classifyName)
						}
					},
				})
				// #endif
				// #ifdef H5
				uni.showToast({
					title:'网页端不能操作',
					icon:'none'
				})
				// #endif
			},
			getData(page){
				getMyclassify({
					pageNum:page,
					pageSize:5,
					modelCategory:this.classifyId
				}).then(res=>{
					// console.log(res)
					if(res.data.code==0){
						this.classifyData=[...this.classifyData,...res.data.object.list]
						// console.log(this.classifyData.length)
						this.totalPage=res.data.object.pages
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
			},
		},
		onLoad(options){
			this.classifyInfor=JSON.parse(decodeURIComponent(options.data))
			console.log(this.classifyInfor)
			this.classifyName=this.classifyInfor.modelLibTypeName
			this.classifyId=this.classifyInfor.id
			if(this.classifyInfor.share){
				this.tips='公开'
				this.status='success'
			}else{
				this.tips='未公开'
				this.status='info'
			}
			this.getData(1)
		},
		onReachBottom(){
			console.log(this.page)
			console.log(this.totalPage)
			if(this.page > this.totalPage) return this.loadtextAll = 'nomore';
			this.loadtextAll = 'loading';
			this.getData(this.page)
		}
	}
</script>

<style lang="scss" scoped>
	page{
		height: auto;
	}
	.bottomTip{
		color: #86B0D4;
		text-align: center;
		margin: 10rpx 0;
		font-size: 28rpx;
	}
</style>
