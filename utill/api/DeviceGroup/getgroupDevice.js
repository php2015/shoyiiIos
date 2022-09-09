var request=require('../../request.js')
export const getgroupDevice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/device/getGroupDevices',
		data:params,
		loading:true
	})
} 