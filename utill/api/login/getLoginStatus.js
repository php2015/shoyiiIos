var request=require('../../request.js')
export const getLoginStatus=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/loginForApplets',
		method:'POST',
		data:params,
	})
}  