var request=require('../../request.js')
export const loginCode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/loginForAndroid',
		method:'POST',
		data:params
	})
}  