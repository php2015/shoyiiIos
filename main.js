import Vue from 'vue'
import App from './App'
import store from './store'
Vue.prototype.$store = store
// 引入语言包，注意路径
import zh from '@/common/locales/zh.js';
import en from '@/common/locales/en.js';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) 
import {myRequest} from './utill/request.js'
import {myConnect} from './utill/connect.js'
import {myCos} from './utill/cosDelete.js'
// 引入socket.js文件
// import'./utill/socket/useSocket.js';
// 线上分享路径,socket, 3js分享路径，上传图片地址
import {baseurl,socketurl,JsUrl,uploadUrl} from './utill/baseUrl/baseurl.js'
import {checkLogin} from './utill/tools/checklogin.js'
import {checkAudit} from '@/utill/tools/checkAudit.js'
import {uploadRequest} from './utill/upload.js'
import {amendNavigator} from '@/utill/tools/checkdark.js'
import uView from "./uview-ui"
import moment from 'moment'
Vue.use(uView)
// 构造i18n对象
const i18n = new VueI18n({
	// 默认语言，这里的local属性，对应message中的zh、en属性
	locale: 'zh',
	// 引入语言文件
	messages: {
		// 这里的属性名是任意的，您也可以把zh设置为cn等，只是后续切换语言时
		// 要标识这里的语言属性，如：this.$i18n.locale = zh|en|zh|xxx
		'zh': zh, // 这里为上面通过import引入的语言包
		'en': en,
	}
})
// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n
// 全局过滤器
Vue.filter("timeStamp",(data)=>{
	return moment(data).format('YYYY-MM-DD')
}) 
// 将该方法挂载到全局
Vue.prototype.$onlineUrl=baseurl
Vue.prototype.$socketurl=socketurl
Vue.prototype.$JslineUrl=JsUrl
Vue.prototype.$uploadUrl=uploadUrl
Vue.prototype.$myRequest=myRequest
Vue.prototype.$myConnect=myConnect
Vue.prototype.$uploadRequest=uploadRequest
Vue.prototype.$myCos=myCos
let bus=new Vue()
Vue.prototype.bus=bus
// 是否登陆
Vue.prototype.checkLogin=checkLogin
Vue.prototype.checkAudit=checkAudit
Vue.prototype.amendNavigator=amendNavigator
Vue.config.productionTip = false
console.log=function(){}; 
App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
