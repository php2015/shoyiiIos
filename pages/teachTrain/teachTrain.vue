<template>
	<view class="Train dark-page">
		<!-- 顶部menu -->
		<view class="tabMenu">
			<view class="button dark-block" @tap='changeTab(index)' v-for="(item,index) in menu" :key='index' :class="index==tabindex?'hoverbtn':''">
				<text>{{item}}</text>
			</view>
		</view>
		<!-- 培训的内容 -->
		 <view class="trainInfor dark-block">
			 <u-read-more text-indent ='0' :toggle="true" show-height="400">
			<view class="list">
			 	<text class="label">培训人：</text>
				<view class="" style="flex: 1;">
					<text>{{infor.trainer}}</text>
				</view>
			</view>
			<view class="list">
			  	<text class="label">费用：</text>
			 	<view class="" style="flex: 1;">
			 		<text>{{infor.cost}}</text>
			 	</view>
			</view>
			<view class="list">
			 	<text class="label">学习时间：</text>
				<view class="" style="flex: 1;">
					<text>{{infor.learnTime.period}}</text>
					<view class="tip">
						<text>{{infor.learnTime.details}}</text>
					</view>
				</view>
			</view>
			<view class="list">
			 	<text class="label">培训内容：</text>
				<view class="" style="flex: 1;">
					<text>{{infor.content}}</text>
					<view>
						<text @tap='enterDetail' class='underline'>查看详情</text>
					</view>
				</view>
			</view>
			<view class="list">
			  	<text class="label">赠送：</text>
			 	<view class="" style="flex: 1;">
			 		<text>{{infor.gift}}</text>
			 	</view>
			</view>
		 </u-read-more>
		 </view>
		 <view class="applyInfor">
			 <view class="title dark-font">
				 <text v-if="isamend">报名信息</text>
				 <text v-else>修改报名信息</text>
			 </view>
			 <!-- 提交报名 -->
			 <view class="information" v-if="!isreport">
			 	<view class="list dark-block">
			 		<text>姓名</text>
					<view class="input">
						<u-input style="background-color: #DDDDDD;" v-model="reportInfor.Uname" maxlength='10' height='60' :border='true' placeholder=" " border-color='#DDDDDD'/>
					</view>
					<text>手机号码</text>
					<view class="input">
						<u-input style="background-color: #DDDDDD;" type="number" v-model="reportInfor.Telphone" maxlength='11' height='60' :border='true' placeholder=" " border-color='#DDDDDD'/>
					</view>
					<text>参与人数</text>
					<view class="input">
						<u-input style="background-color: #DDDDDD;" type="number" v-model="reportInfor.personCount" maxlength='4' height='60' :border='true' placeholder=" " border-color='#DDDDDD'/>
					</view>
					<text>参与时间</text>
					<view class="input fieldinput">
						<u-field
							class="field"
							style="background-color: #DDDDDD;padding: 6rpx 16rpx 6rpx 0;"
							v-model="reportInfor.date"
							label=" "
							label-width='0'
							placeholder=" "
							:border-bottom='false'
							right-icon='calendar'
							:disabled='true'
							@click="getdate"
						>
						</u-field>
					</view>
			 	</view>
				<view class="send">
					<button class="btn" @tap='submit' v-if="isamend">提交</button>
					<button class="btn" @tap='amendreport' v-else>修改</button>
				</view>
			 </view>
			 <!-- 已报名的信息 -->
			 <view class="information" v-else>
			 	<view class="list dark-block">
			 		<view class="list-cell" style="display: flex;justify-content: space-between;align-items: center;">
						<view class="" style="display: flex;flex: 1;align-items: center;">
							<text class="">班级:</text>
							<view class="label">
								<text>{{reportData.trainingTypeInfo}}</text>
							</view>
						</view>
						<u-tag :text="reportData.finalConfirmOrNot|fiterData" :type="reportData.finalConfirmOrNot|fitercolor" size='mini'/>
			 		</view>
			 		<view class="list-cell">
			 			<text class="">姓名:</text>
			 			<view class="label">
			 				<text>{{reportData.name}}</text>
			 			</view>
			 		</view>
			 		<view class="list-cell">
			 			<text class="">手机号码:</text>
			 			<view class="label">
			 				<text>{{reportData.phoneNumber}}</text>
			 			</view>
			 		</view>
			 		<view class="list-cell">
			 			<text class="">参与人数:</text>
			 			<view class="label">
			 				<text>{{reportData.trainedNumber}}</text>
			 			</view>
			 		</view>
			 		<view class="list-cell">
			 			<text class="">参与时间:</text>
			 			<view class="label">
			 				<text>{{reportData.participationTime|timeStamp}}</text>
			 			</view>
			 		</view>
			 	</view>
			 	<view class="send">
					<view class="button" style="">
						<button class="btn amendbtn" @tap='amend'>修改</button>
						<button class="btn" @tap='sure'>确定</button>
					</view>
			 		<view class="withdraw">
			 			<text class="" @tap='withdraw'>撤销</text>
			 		</view>
			 	</view>
			 </view>
		 </view>
		 <!-- 最终确认信息窗口 -->
		 <u-modal v-model="sureshow" :content="sure_content" :show-cancel-button='true' title='是否确认报名' @confirm='confirm' @cancel="cancel"></u-modal>
		 <u-calendar v-model="dateshow" :min-date='minDate' max-date='2050' mode="date" toolTip='选择参与时间' @change='selectDate'></u-calendar>
		<!-- 修改，提交时需要提示信息弹窗 -->
		<u-modal v-model="reportshow" :show-cancel-button='true' title='确认报名信息'
		 :title-style='$store.getters.isDark?titleStyle:{}'
		 @confirm='reportconfirm' @cancel="reportcancel">
			<view class="slot-content dark-block">
				<view class="list-cell">
					<text class="">班级:</text>
					<view class="label">
						<text>{{tabindex|filterClass}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">姓名:</text>
					<view class="label">
						<text>{{reportInfor.Uname}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">手机号码:</text>
					<view class="label">
						<text>{{reportInfor.Telphone}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">参与人数:</text>
					<view class="label">
						<text>{{reportInfor.personCount}}</text>
					</view>
				</view>
				<view class="list-cell">
					<text class="">参与时间:</text>
					<view class="label">
						<text>{{reportInfor.date}}</text>
					</view>
				</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {getTraindata,sendTrain,getsingleInfor,amendInfor} from '@/utill/api/train/train.js'
	export default {
		data() {
			return {
				menu:[
					'初阶班','中阶班','高阶班','专业班'
				],
				tabindex:0,
				infor:{
					learnTime:{}
				},
				dateshow:false,
				minDate:'2021-06-12',
				datainfor:[],
				reportInfor:{
					Uname:'',//姓名
					Telphone:'',//电话
					personCount:'',//人数
					date:'',//日期
				},
				reportData:{},//查询到的指定的报名信息
				isreport:false,//是否有报名信息,
				isamend:true,
				sureshow:false,//确认弹窗
				sure_content:'确认之后，不可撤销和修改',
				reportshow:false,//每次提交和修改信息的弹窗，以便用户再次审阅信息
				titleStyle:{
					backgroundColor: '#3A3A3A',
					color:'#fff'
				},
			}
		},
		filters:{
			fiterData:function(val){
				if(val==false){
					return '未确定'
				}else{
					return '已确定'
				}
			},
			fitercolor:function(val){
				if(val==false){
					return 'error'
				}else{
					return 'info'
				}
			},
			filterClass:function(val){
				if(val==0){
					return '初阶班'
				}else if(val==1){
					return '中阶班'
				}else if(val==2){
					return '高阶班'
				}else if(val==3){
					return '专业班'
				}
			},
		},
		methods: {
			// 顶部切换
			changeTab(index){
				this.tabindex=index
				if(index==0){//初级课程
					this.infor=this.datainfor[0] 
				}else if(index==1){//中级课程
					this.infor=this.datainfor[1]
				}else if(index==2){//高级课程
					this.infor=this.datainfor[2]
				}else if(index==3){//专业课程
					this.infor=this.datainfor[3]
				}
				console.log(this.infor)
			},
			// 进入培训信息详情
			enterDetail(){
				uni.navigateTo({
					url:'/pages/teachTrain/trainInfor?tabindex='+this.tabindex
				})
			},
			// 弹出时间组件
			getdate(){
				this.dateshow=true
			},
			// 选择培训时间
			selectDate(e){
				console.log(e)
				this.reportInfor.date=e.result
			},
			// 报名信息修改和提交的弹窗的取消
			reportcancel(){
				this.reportshow=false
			},
			// 报名信息修改和提交的弹窗的确定
			reportconfirm(){
				console.log(this.isamend)
				if(this.isamend){
					console.log('提交')
					this.submitSure()
				}else{
					console.log('修改')
					this.amendInfor(false,false,0)
				}
			},
			// 提交确定
			submitSure(){
				uni.showLoading({
					title:'提交中'
				})
				sendTrain({
					name:this.reportInfor.Uname,
					phoneNumber:this.reportInfor.Telphone,
					trainingType:this.tabindex+1,
					participationTime:this.reportInfor.date,
					trainedNumber:this.reportInfor.personCount,
				}).then(res=>{
					uni.hideLoading()
					console.log(res)
					if(res.data.code==0){
						uni.redirectTo({//报名成功后，跳转到报名列表页面
							url:'/pages/teachTrain/trainList'
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
			},
			// 提交报名信息
			submit(){
				console.log(this.tabindex+1)
				console.log(this.reportInfor)
				if(!this.reportInfor.Uname){
					uni.showToast({
						title:'姓名不能为空',
						icon:'none'
					})
					return;
				}
				if(!this.reportInfor.Telphone){
					uni.showToast({
						title:'电话不能为空',
						icon:'none'
					})
					return;
				}
				if(!this.reportInfor.personCount){
					uni.showToast({
						title:'人数不能为空',
						icon:'none'
					})
					return;
				}
				if(!this.reportInfor.date){
					uni.showToast({
						title:'日期不能为空',
						icon:'none'
					})
					return;
				}
				this.reportshow=true
			},
			// 修改报名信息
			amend(){
				if(this.reportData.finalConfirmOrNot){
					uni.showToast({
						title:'信息已确定，不可修改',
						icon:'none'
					})
					return;
				}
				this.isamend=false
				this.isreport=false
			},
			// 修改提交报名信息
			amendreport(){
				this.reportshow=true
			},
			// 最终确定
			sure(){
				if(this.reportData.finalConfirmOrNot){
					uni.showToast({
						title:'信息已确定',
						icon:'none'
					})
					return;
				}
				this.sureshow=true
			},
			confirm(){
				this.amendInfor(false,true,1)
				this.sureshow=false
			},
			cancel(){
				this.sureshow=false
			},
			// 撤销报名数据
			withdraw(){
				if(this.reportData.finalConfirmOrNot){
					uni.showToast({
						title:'信息已确定，不可撤销',
						icon:'none'
					})
					return;
				}
				this.amendInfor(true,false,1)
			},
			amendInfor(ifWithdraw,ifsure,isbool){
				if(isbool==0){//需要判断是否填写信息
					console.log('得判断')
					if(!this.reportInfor.Uname){
						uni.showToast({
							title:'姓名不能为空',
							icon:'none'
						})
						return;
					}
					if(!this.reportInfor.Telphone){
						uni.showToast({
							title:'电话不能为空',
							icon:'none'
						})
						return;
					}
					if(!this.reportInfor.personCount){
						uni.showToast({
							title:'人数不能为空',
							icon:'none'
						})
						return;
					}
					if(!this.reportInfor.date){
						uni.showToast({
							title:'日期不能为空',
							icon:'none'
						})
						return;
					}
				}
				console.log(this.reportInfor)
				console.log(this.reportData.id)
				uni.showLoading({
					title:'提交中'
				})
				amendInfor({
					id:this.reportData.id,
					name:this.reportInfor.Uname,
					phoneNumber:this.reportInfor.Telphone,
					trainingType:this.tabindex+1,
					participationTime:this.reportInfor.date,
					trainedNumber:this.reportInfor.personCount,
					cancelOrNot:ifWithdraw,//是否撤销 1：true；默认0：false，
					finalConfirmOrNot:ifsure,//是否确定 1：true；默认0：false，
				}).then(res=>{
					uni.hideLoading()
					console.log(res)
					if(res.data.code==0){
						uni.redirectTo({
							url:'/pages/teachTrain/trainList'
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
			},
			// 获取当前时间
			getNowDate(){
				var time = new Date();
				var year=time.getFullYear()<10?'0'+time.getFullYear():time.getFullYear();
				var month=time.getMonth()+1<10?'0'+(time.getMonth()+1):time.getMonth()+1; 
				var day=time.getDate()<10?'0'+time.getDate():time.getDate();
				this.minDate=year+'-'+month+'-'+day
				console.log(this.minDate)
			},
			// 获取培训的数据
			gettrainData(){
				getTraindata({}).then(res=>{
					console.log(res)
					this.datainfor=res.data.object
					console.log(this.datainfor);
					this.infor=this.datainfor[0]
				}).catch(err=>{
					console.log(err)
				})
			},
			// 获取报名信息
			getsingleInfor(id){
				getsingleInfor({
					id:id
				}).then(res=>{
					console.log(res)
					if(res.data.code==0){
						if(res.data.object.length!=0){//有报名信息
							this.reportData=res.data.object
							this.isreport=true
							this.reportInfor={//将数据赋值
								Uname:this.reportData.name,//姓名
								Telphone:this.reportData.phoneNumber,//电话
								personCount:this.reportData.trainedNumber,//人数
								date:this.reportData.participationTime,//日期
							}
							switch (this.reportData.trainingType){
								case 1:
									this.tabindex=0
								break;
								case 2:
									this.tabindex=1
								break;
								case 3:
									this.tabindex=2
								break;
								case 4:
									this.tabindex=3
								break;
								default:
									this.tabindex=0
								break;
							}
						}
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
		onLoad(options) {
			// 获取当前时间,作为日期选择的范围
			this.getNowDate()
			// 获取训练数据
			this.gettrainData()
			// 获取指定的报名信息
			if(options.id){
				this.getsingleInfor(options.id)
			}
		},
		onBackPress(e){
			const page=getCurrentPages()
			// console.log(page)
			var page1 = page[page.length-1];
			var page2=page[page.length-2]
			if(page1.route==page2.route){
				uni.switchTab({
					url:'/pages/index/index'
				})
				return true
			}
		},
		onShow() {
			// #ifdef APP-PLUS
			this.amendNavigator()
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.Train{
		padding: 30rpx;
		min-height: 100%;
	}
	.tabMenu{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26rpx;
		font-family: PingFang-SC-Regular;
		.button{
			border: 1px solid #EEEEEE;
			background-color: #EEEEEE;
			border-radius: 30rpx;
			color: #666666;
			text-align: center;
			padding: 10rpx 40rpx;
		}
		.hoverbtn{
			background-color: #FFFFFF;
			border-color:#69CDFF;
			color: #69CDFF;
		}
	}
	.trainInfor{
		padding: 14rpx 30rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
		color: #000000;
		margin: 30rpx 0;
		.list{
			display: flex;
			align-items: flex-start;
			.label{
				margin-right: 20rpx;
				width: 25%;
			}
			.tip{
				color: #666666;
				font-size: 24rpx;
			}
			.underline{
				color: #1976D2;
			}
			
		}
	}
	.applyInfor{
		.title{
			font-size: 30rpx;
			font-weight: bold;
			color: #000000;
			font-family: PingFang-SC-Bold;
			padding-bottom: 30rpx;
		}
		.information{
			.list{
				background-color: #FFFFFF;
				padding:10rpx 30rpx;
				.input{
					padding: 20rpx 0;
				}
			}
			.send{
				.btn{
					background-color: #69CDFF;
					color: #FFFFFF;
					width: 330rpx;
					height: 88rpx;
					line-height: 88rpx;
					font-size: 30rpx;
					font-weight: bold;
					font-family: PingFang-SC-Bold;
				}
				text-align: center;
				margin-top: 60rpx;
				.button{
					display: flex;justify-content: space-between;
					.amendbtn{
						background-color: #FFFFFF;
						color: #69CDFF;
						border: 1px solid #69CDFF;
					}
				}
				.withdraw{
					color: #666666;
					padding: 20rpx 0;
				}
			}
			
		}
	}
	.list-cell{
		display: flex;
		align-items: center;
		padding: 20rpx 0;
		.label{
			margin-left: 20rpx;
			flex: 1;
		}
	}
	.slot-content{
		padding: 0 30rpx;
	}
	/* #ifdef MP-WEIXIN */
	.fieldinput{
		margin-top:20rpx;
		padding: 0;
		border: 1px solid #DDDDDD;
		.field{
			padding: 0!important;
		}
	}
	/* #endif */
</style>
