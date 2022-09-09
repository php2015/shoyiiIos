<template>
	<!-- <view class="">
		<button type="default" @click="Alipayment">支付宝支付</button> -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- <button type="default" @click="getfail">获取发票信息</button>
		<button type="default" @click="selectfail">选择用户已有的发票</button> -->
		<!-- <button type="default" @click="getmDNS">搜索局域网下的 mDNS 服务</button> -->
		<!-- <button type="default" @click="searchbool">搜索蓝牙</button> -->
		<!-- #endif -->
		<!-- <button type="default" @click="downloadwgt">wgt下载</button>
		<button type="default" @click="getcache">获取缓存</button>
		<button type="default" @click="clern">清除缓存</button> -->
	<!-- </view> -->
	<!-- <view class="aboutUs"> -->
		<!-- <button type="default" @click="payment">支付</button>
		<button type="default" @click="download">下载文件</button> -->
	<!-- 	<button type="default" @click="cancel">取消</button>
		<button type="default" @click="open">打开文件</button> -->
		<!-- <view class="">
			<u-upload :file-list="fileList" :action="action" name='files' :before-upload="beforeUpload" :header='header' max-count="3" @on-error="onErrors" @on-change="onChange" @on-success="onSuccess" :on-uploaded="onUploaded" upload-text='上传图片'></u-upload>
		</view> -->
		
		<!-- <view class="header">
			<text>header</text>
		</view>
		<view class="content">
			<view style="height: 500px;background-color: red;">
				<text>content1</text>
			</view>
			<view style="height: 500px;background-color: red;">
				<text>content2</text>
			</view>
		</view>
		<view class="footer">
			<text>footer</text>
		</view> -->
		
	<!-- </view> -->
	<!-- <view class="all">
		<view class="header">
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="距离" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="温度" :options="options2"></u-dropdown-item>
			</u-dropdown>
		</view>
		<view class="section">
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
		</view>

	</view> -->
	<!-- <view class="" style="">
		<view style="width: 100%;">
			<text>header</text>
		</view>
		<scroll-view scroll-y="true" class="scrollContent" :style="{height:scrollHeight+'px'}">
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
			<view class="item">
				<text>section</text>
			</view>
		</scroll-view>
	</view> -->
	<view class="">
		<!-- <u-index-list :scrollTop="scrollTop" @select='select' :index-list='indexList' active-color='red' style='color: #07C160;'>  
			<view v-for="(item, index) in indexList" :key="index">
				<u-index-anchor :index="item" />
				<view class="list-cell">
					列表1
				</view>
				<view class="list-cell">
					列表2
				</view>
				<view class="list-cell">
					列表3
				</view>
			</view>
		</u-index-list> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city:'',
				scrollTop: 0,
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
					"V","W", "X", "Y", "Z" ],
				// indexList:[
				// 	{alphaMark:"A"},{alphaMark:"B"},{alphaMark:"C"},{alphaMark:"D"},
				// 	{alphaMark:"E"},{alphaMark:"F"},{alphaMark:"G"},{alphaMark:"H"},
				// 	{alphaMark:"I"},{alphaMark:"J"},{alphaMark:"K"},{alphaMark:"L"},
				// 	{alphaMark:"M"},{alphaMark:"N"},{alphaMark:"O"},{alphaMark:"P"},
				// 	{alphaMark:"Q"},{alphaMark:"R"},{alphaMark:"S"},{alphaMark:"T"},
				// 	{alphaMark:"U"},{alphaMark:"V"},{alphaMark:"W"},{alphaMark:"X"},
				// 	{alphaMark:"Y"},{alphaMark:"Z"}
				// ],
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '去冰',
						value: 1,
					},
					{
						label: '加冰',
						value: 2,
					},
				],			
				url:'',
				aboutData:{},
				downloadTask:'',
				action:'http://192.168.31.141:8083/fileHandle/uploadSTLPicture',
				header:{
					 "token":uni.getStorageSync('token')
				},
				fileList:[],
				scrollHeight:0,
				serviceList:[],
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			setId(e){
				this.projectId = e;//将子组件通过setId传值给父组件的projectId
				console.log("本次选中的项目id是"+e)
			},
			// 获取缓存
			getcache(){
				console.log(plus.os.name)
				let that = this;
				plus.cache.calculate(function(size) {
					console.log(size)
					let sizeCache = parseInt(size);
					if (sizeCache == 0) {
						that.fileSizeString = "0B";
					} else if (sizeCache < 1024) {
						that.fileSizeString = sizeCache + "B";
					} else if (sizeCache < 1048576) {
						that.fileSizeString = (sizeCache / 1024).toFixed(2) + "KB";
					} else if (sizeCache < 1073741824) {
						that.fileSizeString = (sizeCache / 1048576).toFixed(2) + "MB";
					} else {
						that.fileSizeString = (sizeCache / 1073741824).toFixed(2) + "GB";
					}
					console.log(that.fileSizeString)
				});
			},
			// 清除缓存
			clern() {
				let that = this
				uni.showModal({
					title: '清除缓存',
					content: '您确定要清除缓存吗？',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							that.clearCache() 
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			// 清理缓存
			clearCache() {
				let that = this;
				let os = plus.os.name;
				if (os == 'Android') {
					let main = plus.android.runtimeMainActivity();
					let sdRoot = main.getCacheDir();
					let files = plus.android.invoke(sdRoot, "listFiles");
					console.log(files)
					let len = files.length;
					console.log(len)
					for (let i = 0; i < len; i++) {
						let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
						console.log(filePath)
						plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
							console.log(entry)
							if (entry.isDirectory) {
								entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
									uni.showToast({
										title: '缓存清理完成',
										duration: 2000
									});
									that.formatSize(); // 重新计算缓存  
								}, function(e) {
									console.log(e.message)
								});
							} else {
								entry.remove();
							}
						}, function(e) {
							console.log('文件路径读取失败')
						});
					}
				} else { // ios  
					plus.cache.clear(function() {
						uni.showToast({
							title: '缓存清理完成',
							duration: 2000
						});
						that.formatSize();
					});
				}
			},
			downloadwgt(){
					var url='http://192.168.31.223:9000/shoyii-open-1258143571/test/__UNI__AF91735.wgt'	
					var showLoading = plus.nativeUI.showWaiting("正在下载,请稍后...");
					const downloadTasks =
						uni.downloadFile({
							url: url,
							success: (res) => {
								console.log(res)
								if(res.statusCode===200){
									var filePath = res.tempFilePath;
									 // 仅安装wgt和wgtu时生效，默认值 false,true表示强制安装，不进行版本号的校验；false则需要版本号校验，
									plus.runtime.install(filePath,{force: true,},(e) => {
										showLoading.setTitle("安装中...");
										plus.runtime.restart(); 
										plus.nativeUI.closeWaiting();
									},(e) => {
										showLoading.setTitle("安装失败，请尝试重新下载");
										setTimeout(()=>{
											  plus.nativeUI.closeWaiting();
										},1000)
									})
								}
								
							},
							fail:(err)=>{
								showLoading.setTitle("下载失败");
								setTimeout(()=>{
									  plus.nativeUI.closeWaiting();
								},1000)
							}
						})
						downloadTasks.onProgressUpdate((res) => {
							console.log(res)
							showLoading.setTitle("正在下载" + res.progress + "%");
							if(res.progress==100){
								console.log(res.progress)
								showLoading.setTitle("下载完成");
							}
						})
			},
			// 搜索蓝牙
			searchbool(){
				// 初始化蓝牙模块
				wx.openBluetoothAdapter({
					complete(e){
						console.log(e)
						if(e.errMsg=='openBluetoothAdapter:ok'){
							wx.startBluetoothDevicesDiscovery({
							  success (res) {
							    console.log(res)
								wx.onBluetoothDeviceFound((res)=>{
									console.log(res.devices)
									this.serviceList.push(res.devices)
									console.log(this.serviceList)
								})
							  },
							  complete(e){
								  console.log(e)
							  }
							})
						}
					}
				})
				
			},
			// 搜做mdns服务
			getmDNS(){
				wx.startLocalServiceDiscovery({
					serviceType:'_http._tcp.',
					success(e){
						console.log(e)
						wx.onLocalServiceFound((res)=>{
							console.log(res)
						})
					}
				})
				 setTimeout(() => {
					// 停止搜索服务
				      wx.stopLocalServiceDiscovery({        
					       success: (res) => {
					       	  console.log(res)
					       },
				      }) 
				    }, 5000);
			},
			getfail(){
				wx.chooseInvoiceTitle({
				  success(res) {
					  console.log(res)
				  }
				})
			},
			selectfail(){
				wx.chooseInvoice({
					success(res) {
						console.log(res)
					}
				})
			},
			select(e){
				console.log(e)
			},
			scrolltolower(){
				console.log('触底了')
			},
			markertap(e){
				console.log(e)
			},
			randomStr(length){
			  const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			  let noceStr='';
			  let maxPos=chars.length;
			  while (length--) noceStr += chars[Math.random()*maxPos |0]
			  return noceStr
			},
			Alipayment(){
				var outTradeNo=this.randomStr(28)
				var body='支付宝沙箱环境支付'
				var totalFee=1
				var subject='支付宝支付的副标题'
				var openId
				uni.showLoading({
					title:'加载中'
				})
				uniCloud.callFunction({
					name: 'aliPayment',
					data:{
						// #ifdef APP-PLUS
						plateForm:'appAli',//阿里支付
						subject:subject,//app的副标题
						// #endif
						body:body,
						outTradeNo:outTradeNo,
						totalFee:totalFee,
						openid:openId
					},
					success(res) {
						uni.hideLoading()
						console.log(res)
						uni.requestPayment({
							provider: 'alipay', // App端此参数必填，可以通过uni.getProvider获取
							orderInfo: res.result.orderInfo,
						...res.result.orderInfo,
							success(e){
								console.log('3')
								console.log(e)
								uni.showLoading({
									title:'加载中'
								})
								// uniCloud.callFunction({//查询订单
								// 	name: 'orderQuery',
								// 	data:{
								// 		outTradeNo:outTradeNo
								// 	},
								// 	success(e) {
								// 		uni.hideLoading()
								// 		console.log(e)
										
								// 	},fail(err) {
								// 		uni.hideLoading()
								// 		console.log(err)//订单不存在， 返回值为ORDERNOTEXIST
								// 	}
								// })
							},
							fail(err){//取消支付
								// console.log('2')
								console.log(err)
								console.log(JSON.stringify(err))
								uni.showToast({
									title:'取消支付',
									icon:'none'
								})
							}
						})
					},
					fail(err) {
						uni.hideLoading()
						console.log(err)
						uni.showToast({
							title:'err1'
						})
					}
				})
			},
			// 回调参数中的lists参数，为目前组件内的所有图片数组，index为当前操作的图片的索引，name为通过props传递的index参数
			beforeUpload(index, list){
				console.log(index)
				console.log(list)
			},
			onErrors(res, index, lists, name){
				console.log(res)
				console.log(index)
				console.log(lists)
				console.log(name)
			},
			onChange(res, index, lists, name){
				// res为服务器返回的信息，name为通过props传递的index参数
				console.log(res)
				console.log(index)
				console.log(lists)
				console.log(name)
			},
			onSuccess(data, index, lists, name){
				// data为服务器返回的数据，name为通过props传递的index参数
				console.log(data)
				console.log(index)
				console.log(lists)
				console.log(name)
				
			},
			onUploaded(lists, name){//所有图片上传完毕触发
				// 可以通过此事件，将lists参数获取，提交给后端使用，name为通过props传递的index参数
				console.log(lists)
				console.log(name)
			},
			
			cancel(){
				this.downloadTask.abort();
			},
			download(){
				// uni.getSystemInfo({
				// 	success: (res) => {
				// 		//检测当前平台，如果是安卓则启动安卓更新  
				// 			if (res.platform == "android") {
				// 				that.AndroidCheckUpdate();
				// 		     }
				// 	}
				var dtask = plus.downloader.createDownload(url, {}, function(d, status){
					// 下载完成
					if(status == 200){ 
						console.log("Download success: " + d.filename);
					} else {
						console.log("Download failed: " + status); 
					}  
				})
				try {
					dtask.start(); // 开启下载的任务
					var percent = 0;
					var showLoading = plus.nativeUI.showWaiting("正在下载");  //创建一个showWaiting对象 
					dtask.addEventListener('statechanged', function(task,status) {
						console.log(task)
						console.log(status)
					  switch (task.state) {
						case 1:
						  showLoading.setTitle("正在下载");
						  break;
						case 2:
						  showLoading.setTitle("已连接到服务器");
						  break;
						case 3:
						  percent = parseInt((parseFloat(task.downloadedSize) /parseFloat(task.totalSize)) *100);
						  showLoading.setTitle("正在下载" + percent + "%");
						  break;
						case 4:
							// true表示强制安装，不进行版本号的校验；false则需要版本号校验，如果将要安装应用的版本号不高于现有应用的版本号则终止安装，并返回安装失败。 仅安装wgt和wgtu时生效，默认值 false。
						    plus.runtime.install(task.filename,{force: false,},() => {
								// plus.runtime.restart();
								showLoading.setTitle("下载成功，正在安装...");
								setTimeout(()=>{
									 plus.nativeUI.closeWaiting();
								},1000)
							},(e) => {
								showLoading.setTitle("安装失败，请尝试重新下载");
								setTimeout(()=>{
									  plus.nativeUI.closeWaiting();
								},1000)
							}
						   );
						  break;
					  }
					});
				} catch (err) {
					  plus.nativeUI.closeWaiting();
					  uni.showToast({
						title: '更新失败',
						mask: false,
						duration: 1500
					  });
					  setTimeout(()=>{
						   plus.runtime.restart();
					  },1000)
				}
			 
				// var showLoading = plus.nativeUI.showWaiting("正在下载");
				// var url='https://app-1258143571.cos.ap-guangzhou.myqcloud.com/app/shoyii-doctor.apk'
				// const downloadTask =
				// 	uni.downloadFile({
				// 	    url: url,
				// 		success: (res) => {
				// 			console.log(res)
				// 	        var filePath = res.tempFilePath;
				// 			plus.runtime.install(filePath,{force: false,},(e) => {
				// 				console.log(JSON.parse(e))
				// 				console.log('success'+e)
				// 				showLoading.setTitle("正在安装...");
				// 				setTimeout(()=>{
				// 					  plus.nativeUI.closeWaiting();
				// 				},1000)
				// 			},(e) => {
				// 				console.log(JSON.parse(e))
				// 				console.log('error'+e)
				// 				showLoading.setTitle("安装失败，请尝试重新下载");
				// 				setTimeout(()=>{
				// 					  plus.nativeUI.closeWaiting();
				// 				},1000)
				// 			})
				// 		},
				// 		fail:(err)=>{
				// 			showLoading.setTitle("下载失败");
				// 			setTimeout(()=>{
				// 				  plus.nativeUI.closeWaiting();
				// 			},1000)
				// 		}
				// 	})
				// 	downloadTask.onProgressUpdate((res) => {
				// 		showLoading.setTitle("正在下载" + res.progress + "%");
				// 		console.log(res)
				// 		console.log(res.progress)
				// 	    if(res.progress==100){
				// 			console.log(res.progress)
				// 			showLoading.setTitle("下载完成");
				// 			plus.nativeUI.closeWaiting();
				// 		}
				// 	})
			},
		},
		onLoad() {
			// uni.getProvider({
			// 	service:'payment',
			// 	success(res) {
			// 		console.log(res)
			// 	}
			// })
		},
		// onReady() {
		// 	let _this = this;
		// 	uni.getSystemInfo({
		// 		success(res) {
		// 			console.log(res)
		// 			console.log(res.screenHeight)
		// 			let wHeight=res.windowHeight //windoHeight为窗口高度，主要使用的是这个
		// 			let titleH=uni.createSelectorQuery().select(".scrollContent"); //想要获取的高度的元素名（class/id）
		// 			titleH.boundingClientRect(data=>{//添加节点的布局位置的查询请求
		// 				_this.scrollHeight=wHeight-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
		// 			}).exec()
		// 		}
		// 	})
		// }
	}
