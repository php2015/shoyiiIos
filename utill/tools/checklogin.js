module.exports={
	checkLogin(url,type){//backpage为返回的页面，backtype为返回的页面跳转类型
		console.log(url)
		console.log(type)
		var token=uni.getStorageSync('token')
		if(!token){
			uni.showModal({
				title:'未登录',
				content:'用户未登录',
				confirmText:'前去登录',
				success(e){   
					console.log(e)
					if(e.confirm){//点击确定
						uni.navigateTo({//1表示switchTab
							url:'/pages/login/tellogin?pages='+url+'&pagetype='+type,
							animationType:'pop-in'
						})
					}	
				},
			})
			return false;
		}
		return [token]
	}
}