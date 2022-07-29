<template>
	<view class="settings">
		<view class="item dark-block">
			<text>分类名称</text>
			<view class="text" @click="editType">
				<text class="dark-font">{{classifyInfor.modelLibTypeName}}</text>
				<uni-icons type="forward" style="margin-left: 20rpx;" class="dark-font"></uni-icons>
			</view>
		</view>
		<view class="item dark-block">
			<text>公开分类</text>
			<u-switch v-model="classifyInfor.share" active-color="#53D180" @change='changeShare'></u-switch>
		</view>
		<view class="item dark-block">
			<text>允许下载</text>
			<u-switch v-model="classifyInfor.downloadBoolean" active-color="#53D180" @change='changeDownload'></u-switch>
		</view>
		<view class="">
			<view class="item delete dark-block" @click="deleteType">
				<text style="color: #FF5860;font-size: 24rpx;">删除该分类</text>
			</view>
		</view>
		<!-- 编辑 -->
		<u-modal v-model="editTypeName" :mask-close-able=true width='720' title="修改分类名称" 
		:show-cancel-button='true' confirm-color='#000000' negative-top='140rpx' ref="uModal" 
		@confirm="confirm"
		:title-style="$store.getters.isDark?{background:'#3A3A3A',color:'#8F8F8F'}:{}">
			<view class="dark-block" style="padding: 60rpx 30rpx;display: flex;justify-content: space-between;">
				<u-input v-model="classifyName" type="text" :border="true" style="width: 100%;"
				:style="{background:$store.getters.isDark?'#8F8F8F':''}"/>
			</view>
		</u-modal>
		<!-- 删除分类 -->
		<u-modal v-model="deleteshow" content="确定删除该分类" title='删除' confirm-color='#FD3130'
		@confirm='deleconfirm' :mask-close-able="true" show-cancel-button
		:title-style="$store.getters.isDark?{background:'#3A3A3A',color:'#8F8F8F'}:{}"
		:content-style="$store.getters.isDark?{background:'#3A3A3A',color:'#8F8F8F'}:{}"></u-modal>
	</view>
</template>

<script>
	import {editClassify,deleteClassify,editModelType} from '@/utill/api/model/getModel.js'
	export default{
		 emits:['editModel','editModelData'],
		 data(){
			return {
				classifyInfor:{},//分类的相关信息
				editTypeName:false,//修改分类名称的弹窗
				classifyName:'',//分类名称
				deleteshow:false,//删除分类弹窗
			} 
		 },
		 methods:{
			editType(){
			 	this.editTypeName=true
			},
			confirm(){
			 	if(this.classifyName==this.classifyInfor.modelLibTypeName){
			 		uni.showToast({
			 			title:'该名称已经存在',
			 			icon:'none'
			 		})
			 		return
			 	}
			 	editModelType({
			 		ownId:this.classifyInfor.ownId,
			 		id:this.classifyInfor.id,
			 		modelLibTypeName:this.classifyName
			 	}).then(res=>{
			 		console.log(res)
			 		if(res.data.code==0){
			 			this.classifyInfor.modelLibTypeName=this.classifyName
			 			this.getOpenerEventChannel().emit('editModel',{
			 				downloadBoolean:this.classifyInfor.downloadBoolean,
			 				share:this.classifyInfor.share,
			 				id:this.classifyInfor.id,//模型分类id
			 				modelLibTypeName:this.classifyName,//模型分类名称	
			 			})
			 			uni.$emit('editModelData',{updataBool:true})//触发model列表的数据更新
			 		}
			 		uni.showToast({
			 			title:res.data.msg,
			 			icon:'none'
			 		})
			 	}).catch(err=>{
			 		console.log(err)
			 	})
			},
			changeShare(e){
			 	edit(this.classifyInfor.downloadBoolean,e)//是否可公开
			},
			changeDownload(e){
			 	edit(e,this.classifyInfor.share)//是否可下载
			},
			edit(downloadBoolean,shareBoolean){
			 	editClassify({
			 		id:this.classifyInfor.id,//模型分类id	
			 		modelLibTypeName:this.classifyInfor.modelLibTypeName,//模型分类名称	
			 		ownId:this.classifyInfor.ownId,//医生id	
			 		downloadBoolean:downloadBoolean,
			 		share:shareBoolean
			 	}).then(res=>{
			 		console.log(res)
			 		if(res.data.code==0){
			 			this.getOpenerEventChannel().emit('editModel',{
			 				downloadBoolean:downloadBoolean,
			 				share:shareBoolean,
			 				id:this.classifyInfor.id,//模型分类id
			 				modelLibTypeName:this.classifyInfor.modelLibTypeName,//模型分类名称	
			 			})
			 			uni.$emit('editModelData',{updataBool:true})//触发model列表的数据更新
			 		}
			 		uni.showToast({
			 			title:res.data.msg,
			 			icon:'none'
			 		})
			 	}).catch(err=>{
			 		console.log(err)
			 	})
			},
			deleteType(){
			 	this.deleteshow=true
			},
			deleconfirm(){
			 	deleteClassify({
			 		id:this.classifyInfor.id,//模型分类id
			 	}).then(res=>{
			 		console.log(res)
			 		if(res.data.code==0){
			 			uni.switchTab({
			 				url:'/pages/Tabbar/model'
			 			})
			 			uni.$emit('editModelData',{updataBool:true})//触发model列表的数据更新
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
		 onLoad(options){
			 console.log(options)
			 // console.log(JSON.parse(decodeURIComponent(options.data)))
			 this.classifyInfor=JSON.parse(decodeURIComponent(options.data))
			 this.classifyName=this.classifyInfor.modelLibTypeName
		 },
		 onShow() {
		 	// #ifdef APP-PLUS
		 	this.amendNavigator()
		 	// #endif
		 }
	}
</script>

<style scoped lang="scss">
	.settings{
		height: 100%;
		padding: 10rpx 30rpx 0;
	}
	.item{
		height: 90rpx;line-height: 90rpx;
		background-color: #FFFFFF;margin-top: 20rpx;padding: 0 20rpx;
		display: flex;align-items: center;justify-content: space-between;color: #000000;font-size: 28rpx;
		.text{
			display: flex;align-items: center;color: #666666;
		}
	}
	.delete{
		justify-content: center;position: fixed;bottom:40rpx;left: 0;right: 0;margin:0 30rpx;
	}
</style>
