var request=require('../../request.js')
export const wechatcode=params=>{
	console.log(params)
	return request.myRequest({
		url:'/login/getSMSCodeByWxTelephone',
		data:params
	})
}  