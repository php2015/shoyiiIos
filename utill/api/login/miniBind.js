var request=require('../../request.js')
export const miniBind=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/appletsBindWxToDoctor',
		method:'POST',
		data:params
	})
}  
export const miniGetuserInfor=params=>{
	console.log(params)
	return request.myRequest({
		url:'/register/saveWxUser',
		data:params,
		method:'POST',
	})
}  