var request=require('../../request.js')
export const amend=params=>{
	// console.log(params)
	return request.myRequest({
		url:'/doctor/modify',
		method:'POST',
		data:params
	})
}  
export const getDepartments=params=>{
	// console.log(params)
	return request.myRequest({
		url:'/diseaseCategory/getAllDepartments',
		data:params
	})
} 
