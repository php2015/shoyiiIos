(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoyiiChat-newFriend"],{29096:function(e,t,n){var a=n("29de");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("49f1f224",a,!0,{sourceMap:!1,shadowMode:!1})},"29de":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.slot-wrap[data-v-5ea1bfda]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add[data-v-5ea1bfda]{padding:0 %?20?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#7dccec;color:#fff}',""]),e.exports=t},"4f26":function(e,t,n){"use strict";n.r(t);var a=n("9007"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"76bd":function(e,t,n){"use strict";n.r(t);var a=n("db86"),i=n("4f26");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("cb32");var s,o=n("f0c5"),c=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5ea1bfda",null,!1,a["a"],s);t["default"]=c.exports},9007:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("3e49"),i={data:function(){return{background:{backgroundColor:"#f8f8f8"},add:!0,searchFriends:"",userId:uni.getStorageSync("doctorId"),newList:[]}},methods:{back:function(){uni.navigateBack({delta:1})},addFriend:function(){this.add=!1},search:function(){(0,a.searchFriends)({value:this.searchFriends,userId:this.userId,userType:"D"}).then((function(t){e.log(t),0==t.data.code?0==t.data.object.length?uni.showToast({title:"暂无数据",icon:"none"}):uni.navigateTo({url:"/pages/shoyiiChat/searchInfor?data="+encodeURIComponent(JSON.stringify(t.data.object[0]))}):uni.showToast({title:t.data.msg,icon:"none"})})).catch((function(t){e.log(t)}))},cancel:function(){this.add=!0},friendQuest:function(){var t=this;(0,a.getFriendQuest)({userId:this.userId,userType:"D"}).then((function(n){e.log(n),0==n.data.code&&(t.newList=n.data.object)})).catch((function(e){log(e)}))},agree:function(t){var n=this;(0,a.agreeQuest)({id:t.id,userId:t.userId,userType:t.userType,anotherUserId:t.anotherUserId,anotherUserType:t.anotherUserType,isFriend:"1"}).then((function(t){e.log(t),0==t.data.code?n.friendQuest():uni.showToast({title:t.data.msg,icon:"none"})})).then((function(t){e.log(t)}))}},onLoad:function(){this.friendQuest()}};t.default=i}).call(this,n("5a52")["default"])},cb32:function(e,t,n){"use strict";var a=n("29096"),i=n.n(a);i.a},db86:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uNavbar:n("b391").default,uIcon:n("7aef").default,uSearch:n("61cc").default,uniList:n("1e42").default,uniListItem:n("278e").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("u-navbar",{staticClass:"navbar",attrs:{"is-back":!1,title:"",background:e.background}},[e.add?n("v-uni-view",{staticClass:"slot-wrap"},[n("u-icon",{attrs:{name:"arrow-left",size:"40",color:"#999"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}}),n("v-uni-text",{staticStyle:{"font-size":"32rpx",color:"#999"}},[e._v("新的朋友")]),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addFriend.apply(void 0,arguments)}}},[e._v("添加朋友")])],1):n("v-uni-view",{staticClass:"slot-wrap"},[n("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between","align-items":"center"}},[n("u-search",{attrs:{"bg-color":"#ffffff",clearabled:!0,"show-action":!1,"action-text":"搜索",animation:!0,shape:"round",placeholder:"手机号/名称/医院"},on:{search:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.searchFriends,callback:function(t){e.searchFriends=t},expression:"searchFriends"}}),n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)}}},[e._v("取消")])],1)],1)],1),e._l(e.newList,(function(t,a){return n("uni-list",{key:a},[n("uni-list-item",{attrs:{title:t.anotherUserName,note:t.content?t.content:"请求添加你为朋友",thumb:t.anotherUserProfile?t.anotherUserProfile:"/static/image/person.png","thumb-size":"lg"}},[n("template",{slot:"footer"},[1==t.isFriend?n("v-uni-text",[e._v("已添加")]):e._e(),0==t.isFriend?n("v-uni-view",{staticClass:"add",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.agree(t)}}},[n("v-uni-text",[e._v("同意")])],1):e._e(),2==t.isFriend?n("v-uni-text",[e._v("已过期")]):e._e()],1)],2)],1)}))],2)},r=[]}}]);