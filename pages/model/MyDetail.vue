<template>
	<view class="">
		<uni-nav-bar leftIcon='back' :title="Navtitle" fixed @clickLeft='back' :dark="$store.getters.isDark?true:false" statusBar/>
		<publicModel :modelData='modelData' @shareModel='shareJs'></publicModel>
		<view class="classifyType dark-block">
			<text>分类</text>
			<view class="" @click="editType">
				<text>{{modelData.modelCategoryName}}</text>
				<uni-icons type="arrowright" color="store.getters.isDark?'#8F8F8F':''"></uni-icons>
			</view>
		</view>
		<view class="infortip dark-block" style="">
			<text class="tips dark-font">声明：</text>
			<text style="color: #999;">以上所有文字，图片，视频，文件等数据信息由用户通过</text>
			<text style="color: #000000;font-weight: 500;">医生PC端</text>
			<text style="color: #999;">软件主动上传，如果相关信息侵犯您的相关权益，请在'我的'-'关于树蚁'-'投诉'模块，进行相关的投诉。该模块所有信息，不具有普遍适用性，请勿模仿、盲从，请根据个体情况，听取专业人士的建议后再做相关决定。</text>
		</view>
		<view class="emptyDiv">
		</view>
		<view class="footer dark-block dark-top-border">
			<modelBottom style='width: 100%;' @show='show'></modelBottom>
		</view>
		<u-modal v-model="addshow" width='650' title="模型分类" confirm-color='#000000' 
		negative-top='140rpx' :show-cancel-button='true' ref="uModal" @confirm="confirm"
		:title-style="$store.getters.isDark?{background:'#3A3A3A',color:'#8F8F8F'}:{}">
			<view class="slot-content dark-block">
				<scroll-view enable-flex scroll-y="true" style="max-height:360rpx ;height: 100%;" class="">
					<u-radio-group class="radioGroup" v-model="value" active-color='#86B0D4'>
						<view class="radioItem dark-font" v-for="(item, index) in tabs" :key="index" >
							{{item.modelLibTypeName}}
							<u-radio
								icon-size='30'
								@change="radiochange($event,item.id)"
								:name="item.modelLibTypeName"
							>
							</u-radio>
						</view>
					</u-radio-group>
				</scroll-view>
			</view>
		</u-modal>
		<!-- vr弹窗显示 -->
		<vr-show ref='SonVrshow' :deviceGroup='deviceGroup' :threeDmodelId='modelData.fileModelId' threeDmodelName='ModelLib'></vr-show>
		<!-- 微信的分享 popup -->
		<wechat-share ref='sonWechatShare' @shareQq='shareQq'  @shareWeixin='shareWeixin' @shareFriend='shareFriend' @cancelshare='cancelshare'></wechat-share>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {querydevice} from '@/utill/api/DeviceGroup/querydevice.js'
	import {getModelDetail,editModelClassify,getClassifyType} from '@/utill/api/model/getModel.js'
	import modelBottom from '@/components/model/modelBottom.vue'
	import publicModel from '@/components/model/publicModel.vue'
	import getPageRoute from '@/utill/tools/getRoute.js'
	import mixin from '@/mixin/mixin.js'
	export default{
		mixins:[mixin],
		components:{
			//模型库的底部功能
			modelBottom,
			publicModel
		},
		emits:['refreshModel'],
		data(){
			return{
				Navtitle:'模型库详情',
				addshow:false,
				modelData:{
					previewImage:{}
				},
				tabs:[],
				value:'未分类',
				modelCategoryId:'',//分类id
				modelId:'',//模型库id
				deviceGroup:[],//设备组的数据
				pageUrl:'',//页面路由
				paramter:'',//页面参数
			}
		},
		methods:{
			back(){
				// #ifdef H5
				uni.showToast({
					title:'网页端无效',
					icon:'none'
				})
				// #endif
				// #ifdef APP-PLUS||MP-WEIXIN
					uni.navigateBack({
						delta:1
					})
				// #endif
			},
			// 修改分类
			editType(){
				// this.getTypeData()
				// #ifdef H5
				uni.showToast({
					title:'网页端不能操作',
					icon:'none'
				})
				// #endif
				// #ifdef APP-PLUS||MP-WEIXIN
				 this.getTypeData()
				// #endif
			},
			radiochange(e,id){
				this.modelCategoryId=id
			},
			confirm(){
				editModelClassify({
					id:this.modelId,
					modelCategory:this.modelCategoryId
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
						this.getDetail(this.modelId)
						uni.$emit('refreshModel',{msg:'页面更新'})
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
			getTypeData(){
				getClassifyType({}).then(res=>{
					console.log(res)
					this.tabs=res.data.object
					this.addshow=true
					console.log(this.modelCategoryId)
					this.tabs.filter(item=>{
						if(item.id==this.modelCategoryId){
							this.value=item.modelLibTypeName
						}
					})
				}).catch(err=>{
					console.log(err)
				})
			},
			// 获取模型库数据详情
			getDetail(id){
				getModelDetail({
					id:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.Navtitle=res.data.object.modelName
						// uni.setNavigationBarTitle({
						// 	title:res.data.object.modelName
						// })
						this.modelData=res.data.object
						this.modelCategoryId=res.data.object.modelCategory
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:'err',
						icon:'none'
					})
				})
			},
			show(index){
				switch (index){//xr显示
					case 0:
						console.log('0')
						if(!this.modelData.fileModelId){
							uni.showToast({
								title:'文件不存在',
								icon:'none'
							})
							return;
						}
						// 查询所有的设备组
						querydevice({}).then(res=>{
							console.log(res)
							if(res.data.code==0){
								this.deviceGroup=res.data.object
								this.$refs.SonVrshow.open()//调用子组件的打开方法，props传值，点击mask时会报错
							}else{
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							}
						}).catch(err=>{
							console.log(err)
						})
					break;
					case 1://三维显示
						console.log(this.modelData)
						if(!this.modelData.fileModelId){
							uni.showToast({
								title:'文件不存在',
								icon:'none'
							})
							return;
						}
						var modelUrl=this.$JslineUrl+'&userType=D'+'&token='+'&modelType=模型库'+'&titlename='+this.modelData.modelName+'&majorTableId='+this.modelData.id
						uni.navigateTo({
							url:'/pages/ThreejsShow/ThreejsShow?baseUrl='+encodeURIComponent(modelUrl),
							animationType:'pop-in'
						})
					break;
					case 2://转发
						 this.shareUrl=this.$onlineUrl+this.pageUrl+'?modelId='+this.paramter
						 if(this.modelData.modelName){
							 this.shareTitle=this.modelData.modelName
						 }
						 this.shareContent='所属分类:'+this.modelData.modelCategoryName+'\n'+'创立人:'+this.modelData.ownerName
						 if(this.modelData.previewImage){
							 this.surfacePic=Object.values(this.modelData.previewImage)[0] 
						 }
						 this.$refs.sonWechatShare.open()//popup展示
					break;
					default:
					break;
				}
			},
			// 取消分享
			cancelshare(){
				this.$refs.sonWechatShare.close()
			},
			// 分享三维模型到微信
			shareJs(){
				if(this.modelData.modelName){
					this.shareTitle=this.modelData.modelName+'的模型'
				}
				this.shareContent='所属分类:'+this.modelData.modelCategoryName+'\n'+'创立人:'+this.modelData.ownerName
				if(this.modelData.previewImage){
					this.surfacePic=Object.values(this.modelData.previewImage)[0] 
				}
				this.shareUrl=this.$JslineUrl+'&userType=D'+'&token='+'&modelType=模型库'+'&titlename='+this.modelData.modelName+'&fileId='+this.modelData.fileModelId
				// #ifdef APP-PLUS
				 this.$refs.sonWechatShare.open()
				// #endif
			},
			// 分享微信
			shareWeixin(){
				this.shareWeixinMixin()
			},
			// 分享朋友圈
			shareFriend(){
				this.shareFriendMixin()
			},
			shareQq(){
				this.hrefQq='https://'+this.shareUrl;
				this.shareQqMixin()
			},
		},
		onLoad(options) {
			this.modelId=options.modelId
			this.getDetail(options.modelId)
			var data=getPageRoute('modelId')
			this.pageUrl=data[0]
			this.paramter=data[1]
		},
		onNavigationBarButtonTap(e){
			console.log(e)
			// #ifdef H5
			uni.showToast({
				title:'网页端不能操作',
				icon:'none'
			})
			// #endif
			// #ifdef APP-PLUS
			 this.show(2)
			// #endif
		},
		onBackPress(e) {
			// console.log(e)
			// h5页面不需要返回首页
			// #ifdef H5
				return true
			// #endif
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.classifyType{
		padding: 30rpx 30rpx;margin-top: 30rpx;background-color: #FFFFFF;
		display: flex;justify-content: space-between;align-items: center;
	}
	.infortip{
		background-color: #FFFFFF;padding: 30rpx;
		.tips{
			color: #000000;font-weight: 500;font-size: 28rpx;
		}
	}
	.footer{
		height:110rpx;
		border-top:1px solid #EEEEEE;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		background: #FFFFFF;
		position: fixed;
		width: 100%;
		z-index: 2020;
		bottom: calc(var(--window-bottom))
	}
	.emptyDiv{
		height: 110rpx;
		width: 100%;
	}
	.slot-content{
		padding: 40rpx 40rpx;
		height: 100%;
	}
	.radioGroup{
		padding: 10rpx 0;
		overflow: auto;
		width: 100%;
	}
	.radioItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 56rpx;
		color: #000000;
		font-size: 28rpx;
		font-family:PingFang-SC-Regular;
	}
</style>
