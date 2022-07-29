<template>
	<view class="page dark-block">
		<!-- #ifdef APP-PLUS||H5 -->
		<u-navbar title="" :is-back='false' class="navBar" :background="$store.getters.isDark?darkbackground:{}">
			<view class="slot-wrap">
				<uni-icons type="arrowleft" @click="back" size="18" color='#343434' class="dark-white-font"></uni-icons>
				<text class="dark-white-font">{{title}}</text>
				<view class="">
					<text @click="save(inforid)" v-if="show" :class="boolean?'btnTitle':''" class="dark-white-font">{{btnTitle}}</text>
					<text @click="upload(1)" v-if="idshow" class="btnTitle dark-white-font">{{btnTitle}}</text>
					<text @click="upload(2)" v-if="licenseshow" class="btnTitle dark-white-font">{{btnTitle}}</text>
				</view>
			</view>
		</u-navbar>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- 小程序胶囊的占位 -->
		<view :style="{height:statusBarHeight+44+'px'}">
		</view>
		<view class="header" :style="{height:statusBarHeight+44+'px'}" >
			<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>  <!--状态栏占位 -->
			<view class="info" :style="{height:44+'px',width:widthLength+'rpx'}">
				<uni-icons type="arrowleft" @click="back" size="18" color='#343434'></uni-icons>
				<text style="font-weight: bold;color: #000000;">{{title}}</text>
				<view>
					<text @click="save(inforid)" v-if="show" :class="boolean?'btnTitle':''">{{btnTitle}}</text>
					<text @click="upload(1)" v-if="idshow" class="btnTitle">{{btnTitle}}</text>
					<text @click="upload(2)" v-if="licenseshow" class="btnTitle">{{btnTitle}}</text>
				</view>
			</view> 
		</view> 
		<!-- #endif -->
		<view class="" v-if="show">
			<u-field
				class='dark-white-font'
				v-if="inforid=='0'"
				maxlength="20"
				v-model="input"
				:placeholder="placeholder"
				:error-message="errorMessage"
				label-width='0'
				:focus='focus'
			>
			</u-field>
			<view class="dark-white-font" v-else-if="inforid=='1'&&roleId!='3'">
				<com-box :candidates="hospitallist" placeholder="请输入或选择所属医院" v-model="input" :border="true"></com-box>
			</view>
			<u-field
				class='dark-white-font'
				v-else
				v-model="input"
				:placeholder="placeholder"
				:error-message="errorMessage"
				label-width='0'
				:focus='focus'
			>
			</u-field>
		</view>
		<view class="inputInfor" v-if="idshow">
			<view class="imgbox">
				<text>上传身份证正面照片：</text>
				<view class="imgpic dark-fade-border" @click.capture="uploadpic(0)">
					<image lazy-load style="height: 388rpx;" :src="frontsrc" mode="aspectFit"></image>
				</view>
			</view>
			<view class="imgbox">
				<text>上传身份证反面照片：</text>
				<view class="imgpic dark-fade-border" @click="uploadpic(1)">
					<image lazy-load style="height: 388rpx;" :src="backsrc" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view class="inputInfor" v-if="licenseshow">
			<view class="imgbox">
				<text>上传医师执照：</text>
				<view class="imgpic dark-fade-border" @click.capture="uploadpic(2)">
					<image lazy-load style="height: 388rpx;" :src="licensesrc" mode="aspectFit"></image>
				</view>
			</view>
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	import {amend} from '@/utill/api/personalInfor/amendInfor.js' 
	export default {
		data() {
			return {
				darkbackground:{
					backgroundColor: '#1B1C1E'  	
				},
				focus:true,
				title:'修改信息',
				btnTitle:"保存",
				boolean:false,
				input:'',
				placeholder:'输入姓名',
				errorMessage: '',
				inforid:'',//不同的信息修改
				show:true,//其他信息的输入
				idshow:false,//身份证找票
				licenseshow:false,//营业执照
				frontsrc:'',//正面
				backsrc:'',//反面
				frontId:'',
				backId:'',
				licensesrc:'',
				licenseId:'',
				statusBarHeight: '', 
				menuButtonInfo:{},//小程序胶囊的位置
				roleId:'3',
				hospitallist:[]
			}
		},
		computed:{
			// #ifdef MP-WEIXIN
			widthLength(){
				return 750 - this.menuButtonInfo.width*2
			},
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			save(id){
				if(this.input==''){
					this.$refs.uToast.show({
						title: '不能为空',
					})
				}else{
					console.log(id)
					uni.showLoading({
						title:'保存中'
					})
					switch (id){
						case '0'://修改name
							var reg=/\d/;
							// console.log(reg.test(this.input));
							if(reg.test(this.input)){//有数字
								uni.showToast({
									title:'名称中不能含有数字',
									icon:'none'
								})
								return;
							}
							amend({
								doctorId:uni.getStorageSync('doctorId'),
								name:this.input
							}).then(res=>{
								uni.hideLoading()
								console.log(res)
								if(res.data.code==0){
									uni.navigateTo({
										url: '/pages/PersonalInfor/PersonalInfor',
									})
								}else{
									this.$refs.uToast.show({
										title: res.data.msg
									})
								}
							}).catch(err=>{
								uni.hideLoading()
								console.log(err)
							})
						break;
						case '1'://修改所属医院或公司
							amend({
								doctorId:uni.getStorageSync('doctorId'),
								hospital:this.input
							}).then(res=>{
								uni.hideLoading()
								console.log(res)
								if(res.data.code==0){
									uni.navigateTo({
										url: '/pages/PersonalInfor/PersonalInfor',
									})
								}else{
									this.$refs.uToast.show({
										title: res.data.msg
									})
								}
							}).catch(err=>{
								uni.hideLoading()
								console.log(err)
							})
						break;
						case '2'://修改所属医院地址
							amend({
								doctorId:uni.getStorageSync('doctorId'),
								address:this.input
							}).then(res=>{
								uni.hideLoading()
								console.log(res)
								if(res.data.code==0){
									uni.navigateTo({
										url: '/pages/PersonalInfor/PersonalInfor',
									})
								}else{
									this.$refs.uToast.show({
										title: res.data.msg
									})
								}
							}).catch(err=>{
								uni.hideLoading()
								console.log(err)
							})
						break;
						case '4'://修改职位
							amend({
								doctorId:uni.getStorageSync('doctorId'),
								position:this.input
							}).then(res=>{
								uni.hideLoading()
								console.log(res)
								if(res.data.code==0){
									uni.navigateTo({
										url: '/pages/PersonalInfor/PersonalInfor',
									})
								}else{
									this.$refs.uToast.show({
										title: res.data.msg
									})
								}
							}).catch(err=>{
								uni.hideLoading()
								console.log(err)
							})
						break;
						default:
						uni.showToast({
							title:'修改失败',
							icon:'none'
						})
						break;
					}
				}
			},
			// 选择图片
			uploadpic(index){
				if(index==0){//正面身份证照片
					uni.chooseImage({
						count: 1, //默认9
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							const tempFiles=chooseImageRes.tempFiles;
							this.$uploadRequest({
								url:'/fileHandle/uploadSinglePicture',
								filePath: tempFilePaths[0],
								method:'POST',
								name:'files'
							}).then(res=>{
								console.log(JSON.parse(res.data))
								var data=JSON.parse(res.data)
								console.log(data)
								if(data.code==0){
									this.frontsrc=tempFilePaths[0]
									this.frontId=data.object.id
								}else{
									uni.showToast({
										title:data.msg,
										icon:'none'
									})
								}
							}).catch(err=>{
								console.log(err)
							})
					    },
						fail(e) {console.log(e)}
					});
				}else if(index==1){//反面照片
					uni.chooseImage({
						count: 1, //默认9
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							const tempFiles=chooseImageRes.tempFiles;
							this.$uploadRequest({
								url:'/fileHandle/uploadSinglePicture',
								filePath: tempFilePaths[0],
								method:'POST',
								name:'files'
							}).then(res=>{
								console.log(JSON.parse(res.data))
								var data=JSON.parse(res.data)
								console.log(data)
								if(data.code==0){
									this.backsrc=tempFilePaths[0]
									this.backId=data.object.id
								}else{
									uni.showToast({
										title:data.msg,
										icon:'none'
									})
								}
							}).catch(err=>{
								console.log(err)
							})
					    },
						fail(e) {console.log(e)}
					});
				}else if(index==2){
					uni.chooseImage({
						count: 1, //默认9
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							this.$uploadRequest({
								url:'/fileHandle/uploadSinglePicture',
								filePath: tempFilePaths[0],
								method:'POST',
								name:'files'
							}).then(res=>{
								console.log(JSON.parse(res.data))
								var data=JSON.parse(res.data)
								console.log(data)
								if(data.code==0){
									this.licensesrc=tempFilePaths[0]
									this.licenseId=data.object.id
								}else{
									uni.showToast({
										title:data.msg,
										icon:'none'
									})
								}
							}).catch(err=>{
								console.log(err)
							})
					    },
						fail(e) {console.log(e)}
					});
				}
			},
			// 上传到服务器
			upload(index){
				if(index==1){//上传身份证
					if(!this.frontId&&!this.backId){
						uni.showToast({
							title:'请上传身份证',
							icon:'none'
						})
						return;
					}
					uni.showLoading({
						title:'上传中'
					})
					amend({
						doctorId:uni.getStorageSync('doctorId'),
						iDcardPicture:this.frontId,
						iDcardPictureBack:this.backId
					}).then(res=>{
						uni.hideLoading()
						console.log(res)
						if(res.data.code==0){
							uni.navigateTo({
								url:'/pages/PersonalInfor/PersonalInfor',
							})
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
				}else if(index==2){//上传执照
					if(!this.licenseId){
						uni.showToast({
							title:'请上传医生执照',
							icon:'none'
						})
						return;
					}
					uni.showLoading({
						title:'上传中'
					})
					if(this.inforid==6){
						amend({
							doctorId:uni.getStorageSync('doctorId'),
							doctorLicense:this.licenseId,
						}).then(res=>{
							uni.hideLoading()
							console.log(res)
							if(res.data.code==0){
								uni.navigateTo({
									url:'/pages/PersonalInfor/PersonalInfor',
								})
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
					}
				}
			},
			gethospital(){
				uni.request({
					// url:'https://shoyii-open-1258143571.cos.ap-guangzhou.myqcloud.com/dev/hospitalNameList.json'
					// url:'/prefix/coshospital/dev/hospitalNameList.json'
					url:'/asjdhjv/simpleWeather/query?key=ee5196d94da3c6db148fd58239357e8a',
					// url:'http://apis.juhe.cn/simpleWeather/query?key=ee5196d94da3c6db148fd58239357e8a',
					data:{
						city:'广州'
					}
				}).then((res)=>{
					console.log(res)
					// console.log(res[1].data)
					// this.hospitallist=res[1].data
				}).catch(err=>{
					console.log(err) 
				})
			}
		},
		watch:{
			input (newValue,oldValue){
				console.log(newValue)
				console.log(oldValue)
				if(newValue!=oldValue){
					this.boolean=true
				}
			}
		},
		onLoad(options) {
			// #ifdef MP-WEIXIN
			//获取胶囊信息
			this.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(this.menuButtonInfo)
			let _this = this;
			uni.getSystemInfo({  //获取状态栏高度
				success: function(res) {  
					_this.statusBarHeight = res.statusBarHeight;  
					console.log(_this.statusBarHeight);  
				}  
			});
			// #endif
			console.log(options)
			this.title=options.pageTitle
			this.inforid=options.pageId
			this.roleId=options.roleId
			// this.inforid=6
			switch (this.inforid){
				case '0':
					this.placeholder='输入姓名(不能含有数字，最多20个字符)'
				break;
				case '1':
					if(options.roleId=='3'){
						this.placeholder='输入所属公司'
					}else{
						this.gethospital()
					}
				break;
				case '2':
					this.placeholder='输入医院地址'
				break;
				case '4':
					this.placeholder='输入职位'
				break;
				case '5'://上传身份证图片
					this.show=false
					this.idshow=true
					this.btnTitle='上传'
					if(options.backSrc){
						// #ifdef MP-WEIXIN
						this.backsrc=decodeURIComponent(options.backSrc)
						// #endif
						// #ifndef MP-WEIXIN
						this.backsrc=options.backSrc
						// #endif
					}
					if(options.frontSrc){
						// #ifdef MP-WEIXIN
						this.frontsrc=decodeURIComponent(options.frontSrc)
						// #endif
						// #ifndef MP-WEIXIN
						this.frontsrc=options.frontSrc
						// #endif
					}
				break;
				case '6'://上传医生执照
					this.show=false
					this.idshow=false
					this.licenseshow=true
					this.btnTitle='上传执照'
					if(options.licenseSrc){
						// #ifdef MP-WEIXIN
						this.licensesrc=decodeURIComponent(options.licenseSrc)
						console.log(this.licensesrc)
						// #endif
						// #ifndef MP-WEIXIN
						this.licensesrc=options.licenseSrc
						console.log(this.licensesrc)
						// #endif
					}
				break;
				default:
					this.placeholder='输入姓名'
				break;
			}
		}
	}
</script>

<style scoped>
	.page{
		min-height: 100%;
		background-color: #FFFFFF;
	}
	.slot-wrap{
		flex:1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
	}
	.slot-wrap uni-text:nth-child(2){
		color: #000000;
		font-size: 30rpx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
	}
	.slot-wrap uni-text:nth-child(3){
		color: #909090;
		font-size: 28rpx;
	}
	.btnTitle{
		color: #000000;
	}
	.inputInfor{
		padding: 20rpx 30rpx;
	}
	.imgbox{
		margin-bottom: 50rpx;
	}
	.imgpic{
		background: url(/static/image/camerabg.png) no-repeat center;
		background-size: 80rpx; width: 100%;height: 388rpx;
		border:1px solid #EEEEEE;
		line-height: 388rpx;
		text-align: center;
		margin-top: 20rpx;
	}
	/* #ifdef MP-WEIXIN */
	.navBar /deep/ .u-line-1 {
		display: none!important;
	}
	/* #endif */
	.header {
	   position: fixed;
	   top: 0;
	   left: 0;
	   right: 0;
	}  
	.info {  
		display: flex;
	    height: 44px;  
		padding: 0 30rpx;
		flex-direction: row;
	    justify-content: space-between;  
	    align-items: center;  
		background-color: #F8F8F8;
	} 
</style>
