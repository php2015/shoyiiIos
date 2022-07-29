var request=require('../../request.js') 
export const wechatBind=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/appBindWxToDoctorToLogin',
		method:'POST',
		data:params
	})
}  