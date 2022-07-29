var request=require('../../request.js')
export const doctorScan=params=>{
	console.log(params)
	return request.myRequest({
		url:'/token/loginForScan',
		method:'POST',
		data:params,
		header:'application/x-www-form-urlencoded'
	})
}  