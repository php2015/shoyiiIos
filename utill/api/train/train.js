var request=require('../../request.js')
export const getTraindata=params=>{//获取培训的数据
	console.log(params)
	return request.myRequest({
		url:'/train/loadAll',
		data:params
	})
}
export const sendTrain=params=>{//培训报名
	console.log(params)
	return request.myRequest({
		url:'/train/signUp',
		data:params,
		method:'POST',
	})
}
export const getReportInfor=params=>{//获取报名信息
	console.log(params)
	return request.myRequest({
		url:'/train/getSignUpMessage',
		data:params
	})
}
export const amendInfor=params=>{//获取报名信息
	console.log(params)
	return request.myRequest({
		url:'/train/updateSignUpMessage',
		data:params,
		method:'POST',
	})
}
export const getsingleInfor=params=>{//获取报名信息的详情
	console.log(params)
	return request.myRequest({
		url:'/train/getSingleSignUpMessage',
		data:params,
	})
}