</script>

<style scoped lang="scss">
	.list-cell {
			display: flex;
			box-sizing: border-box;
			width: 100%;
			padding: 10px 24rpx;
			overflow: hidden;
			color: #323233;
			font-size: 14px;
			line-height: 24px;
			background-color: #fff;
		}
	// page{
	// 	width: 100%;
	// 	height: 100%;
	// }
	// .aboutUs{
	// 	padding: 0 30rpx;
	// 	display: flex;
	// 	flex-direction: column;
	// 	width: 100%;
	// 	height: 100%;
	// }
	// .header{
	// 	height: 30px;
	// 	background-color: #007AFF;
	// }
	// .content{
	// 	flex: 1;
	// 	width: 100%;
	// 	height: 100%;
	// 	background-color: #07C160;
	// 	overflow: auto;
	// }
	// .footer{
	// 	height: 60px;
	// 	background-color: #F0AD4E;
	// }
	.all{
		width: 100%;
		/* #ifdef H5 */
		height:100%;
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		display: flex;
		flex-direction: column;
	}
	.header{
		width: 100%;
		background-color: #07C160;
		height: 100px;
	}
	.section{
		flex: 1;
		background-color: #007AFF;
		height: 100%;
		overflow: auto;
	}
	.item{
		height: 200px;
		border: 1px solid red;
	}
</style>
