<template>
	<view>
		<movable-area style="width: 100%;height: 100%;">
		<u-navbar :is-back="false" :background="$store.getters.isDark?darkbackground:background">
			<view class="slot-wrap">
				<view class="leftTitle dark-font">
					<text>首页</text>
				</view>
				<text class="iconfont iconxiaoxi dark-font" @click="notice"></text>
			</view>
		</u-navbar>
		<!-- <navigator url="/pages/PersonalInfor/auditInfor" hover-class="navigator-hover">
			<button type="default">跳转到新页面</button>
		</navigator> -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- 公众号的关注，只适用于扫小程序码时展示 -->
		<official-account></official-account>
		<!-- #endif -->
		<!-- banner -->  
		<view class="banner">
			<u-swiper :list="bannerList" name="image" height='390' img-mode='aspectFit' :bg-color="$store.getters.isDark?'#3A3A3A':'#ffffff'"></u-swiper>
		</view>
		<view class="Index dark-page">
			<!-- index-menu -->
			<view class="mulityMenu dark-page">
				<view :animation="animationData" class="indexMenu dark-block">
					<Index-menu></Index-menu>
				</view>
			</view>
			<!-- 病历管理 -->
			<module-title title="服务进程" index='0' style="padding-top: 0;"></module-title>
			<view class="casecontent dark-block">
				<view class="segmentedMenu casemenu dark-page" style="padding: 0 60rpx;">
					<u-tabs-swiper class='' ref="tabs" :list="items" :current='casecurrent' @change="menuClick" gutter='10' font-size='28' 
					:active-item-style='$store.getters.isDark?darkactiveItemStyle:activeItemStyle' height='60' 
					:bg-color="$store.getters.isDark?'#1B1C1E':''"
					active-color='#69CDFF' inactive-color="#8F8F8F" 
					:is-scroll="false"></u-tabs-swiper>
				</view>
				<view v-if="token" class="dark-block">
					<scroll-view class="contentlist" scroll-x="true" v-if="caselist.length==0?false:true">
						<IndexCaselist v-for="(item,index) in caselist" :key='index' :casecode="item.caseHistoryNo" :Uname='item.name' :Caseid='item.caseHistoryId' :imgUrl='item.previewImage'></IndexCaselist>
					</scroll-view>
					<scroll-view class="contentlist" scroll-x="true" v-else>
						<u-tag text="暂无数据" mode="light" color="#ffffff" border-color='#86B0D4' bg-color='#86B0D4'/>
					</scroll-view>
				</view>
				<view class="loginStyle" v-else>
					<u-tag @click="login" text="点击登录,查看更多数据" mode="light" color="#ffffff" border-color='#86B0D4' bg-color='#86B0D4'/>
				</view>
			</view>	
			<!-- 设备管理 -->
			<module-title title="设备管理" index='4' style="padding-top: 50rpx;"></module-title>
			<view class="" style="display: flex;" v-if="token">
			    <scroll-view v-if="deviceData.length>0" scroll-x="true" lower-threshold='10' style="white-space: nowrap;width: 100%;
			     margin-top: 20rpx;
			     font-size: 24rpx;
			     color: #8F8F8F;">
					<view v-for="(item,index) in deviceData" :key='item.id' :style="{marginRight:deviceData.length-1==index?'0rpx':'20rpx',width:deviceFilter}" 
					 @click="enterDevice(item.id,item.name)" hover-class="bgColor"  
					 style="padding: 36rpx 20rpx;text-align: left;
					 background-color: #FFFFFF;
					 display: inline-block;" class="dark-block">
						  <view class="dark-font" style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;margin-bottom: 40rpx;font-size: 28rpx;color: #000000;font-weight: bold;">
							<text>{{item.name}}</text>
						  </view>
						  <view class="" style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">
							<text>设备数量：</text>
							<text v-if="item.devices">{{item.devices.length}}</text>
							<text v-else>0</text>
						  </view>
					</view>
			    </scroll-view>
				<scroll-view class="contentlist dark-block" scroll-x="true" v-else>
					<u-tag text="暂无数据" mode="light" color="#ffffff" border-color='#86B0D4' bg-color='#86B0D4'/>
				</scroll-view>
			</view>
		   <view class="devicelogin dark-block" v-else>
				<u-tag @click="login" text="点击登录,查看更多数据" mode="light" color="#ffffff" border-color='#86B0D4' bg-color='#86B0D4'/>
		   </view>
			<view class="Newstitle" style="display: flex;justify-content: space-between;margin: 50rpx 0 30rpx;">
				<view class="left" style="">
					<text @click="newsMore(0)" :class="NewstabIndex===0?'newClass':'oldClass'">树蚁案例</text>
					<text style="margin: 0 20rpx;color: #666666;">|</text>
					<text @click="newsMore(1)" :class="NewstabIndex===1?'newClass':'oldClass'">树蚁说明</text>
				</view>
				<view class="right" @click="newsMore(2)">
					<text>更多</text>
				</view>  
			</view>
			<view class="newsContent dark-block" style="background-color: #FFFFFF;padding: 15rpx 0;">
				<view hover-class="darkbgColor bgColor" v-for="(item,index) in newsData[NewstabIndex].data" :key='item.newsId' @click="enterNews(item)" style="padding:15rpx 18rpx;display: flex;justify-content: space-between;align-items: center;">
					<view class="left" style="font-size: 24rpx;color: #8F8F8F;flex: 1;margin-right: 20rpx;">
						<view class="title" style="font-weight: bold;font-size: 28rpx;">
							<text style="text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 1;
								overflow: hidden;">{{item.title}}</text>
						</view>
						<view class="content" style="margin: 20rpx 0;text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								overflow: hidden;">
							<text>{{item.synopsis}}</text>
						</view>
						<view class="time" style="font-size: 20rpx;">
							<text>{{item.newstime|timeStamp}}</text>
						</view>
					</view>
					<view class="right dark-border-none" style="border: 1px solid #F8F8F8;">
						<image :src="item.pictureUrl?item.pictureUrl:'/static/image/shoyiilogo.png'" mode="scaleToFill" style="width: 150rpx;height: 150rpx;"></image>
					</view>
				</view>
				<view @click="newsMore(3)" class="btn dark-top-border" style="height: 60rpx;line-height: 60rpx;text-align: center;color: #8F8F8F;border-top: 1px solid #F8F8F8;">
					<text>更多</text>
				</view>
			</view>
		</view>
		<view class="chat" v-if="token" style="position: fixed;bottom: 20%;right: 20%;">
			<movable-view direction='all' scale scale-max='2' style="opacity: .8;">
				<view @click="Enterchat" class="chatIcon" style="position: relative;display: flex;align-items: center;justify-content: center;width: 50px;height: 50px;border-radius: 50%;background-color: #007AFF;">
					<u-badge :is-dot="true" type="error" v-if="isDot"></u-badge>
					<u-icon color="#fff" size="48" name="chat"></u-icon>
				</view>
			</movable-view>
		</view>
		</movable-area>
		<!-- #ifdef APP-PLUS -->
		<view class="ad-view">
			<ad adpid="1542457411"></ad>
		</view>
		<!-- #endif -->
		<!-- 网络错误 -->
		<u-no-network></u-no-network>
		<u-modal v-model="iOSshow" :show-cancel-button="true" confirm-text="我同意" cancel-text="不同意"
				title="树蚁医疗隐私政策" @cancel="iOScancel" @confirm="iOSconfirm"
				:title-style="$store.getters.isDark?titleStyle:{}"
			>
				<view class="u-update-content dark-block">
					<text>树蚁医疗重视您的个人隐私信息保护。请你务必审慎阅读、充分理解隐私政策各条款，包括但不限于：为了更好的向你提供服务，我们需要收集你的设备标识、操作日志等信息用于分析、优化应用性能。
					你可阅读  <text style="color: #86B0D4;" @click="enterPrivacy">《隐私政策》</text> 了解详细信息。如果你同意，请点击下面按钮开始接受我们的服务。</text>
				</view>
		</u-modal>
	</view>
