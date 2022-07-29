import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import {socketurl} from '@/utill/baseUrl/baseurl.js'
import createorder from './modules/createorder.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		user,
		createorder
	},
	state: {
		//-------------------------------------
		hasLogin: false, //登录状态切换
		openid: null,
		// ----------------------------
		PagesUrl:'',//跳转的页面
		PagesType:"",//跳转页面的类型
		modelIds:'',
		appTheme:'AppWhite',//app主题背景
		modulebg:'ModuleWhite',//各模块的背景色
		textcolor:'Textblack',//字体颜色
		dataStatus:false,//更改logo以及登陆切换，退出登录时，刷新数据
		connectStatus:false,//未连接
		newNoticeStatus:false,//首页入口红点
		socketTask:null,//socket任务
		is_open_socket:false,//是否打开的状态
		SocketState: {},
		SocketStateErr: {},
		socketData:'',
		timerheart:null,
		isDark:false,//是否是暗黑主题
	},
	mutations: {
		// 初始化
		SOCKET_INIT(state,id){
			console.log(socketurl)
			console.log(id)
			state.socketTask=uni.connectSocket({ //登陆创建
				url: socketurl+id,
				success:(e)=>{
					console.log(e)
					console.log('创建成功')
				},
				fail:(err)=>{
					console.log(err)
					console.log('创建失败')
				}
			})
			// 监听是否打开
			state.socketTask.onOpen((res) => {
				console.log("WebSocket连接正常打开中...！");
				state.is_open_socket = true;
				state.timerheart=setInterval(()=>{ //10s发一次心跳
					console.log(state.is_open_socket,state.socketTask)
					 state.socketTask.send({
						data: 'head',
						success(e) {
							// console.log("心跳发送成功");
						},
						fail(e) {
							console.log(e)
							console.log('心跳发送失败')
							state.is_open_socket = false;
							state.timerheart&&clearInterval(state.timerheart)
						}
					}); 
				},10000)
			})
			// 注：只有连接正常打开中 ，才能正常收到消息
			state.socketTask.onMessage((res) => {
				// console.log("收到服务器内容：" + res.data);
				if(res.data=='head'){
					state.socketData=res.data
				}else{
					state.socketData=JSON.parse(res.data)
				} 
				// #ifdef APP-PLUS
				var page =getCurrentPages();
				var pageroute=page[page.length-1].route
				// console.log(pageroute)
				if(pageroute=='pages/shoyiiChat/index'||pageroute=='pages/shoyiiChat/chatWindow'){
				// 在聊天页面不创建通知栏
				}else{ //其他页面创建通知栏
					if(res.data=='head'){//心跳回复
					}else if(JSON.parse(res.data).friend_request){//请求的通知
						console.log(JSON.parse(res.data).friend_request)
						console.log('创建添加好友请求的通知栏')
					}else{
						const message=JSON.parse(res.data).chatMsgDetail
						console.log(message)
						if(message.groupId){ //群组消息
							var title=message.groupName
						}else{
							var title=message.userName
						}
						var options={
							title:title,//标题
							sound:'system',//提示音
							cover:true,//消息覆盖
							when:message.sendTime,//消息上显示的提示时间
						}
						// content ,payload(数据),options（JSON对象，获客户端创建本地消息的参数）
						// #ifdef APP-PLUS
						if(plus.os.name=='iOS'){//
							
						}else{
							plus.push.createMessage(message.content,message,options)
						}
						// #endif
						// 迁移到全局方法里
						// plus.push.addEventListener('click', function(message) {
						// 	console.log('click事件')
						// 	console.log(message.payload) //即是message的数据
						// 	var data=message.payload //无病例id，群组id，群组人数，名称；只能跳转聊天首页
						// 	uni.navigateTo({
						// 		url:'/pages/shoyiiChat/index'
						// 	})
						// })
					}
				}
				// #endif
			})
			state.socketTask.onClose(res=>{
				console.log(res,'监听WebSocket连接关闭事件触发')
				// uni.showToast({
				// 	title:'监听连接关闭事件触发'
				// })  
				console.log(state.timerheart)
				if(state.timerheart){//如果定时器存在，关闭
					clearInterval(state.timerheart)
				}
				state.is_open_socket=false 
				state.socketTask=null
			})
			state.socketTask.onError(res=>{
				console.log(res,'监听WebSocket错误事件')
				if(state.timerheart){//如果定时器存在，关闭
					clearInterval(state.timerheart)
				}
				state.is_open_socket=false
				state.socketTask=null
				// uni.showToast({
				// 	title:'error'+JSON.stringify(res) 
				// }) 
			}) 
		},
		// 发送消息
		SOCKET_SEND(state, data) {
			console.log("ws发送！");
			console.log(data)
			state.socketTask.send({
				data: data,
				async success(e) {
					console.log("消息发送成功");
				},
			});
		},
		// 关闭socket
		SOCKET_CLOSE(state, data){
			state.socketTask.close({
				success(e){
					if(state.timerheart){//如果定时器存在，关闭
						console.log(e,'关闭socekt')
						clearInterval(state.timerheart)
					}
					state.socketTask=null
					state.is_open_socket=false
				},fail(err){
					console.log(err)
				}
			})
		},
		hasLogin(state, provider) {
			console.log(provider)
			state.hasLogin = provider;
		},
		// 保存跳转的页面
		savePages(state,payload){
			console.log(state)
			console.log(payload)
			state.PagesUrl=payload.pages//跳转的页面路径
			state.PagesType=payload.pagetype//跳转方式，1 为switchTab；2为navigateTo
		},
		saveModelIds(state,payload){
			state.modelIds= payload
			console.log(state.modelIds)
		},
		// app主题颜色调整(测试)
		changeTheme(state,data){
			console.log(state)
			console.log(data)
			state.appTheme=data.appbg
			state.modulebg=data.moduleBg
			state.textcolor=data.Textcolor
		},
		// 更改全局的数据(即全局页面刷新)
		changeDataStatus(state,data){
			state.dataStatus=data
		},
		connectData(state,data){
			console.log(data)
			state.newNoticeStatus=data
		},
		// 修改dark或light
		changeIosTheme(state,data){
			state.isDark=data
		},
	},
    getters:{
        appTheme(state){
            return state.appTheme
        },
		moduleBg(state){
			return state.modulebg
		},
		textcolor(state){
			return state.textcolor
		},
		DataStatus(state){
			return state.dataStatus
		},
		connect(state){
			console.log(state.newNoticeStatus)
			return state.newNoticeStatus
		},
		isDark(state){
			return state.isDark
		}
    },
	actions: {
		// 初始化
		WEBSOCKET_INIT(
			{commit}, id) {
			commit('SOCKET_INIT', id)
		},
		// 发送消息
		async WEBSOCKET_SEND({
			dispatch,commit,state,rootState
		}, data) {
			if(!state.socketTask||state.socketTask.readyState!==1){//链接失败，需要重连（目前只进行重连）
				// console.log('你来了')
				state.timerheart&&clearInterval(state.timerheart)
				state.is_open_socket=false
				await dispatch('WEBSOCKET_INIT',rootState.user.userInfo.doctorId)
				// await dispatch('WEBSOCKET_TRUESEND',data)
				// commit('SOCKET_SEND',data) 
			}else{//链接正常，就发消息
				commit('SOCKET_SEND',data)
				// console.log('你出发')
				// await dispatch('WEBSOCKET_TRUESEND',data)
			}   
		},
		WEBSOCKET_TRUESEND({dispatch,commit,state,rootState},data){
			commit('SOCKET_SEND',data)
		},
		// lazy loading openid
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
})
export default store
