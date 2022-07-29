module.exports={
	ifAgree(){
		console.log(plus.runtime.isAgreePrivacy())
		if(!plus.runtime.isAgreePrivacy()){  
		  //弹出自定义隐私政策提示框 
		  return false
		}else{
			//正常流程
			return true
		}
	}
}