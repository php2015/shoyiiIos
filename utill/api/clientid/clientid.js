var request=require('../../request.js')
export const clientId=params=>{
	console.log(params)
	return request.myRequest({
		url:'/doctor/bindDoctorByClientId',
		method:'POST',
		data:params,
		header:'application/x-www-form-urlencoded'
	})
} 