// 文件的预览
module.exports={
	previewFiles(url){
		console.log(url)
		// #ifndef MP-WEIXIN
		var url=encodeURIComponent(url)
		uni.navigateTo({
			url:'/pages/previewPdf/previewPdf?pdfUrl='+url,
			animationType:'pop-in'
		})
		// #endif
		// #ifdef MP-WEIXIN
		uni.showLoading({
		    title: '打开中...'
		});
		uni.downloadFile({
			url:url,
			success(e){
				uni.openDocument({
					filePath:e.tempFilePath,
					fileType:'pdf',
					success(e){
						uni.hideLoading()
					},
					fail(err) {
						uni.hideLoading()
						console.log(err)
					}
				})
			},
			fail(e){
				uni.hideLoading()
				console.log(e)
			}
		})
		// #endif
		
	}
}