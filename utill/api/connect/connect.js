var request=require('../../connect.js')
var webrequest=require('../../request.js') //8083
var Cosrequest=require('../../cosDelete.js') //8086
// 发送数据
export const sendMessage=params=>{
	console.log(params)
	return request.myRequest({
		url:'/message/sendPriMsg',
		data:params,
		method:'POST',
		header:'application/x-www-form-urlencoded'
	})
}  
// 聊天列表
export const findchatList=params=>{
	console.log(params)
	return request.myRequest({
		url:'/message/queryChatList',
		data:params,
	})
} 
// 查询历史记录
 export const findchatLastest=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/message/queryChatMsgDetail',
 		data:params,
 	})
 } 
 // 获取通讯录
  export const getAddress=params=>{
  	console.log(params)
  	return request.myRequest({
  		url:'/friend/loadAllFriends',
  		data:params,
  	})
  } 
 // 创建群组，从病例
 export const createCaseGroup=params=>{ //8083
 	console.log(params)
 	return webrequest.myRequest({
 		url:'/caseHistory/createCaseHistoryChatGroup',
 		data:params,
 		method:'POST',
		header:'application/x-www-form-urlencoded'
 	})
 } 
 // 添加群组成员
 export const addMember=params=>{ 
 	console.log(params)
 	return request.myRequest({
 		url:'/message/addMemberToGroup',
 		data:params,
 		method:'POST',
 	})
 }
 // 获取群组成员信息
 export const getGroupMember=params=>{ 
 	console.log(params)
 	return request.myRequest({
 		url:'/message/queryGroupNumberDetail',
 		data:params,
 	})
 }
 // 查询好友请求
 export const getFriendQuest=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/friend/loadRecentFriends',
 		data:params,
 	})
 }
 // 同意添加以及发送添加请求
export const agreeQuest=params=>{
 	console.log(params)
 	return request.myRequest({
 		url:'/friend/submit',
 		data:params,
		method:'POST',
 	})
 }
 // 删除好友
 export const deleteFriends=params=>{
  	console.log(params)
  	return request.myRequest({
  		url:'/friend/delete',
  		data:params,
  	})
  }
  // 移除聊天列表
  export const deleteChatList=params=>{
   	console.log(params)
   	return request.myRequest({
   		url:'/message/removeChat',
   		data:params,
		method:'POST',
		header:'application/x-www-form-urlencoded'
   	})
   }
   // 搜索好友
   export const searchFriends=params=>{
    	console.log(params)
    	return request.myRequest({
    		url:'/friend/searchForFriends',
    		data:params,
    	})
    }
	// 自由创建群组
	export const createGroup=params=>{
	 	console.log(params)
	 	return request.myRequest({
	 		url:'/message/submitGroup',
	 		data:params,
			method:'POST'
	 	})
	 }
	 //聊天投诉
	   export const Chatcomplaint=params=>{
	     console.log(params)
	     return webrequest.myRequest({
	      url:'/complaint/submit',
	      data:params,
	     method:'POST'
	     })
	    }
	     // 删除聊天投诉的图片
	    export const delPicture=params=>{
	     console.log(params)
	     return Cosrequest.myRequest({
	      url:'/cosFile/delFileById',
	      data:params,
	      method:'POST',
	      header:'application/x-www-form-urlencoded'
	     })
	    }