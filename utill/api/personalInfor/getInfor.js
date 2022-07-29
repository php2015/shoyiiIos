var request=require('../../request.js')
export const getInfor=params=>{
	return request.myRequest({//获取用户个人信息
		url:'/doctor/getDetails',
		data:params
	})
} 