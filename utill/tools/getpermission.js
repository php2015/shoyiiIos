import permision from "@/js_sdk/wa-permission/permission.js"
function requestIosPermission(permisionID) {
	var result = permision.judgeIosPermission(permisionID)
	return result;  
}
function getpermission(permisionID){
	var result=requestIosPermission(permisionID)// RECORD_AUDIO
	return result
	// result.then(res=>{
	// 	console.log(res)
	// 	var strStatus
	// 	if (res == 1) {
	// 	    strStatus = "已获得授权"
	// 	} else if (res == 0) {
	// 	    strStatus = "未获得授权"
	// 	} else {//-1
	// 	    strStatus = "被永久拒绝权限"
	// 	}
	// })
}
// 开启权限
function opensetting(){
	permision.gotoAppPermissionSetting()
}
export default {
	getpermission,
	opensetting
}