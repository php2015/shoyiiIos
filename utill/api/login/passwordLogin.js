var request=require('../../request.js')
export const passwordLogin=params=>{
	console.log(params)
	return request.myRequest({
		url:'/token/loginForAndroid',
		method:'POST',
		data:params
	})
}  