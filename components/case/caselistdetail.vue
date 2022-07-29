<template>
	<movable-area style="width: 100%;height: 100%;">
	<view class="caseAll">
		<!-- 标题栏 -->
		<view class="status-contents">
		    <view class="status top-view"></view>
			  <!-- #ifdef MP-WEIXIN -->
			  <view class="navTitle" :style="{width:widthLength+'rpx'}">
			  	<view class="left" @click="back">
			  		<uni-icons type="arrowleft" size="20" color='#343434'></uni-icons>
			  		<text class="title">详情</text>
			  	</view>
			  </view>
			  <!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view class="navTitle">
				<view class="left" @click="back">
					<uni-icons type="arrowleft" size="20" color='#343434'></uni-icons>
					<text class="title">详情</text>
				</view>
			</view>
			<!-- #endif -->
		</view>
		<view class="wrap">
			<u-tabs-swiper ref="uTabs" :current="current" @change="changeTab" :list="tabs" :bold='false' :is-scroll="false" font-size='24' :show-bar='false' active-color='#86B0D4'></u-tabs-swiper>
			<swiper class="swiper-box" :current="swiperCurrent"  @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<!--stl数据的title，三维模型数据 -->
						<electricModel :electricData='electricData' :dataList='list.threeDModel' @shareModel='share'></electricModel>
						<!-- 医生信息 -->
						<casedocinfor :casedocinfor='casedocinfor'></casedocinfor>
						<createService :isOrder='orderData.orderNo?true:false' @help='help' @cancelOrder='cancelOrder' @ensureOrder='ensureOrder' :orderData='orderData' :caseHistoryId='id'></createService>
						<view class='section'>
							<!-- 电子病例的十二项的数据，以及就诊历史 -->
							<electricInfor :caseHistory='list' :medicalHistories='list.medicalHistories'></electricInfor>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 手术方法 -->
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<!-- 手术方法的所有数据  三维图形的title ,图片，各种匹配情况-->
						<methodsModel :surgical='surgical'  @shareModel='share'></methodsModel>
						<view class='section'>
							<!-- 医生信息 -->
							<casedocinfor :casedocinfor='casedocinfor'></casedocinfor>
							<createService :isOrder='orderData.orderNo?true:false' @help='help' @cancelOrder='cancelOrder' @ensureOrder='ensureOrder' :orderData='orderData' :caseHistoryId='id'></createService>
							<!-- 十二项数据 -->
							<twelveItems :arrData='surgical'></twelveItems>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 手术设计 -->
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<designModel :surcigalDesignData='surcigalDesignData'  @shareModel='share'></designModel>
						<view class='section'>
							<!-- 医生信息 -->
							<casedocinfor :casedocinfor='casedocinfor'></casedocinfor>
							<createService :isOrder='orderData.orderNo?true:false' @help='help' @cancelOrder='cancelOrder' @ensureOrder='ensureOrder' :orderData='orderData' :caseHistoryId='id'></createService>
							<designInfor :designData='surcigalDesignData.DesignData'></designInfor>
							<caseFiles :files='surcigalDesignData.files'></caseFiles>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 效果预测 -->
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<view class='section'>
							<casepredict :predictData='predictData' @shareModel='share'></casepredict>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 术后随访 -->
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<view class='section'>
							<casedocinfor :casedocinfor='casedocinfor'></casedocinfor>
							<createService :isOrder='orderData.orderNo?true:false' @help='help' @cancelOrder='cancelOrder' @ensureOrder='ensureOrder' :orderData='orderData' :caseHistoryId='id'></createService>
							<casefollow :casefollow='followUpData'></casefollow>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 树蚁设计 -->
				<swiper-item class="swiper-item">
					<scroll-view style="height: 100%;width: 100%;" scroll-y>
						<view class='section' v-if="Object.keys(this.shoyiiData).length>0">
							<caseDesign :shoyiiData='shoyiiData' :shoyiiObject="shoyiiObject" @shareModel='share'></caseDesign>
						</view>
						<view class="section" v-else>
							<u-empty class="empty" text="暂无设计内容" mode="list"></u-empty>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 底部 -->
		<view class="">
			<!-- 分别是顶部menu的下标，底部三维数据，3js的stlid -->
			<!-- 电子病例 -->
			<caseBottom v-if="swiperCurrent===0" :jsUrl='shareUrl' :FileId='electricData.electricId' @caseshare='share' @vrshow='vrshow'></caseBottom>
			<!-- 手术方法 -->
			<caseBottom v-if='swiperCurrent===1' :jsUrl='shareUrl' :FileId='surgicalMethodsId' :jsId='methodJsId' @caseshare='share' @vrshow='vrshow'></caseBottom>
			<!-- 手术设计 -->
			<!-- 匹配情况 导板，器械数据 -->
			<caseBottom v-if='swiperCurrent===2' :jsUrl='shareUrl' :FileId='surcigalDesignData.designId' @caseshare='share' @vrshow='vrshow'></caseBottom>
			<!-- 效果预测 -->
			<caseBottom v-if='swiperCurrent===3' :jsUrl='shareUrl' :FileId='predictData.predictId' @caseshare='share' @vrshow='vrshow'></caseBottom>
			<!-- 树蚁设计 -->
			<caseBottom v-if='swiperCurrent===5' :jsUrl='shareUrl' :FileId='shoyiiObject.shoyiiId' @caseshare='share' @vrshow='vrshow'></caseBottom>
		</view>
		<!-- vr显示的选择 -->
		<u-popup v-model="groupshow" mode="bottom">
			<view class="groups">
				<view class="modeltitle">
					<text>选择分组设备</text>
				</view>
				<view class="services" v-for="(item, index) in deviceGroup" :key="item.id" >
					<label class="label" @click="select(item.id,item)">
						<view>{{item.name}}</view>
						<view>
							<radio :checked="item.id==radioId" color='#86B0D4' style="transform:scale(0.7)"/>
						</view>
					</label>
					<uni-transition :mode-class="['zoom-in']" :show="item.id==radioId?true:false">
						<scroll-view scroll-y="true" class="serviceradio">
							<view class="items" v-for="(items,index1) in devices" :key='index1'>
								<view class="">
									<view class="servicetitle">
										<text>{{items.deviceName}}</text>
										<view>
											<u-checkbox
												size='28rpx'
												label-size='28rpx'
												style="margin-right: 20rpx;"
												@change="selectread($event,items,radioId)" 
												v-model="items.deviceRead" 
												active-color="#86B0D4"
											>查看权</u-checkbox>
											<u-checkbox
												size='28rpx'
												label-size='28rpx'
												@change="selectoperate($event,items,radioId)" 
												v-model="items.deviceControl" 
												active-color="#86B0D4"
											>操作权</u-checkbox>
										</view>
									</view>
									<view class="servicetitle type">
										<view class="" style="margin-right: 60rpx;">
											<text>类型：</text>
											<text>{{items.deviceIdentity}}</text>
										</view>
										<view class="" style="flex: 1;">
											<text>标识：</text>
											<text>{{items.deviceMark}}</text>
										</view>
									</view>
								</view>
							</view>
						</scroll-view>
					</uni-transition>
				</view>	
				<view class="" style="display: flex;padding: 30rpx 0;border-top: 1px solid #EEEEEE;">
					<text style="flex: 1;text-align: center;" @tap="cancel">取消</text>
					<text style="flex: 1;text-align: center;" @tap='canfirm'>确定</text>
				</view>
			</view>
		</u-popup>
		<auditStatus :auditshow='auditshow' :cancelBtn='cancelBtn' @auditconfirm="auditconfirm" @auditcancel='auditcancel'></auditStatus>
		<!-- 分享的popup -->
		<u-popup v-model="shareshow" mode="bottom"  border-radius="14">
			<view style="padding: 30rpx 30rpx;">
				<text>分享到:</text>
				<view class="" style="display: flex;justify-content: space-around;padding: 30rpx 0;">
					<view class="" style="display: flex;flex-direction: column;line-height: 60rpx;align-items: center;" @click="shareWeixin">
						<!-- #ifdef H5 -->
						<svg class="icon" aria-hidden="true">
						  <use xlink:href='#iconweixin'></use>
						</svg>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS -->
						<image lazy-load src="../../static/image/wechat.png" mode="" style="width: 60rpx; height: 60rpx;"></image>
						<!-- #endif -->
						<text>微信</text>
					</view>
					<view class="" style="display: flex;flex-direction: column;line-height: 60rpx;align-items: center;" @click="shareFriend">
						<!-- #ifdef H5 -->
						<svg class="icon" aria-hidden="true">
						  <use xlink:href='#iconpengyouquan' size='40'></use>
						</svg>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS -->
						<image lazy-load src="../../static/image/friend.png" mode="" style="width: 60rpx; height: 60rpx;"></image>
						<!-- #endif -->
						<text>朋友圈</text>
					</view>
				</view>
				<view class="" style="text-align: center;">
					<text @click="cancelshare">取消</text>
				</view>
			</view>
		</u-popup>
	</view>
	<!-- #ifndef H5 -->
	<view class="chat" v-if="accountOwner!=10" style="position: fixed;bottom: 20%;right: 20%;">
		<movable-view direction='all' style="opacity: .8;">
			<view @click="EnterGroup" class="chatIcon" style="color: #fff;position: relative;display: flex;align-items: center;justify-content: center;width: 140rpx;height: 140rpx;border-radius: 50%;background-color: #007AFF;">
				<text v-if="list.relativeGroupId">进入讨论组</text>
				<text v-else>创建讨论组</text>
				<u-badge v-if='badgeShow' size="default" :is-dot="true" type="error" :offset='offset'>
				</u-badge>
			</view>
		</movable-view>
	</view>
	<!-- #endif -->
	</movable-area>
