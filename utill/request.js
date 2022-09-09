// if(process.env.NODE_ENV === 'production'){
//     // 生产环境
//     BASE_URL = 'http://' + window.location.host + '/net'
// }else if(process.env.NODE_ENV === 'development'){
//     // 开发环境
//     BASE_URL = "https://doctor.shoyii.com"
// }else{
	// BASE_URL = "https://doctor.shoyii.com"
	// }
import Request from 'luch-request'
import {requestUrl,connectUrl,uploadUrl} from './baseUrl/baseurl.js'
// 清除loading计时器
const clearTimeoutByUrl = (url, requestList) => {
	// console.log(url,requestList)
    for (let item in requestList) {
        if (url === requestList[item]['url']) {
			// console.log('执行几次',requestList[item]['timeId'])
            clearTimeout(requestList[item]['timeId']);
        }
    }
}
let timers={
	requestCount:0,// 累加请求次数
	requestTimeIdList:[]
};
const http = new Request({
	baseURL: requestUrl,
	// 跨域请求时是否携带凭证（cookies）仅H5支持
	// #ifdef H5
	withCredentials:true,//是否携带凭证
	// #endif
	// #ifdef APP-PLUS
	firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 
	// #endif
	// dataType:'json',
	timeout:6000,
	validateStatus: (statusCode) => { // statusCode 必存在。非必填选项
		// console.log(statusCode)
		switch (statusCode) {
			case 400:
				console.log('请求出错')
				uni.showToast({
					title:'请求出错',
					icon:'none'
				})
				break
			case 401:
				console.log('授权失败，请重新登录')
				uni.showToast({
					title:'验证信息过期,请重新登录',
					icon:'none'
				})
				return
			case 403:
				console.log('拒绝访问')
				uni.showToast({
					title:'拒绝访问',
					icon:'none'
				})
				break
			case 404:
				console.log('请求错误,未找到该资源')
				uni.showToast({
					title:'请求错误,未找到该资源',
					icon:'none'
				})
				//页面不存在(或者接口不存在)
				// uni.navigateTo({
				// 	url:'/pages/errpage/errpage'
				// })
				break
			case 500:
				console.log('服务端错误')
				uni.showToast({
					title:'服务端错误',
					icon:'none'
				})
				break
		}
		return statusCode >= 200 && statusCode < 300
	},
});
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	// console.log(config)
	switch(config.custom.urlType){
		case 'connect'://聊天相关
			config.baseURL= connectUrl
		break;
		case 'delfile'://投诉图片的删除
			config.baseURL= uploadUrl
		break;
		default:
			config.baseURL= requestUrl
		break;
	}
	// console.log(token)
	  // 需要token 
	// if (config.custom.auth) {
		 config.header.token = uni.getStorageSync('token') // 拦截器header加参
	// }
	// loading
	if (config.custom.loading) {
		timers.requestCount++;
		// 如果接口请求小于2000ms的话 那么就不显示loading
		const timeId = setTimeout(function() {
			uni.showLoading({
			  title: '数据加载中...',
			})
		}, 2000)
		timers.requestTimeIdList.push({
		   timeId: timeId,
		   url: config.url
		});
	}
    // if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
    //    return Promise.reject(config)
    // }
  return config
}, config => { // 可使用async await 做异步操作
  return Promise.reject(config)
})
http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
	// console.log(response,response.data)
	if (response.config.custom.loading) { // 清除loading
	    timers.requestCount--;
	    clearTimeoutByUrl(response.config.url, timers.requestTimeIdList);
	    if (timers.requestCount <= 0) {
		    uni.hideLoading()
	    }
	}
    if (response.statusCode !== 200) { // 服务端返回的状态码不等于200，则reject()
		uni.showToast({
			title:response.errMsg,
			icon:'none'
		})
       return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
	}else{
		return response
	}
  }, (err) => { /*  对响应错误做点什么 （statusCode !== 200）*/
    console.log(err)
    return Promise.reject(err)
})
export const myRequest = (options) =>{
	// console.log(options)
	return new Promise((resolve,reject)=>{
		http.request({
		    method: options.method || 'GET',//不传的话，默认是GET,顺序不要颠倒
		    url: options.url,
		    data: options.data||{},//不传的话，默认是个空对象	,
			header:{
				'Content-Type':options.header || 'application/json;charset=UTF-8',//默认//对于 POST 方法且 header['content-type'] 为 application/json 的数据，会进行 JSON 序列化。
				// 'Content-Type':'application/x-www-form-urlencoded',//会将数据转换为 query string。
			},
			custom: {
				auth:options.auth||false,
				loading:options.loading || false,
				urlType:options.urlType || '',
			}, // 自定义参数
		    // params: { // 会拼接到url上
		    //   token: '1111'
		    // },
		    // 返回当前请求的task, options。不要在此处修改options。
		  //   getTask: (task, options) => {
				// console.log(task,options)
		    //   // setTimeout(() => {
		    //   //   task.abort()//中断当前任务
		    //   // }, 500)
		    // },
		}).then(res=>{
			// console.log(res)
			resolve(res)//返回数据
		}).catch(err=>{
			console.log(err)
			reject(err)
		})
	})
}