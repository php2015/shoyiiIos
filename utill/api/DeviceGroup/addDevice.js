var request=require('../../request.js')
export const addDevice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/device/add',
		method:'POST',
		data:params
	})
}  