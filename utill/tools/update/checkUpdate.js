import {myRequest} from '../../request.js'
import {publicdown} from './publicdown.js'
module.exports={
	checkUpdate(){
		plus.runtime.getProperty(plus.runtime.appid,(infor)=>{
			console.log(infor.version); 
			myRequest({
				url:'/App/getDoctorIosAppLatestEdition',
			}).then(res=>{
				console.log(res)
				if(res.data.code==0){
					var type=res.data.object.updateType//1整包更新；2热更新
					var ifupdate=res.data.object.updateForceBoolean//是否强制更新
					var url=res.data.object.updateUrl//热更新
					 if(infor.version<res.data.object.codeVersion&&ifupdate){//强制更新
					 // 添加延迟器，避免与广告发生冲突
						plus.globalEvent.addEventListener('splashclosed', function(){
							// 所有启动app的弹窗放在这里
							uni.showModal({
								title:res.data.object.versionTitle||'新版发布',
								content:res.data.object.versionMessage||'有重要内容更新',
								cancelText:'取消下载',
								confirmText:'确定下载',
								success(e){
									console.log(e)
									if(e.confirm){//确定下载	
									  uni.getSystemInfo({
										success:(res) => {
											console.log(res)
											//检测当前平台，如果是安卓则启动安卓更新  
											if (res.platform == "android") {
												publicdown(type,url)	
											}else if(res.platform == "ios"){
												if(type=='2'){//资源热更新
													publicdown(type,url)
												}else{
													// 进入appstore更新
													let appleId= 1569553374
													plus.runtime.launchApplication({
														action:`itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8`
													},function(err){
														console.log(err)
													})
												}
											}
										}
									  })
									}
								},
								fail(e){
									console.log(e)
								}
							})
						}); 
					 }
				}
			}).catch(err=>{
				console.log(err)
			})
		})
	},
	update(type,url){
		uni.getSystemInfo({
			success:(res) => {
				console.log(res)
				//检测当前平台，如果是安卓则启动安卓更新  
				if (res.platform == "android") {
					publicdown(type,url)	
				}else if(res.platform == "ios"){
					if(type=='1'){//1是整包更新 2是资源热更新
						// 进入appstore更新
						let appleId= 1569553374
						plus.runtime.launchApplication({
							action:`itms-apps://itunes.apple.com/cn/app/id${appleId}?mt=8`
						},function(err){
							console.log(err)
						})
					}else{
						publicdown(type,url)
					}
				}
			}
		})
	},
	
}