</template>
<script>
	import {getBanner} from '@/utill/api/Index/banner.js'
	import {getSurgical,getSurgicalparam} from '@/utill/api/surgical/getSurgical.js' 
	import {getCaselist} from '@/utill/api/case/getCaselist.js' 
	import {querydevice} from '@/utill/api/DeviceGroup/querydevice.js'
	import {getPublicModel} from '@/utill/api/model/getModel.js'
	import {getInfor} from '@/utill/api/personalInfor/getInfor.js'
	import {getNewsList} from '@/utill/api/news/news.js'
	import surgicalList from '@/components/surgical/surgicalList.vue'
	import modellist from '@/components/model/modellist.vue'
	import classifyModel from '@/components/model/classifyModel.vue'
	import IndexMenu from './components/IndexMenu.vue'
	import moduleTitle from './components/moduletitle.vue'
	import IndexCaselist from './components/IndexCaselist.vue'
	import store from './components/store.vue'
	import {mapGetters,mapMutations,mapState} from 'vuex' 
	import {myRequest} from '@/utill/request.js'
	// iOS提示框
	import {ifAgree} from '@/utill/tools/PrompTtip.js'
	import {reLaunch} from '@/utill/tools/switchtheme.js'
	import {aemdTabbar} from '@/utill/tools/checkdark.js'
	var dbclickTimer=null;
	var animationTimer=null;
	var stopTimer=null;
	export default {
		components:{
			surgicalList,
			modellist,
			classifyModel,
			IndexMenu,
			moduleTitle,
			IndexCaselist,
			store
		},
		data() {
			return { 
				iOSshow:false,
				accountOwner:'',
				userId:uni.getStorageSync('doctorId'),
				background: {
					backgroundColor: '#ffffff',
				},
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
				titleStyle:{
					backgroundColor: '#3A3A3A',
					color:'#fff'
				},
				publicData:[],
				MyModel:1,//用于区分我的模型库和公开模型库进入详情页的不同
				// banner
				bannerList:[],//轮播图
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "10rpx"
				},
				surgicalListAll:[],//全部的手术方法数据
				shoyiiStore:[//树蚁商店
					{url:'/static/image/model.png',title:'UNVEIL UNVEIL UNVEIL AND EXP',amount:'￥5,699'},
					{url:'/static/image/shoyiilogo.png',title:'UNVEIL AND EXP',amount:'￥5,699'},
					{url:'/static/image/wechat.png',title:'UNVEIL AND EXP',amount:'￥5,699'},
				],
				// 刷新动画
				animationData: {},
				// 病例menu
				items: [{
						name: '我的病例'
					}, {
						name: '待确定'
					}, {
						name: '未付款',
					}],
				// 手术方法库menu
				surgicalitems:['脊柱','上肢','下肢','骨盆'],
				current: 0,//默认手术方法库为脊柱
				// 病例相关数据
				casecurrent:0,
				caselist:[],//全部病例数据
				activeItemStyle:{
					color:'#000',
					fontSize:'30rpx'
				},
				darkactiveItemStyle:{
					color:"#fff",
					fontSize:'30rpx'
				},
				// 设备数据
				deviceData:[],
				token:'',//token，用于判断是否需要显示登陆btn
				size:2,//手术方法的每页数据
				total:'',//手术方法的总数
				typeicon:'arrowdown',
				isDot:false,
				tabClick:false,
				boolean:true,
				// 新闻模块
				NewstabIndex:0,
				newsData:[
					{data:[],page:1,Totalpage:null},//案例
					{data:[],page:1,Totalpage:null}//指南
				],
			}
		},
		watch:{
			size(newValue,oldValue){
				if(newValue==4){
					this.typeicon='arrowup'
				}else{
					this.typeicon='arrowdown'
				}
			},
			'socketData': function(val) {
				if(val=='head'){//心跳回复
					return
				}
				this.isDot=true
				uni.showTabBarRedDot({ //红点
				   index:0,
				   complete(e) {
						console.log(e)
				   }
				})
			},
		},
		computed:{
			deviceFilter(){
			    if(this.deviceData.length==1){
			      return '100%'
			    }else if(this.deviceData.length==2){
			      return '50%'
			    }else{
			      return '216rpx'
			    }
			},
			...mapGetters (['appTheme','DataStatus']),
			...mapState(['socketData','hasLogin'])
		},
		methods: {
			// 同意隐私政策
			iOSconfirm(){
				plus.runtime.agreePrivacy();
				this.iOSshow=false
				//ios中用于同意之后的推送注册
				plus.push.getClientInfoAsync(function(info){
				    console.log('Success');
				    // console.log(JSON.stringify(info));
				  }, function(err){
				    console.log('Failed');
				    console.log(JSON.stringify(err));
				  }) 
			},
			iOScancel(){
				this.iOSshow=false
				plus.runtime.disagreePrivacy();
				// 推出应用
				// plus.ios.import('UIApplication').sharedApplication().performSelector('exit');
			},
			enterPrivacy(){
				uni.navigateTo({
					url:'/pages/aboutShoyii/privacyPolicy'
				})
			}, 
			notice(){
				uni.navigateTo({
					url:'/pages/notice/notice'
				})
			},
			Enterchat(){
				uni.hideTabBarRedDot({
					index:0,
					complete(e) {
						console.log('红点消失')
					}
				})
				this.isDot=false
				uni.navigateTo({
					url:'/pages/shoyiiChat/index'
				})
			},
			// 获取轮播图
			getBannerList(){
				getBanner({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.bannerList=res.data.object
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 获取公开模型
			getPublicModel(){
				getPublicModel({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.publicData=res.data.object.list.slice(0,1)
					}
				}).catch(err=>{
					uni.showToast({
						title:'err',
						icon:'none'
					})
				})
			},
			// 病例menu
			menuClick(e){
				console.log(e)
				if (this.casecurrent !== e) {
					this.casecurrent = e;
				}
				console.log(this.casecurrent)//默认是0 
				if(this.casecurrent==0){//我的病例
					this.getCaseData('ZZ',"")
				}else if(this.casecurrent==1){//待确定
					this.getCaseData('ALL','701')//先默认是已发布
				}else if(this.casecurrent==2){//未付款
					this.getCaseData('ALL','901')	
				}
			},
			login(){//登录页面
				uni.navigateTo({
					url:'/pages/login/tellogin?pages='+'/pages/index/index'+'&pagetype='+1,
					animationType:'pop-in'
				})
			},
			// 设备管理
			getdevice(){
				querydevice({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.deviceData=res.data.object
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				})
			},
			enterDevice(id,name){
				uni.navigateTo({
					url:'/pages/deviceManage/groupDevices?groupId='+id+'&Uname='+name
				})
			},
			surgicalMenu(){
				if(this.current==0){//脊柱
					this.getSurcialData(14)
				}else if(this.current==1){//上肢
					this.getSurcialData(15)
				}else if(this.current==2){//下肢
					this.getSurcialData(16)
				}else if(this.current==3){//骨盆
					this.getSurcialData(368)
				}
			},
			StrenchMore(){
				if(this.typeicon=='arrowdown'){//展开
					if(this.size<this.total&&this.size<4){
						this.size+=2
						console.log(this.size)
						this.surgicalMenu()
					}
				}else{//收回
					this.size=2
					this.surgicalMenu()
				}
			},
			// 更多menu
			more(){//设备管理
				uni.navigateTo({
					url:'/pages/deviceManage/deviceManage'
				})
			},
			// 手术方法库menu
			onClickItem(e){
				this.size=2
				this.typeicon='arrowdown'
				// 样式调整
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
				this.surgicalMenu()
			},
			// 获取手术方法数据
			getSurcialData(id){
				console.log(id)
				// #ifdef APP-PLUS||H5
				var _this=this
				getSurgical({
					start:1,
					length:this.size,
					surgicalPlanTypeId:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.total=res.data.object.pages
						res.data.object.list.filter(item=>{
							if(!item.doctor){
								item.doctor.avatarLinks=uni.getStorageSync('uploadLogo')
							}
							if(!item.previewList[0]){
								item.previewList.push({
									fileDownloadUrl:uni.getStorageSync('uploadLogo')
								})
							}
						})
						this.surgicalListAll=res.data.object.list
						console.log(this.surgicalListAll)
					}else{
						uni.hideLoading()//关闭加载提示
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				})
				// #endif
				// #ifdef MP-WEIXIN
				var _this=this
				getSurgicalparam({
					start:1,
					length:this.size,
					surgicalPlanTypeId:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.total=res.data.object.total
						res.data.object.list.filter(item=>{
							if(!item.doctor){
								item.doctor.avatarLinks=uni.getStorageSync('uploadLogo')
							}
							if(!item.previewList[0]){
								item.previewList.push({
									fileDownloadUrl:uni.getStorageSync('uploadLogo')
								})
							}
						})
						this.surgicalListAll=res.data.object.list
						console.log(this.surgicalListAll)
					}else if(res.data.code==2){
						
					}else{
						uni.hideLoading()//关闭加载提示
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				})
				// #endif
			},
			// 获取病例数据
			getCaseData(identify,status){
				console.log(identify,status)
				getCaselist({
					status:'ALL',
					identity:identify,
					type:'ALL',
					page:1,
					size:6,
					otherStatus:status
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						res.data.object.list.filter(item=>{
							if(!item.previewImage){
								item.previewImage=uni.getStorageSync('uploadLogo')
							}
							if(!item.name||item.name==''){
								item.name='未填写'
							}
						})
						this.caselist=res.data.object.list
						console.log(this.caselist)
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				})
			},
			// 查询所有的模型数据
			AllPublicModel(){
				uni.navigateTo({
					url:'/pages/publicModel/publicModel'
				})
			},
			newsMore(index){
				if(index==0){//案例
					this.NewstabIndex=0
					this.newsData[0].page=1
					this.getNews('4',1)
				}else if(index==1){//说明
					this.NewstabIndex=1
					this.newsData[1].page=1
					this.getNews('1',1)
				}else if(index==2){//进入列表
					uni.navigateTo({
						url:'/pages/news/news?id='+''
					})
					return;
				}else if(index==3){//展开更多
					if(this.NewstabIndex==0){
						console.log(this.newsData[0].page)
						console.log(this.newsData[0].Totalpage)
						if(this.newsData[0].page<=this.newsData[0].Totalpage){
							this.getNews('4',this.newsData[0].page,'mark')
						}else{
							uni.showToast({
								title:'无更多数据',
								icon:'none'
							})
						}
					}else if(this.NewstabIndex==1){
						console.log(this.newsData[1].page)
						console.log(this.newsData[1].Totalpage)
						if(this.newsData[1].page<=this.newsData[1].Totalpage){
							this.getNews('1',this.newsData[1].page,'mark')
						}else{
							uni.showToast({
								title:'无更多数据',
								icon:'none'
							})
						}
					}
				}
			},
			getNews(newsId,page,mark){
				getNewsList({
					page:page,
					size:4,
					categoryId:newsId
				}).then(res=>{
					if(res.data.code==0){
						if(newsId=='4'){//案例
							this.newsData[0].page++ //页数添加
							if(mark){
								this.newsData[0].data=this.newsData[0].data.concat(res.data.object.list)
							}else{
								this.newsData[0].data=res.data.object.list
							}
							this.newsData[0].Totalpage=res.data.object.pages //总页数
						}else if(newsId=='1'){//说明
							this.newsData[1].page++//页数添加\
							if(mark){
								this.newsData[1].data=this.newsData[1].data.concat(res.data.object.list)
							}else{
								this.newsData[1].data=res.data.object.list
							}
							this.newsData[1].Totalpage=res.data.object.pages// 总页数
						}
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none'
						})
					}
				}).catch(err=>{
					uni.hideLoading()
					console.log(err)
				})
			},
			enterNews(data){
				if(data.caseLink){
					// #ifdef APP-PLUS||MP-WEIXIN
					uni.navigateTo({
						url:'/pages/ThreejsShow/ThreejsShow?baseUrl='+encodeURIComponent(data.caseLink),
						animationType:'pop-in'
					})
					// #endif
					// #ifdef H5
					location.href=data.caseLink
					// #endif
				}else{
					uni.navigateTo({
						url:'/pages/news/newsDetail?id='+data.newsId,
						animationType:'pop-in'
					})
				}
			},
			// 刷新页面的动画
			reflesh(){
				var animation = uni.createAnimation({
					duration: 1000,
					timingFunction: 'linear',
				})
				this.animation = animation
				animation.opacity(0).translateY(-100).step({ duration: 1000 })
				this.animationData = animation.export()
				animationTimer=setTimeout(function() {
				  animation.opacity(1).translateY(0).step()
				  this.animationData = animation.export()
				}.bind(this), 1000)
			 },
		},
		// 初始化加载数据
		onLoad(options) {
			// #ifdef APP-PLUS
			if(plus.os.name=='iOS'){//ios要弹出隐私政策提示
				console.log(ifAgree())
				if(!ifAgree()){//false,隐私政策未同意
					this.iOSshow=true
				}else{//false，隐私政策已经同意,不用弹出隐私政策框
					this.iOSshow=false
				}
			}
			// #endif
			// 首页连接socket
			if(!this.$store.state.socketTask){
				if(!this.$store.state.is_open_socket&&this.userId){
					this.$store.state.timerheart&&clearInterval(this.$store.state.timerheart)
					this.$store.dispatch('WEBSOCKET_INIT',this.userId) //初始化，创建socket
				} 
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			aemdTabbar()//暗黑设置
			// #endif
			this.token=uni.getStorageSync('token')
			console.log(this.DataStatus)
			if(uni.getStorageSync('token')){//token存在才获取接口
				getInfor({}).then(res=>{//进行token过期时间校验
					console.log(res)
					if(res.data.code==0){//表明token没有过期，可以调用接口
						this.accountOwner=res.data.object.accountOwner
						uni.setStorageSync('auditstatus',res.data.object.auditStatus)
						if(this.caselist.length==0||this.DataStatus){//默认是未发布的病例为0时，再加载数据
							this.getCaseData('ZZ','')//默认是我的（主治）病例数据
						}
						if(this.deviceData.length==0||this.DataStatus){
							this.getdevice()
						}
					}else{
						// 这块清除缓存不要清除掉引导页的缓存
						 uni.removeStorageSync('doctorId');
						 uni.removeStorageSync('token');
						 uni.removeStorageSync('auditstatus');
						 uni.removeStorageSync('openid');
						uni.showModal({
							title:'登录信息已失效',
							content:"是否前往登录",
							confirmText:'登录',
							cancelText:'稍后登录',
							confirmColor:'#86B0D4',
							success(e){
								if (e.confirm) {
									uni.navigateTo({//进入登陆页面
										url:'/pages/login/tellogin'
									})
								} else if (e.cancel) {//取消登陆后，清除所有缓存
								}
							}
						})
					}
				})			
			} 
			if(this.bannerList.length==0||this.DataStatus){
				this.getBannerList()
			}
		},
		onReachBottom(){
			// 获取新闻
			if(this.newsData[0].data.length==0){
				this.getNews('4',1) //默认是案例
			}
		},
		// 刷新加载数据
		onPullDownRefresh (){
			console.log('refresh');
			this.reflesh()//动画效果
			this.getCaseData('ZZ','')
			// this.getSurcialData(14)
			this.getdevice()
			this.getBannerList()
			stopTimer=setTimeout(function () {
				uni.stopPullDownRefresh();//停止刷新，这边可以进行数据的更新
			}, 1000);
		},
		// 分享朋友
		// #ifdef MP-WEIXIN
		onShareAppMessage: function (res) {
		    if (res.from === 'button') {//定义了share 才是button
		      // 来自页面内转发按钮
			  // return {
				 //  title: '自定义btn分享',
				 //  path: '/pages/index/index'
			  // }
		    }else{//menu为原生胶囊转发
				return {
				  title: 'ShoYii',
				  path: '/pages/index/index'
				}
			}
		},
		// #endif
		// 双击tabbar
		onTabItemTap(e) { // tab 点击时执行，此处直接接收单击事件 
			console.log(e) 
			if (this.tabClick) { 
				// 200ms 内再次点击 数据处理
				this.reflesh()
			} 
			this.tabClick = true 
			dbclickTimer=setTimeout(() => { 
				this.tabClick = false // 200ms 内没有第二次点击，就当作单击 
			}, 200) 
		},
		onUnload() {
			clearTimeout(dbclickTimer)
			clearTimeout(animationTimer)
			clearTimeout(stopTimer)
		}
	}