</template>

<script>
	import {getcasedetail} from '@/utill/api/case/getcasedetail.js'
	import {help} from '@/utill/api/case/help.js'
	import {getSurgicalDetail} from '@/utill/api/surgical/getSurgical.js'
	import {querydevice} from '@/utill/api/DeviceGroup/querydevice.js'
	import {vrGroup} from '@/utill/api/DeviceGroup/vrGroup.js'
	import {editDevice} from '@/utill/api/DeviceGroup/editDevice.js'
	// 查询病例相关的订单信息
	import {getCaseOrder} from '@/utill/api/order/order.js'
	import casedocinfor from '@/components/case/casedocinfor.vue'
	import electricInfor from '@/components/case/caseElectric/electricInfor.vue'
	import electricModel from '@/components/case/caseElectric/electricModel.vue'
	// 生成订单服务
	import createService from './components/createService.vue'	
	// 手术方法
	import twelveItems from '@/components/surgical/twelveItems.vue'
	import methodsModel from '@/components/case/caseMethods/methodsModel.vue'
	// 手术设计
	import designModel from '@/components/case/caseDesign/designModel.vue'
	import designInfor from '@/components/case/caseDesign/designInfor.vue'
	import caseFiles from '@/components/case/caseDesign/caseFiles.vue'
	// 效果预测
	import casepredict from '@/components/case/casepredict/casepredict.vue'
	// 术后随访
	import casefollow from '@/components/case/casefollow/casefollow.vue'
	// 树蚁设计
	import caseDesign from './components/caseDesign.vue'
	// 病例底部
	import caseBottom from '@/components/case/caseBottom.vue'
	import {createCaseGroup} from '@/utill/api/connect/connect.js'
	import {getInfor} from '@/utill/api/personalInfor/getInfor.js'
	import {mapState} from 'vuex'
	export default {
		components:{
			// 病例底部
			caseBottom,
			// 主治医生信息
			casedocinfor,
			// 电子病例十二项数据
			electricInfor,
			// 电子病例的模型数据
			electricModel,
			// 手术方法
			twelveItems,
			methodsModel,
			// 手术设计
			designInfor,
			designModel,
			caseFiles,
			// 效果预测
			casepredict,
			// 术后随访
			casefollow,
			// 生成订单服务
			createService,
			// 树蚁设计
			caseDesign
		},
		data() {
			return {
				accountOwner:'',//账户类型
				secondPwdBool:false,//是否有二级密码
				offset:[20,20], //消息红点
				badgeShow:false,
				menuButtonInfo:{},
				// 顶部导航标题
				current: 0,
				tabs: [{name: '电子病例'}, 
					{name: '手术方法'}, 
					{name: '手术设计'},
					{name: '效果预测'},
					{name: '术后随访'},
					{name: '树蚁设计'},
				],
				swiperCurrent: 0,//默认是全部
				list:{},//病例数据
				casedocinfor:[],//主治医生的信息
				id:'',//病例详情的id
				// 电子病例的数据
				electricData:{
					threeModeltitle:'',//轮播图顶部的title
					threemodel:{},//这个是轮播图对应的模型数据
					// stlId:'',//用于获取vr设备的参数
					electricId:null,//这个是电子病例的3js文件的id;跟stlid要区分开，用于进入3js中
				},
				// 手术方法的数据	
				surgical:{
					threeDGuideList:[
						{stlPicture:'[]'}
					],
					threeDInstrumentList:[
						{stlPicture:'[]'}
					],
					surgicalDesignStepsList:[
						{stlPicture:'[]'}
					],
					preoperativeConditionList:[
						{stlPicture:'[]'}
					],
					postoperativeSituationList:[
						{stlPicture:'[]'}
					],
					titleName:'',//手术方法的title
					methodsBanner:[],//手术方法轮播图
					Alllist:[],//匹配情况
					Guidelist:[],//导板数据
					Instrumentlist:[],//器械数据
				},
				surgicalMethodsId:null,//用于获取vr设备
				methodJsId:'',//用于3js
				// 手术设计
				surcigalDesignData:{
					matching:[],//匹配情况
					DesignGuid:[],//导板数据
					DesignInstrument:[],//器械数据
					DesignData:{},//所有的手术设计数据
					titleDesign:'',//三维数据title
					DesignBanner:{},//三维图形数据
					// designStlId:'',
					files:{},//ppt,word 的文件
					designId:null,//这个是手术设计的3js文件的id;跟stlid要区分开
				},
				// 效果预测的数据
				predictData:{
					casePredict:[],
					casePredictbanner:[],//效果预测的轮播图
					predictName:'',
					predictId:null,
				},
				// 术后随访
				followUpData:[],
				// 审核弹窗
				auditshow:false,//审核状态的展示
				cancelBtn:false,
				// 分享弹窗
				shareshow:false,
				casetitle:'病例',//病例的title;
				jstitle:'病例',//3js的title
				casecontent:'病例详情',//转发的内容；
				surfacePic:uni.getStorageSync('uploadLogo'),
				assitDoc:[],//协助医生数据
				// vr展示
				groupshow:false,//vr显示的picker
				deviceGroup:[],//设备分组的数据
				radioId:null,
				devices:[],
				readBool:false,
				operateBool:false,
				threeModelId:'',//用于vr设备的选择
				threeModelName:'',//用于vr设备的name
				methodsType:'Matching',//手术方法选择的是导板还是器械,默认是匹配情况
				designType:'Matching',//手术设计选择的导板还是器械还是匹配情况
				shareUrl:'',//分享的3js和整个病例的url
				JsmodelId:'',//用于进行3js分享
				shareTitle:'病例',//微信分享的标题
				orderData:{},//订单数据
				// -----------------------
				shoyiiData:{},//树蚁设计的数据
				shoyiiObject:{
					shoyiiId:null,////用于电子病例的3js分享
					shoyiithreemodel:{},//用于电子病历的三维数据显示,默认是第一组的
					shoyiistlId:'',//stl的id，默认是第一组数据
					shoyiititle:'',//用于电子病历的三维数据标题
					shoyiilabel:'',//用于进入3js
				},//包含id,stlid,title,banner
				JsData:{},//用于底部进入3js
			}
		},
		watch:{
			current(newValue,oldValue){
				this.getData(this.current,this.id)
			},
			'socketData': function(val) {
				if(val=='head'){//心跳回复
					return
				}
				this.badgeShow=true
			}
		},
		methods:{
			// 进入群聊
			EnterGroup(){
				this.badgeShow=false
				if(this.list.relativeGroupId){//存在，则直接进入群组中
					uni.navigateTo({ //病例id,病例号，聊天类型
						// id是病例id,otherName 是群组名称，type是所属类型,id是群组id
						url:'/pages/shoyiiChat/chatWindow?caseId='+this.id+'&id='+this.list.relativeGroupId+'&otherName='+this.list.caseHistoryNo+'&type=GROUP'
					})
				}else{//创建群组
					if(this.list.attendingDoctors.length==0||this.list.attendingDoctors[0].doctorId!=uni.getStorageSync('doctorId')){
						uni.showToast({
							title:'非主治医生不能创建群组',
							icon:'none'
						})
						return;
					}
					createCaseGroup({
						name:this.list.caseHistoryNo,
						caseHistoryId:this.id
					}).then(res=>{
						console.log(res)
						if(res.data.code==0){//群组创建成功
							uni.navigateTo({ //病例id,病例号 res.data.object是群组id,聊天类型type
								url:'/pages/shoyiiChat/chatWindow?caseId='+this.id+'&id='+res.data.object+'&otherName='+this.list.caseHistoryNo+'&type=GROUP'
							})
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
			// 转发分享按钮
			share(e){
				if(this.list.name&&this.list.caseHistoryNo){
					// 病例的详情拼接
					this.casecontent='患者姓名：'+this.list.name+'\n'+'病历医生:'+this.casedocinfor[0].doctorVO.name+'\n'+'病历号:'+this.list.caseHistoryNo
				}else if(this.list.name){
					// 病例的详情拼接
					this.casecontent='患者姓名：'+this.list.name+'\n'+'病历医生:'+this.casedocinfor[0].doctorVO.name
				}else if(this.list.caseHistoryNo){
					// 病例的详情拼接
					this.casecontent='病历医生:'+this.casedocinfor[0].doctorVO.name+'\n'+'病历号:'+this.list.caseHistoryNo
				}else{
					// 病例的详情拼接
					this.casecontent='病例详情'
				}
				// 病例详情
				const page=getCurrentPages()
				var length=page.length-1
				var page1 = page[length];				
				this.pageUrl=page1.route//网页版页面路由
				// console.log(page1.options)//网页版参数
				this.paramter=page1.options.id
				 // #ifdef APP-PLUS
				 this.shareshow=true
				 let curRoute  = this.$mp.page.route;
				 this.pageUrl=curRoute
				 this.paramter=this.$mp.page.options.id
				 // #endif
				switch (this.swiperCurrent){
					case 0://电子病例（这块传的是三维文件的id）
						this.JsmodelId=this.electricData.electricId//这个是3js文件的id;跟具体的stlid要区分开
						 var modelType='ThreeDModel'//3js的参数
						 var modelIdType='majorTableId'//3js的参数
						 var token=uni.getStorageSync('token')
						 if(this.electricData.threeModeltitle){//如果电子病例的三维模型title为空，默认病例
						 	this.jstitle='电子病例-'+this.electricData.threeModeltitle//转发出去的标题（三维模型title）
						 }
						 console.log(this.electricData.threemodel)
						 console.log(this.electricData.threemodel.previewImage)
						 if(this.electricData.threemodel.length!=0&&this.electricData.threemodel.previewImage){
							 //轮播图存在(转发出的图片，图片第一张)
							 this.surfacePic=Object.values(this.electricData.threemodel.previewImage)[0]
						 }
					break;
					case 1://手术方法
						this.JsmodelId=this.methodJsId
						var modelType=''
						var modelIdType='fileId'
						var token=''
						if(this.surgical.titleName){
							this.jstitle='手术方法-'+this.surgical.titleName
						}
						console.log(this.surgical.methodsBanner)
						if(this.surgical.methodsBanner.length!=0){
							this.surfacePic=this.surgical.methodsBanner[0]
						}
					break;
					case 2://手术设计
						this.JsmodelId=this.surcigalDesignData.designId
						var modelIdType='majorTableId'
						var token=uni.getStorageSync('token')
						//要具体区分导板，器械，匹配情况
						var modelType=this.designType
						if(this.surcigalDesignData.titleDesign){
							this.jstitle='手术设计-'+this.surcigalDesignData.titleDesign
						}
						console.log(this.surcigalDesignData.DesignBanner)
						if(Object.values(this.surcigalDesignData.DesignBanner).length!=0){
							this.surfacePic=Object.values(this.surcigalDesignData.DesignBanner)[0]
						}
					break;
					case 3://效果预测
						var modelType='CaseHistoryEffectPrediction'
						var modelIdType='id'
						var token=''
						this.JsmodelId=this.predictData.predictId
						 if(this.predictData.predictName){
							this.jstitle='效果预测-'+this.predictData.predictName
						 }
						 if(this.predictData.casePredictbanner.length!=0){
							this.surfacePic=this.predictData.casePredictbanner[0].fileDownloadUrl
						 }
					break;
					case 5://树蚁设计
						var modelIdType='majorTableId'
						var token=uni.getStorageSync('token')
						var modelType=this.shoyiiObject.shoyiilabel
						if(this.shoyiiObject.shoyiilabel=='CaseHistoryEffectPrediction'){//效果预测
							var modelIdType='id'
							var token=''
						}
						this.JsmodelId=this.shoyiiObject.shoyiiId
						if(this.shoyiiObject.shoyiititle){
							this.jstitle='树蚁设计-'+this.shoyiiObject.shoyiititle
						}
						if(Object.keys(this.shoyiiObject.shoyiithreemodel).length!=0){
							this.surfacePic=Object.values(this.shoyiiObject.shoyiithreemodel)[0]
							console.log(this.surfacePic)
						}
					default:
					 console.log('是你吗4')
					break; 
				}
				console.log(this.pageUrl)
				console.log(this.paramter)
				if(e){//e存在，分享三维模型
					this.shareTitle=this.jstitle
						// 三维模型的url
					this.shareUrl=this.$JslineUrl+'&caseHistoryId='+this.id+'&userType=D'+'&token='+token+'&modelType='+modelType+'&titlename='+this.shareTitle+'&'+modelIdType+'='+this.JsmodelId
				}else{//e不存在，分享的是病例
					  if(this.list.name){
						   this.shareTitle=this.list.name+'的病例'//病例标题是患者姓名的病例
					  }else{
						  this.shareTitle='未命名的病例'//病例标题是患者姓名的病例
					  }
					// 病例的url
					this.shareUrl=this.$onlineUrl+this.pageUrl+'?id='+this.paramter
				}
				console.log(this.shareUrl)
				console.log(this.shareTitle)
			},
			cancelshare(){
				this.shareshow=false
			},
			// 分享到微信聊天
			shareWeixin(){
				// #ifdef APP-PLUS
				uni.share({
					provider:'weixin',
					title:this.shareTitle,
					type:0,
					// href: this.$onlineUrl+this.pageUrl+'?id='+this.paramter,
					href: this.shareUrl,
					summary:this.casecontent,
					scene:'WXSceneSession',
					imageUrl: this.surfacePic,
					success(e) {
						uni.showToast({
							title:'分享成功',
							icon:'none'
						})
						console.log(e)
					},
					fail(e) {
						uni.showToast({
							title:'分享失败',
							icon:'none'
						})
						console.log(e)
					}
				})
				// #endif
			},
			// 分享到朋友圈
			shareFriend(){
				uni.share({
					provider:'weixin',
					title:this.shareTitle,
					type:0,
					// href: this.$onlineUrl+this.pageUrl+'?id='+this.paramter,
					href: this.shareUrl,
					summary:this.casecontent,
					scene:'WXSenceTimeline',
					imageUrl: this.surfacePic,
					success(e) {
						uni.showToast({
							title:'分享成功',
							icon:'none'
						})
						console.log(e)
					},
					fail(e) {
						uni.showToast({
							title:'分享失败',
							icon:'none'
						})
					}
				})
			},
			// 设备组选择取消
			cancel(){
				this.groupshow=false
			},
			// 设备组选择确定
			canfirm(){
				if(!this.groupId){
					uni.showToast({
						title:'设备分组选择不能为空',
						icon:'none'
					})
					return
				}
				if(this.swiperCurrent==0){//电子病例
					this.threeModelName='ThreeDModel'//电子病例，这个固定
					this.threeModelId=this.electricData.electricId//电子病历的stlid
				}else if(this.swiperCurrent==1){//手术方法
					console.log(this.methodsType)
					this.threeModelName=this.methodsType//导板，器械还是匹配情况
					this.threeModelId=this.surgicalMethodsId//手术方法的stlid
				}else if(this.swiperCurrent==2){//手术设计
					this.threeModelName=this.designType//导板，器械还是匹配情况
					this.threeModelId=this.surcigalDesignData.designId//手术设计的stlid
				}else if(this.swiperCurrent==5){//树蚁设计
					this.threeModelName=this.shoyiiObject.shoyiilabel//导板，器械还是匹配情况
					this.threeModelId=this.shoyiiObject.shoyiiId//树蚁设计的id
				}
				console.log(this.threeModelName)
				console.log(this.threeModelId)
				// 设备组选择
				vrGroup({
					groupId:this.groupId,
					majorTableId:this.threeModelId,
					majorTableName:this.threeModelName,
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
						this.groupshow=false
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
			// 修改权限
			amendAuthority(item,groupId,checkread,checkoperate){
				console.log(item)
				console.log(groupId)
				console.log(checkread)
				console.log(checkoperate)
				this.groupId=groupId
				editDevice({
					id:item.id,
					deviceName:item.deviceName,//设备名称
					groupId:groupId,//设备组的id
					deviceIdentity:item.deviceIdentity,//设备类型
					deviceRead:checkread,// 查看权
					deviceControl:checkoperate,//操作权
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						// this.getDeviceData(this.groupId)
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
			select(id,item){
				this.radioId=id
				this.groupId=id
				console.log(id)
				console.log(item.devices)
				this.devices=item.devices
			},
			 // 查看权的选择
			selectread(e,item,groupId){
				this.readBool=e.value
				this.amendAuthority(item,groupId,this.readBool,item.deviceControl)
			},
			// 操作权的选择
			selectoperate(e,item,groupId){
				this.operateBool=e.value
				this.amendAuthority(item,groupId,item.deviceRead,this.operateBool)
			},
			vrshow(){
				switch (this.swiperCurrent){
					case 0://电子病例
						if(!this.electricData.electricId){
							uni.showToast({
								title:'无相关文件',
								icon:'none'
							})
							return;
						}
					break;
					case 1://手术方法
						if(!this.surgicalMethodsId){
							uni.showToast({
								title:'无相关文件',
								icon:'none'
							})
							return;
						}
					break;
					case 2://手术设计
						if(!this.surcigalDesignData.designId){
							uni.showToast({
								title:'无相关文件',
								icon:'none'
							})
							return;
						}
					break;
					case 3://效果预测
						uni.showToast({
							title:'不能进行vr显示',
							icon:'none'
						})
						return;
					break;
					case 5://树蚁设计
						if(!this.shoyiiObject.shoyiiId){
							uni.showToast({
								title:'无相关文件',
								icon:'none'
							})
							return;
						}
						if(this.shoyiiObject.shoyiilabel=='CaseHistoryEffectPrediction'){//效果预测
							uni.showToast({
								title:'不能进行vr显示',
								icon:'none'
							})
							return;
						}
					break;
					default://电子病例
						if(!this.electricData.electricId){
							uni.showToast({
								title:'无相关文件',
								icon:'none'
							})
							return;
						}
					break;
				}
				 // 查询所有的设备组
				querydevice({}).then(res=>{
				 	console.log(res)
				 	if(res.data.code==0){
				 		this.deviceGroup=res.data.object
				 		this.groupshow=true
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
			// 返回
			back(){
				// #ifdef APP-PLUS ||MP-WEIXIN
				var length=getCurrentPages().length-1
				var page1=getCurrentPages()[length-1].route
				console.log(page1)
				if(page1=='pages/caselist/selectDesign'){//从设计团队过来
					uni.switchTab({
						url:'/pages/caselist/case'
					})
				}else{
					uni.navigateBack({
						delta:1
					})
				}
				// #endif
				// #ifdef H5
					var length=getCurrentPages().length-1
					var page1=getCurrentPages()[length-1].route
					console.log(page1)
					if(page1=='pages/orderManage/orderDetail'){//从账单过来的，可以返回去
						uni.navigateBack({
							delta:1
						})
					}else{//其他情况是无效的
						uni.showToast({
							title:'网页端无效',
							icon:'none'
						})
					}
				// #endif
			},
			// 寻求帮助弹窗
			help(){
				// #ifdef H5
				uni.showToast({
					title:'网页端不能申请树蚁辅助',
					icon:'none'
				})
				return;
				// #endif
				// #ifndef H5
				if(this.assitDoc.length!=0){//协助病例不能帮助
					if(this.assitDoc[0].identity=='XZ'){
						uni.showToast({
							title:'协助病例不能申请树蚁辅助',
							icon:'none'
						})
						return
					}
				}
				if(!this.orderData.orderNo){//寻求帮助
					var data={
						caseHistoryId:this.id,
						pwdBool:this.secondPwdBool
					}
					uni.navigateTo({
						url:'/pages/caselist/selectDesign?data='+encodeURIComponent(JSON.stringify(data))
					})
				}
				// #endif	
			},
			// 取消订单
			cancelOrder(e){
				this.getCaseOrder(this.id)
			},
			// 订单确认服务
			ensureOrder(){
				this.getCaseOrder(this.id)
			},
			// 点击获取数据
			changeTab(index) {//点击获取数据，每次index的变动，都会触发change事件
				this.loadtextAll=''//更换menu时，底部tip默认为'';
				this.swiperCurrent = index
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
				console.log('滑动了'+this.current)
				switch (this.current){
					case 0://电子病例
						this.JsmodelId=this.electricData.electricId//这个是3js文件的id;跟具体的stlid要区分开
						var modelType='ThreeDModel'//3js的参数
						var modelIdType='majorTableId'//3js的参数
						var token=uni.getStorageSync('token')
						if(this.electricData.threeModeltitle){//如果电子病例的三维模型title为空，默认病例
							this.jstitle='电子病例-'+this.electricData.threeModeltitle//转发出去的标题（三维模型title）
						}
					break;
					case 1://手术方法
						console.log(this.methodJsId)
						this.JsmodelId=this.methodJsId
						var modelType=''
						var modelIdType='fileId'
						var token=''
						if(this.surgical.titleName){
							this.jstitle='手术方法-'+this.surgical.titleName
						}
					break;
					case 2://手术设计
						this.JsmodelId=this.surcigalDesignData.designId
						var modelIdType='majorTableId'
						var token=uni.getStorageSync('token')
						//要具体区分导板，器械，匹配情况
						var modelType=this.designType
						if(this.surcigalDesignData.titleDesign){
							this.jstitle='手术设计-'+this.surcigalDesignData.titleDesign
						}
					break;
					case 3://效果预测
						var modelType='CaseHistoryEffectPrediction'
						var modelIdType='id'
						var token=''
						this.JsmodelId=this.predictData.predictId
						 if(this.predictData.predictName){
							this.jstitle='效果预测-'+this.predictData.predictName
						 }
					break;
					case 5://树蚁设计
						var modelIdType='majorTableId'
						var token=uni.getStorageSync('token')
						var modelType=this.shoyiiObject.shoyiilabel
						if(this.shoyiiObject.shoyiilabel=='CaseHistoryEffectPrediction'){//效果预测
							var modelIdType='id'
							var token=''
						}
						this.JsmodelId=this.shoyiiObject.shoyiiId
						if(this.shoyiiObject.shoyiititle){
							this.jstitle='树蚁设计-'+this.shoyiiObject.shoyiititle
						}
					break;
					default://电子病例
						this.JsmodelId=this.electricData.electricId//这个是3js文件的id;跟具体的stlid要区分开
						var modelType='ThreeDModel'//3js的参数
						var modelIdType='majorTableId'//3js的参数
						var token=uni.getStorageSync('token')
						if(this.electricData.threeModeltitle){//如果电子病例的三维模型title为空，默认病例
							this.jstitle='电子病例-'+this.electricData.threeModeltitle//转发出去的标题（三维模型title）
						}
					break;	
				}
				this.shareTitle=this.jstitle
				this.shareUrl=this.$JslineUrl+'&caseHistoryId='+this.id+'&userType=D'+'&token='+token+'&modelType='+modelType+'&titlename='+this.shareTitle+'&'+modelIdType+'='+this.JsmodelId
			},
			// object匹配数据
			changeData(data,id){
				console.log(data)//对应的是匹配情况的数据
				var a=data.filter(item=>{
					if(item.id==id){
						return item
					}
				})
				this.methodJsId=a[0].stlModelIds
				if(a[0].stlPictureModelIds){
					var b=a[0].stlPictureModelIds.split(',')
					var indexArr=b.map(item=>{//遍历出匹配的下标
						return Object.keys(this.surgical.previewImage).indexOf(item)
					})
					var newArr=[]
					indexArr.filter(item=>{
						newArr.push(Object.values(this.surgical.previewImage)[item])
					})
					this.surgical.methodsBanner=newArr
					console.log(this.surgical.methodsBanner)
				}	
			},
			getData(index,id){
				getcasedetail({
					caseHistoryId:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						var data=res.data.object
						this.list=data
						this.casedocinfor=data.attendingDoctors//数组，主治医生有多个？？
						if(data.assistDoctors.length!=0){
							this.assitDoc=data.assistDoctors//协助医生
						}
						// 获取手术方法的数据
						if(data.video){//video 是个id
							getSurgicalDetail({//获取数据方法的数据
								surgicalPlanId:data.video,
							}).then(res=>{
								console.log(res)
								var surgicalData=res.data.object
								this.surgical=surgicalData
								if(surgicalData.surgicalPlanMatchingVOS&&surgicalData.surgicalPlanMatchingVOS.length!=0){
									this.surgicalMethodsId=surgicalData.surgicalPlanMatchingVOS[0].id
									this.surgical.titleName=surgicalData.surgicalPlanMatchingVOS[0].name
									// 获取匹配情况的第一条banner数据，在所有的banner中筛选出匹配情况对应的banner图
									this.changeData(surgicalData.surgicalPlanMatchingVOS,surgicalData.surgicalPlanMatchingVOS[0].id)
								}
								this.surgical.Alllist=surgicalData.surgicalPlanMatchingVOS//匹配情况
								this.surgical.Guidelist=surgicalData.guideVOS//导板匹配情况
								this.surgical.Instrumentlist=surgicalData.instrumentVOS//器械匹配情况
							})
						}
						switch (index){
							case 0:// 电子病例相关
								if(data.threeDModel.length!=0){
									this.electricData.electricId=data.threeDModel[0].id//用于电子病例的3js分享
									// this.electricData.stlId=data.threeDModel[0].stlFileModelId//stl的id，默认是第一组数据
									this.electricData.threemodel=data.threeDModel[0]//用于电子病历的三维数据显示,默认是第一组的
									this.electricData.threeModeltitle=data.threeDModel[0].title//用于电子病历的三维数据标题
								}
								var token=uni.getStorageSync('token')
								if(this.electricData.threeModeltitle){//如果电子病例的三维模型title为空，默认病例
									this.jstitle='电子病例-'+this.electricData.threeModeltitle//转发出去的标题（三维模型title）
								}else{
									this.jstitle='电子病例'
								}
								this.shareUrl=this.$JslineUrl+'&caseHistoryId='+this.id+'&userType=D'+'&token='+token+'&modelType=ThreeDModel'+'&titlename='+this.jstitle+'&majorTableId='+this.electricData.electricId
							break;
							case 2:// 手术设计
								this.surcigalDesignData.DesignData=data//所有的病例里的数据（器械，导板，匹配情况全部分开）
								if(data.matching&&data.matching.length!=0){
									this.surcigalDesignData.matching=data.matching//匹配情况的数据
									this.surcigalDesignData.titleDesign=data.matching[0].name
									this.surcigalDesignData.designId=data.matching[0].id//匹配情况的对象的id,区别于stl的id
									// this.surcigalDesignData.designStlId=data.matching[0].stlModelIds//stl的id,默认是第一个
									this.surcigalDesignData.DesignBanner=data.matching[0].stlPictureUrl//默认是匹配情况的第一条数据
								}
								if(data.guides&&data.guides.length!=0){//导板数据
									this.surcigalDesignData.DesignGuid=data.guides
								}
								if(data.instrument&&data.instrument.length!=0){//器械数据
									this.surcigalDesignData.DesignInstrument=data.instrument
								}
								if(data.surgicalDesignContentDTO){
									this.surcigalDesignData.files=data.surgicalDesignContentDTO//ppt,word 的文件
								}
							break;
							case 3://效果预测
								this.predictData.casePredictbanner=[]//每次切换都设置为空
								this.predictData.casePredict=data.caseHistoryEffectPredictions
								if(data.caseHistoryEffectPredictions&&data.caseHistoryEffectPredictions.length!=0){
									this.predictData.predictName=data.caseHistoryEffectPredictions[0].name
									this.predictData.predictId=data.caseHistoryEffectPredictions[0].id
									console.log(this.predictData.casePredict)
									this.predictData.casePredictbanner=Object.values(this.predictData.casePredict[0].stlPictureUrl) 
									console.log(this.predictData.casePredictbanner)//效果预测的轮播图
								}
							break;
							case 4://术后随访
								this.followUpData=data.followUps
								console.log(this.followUpData)
							break;
							case 5://树蚁设计
								console.log(data)
								this.shoyiiData=data.caseAidedDesignContent
								if(data.caseAidedDesignContent&&Object.keys(data.caseAidedDesignContent).length>0&&data.caseAidedDesignContent.threeDModel.length>0){
									this.shoyiiObject={ //默认获取的是三维重建的数据
										shoyiiId:data.caseAidedDesignContent.threeDModel[0].id,////用于电子病例的3js分享
										shoyiithreemodel:data.caseAidedDesignContent.threeDModel[0].previewImage,//用于电子病历的三维数据显示,默认是第一组的
										shoyiistlId:data.caseAidedDesignContent.threeDModel[0].stlFileModelId,//stl的id，默认是第一组数据
										shoyiititle:data.caseAidedDesignContent.threeDModel[0].title,//用于电子病历的三维数据标题
										shoyiilabel:'ThreeDModel',//用于进入3js,默认是三维重建
									}
								}
							break;
							default:
								if(data.threeDModel.length!=0){
									this.electricData.electricId=data.threeDModel[0].id//用于电子病例的3js分享
									this.electricData.stlId=data.threeDModel[0].stlFileModelId//stl的id，默认是第一组数据
									this.electricData.threemodel=data.threeDModel[0]//用于电子病历的三维数据显示,默认是第一组的
									this.electricData.threeModeltitle=data.threeDModel[0].title//用于电子病历的三维数据标题
								}
							break;
						}
					}else {
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			auditconfirm(e){
				this.auditshow=false
			},
			auditcancel(e){
				this.auditshow=false
			},
			getInfor(){
				getInfor({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.accountOwner=res.data.object.accountOwner
						// 是否设置二级密码
						this.secondPwdBool=res.data.object.secondLevelPasswordSwitch
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
			// 用于获取订单相关的数据
			getCaseOrder(id){
				getCaseOrder({
					caseHistoryId:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.orderData=res.data.object
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
		computed:{
			// #ifdef MP-WEIXIN
			widthLength(){
				return 750 - this.menuButtonInfo.width*2
			},
			// #endif
			...mapState(['socketData'])
		},
		onLoad(options) {
			var auditStatus=this.checkAudit() //审核状态
			if(auditStatus){//审核状态判断
				this.auditshow=true
				return;
			}
			// #ifdef MP-WEIXIN
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(this.menuButtonInfo)
			// #endif
			console.log(options.id)
			this.id=options.id
			// 获取病例数据
			this.getData(0,options.id)
			// #ifndef H5
			//用于判断是否设置二级密码
			this.getInfor() 
			// #endif
			// 获取订单相关的数据
			this.getCaseOrder(options.id)
			this.bus.$on('electricData',(data)=>{//监听到电子病例更换的数据
				console.log(data)
				this.electricData.threemodel=data//轮播图上的三维数据
				this.electricData.threeModeltitle=data.title//轮播图上的三维数据标题
				// this.electricData.stlId=data.stlFileModelId//轮播图上的三维数据的stlid
				this.electricData.electricId=data.id//这个是3js文件的id;跟stlid要区分开
			})
			// 手术方法
			this.bus.$on('methodsData',(data)=>{//监听到手术方法更换的数据
				console.log(data)
				console.log(data.methodsId)
				this.surgical.methodsBanner=data.bannerList//轮播图上的三维数据
				this.surgicalMethodsId=data.methodsId//用于vr设备
				this.surgical.titleName=data.titleName
				this.methodJsId=data.methodJsId//用于进入3js
				switch (data.count){
					case 0:
					 this.methodsType='Matching'
					break;
					case 1:
					 this.methodsType='GuidePlate'
					break;
					case 2:
					 this.methodsType='Instrument'
					break;
					default:
					break;
				}
				// console.log(data.count)
			})
			// 手术设计
			this.bus.$on('designData',(data)=>{//监听到电子病例更换的数据
				console.log(data)
				this.surcigalDesignData.DesignBanner=data.DesignBanner//轮播图上的三维数据
				// this.surcigalDesignData.designStlId=data.designStlId
				this.surcigalDesignData.titleDesign=data.titleDesign
				this.surcigalDesignData.designId=data.designId//获取的整个导板或器械或匹配情况id
				console.log(data.count)
				switch (data.count){
					case 0:
					 this.designType='Matching'
					break;
					case 1:
					 this.designType='GuidePlate'
					break;
					case 2:
					 this.designType='Instrument'
					break;
					default:
					break;
				}
			})
			// 效果预测
			this.bus.$on('predictData',(data)=>{//监听到电子病例更换的数据
				console.log(data)
				this.predictData.casePredictbanner=data.predictData//轮播图上的三维数据
				this.predictData.predictName=data.name//轮播图上的三维数据标题
				this.predictData.predictId=data.predictId
			})	
			// 树蚁设计
			this.bus.$on('shoyiidata',(data)=>{//监听到电子病例更换的数据
				console.log(data)
				if(data.index==0){//三维文件
					this.shoyiiObject={
						shoyiiId:data.data.id,////用于电子病例的3js分享
						shoyiithreemodel:data.data.previewImage,//用于电子病历的三维数据显示,默认是第一组的
						shoyiistlId:data.data.stlFileModelId,//stl的id，默认是第一组数据
						shoyiititle:data.data.title,//用于电子病历的三维数据标题
						shoyiilabel:data.label
					}
				}else if(data.index==1){//设计
					console.log(data)
					this.shoyiiObject={
						shoyiiId:data.data.id,////用于电子病例的3js分享
						shoyiithreemodel:data.data.stlPictureUrl,//用于电子病历的三维数据显示,默认是第一组的
						shoyiistlId:data.data.stlModelIds,//stl的id，默认是第一组数据
						shoyiititle:data.data.name,//用于电子病历的三维数据标题
						shoyiilabel:data.label
					}
				}else if(data.index==2){//预测
					this.shoyiiObject={
						shoyiiId:data.data.id,////用于电子病例的3js分享
						shoyiithreemodel:data.data.stlPictureUrl,//用于电子病历的三维数据显示,默认是第一组的
						shoyiistlId:data.data.stlModelIds,//stl的id，默认是第一组数据
						shoyiititle:data.data.name,//用于电子病历的三维数据标题
						shoyiilabel:data.label
					}
				}
			})	
		},
		onBackPress(e) {
			console.log(e)
			if(e.from=='backbutton'){
				// #ifdef APP-PLUS
				var length=getCurrentPages().length-1
				var page1=getCurrentPages()[length-1].route
				console.log(page1)
				if(page1=='pages/caselist/selectDesign'){//从设计团队过来
					uni.switchTab({
						url:'/pages/caselist/case'
					})
					return true
				}else{
					uni.navigateBack({
						delta:1
					})
					return true
				}
				// #endif
			}
		}
	}
</script>

<style scoped lang="scss">
	.status-contents{
	    height: calc(var(--status-bar-height) + 88rpx); 
	}  
	.top-view{  
	    width: 100%;  
	    position: fixed;  
	    top:0;  
	}  
	.status{  
	    height:var(--status-bar-height);  
	}
	.navTitle{
		 width: 100%;  
		 position: fixed;  
		 top: var(--status-bar-height);  
		 height: 88rpx;padding: 0 20rpx;
		 display: flex;align-items: center;
	}
	.left{
		font-size: 30rpx;
		display: flex;
		align-items: center;
		flex:1;
		.title{
			color: #000000;
			font-family: PingFang-SC-Bold;
			font-weight: bold;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}
	}
	.btnTitle{
		color: #000000;
		font-family: PingFang-SC-Regular;
	}
	.caseAll{
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.wrap {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.swiper-box {
		flex: 1;
	}
	.swiper-item {
		height: 100%;
	}
	.slot-content{
		padding: 60rpx 40rpx;
	}
	.radioGroup{
		padding-bottom: 10rpx;
		border-bottom: 1px solid #EEEEEE;
	}
	.radioItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
		line-height: 56rpx;
	}
	.switch{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 20rpx;
	}
	.priceTip{
		padding-top: 30rpx;
		color: #8F8F8F;
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
	.checkbox{
		line-height: 52rpx;
		color: #8F8F8F;
		font-size: 24rpx;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.checkbox-group{
		width: 100%;
		display: flex;
	}
	.checkItem{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.groups{
		padding: 40rpx;
		padding-bottom: 0;
		.modeltitle{
			text-align: center;
			color: #000000;
			font-weight: bold;
			font-family: PingFang-SC-Bold;
			font-size: 30rpx;
		}
		.services{
			border-bottom: 1px solid #EEEEEE;
			.label{
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 80rpx;
				font-size: 30rpx;
				color: #000000;
			}
			.serviceradio{
				// padding: 20rpx 0;
				max-height: 600rpx;
				overflow-y: scroll;
				.items{
					padding: 20rpx 0;
				}
				.servicetitle{
					display: flex;
					justify-content: space-between;align-items: center;
					color: #333333;
					font-size: 28rpx;
					line-height: 40rpx;
				}
				.type{
					font-size: 26rpx;
					color: #666666;
				}
			}
			
		}
		
	}
</style>
