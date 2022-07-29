var request=require('../../request.js')
// 获取验证码(新旧都是)
export const amendPwd=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/UpdatePwByOldPw',
		data:params,
		method:'POST'
	})
}  