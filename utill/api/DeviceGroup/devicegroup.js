var request=require('../../request.js')
export const addgroups=params=>{
	console.log(params)
	return request.myRequest({
		url:'/deviceGroup/saveOrUpdate',
		method:'POST',
		data:params
	})
}  