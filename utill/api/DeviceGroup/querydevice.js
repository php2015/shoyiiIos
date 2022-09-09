var request=require('../../request.js')
export const querydevice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/deviceGroup/getDevices',
		data:params,
		loading:true
	})
}  