var request=require('../../request.js')
export const editDevice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/device/modify',
		method:'POST',
		data:params
	})
}  