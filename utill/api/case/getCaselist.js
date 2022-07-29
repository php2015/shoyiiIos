var request=require('../../request.js')
export const getCaselist=params=>{
	console.log(params)
	return request.myRequest({
		url:'/caseHistory/getCaseHistoryList',
		data:params
	})
}  