var request=require('../../request.js')
export const deltegroups=params=>{
	console.log(params)
	return request.myRequest({
		url:'/deviceGroup/delete',
		data:params
	})
} 