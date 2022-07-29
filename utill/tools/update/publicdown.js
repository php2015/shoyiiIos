module.exports={
	publicdown(type,url){
		console.log(type)
		console.log(url)
		if(type=='2'){//资源热更新
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
								plus.runtime.restart(); //重启
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
						showLoading.setTitle("下载完成");
					}
				})
		}else{//整包更新
			var showLoading = plus.nativeUI.showWaiting("正在下载,请稍后...");
			const downloadTask =
				uni.downloadFile({
					url: url,
					success: (res) => {
						console.log(res)
						var filePath = res.tempFilePath;
						plus.runtime.install(filePath,{force: false,},(e) => {
							showLoading.setTitle("安装中...");
							setTimeout(()=>{
								  plus.nativeUI.closeWaiting();
							},1000)
						},(e) => {
							showLoading.setTitle("安装失败，请尝试重新下载");
							setTimeout(()=>{
								  plus.nativeUI.closeWaiting();
							},1000)
						})
					},
					fail:(err)=>{
						showLoading.setTitle("下载失败");
						setTimeout(()=>{
							  plus.nativeUI.closeWaiting();
						},1000)
					}
				})
				downloadTask.onProgressUpdate((res) => {
					console.log(res)
					showLoading.setTitle("正在下载" + res.progress + "%");
					if(res.progress==100){
						console.log(res.progress)
						showLoading.setTitle("下载完成");
						plus.nativeUI.closeWaiting();
					}
				})
		}
	}
}