var request=require('../../request.js')
export const vrGroup=params=>{
	console.log(params)
	return request.myRequest({
		url:'/device/addLoadInstructions',
		method:'POST',
		data:params
	})
}  