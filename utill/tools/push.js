import {update} from '@/utill/tools/update/checkUpdate.js'
module.exports = {
	push(){
		// click事件（通知与在线聊天创建的通知数据都是触发该事件）
		plus.push.addEventListener('click', function(message) {
			console.log('click事件')
			// plus.nativeUI.toast('click事件接受')
			console.log(message)
			console.log(message.payload) //自定义过来的数据
			if(message.aps){//ios点击的厂商推送,离线情况下
				console.log('ios点击事件')
				var data=message.payload
				console.log(data) //自定义过来的数据
				console.log(data.messageType)
			}else{//android或者是iOS自建通知栏时，所触发的click事件
				console.log('android点击事件')
				if(plus.os.name=='iOS'){
					var data=JSON.parse(message.payload)
				}else{
					var data=message.payload
				}
				console.log(data) //自定义过来的数据
				console.log(data.messageType)
			}
			switch (data.messageType){//更新推送
				case 1:
					if(plus.os.name=='Android'){//ios不做整包推送
						plus.runtime.getProperty(plus.runtime.appid,(infor)=>{
							if(infor.version<data.codeVersion){ //更新
								if(data.updateType=='1'){//整包更新
									var url=data.downloadUrl
								}else{//资源热更新
									var url=data.updateUrl
								}
								update(data.updateType,url) //下载
							}else{
								uni.showToast({
									title:'已是最新版本',
									icon:'none'
								})
							}
						})
					}
				break;
				case 2://新闻推送
					uni.navigateTo({
						url:'/pages/news/newsDetail?id='+data.id
					})
				break;
				case 3://消息推送
					uni.navigateTo({
						url:'/pages/notice/noticeDetail?id='+data.id
					})
				break;
				case 4://审核结果
					uni.navigateTo({ //进入审核页面
						url:'/pages/PersonalInfor/PersonalInfor'
					})
				break;
				case 5://方法库（主要是根据丁教授的方法库推送）
					uni.navigateTo({
						url:'/pages/surgicalData/surgicalDetail?id='+data.id
					})
				break;
				case 6://公开模型库（主要是根据丁教授的方法库推送）
					uni.navigateTo({
						url:'/pages/publicModel/modelDetail?modelId='+data.id+'&classifyId='+data.modelCategory
					})
				break;
				default://默认是进入聊天页面（通常是在线情况下）
					uni.navigateTo({
						url:'/pages/shoyiiChat/index'
					})
				break;
			}
		});
		// receive事件
		// ios在前台，后端使用unipush标准的数据格式，会触发receive事件；ios离线，会直接下发通知栏，点击通知栏触发click事件
		plus.push.addEventListener('receive', function(message) {
			console.log('receive接受消息')
			// plus.nativeUI.toast('receive事件接受')
			console.log(message)
			console.log(message.payload)
			var data=message.payload
			console.log(data)
			if(message.aps){//aps下发的消息，应用在前台
				var options={
					title:message.title
				}
				// var localData=data
				// localData.type='Local' //用于做本地创建通知栏的标识
				// console.log(localData)
				 // 本地通知栏,会继续触发receive事件，但此时的aps为null，以此来对通知栏循环创建的处理；
				plus.push.createMessage(message.content,JSON.stringify(data),options)
			}
			// else if(JSON.parse(message.payload).type =='Local'){
			// 	// 本地创建的通知栏所触发的事件，不做任何处理
			// 	console.log('本地创建的消息，不做处理')
			// }
			else{//这是个推透传过来的消息，对于安卓而言，所选的推送方案，android是不会触发receive事件的。
				// 对与iOS而言，后端所选方案为4，所以要处理通过个推过来的透传消息，此时的aps为null，要新建通知栏
				console.log('个推透传消息过来的数据')
			}
		},false);
	}
}