<template>
	<view class="sugicaldetail dark-page">
		<!-- #ifdef H5 -->
		<u-navbar :is-back="false" :title="Navtitle" :background="background" :title-bold='true' title-color='#000000' title-width='620'>
		</u-navbar>
		<!-- #endif -->
		<!-- #ifdef APP-PLUS||MP-WEIXIN -->
		<u-navbar :is-back="true" :title="Navtitle" :background="$store.getters.isDark?darkbackground:background" :title-bold='true' title-color="$store.getters.isDark?'#fff':'#000000'" title-width='620'>
		</u-navbar>
		<!-- #endif -->
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<!-- 顶部轮播图及title -->
			<threeModelPic :arrData='arrData' :titleName="titleName" :bannerList='bannerList' @threeSelect='confirmSelect'></threeModelPic>
			<view class="section">
				<!-- 医生信息 -->
				<surgicalDocInfor :docName='docName' :doctorId='doctorId' :doctorInfor='doctorInfor' :Time='createTime'></surgicalDocInfor>
				<!-- 十二项数据 -->
				<twelveItems :arrData='arrData'></twelveItems>
				<!-- 成功按钮 -->
				<successCase :successData='successData'></successCase>
				<!-- 树蚁设计 -->
				<shoyiiDesign :shoyiiData='shoyiiData'></shoyiiDesign>
			</view>
		</scroll-view>
		<view class="" style="height: 110rpx;width: 100%;">
			
		</view>
		<!-- 底部 btn -->
		<surgicalBottom style="width: 100%;position: fixed;bottom: 0;" @Jsshow='Jsshow' @vrshow='vrshow' @share='share'></surgicalBottom>
		<!-- popUp 图形选择 -->
		<uni-popup id="popupShare" ref="popupShare" type="share">
			<view class="poplist dark-block">
				<view class="pop_header dark-white-content">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type='text' activeColor="#86B0D4"></uni-segmented-control>
				</view>
				<view class="content">
					<view v-show="current === 0">
						<scroll-view scroll-y="true" class="classifyItem dark-font">
							<view class="content_item" v-for="(item,index) in Alllist" :key='index'>
								<text @click="changePicAll(item.id)" :class="item.id==boolIndexAll?'textColor':''">{{item.name}}</text>
							</view>
						</scroll-view>
					</view>
					<view v-show="current === 1">
						<scroll-view scroll-y="true" class="classifyItem dark-font">
							<view class="content_item" v-for="(item,index) in Guidelist" :key='index'>
								<text @click="changePicGuide(item.id)" :class="item.id==boolIndexGuide?'textColor':''">{{item.name}}</text>
							</view>
						</scroll-view>
					</view>
					<view v-show="current === 2">
						<scroll-view scroll-y="true" class="classifyItem dark-font">
							<view class="content_item" v-for="(item,index) in Instrumentlist" :key='index'>
								<text @click="changePicInstru(item.id)" :class="item.id==boolIndexInstru?'textColor':''">{{item.name}}</text>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 审核状态的弹窗 -->
		<auditStatus :auditshow='auditshow' @auditconfirm="auditconfirm" @auditcancel='auditcancel'></auditStatus>		
		<!-- vr弹窗显示 -->
		<vr-show ref='SonVrshow' :deviceGroup='deviceGroup' :threeDmodelId='threeModelId.toString()' :threeDmodelName='threeModelName'></vr-show>
		<!-- 微信的分享 popup -->
		<wechat-share ref='sonWechatShare' @shareWeixin='shareWeixin' @shareFriend='shareFriend' @cancelshare='cancelshare'></wechat-share>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
	import {getSurgicalDetail,getSuccessCase,getSurgicalDetailParam,getShoyiiList} from '@/utill/api/surgical/getSurgical.js'
	import {querydevice} from '@/utill/api/DeviceGroup/querydevice.js'
	import surgicalDocInfor from './components/surgicalDocInfor.vue'
	import twelveItems from '@/components/surgical/twelveItems.vue'
	import surgicalBottom from './components/surgicalBottom.vue'
	import threeModelPic from './components/threeModelPic.vue'
	import successCase from './components/successCase.vue'
	import shoyiiDesign from './components/shoyiiDesign.vue'
	export default{
		components:{
			surgicalDocInfor,
			twelveItems,
			surgicalBottom,
			// 成功案例
			successCase,
			shoyiiDesign,
			threeModelPic
		},
		data(){
			return{
				background: {
					backgroundColor: '#ffffff',
				},
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
				successData:[],//成功案例
				shoyiiData:[],//树蚁设计
				Navtitle:'方法库',
				// 医生信息
				docName:'',//医生名字
				doctorInfor:{},//医生信息（包含头像，科室，医院）
				createTime:null,//时间
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				current:0,
				items: ['匹配情况','导板','器械'],
				boolIndexAll:0,
				boolIndexGuide:0,
				boolIndexInstru:0,
				bannerList:[],
				Alllist:[],
				Guidelist:[],
				Instrumentlist:[],
				arrData:{},
				url:'',//3js路径
				stlId:'',//stl的id
				titleName:'',//进入3js的title
				deviceGroup:[],
				groupId:'',//选中的组别id
				value:'',
				threeModelId:'',//用于vr设备的选择
				threeModelName:'',//用于vr设备的name
				auditshow:false,//审核状态的展示
				pageUrl:'',//页面路由
				paramter:'',//页面参数
				doctorId:null,//医生id
				shoyiiDesignPages:null
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
				// #ifdef APP-PLUS || MP-WEIXIN
					uni.navigateBack({
						delta:1
					})
				// #endif
			},
			share(){
				 // #ifdef APP-PLUS
				 this.$refs.sonWechatShare.open()
				 let curRoute  = this.$mp.page.route;
				 console.log(curRoute)
				 console.log(this.$mp.page.options)
				 this.pageUrl=curRoute
				 this.paramter=this.$mp.page.options.id
				 console.log(this.pageUrl)
				 console.log(this.paramter)
				 // #endif
				 if(!this.arrData.surgicalPlanName){
				 	this.arrData.surgicalPlanName='方法库详情'
				 }
				 if(!this.titleName){
				 	this.titleName='方法库'
				 }
				 if(!this.bannerList[0]){
				 	this.bannerList[0]=uni.getStorageSync('uploadLogo')
				 }
				 console.log(this. bannerList[0])
			},
			cancelshare(){
				 this.$refs.sonWechatShare.close()
			},
			shareWeixin(){
				console.log(this.pageUrl)
				console.log(this.paramter)
				console.log(this.titleName)//三维模型的名称
				console.log(this.arrData.surgicalPlanName)//手术方法库的名称
				// console.log(this.$JslineUrl)
				// console.log(this.$JslineUrl+'&userType=D'+'&token='+'&modelType=手术方法库'+'&titlename='+this.arrData.surgicalPlanName+'&fileId='+this.stlId)
				// #ifdef APP-PLUS
				uni.share({
					provider:'weixin',
					title:this.arrData.surgicalPlanName,
					type:0,
					// href: this.$JslineUrl+'&userType=D'+'&token='+'&modelType=手术方法库'+'&titlename='+this.arrData.surgicalPlanName+'&fileId='+this.stlId,
					href: this.$onlineUrl+this.pageUrl+'?id='+this.paramter,
					summary:this.titleName,
					scene:'WXSceneSession',
					imageUrl: this.bannerList[0],
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
			shareFriend(){
				// #ifdef APP-PLUS
					uni.share({
						provider:'weixin',
						title:this.arrData.surgicalPlanName,
						type:0,
						href: this.$onlineUrl+this.pageUrl+'?id='+this.paramter,
						// href: this.$JslineUrl+'&userType=D'+'&token='+'&modelType=手术方法库'+'&titlename='+this.arrData.surgicalPlanName+'&fileId='+this.stlId,
						summary:this.titleName,
						scene:'WXSenceTimeline',
						imageUrl: this.bannerList[0],
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
			// vr展示
			vrshow(){
				console.log(this.threeModelId)
				if(!this.threeModelId){
					 uni.showToast({
					 	title:'无相关文件'
					 })
					 return;
				}
				// 查询所有的设备组
				querydevice({}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.deviceGroup=res.data.object
						this.$refs.SonVrshow.open()//调用子组件的打开方法，props传值，点击mask时会报错（除非关闭点击遮盖层关闭popup）
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
			// 三维显示
			Jsshow(){ 
				console.log(this.stlId)
				if(!this.stlId){
					 uni.showToast({
					 	title:'无相关文件'
					 })
					 return;
				}
				var baseUrl=this.$JslineUrl+'&userType=D'+'&token='+'&modelType='+'&titlename='+this.titleName+'&fileId='+this.stlId
				var url=encodeURIComponent(baseUrl)
				uni.navigateTo({
					url:'/pages/ThreejsShow/ThreejsShow?baseUrl='+url,
					animationType:'pop-in'
				})
			},
			// 选择三维图形 popup
			confirmSelect() {
				this.$refs.popupShare.open()
			},
			// object匹配数据
			changeData(data,id){
				console.log(data)//分别对应的导板，器械和匹配情况的数据
				var a=data.filter(item=>{
					if(item.id==id){
						return item
					}
				})
				console.log(a)
				this.stlId=a[0].stlModelIds//点击title，所获得对应的stlid；用于进入3js页面
				console.log(this.stlId)
				this.titleName=a[0].name
				if(a[0].stlPictureModelIds){
					var b=a[0].stlPictureModelIds.split(',')
					console.log(b)
					console.log(this.arrData)
					if(this.arrData.previewImage){
						var indexArr=b.map(item=>{//遍历出匹配的下标
							return Object.keys(this.arrData.previewImage).indexOf(item)
						})
						var newArr=[]
						indexArr.filter(item=>{
							if(Object.values(this.arrData.previewImage)[item]){//item要存在
								newArr.push(Object.values(this.arrData.previewImage)[item])
							}
						})
						this.bannerList=newArr
						console.log(this.bannerList)
					}
				}
			},
			// 点击title,更换图片
			changePicAll(id){//匹配情况
				this.threeModelName='Matching'
				this.threeModelId=id
				this.boolIndexAll=id//选中的样式
				// 导板和器械默认还原
				this.boolIndexGuide=''
				this.boolIndexInstru=''
				this.changeData(this.Alllist,id)	
			},
			changePicGuide(id){//导板
				this.threeModelName='GuidePlate'
				this.threeModelId=id
				this.boolIndexGuide=id
				// 器械和匹配情况默认还原
				this.boolIndexInstru=''
				this.boolIndexAll=''
				this.changeData(this.Guidelist,id)
			},
			changePicInstru(id){//器械
				this.threeModelName='Instrument'
				this.threeModelId=id
				this.boolIndexInstru=id
				// 导板和匹配情况默认还原
				this.boolIndexAll=''
				this.boolIndexGuide=''
				this.changeData(this.Instrumentlist,id)
			},
			// 匹配情况menu
			onClickItem(e) {
				if (this.current !== e.currentIndex) {
					this.current = e.currentIndex;
				}
			},
			// 审核状态确定
			auditconfirm(e){
				this.auditshow=false
			},
			// 审核状态取消
			auditcancel(e){
				this.auditshow=false
			},
			// 获取手术方法库详情
			getDetail(id){
				var timer = setTimeout(function() {
					uni.showLoading({
					  title: '数据加载中...',
					})
				}, 2000)
				// #ifdef APP-PLUS||H5
				getSurgicalDetail({
					surgicalPlanId:id,
				}).then(res=>{
					console.log(res)
					clearTimeout(timer)
					uni.hideLoading()
					if(res.data.code==0){
						this.Navtitle=res.data.object.surgicalPlanName
						this.arrData=res.data.object
						console.log(this.arrData)
						// 医生信息的数据
						this.doctorInfor=res.data.object.doctor
						this.docName=res.data.object.doctorName
						this.doctorId=res.data.object.doctorId
						this.createTime=res.data.object.createTime
						if(res.data.object.surgicalPlanMatchingVOS&&res.data.object.surgicalPlanMatchingVOS.length!=0){
							this.Alllist=res.data.object.surgicalPlanMatchingVOS//匹配情况
							console.log(this.Alllist)
							if(this.Alllist.length!=0){//数据存在情况下
								this.changePicAll(this.Alllist[0].id)//默认加载匹配情况的第一个，所以不能加载全部的轮播图
							}
						}
						if(res.data.object.guideVOS&&res.data.object.guideVOS.length!=0){
							this.Guidelist=res.data.object.guideVOS//导板匹配情况
						}
						if(res.data.object.instrumentVOS&&res.data.object.instrumentVOS.length!=0){
							this.Instrumentlist=res.data.object.instrumentVOS//器械匹配情况
						}
					}else if(res.data.code==-1){
						uni.showModal({
							title:'未登录',
							content:'用户未登录',
							confirmText:'前去登录',
							success(e){
								console.log(e)
								if(e.confirm){//点击确定
									uni.navigateTo({
										url:'/pages/login/tellogin?pages='+'/pages/surgicalData/surgicalData'+'&pagetype='+1,
										animationType:'pop-in'
									})
								}	
							},
						})
					}
				}).catch(err=>{
					clearTimeout(timer)
					uni.hideLoading()
					console.log(err)
					uni.showToast({
						title:'数据错误',
						icon:'none',
					})
				})
				// #endif
				// #ifdef MP-WEIXIN
				getSurgicalDetailParam({
					surgicalPlanId:id,
				}).then(res=>{
					console.log(res)
					uni.hideLoading()
					clearTimeout(timer)
					if(res.data.code==0){
						this.Navtitle=res.data.object.surgicalPlanName
						// uni.setNavigationBarTitle({
						// 	title:res.data.object.surgicalPlanName
						// })	
						this.arrData=res.data.object
						// 医生信息的数据
						this.doctorInfor=res.data.object.doctor
						this.docName=res.data.object.doctorName
						this.doctorId=res.data.object.doctorId
						this.createTime=res.data.object.createTime
						if(res.data.object.surgicalPlanMatchingVOS&&res.data.object.surgicalPlanMatchingVOS.length!=0){
							this.Alllist=res.data.object.surgicalPlanMatchingVOS//匹配情况
							console.log(this.Alllist)
							if(this.Alllist.length!=0){//数据存在情况下
								this.changePicAll(this.Alllist[0].id)//默认加载匹配情况的第一个，所以不能加载全部的轮播图
							}
						}
						if(res.data.object.guideVOS&&res.data.object.guideVOS.length!=0){
							this.Guidelist=res.data.object.guideVOS//导板匹配情况
						}
						if(res.data.object.instrumentVOS&&res.data.object.instrumentVOS.length!=0){
							this.Instrumentlist=res.data.object.instrumentVOS//器械匹配情况
						}
					}else if(res.data.code==-1){
						uni.showModal({
							title:'未登录',
							content:'用户未登录',
							confirmText:'前去登录',
							success(e){
								console.log(e)
								if(e.confirm){//点击确定
									uni.navigateTo({
										url:'/pages/login/tellogin?pages='+'/pages/surgicalData/surgicalData'+'&pagetype='+1,
										animationType:'pop-in'
									})
								}	
							},
						})
					}
				}).catch(err=>{
					uni.hideLoading()
					clearTimeout(timer)
					console.log(err)
					uni.showToast({
						title:'数据错误',
						icon:'none',
					})
				})
				// #endif
			},
			// 获取成功案例列表
			getSuccessList(id){
				getSuccessCase({
					surgicalplanId:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						this.successData=res.data.object.list
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						})
					}
				}).catch(err=>{
					console.log(err)
				})
			},
			// 获取树蚁设计列表
			getshoyiiList(page,id){
			    getShoyiiList({
					page:page,
					size:3,
					surgicalPlanId:id
			    }).then(res=>{
					console.log(res)
					if(res.data.code==0){
					  this.shoyiiData=res.data.object.list
					  this.shoyiiDesignPages=res.data.object.pages
					}else{
					  uni.showToast({
					   title:res.data.msg,
					   icon:'none',
					  })
					}
			    }).catch(err=>{
			       console.log(err)
			    })
			},
			getPage(){
				let curRoute  = this.$mp.page.route;
				this.pageUrl=curRoute
				this.paramter=this.$mp.page.options.id
				console.log(this.pageUrl)
				console.log(this.paramter)
			}
		},
		onLoad(options) {
			this.surgicalId=options.id
			var auditStatus=this.checkAudit() //审核状态
			if(auditStatus){//审核状态判断
				this.auditshow=true
				return;
			}
			// #ifdef MP-WEIXIN
			this.getPage()//获取页面参数
			// #endif
			this.getSuccessList(options.id)
			this.getshoyiiList(1,options.id)
			this.getDetail(options.id)
			this.bus.$on('shoyiiDesign',(data)=>{
			    // 重新获取随机一页数据
			    // 总页数：this.shoyiiDesignPages
			    // console.log(Math.floor(Math.random()*this.shoyiiDesignPages+1))
			    var page=Math.floor(Math.random()*this.shoyiiDesignPages+1) //生成1-最大总页数之间的page
			    this.getshoyiiList(page,this.surgicalId)
			})
		},
		onNavigationBarButtonTap(e){
			console.log(e)
		},
		onBackPress(e) {
			console.log(e)
			// h5页面不需要返回首页
			// #ifdef H5
				// return true
			// #endif
		},
		// 小程序分享到聊天列表
		onShareAppMessage: function (res) {
			console.log(res)
		    if (res.from === 'button') {//定义了share 才是button
		      // 来自页面内转发按钮
			  // return {
				 //  title: '自定义btn分享',
				 //  path: '/pages/index/index'
			  // }
		    }else{//menu为原生胶囊转发
				// this.pageUrl+'?id='+this.paramter,
				console.log(this.paramter)
				return {
				  title: this.Navtitle,
				  path: '/'+this.pageUrl+'?id='+this.paramter
				}
			}
		},
		// 小程序分享到朋友圈
		onShareTimeline(){
			return{
				title:this.Navtitle,
				query:'id='+this.paramter
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #F8F8F8;
	}
	.sugicaldetail{
		min-height: 100%;
	}
	.scroll-Y {
		height:100%;
	}
	.poplist{
		padding: 0 30rpx;
		height: 715rpx;
		background: #FFFFFF;
	}
	.poplist .content{
		color:#333333;
		font-size: 30rpx;
	}
	.poplist .content_item{
		border-bottom: 1px solid #EEEEEE;
		text-indent: 10rpx;
		padding: 25rpx 0;
	}
	.poplist .content_item uni-text{
		display: block;
	}
	.pop_header{
		border-bottom: 1px solid #EEEEEE;
		padding: 10rpx 0;
	}
	.classifyItem{
		height: 610rpx;
	}
	.textColor{
		color: #86B0D4;
	}
</style>
