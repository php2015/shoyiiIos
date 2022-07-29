var request=require('../../request.js')
export const registerCode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/getSMSCodeToRegister',
		data:params
	})
}  