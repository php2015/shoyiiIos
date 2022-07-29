var request=require('../../request.js')
export const getBanner=params=>{
	console.log(params)
	return request.myRequest({
		url:'/slideShow/getAppHomeSlideShows',		
		data:params
	})
}  