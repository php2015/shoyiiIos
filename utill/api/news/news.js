var request=require('../../request.js')
// 获取新闻列表，
export const getNewsList=params=>{
	console.log(params)
	return request.myRequest({
		url:'/news/getNews',
		data:params
	})
}  