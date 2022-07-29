var request=require('../../request.js')
export const getOtherInfor=params=>{
	return request.myRequest({//获取用户个人信息
		url:'/doctor/getDoctorById',
		data:params
	})
}  