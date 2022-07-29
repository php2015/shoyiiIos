var request=require('../../request.js') 
export const wechatLogin=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/loginAndroidForWx',
		method:'POST',
		data:params
	})
}  