<script>
// 检查版本更新
import {checkUpdate} from '@/utill/tools/update/checkUpdate.js'
import {push} from '@/utill/tools/push.js'
import {prelogin} from '@/utill/tools/prelogin.js'
// 是否展示引导页
import {guidePage} from '@/utill/tools/guidePage.js'
// 检测是否存在微信,qq等应用
import {ThirdParty} from '@/utill/tools/ThirdParty.js'
// #ifdef H5
import './common/js/iconfont.js'
// #endif
export default { 
	globalData: {  
	  preloginStatus: true,
	  ifThird:{
	     ifweixin:true,//是否存在第三方的数据
	     ifqq:true,
	  }
	 },
	onLaunch: function() {
		// #ifdef APP-PLUS||MP-WEIXIN
		if(!uni.getStorageSync('uploadLogo')){//本地没有存储图片，就用shoyii默认的
			uni.setStorageSync('uploadLogo','/static/image/shoyiilogo.png')
		}
		// #endif
		// #ifdef H5
		uni.setStorageSync('uploadLogo','/static/image/shoyiilogo.png')
		// #endif
		console.log(this.$store.state)
		// #ifdef APP-PLUS
		//app关闭默认的启动 方法关闭启动图。但是这个时间不能太晚，6s 超时后依旧会主动关闭。
			if(uni.getStorageSync('first_flag')){//引导页已经展示过了
				setTimeout(()=>{
					plus.navigator.closeSplashscreen();
				},200)
			}else{
				setTimeout(()=>{//避免闪屏出来
					plus.navigator.closeSplashscreen();
				},1000)
			}
			// 引导页
			guidePage()
			// 推送通知
			if(plus.os.name=='iOS'){
				console.log(plus.runtime.isAgreePrivacy())
				if(plus.runtime.isAgreePrivacy()){//同意隐私政策,才启动push服务
					push()
					// 检查更新
					checkUpdate()
				}
			}else{
				push()
				// 检查更新
				checkUpdate()
			}
			prelogin()
			// 是否存在微信，qq等应用
			ThirdParty()
			// #endif
	},
	onShow: function() {
	    // #ifdef APP-PLUS
		// 获取系统主题
		var style=plus.navigator.getUIStyle()
		if('dark'==style){
			console.log('暗黑模式')
			this.$store.commit('changeIosTheme',true)
		}else{
			this.$store.commit('changeIosTheme',false)
		}
	    var args= plus.runtime.arguments;
	    console.log(args) // {"name":"","path":"","query":"","id":0} 
	    if(args){
	        console.log(args)
	        if(typeof args=='string'){
	            if(args.indexOf("?")!=-1){
	              var parameter1 = args.split("newsId=")[1];
	              var parameter2 = args.split("modelId=")[1];
				  console.log(parameter1)
				  console.log(parameter2)
					if(parameter1){//新闻
						uni.navigateTo({
							url:'/pages/news/newsDetail?id='+parameter1
						})
				    }else if(parameter2){
						uni.navigateTo({
							url:'/pages/publicModel/modelDetail?modelId='+parameter2
						})
				    }
				}
			}
	  }
	  // #endif
		// socket 的连接，用户从后台切换前台时，进行重连，id存在，意味着已登录
		console.log(this.$store.state.is_open_socket,this.$store.state.socketTask,this.$store.getters['user/info'].doctorId)
	    if(!this.$store.state.socketTask){
			if(!this.$store.state.is_open_socket&&this.$store.getters['user/info'].doctorId){
				this.$store.state.timerheart&&clearInterval(this.$store.state.timerheart)
				this.$store.dispatch('WEBSOCKET_INIT',this.$store.getters['user/info'].doctorId) //初始化，创建socket
			} 
		}
	 },
	onHide: function() {
		console.log('App Hide');
		// #ifdef APP-PLUS
		// plus.nativeUI.toast("树蚁医生切换到后台运行")
		// #endif
		
	},
};
</script>
<style lang="scss">
	page{
		background-color: #F8F8F8;
		// height: 100%;
	}
	@import '@/common/css/dark.css';
	@import "@/uview-ui/index.scss";
	// vantweap组件库
	/* #ifdef MP-WEIXIN */
		// @import "@/wxcomponents/vant/dist/common/index.wxss";
	/* #endif */
	/* #ifndef APP-PLUS-NVUE */
	@import "@/common/css/iconfont.css";
	@import "@/common/css/base.css";
	/* #endif */
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

</style>
