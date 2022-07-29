var request=require('../../request.js')
// 发送二级密码的验证码
export const secondCode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/sendSecondLevelPasswordSMS',
		data:params
	})
} 
// 校验验证码
 export const vertifyCode=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/register/checkSecondLevelPasswordSMS',
 		data:params,
		// header:'application/x-www-form-urlencoded'
 	})
 } 
 // 设置二级密码
 export const setSecondPwd=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/doctor/secondLevelPasswordSwitch',
 		data:params,
 		method:'POST'
 	})
 } 