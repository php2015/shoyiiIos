var request=require('../../request.js')
export const register=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register',
		method:'POST',
		data:params
	})
} 
// 注销账户
 export const logoutaccount=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/register/accountCancellation',
 		method:'POST',
 		data:params,
		header:'application/x-www-form-urlencoded'
 	})
 } 