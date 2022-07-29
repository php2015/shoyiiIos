
var request=require('../../request.js')
// 获取本地手机号码登录注册
export const localTelLogin=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/oneClickLoginForAndroid',
		data:params,
		method:'POST',
		header:'application/x-www-form-urlencoded'
	})
}