</script>
<style scoped lang="scss">
	.newClass{
		font-size: 30rpx;
		font-weight: bold;
	}
	.oldClass{
		font-size: 28rpx;
		color: #666;
	}
	.u-full-content {
		background-color: #00C777;
	}
	.u-update-content {
		font-size: 26rpx;
		line-height: 1.7;
		padding: 30rpx;
	}
	.slot-wrap{
		padding: 0 30rpx;width: 100%;display: flex;align-items: center;justify-content: space-between;
		.leftTitle{
			font-size: 36rpx;font-weight: bold;font-family: PingFang-SC-Bold;
		}
		.iconxiaoxi{
			font-size: 40rpx;
		}
		.u-line-1 {
			display: none;
		}
	}
	/* 首页 */
	.Index{
		padding: 0 30rpx 32rpx;
		/* banner */
		.banner{
			border: 1px solid #EEEEEE;
		}
		.mulityMenu{
			height: 304rpx;
			background-color: #F8F8F8;
			position: relative;
		}
		/* index-menu */
		.indexMenu{
			padding: 16rpx 24rpx;
			background-color: #FFFFFF;
			border-radius: 29rpx;
			height: 304rpx;
			position: absolute;left: 0;right: 0;bottom: 52rpx;
		}	
		/* 病例管理 */
		.casecontent{
			background-color: #FFFFFF;
			padding: 30rpx 18rpx;
			border-radius: 29rpx;
			.contentlist{
				white-space: nowrap;
				width: 100%;
				margin-top: 20rpx;
				text-align: center;
			}
			.casemenu{
				width: auto;
			}
		}
		/* 登录btn */
		.loginStyle{
			text-align: center;
			padding-top: 20rpx;
		}
		/* 公共部分 */
		.segmentedMenu{
			width: 100%;
			background-color: #FFFFFF;
			border-top-right-radius: 29rpx;
			border-top-left-radius: 29rpx;
		}
		.segmentedMenu /deep/ .segmented-control__text{
			font-size: 28rpx;
			font-family: PingFang-SC-Regular;
		}
		.segmentedMenu /deep/ .segmented-control--button{
			border-radius: 10rpx!important;
		}
		.segmentedMenu /deep/ .segmented-control__item--text{
			border-bottom-width:12rpx!important;
		}
		.devicelogin{
			display: flex;
			flex-wrap: wrap;
			background-color: #FFFFFF;
			border-radius: 15rpx;
			justify-content: center;
			padding: 20rpx 0;
		}
		/* 手术方法库 */
		.surgical{
			padding: 20rpx 30rpx 0;
			width: auto;
		}
		.StrenchMore{
			background: #FFFFFF;
			text-align: center;
			padding: 10rpx 0;
			border-bottom-left-radius: 29rpx;
			border-bottom-right-radius: 29rpx;
		}
		.classes{
			display: flex;
			flex-wrap: wrap;
			background-color: #FFFFFF;
			padding-top: 24rpx;
			border-radius: 15rpx;
			justify-content: center;
		}
		/* 设备管理 */
		.deviceData{
			background: #FFFFFF;
			border-radius: 29rpx;
			min-height: 125rpx;
			margin-top: 40rpx;
			.deviceTitle{
				display: flex;
				justify-content: space-between;
				color: #000000;
				font-size: 30rpx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				padding: 30rpx 20rpx;
				border-bottom: 1px solid #F8F8F8;
			}
			.deviceTitle uni-text:nth-child(2){
				font-size: 24rpx;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
			}
			.deviceList{
				padding: 30rpx 20rpx;
				border-bottom: 1px solid #F8F8F8;
			}
			/* #ifdef MP-WEIXIN */
			.deviceWeixin{
				padding-left:20rpx;
			}
			.deviceWeixin /deep/ .u-content__showmore-wrap__readmore-btn{
				display: none;
			}
			/* #endif */
		}
		/* 模型 */
		.checkAllModel{
			padding: 20rpx 0;
			text-align: center;
			background-color: #FFFFFF;
			margin-top: 30rpx;
		}
		.publicmodel{
			background-color: #FFFFFF;
			justify-content: center;
			display: flex;
			flex-wrap: wrap;
			border-radius: 29rpx;
		}
	}
</style>
