var request=require('../../request.js')
export const feedback=params=>{
	console.log(params)
	return request.myRequest({
		url:'/feedback/add',
		data:params,
		method:'POST'
	})
}  