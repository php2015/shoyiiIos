var request=require('../../request.js')
export const deleteDevice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/device/unBind',
		data:params
	})
} 