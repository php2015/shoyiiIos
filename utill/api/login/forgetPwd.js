var request=require('../../request.js')
// 获取验证码
export const getcode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/getSMSCodeToRetrievePassword',
		data:params
	})
}  
// 短信验证
export const vertifyCode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/retrievePasswordVerification',
		data:params,
		method:'POST',
		// header:'application/x-www-form-urlencoded'
	})
}  
// 密码修改成功
export const amendPwd=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/retrievePassword',
		data:params,
		method:'POST',
	})
}  
