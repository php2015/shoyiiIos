var request=require('../../request.js')
// 获取新闻列表，
export const getNoticeDetail=params=>{
	console.log(params)
	return request.myRequest({
		url:'/Message/getMessageContentList',
		data:params
	})
}  
export const getNotice=params=>{
	console.log(params)
	return request.myRequest({
		url:'/Message/getMessageUserList',
		data:params
	})
}  