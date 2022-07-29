var request=require('../../request.js')
export const aboutUs=params=>{
	console.log(params)
	return request.myRequest({
		url:'/contactUs/getContactUsDetails',
		data:params
	})
} 
export const course=params=>{
	console.log(params)
	return request.myRequest({
		url:'/doct/history/getHistoryList',
		data:params
	})
} 