var request=require('../../request.js')
export const appleLogin=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/appleLogin',
		data:params,
		method:'POST',
		header:'application/x-www-form-urlencoded'
	})
} 
export const appleBind=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/appleBindDoctor',
		data:params,
		method:'POST',
		header:'application/x-www-form-urlencoded'
	})
} 
