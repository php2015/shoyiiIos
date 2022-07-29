var request=require('../../request.js')
export const updateLog=params=>{
	console.log(params)
	return request.myRequest({
		url:'/appUpdateLog/loadAll',		
		data:params
	})
}  