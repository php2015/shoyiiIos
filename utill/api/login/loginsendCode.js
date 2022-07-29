var request=require('../../request.js')
export const loginsendCode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/sendLoginVerificationCode',
		data:params
	})
}  