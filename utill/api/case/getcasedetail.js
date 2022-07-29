var request=require('../../request.js')
export const getcasedetail=params=>{
	console.log(params)
	return request.myRequest({
		url:'/caseHistory/getDetail',
		data:params
	})
}  