(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0ad4":function(e,t,n){"use strict";n.r(t);var i=n("80b7"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a},"209d":function(e,t,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a2b6")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:o.default}},methods:{_onClick:function(){this.$emit("click")}}};t.default=a},"2efd":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{staticClass:"uni-icons",class:[e.customIcons,e.customIcons?e.type:""],style:{color:e.color,"font-size":e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._onClick.apply(void 0,arguments)}}},[e._v(e._s(e.icons[e.type]))])},a=[]},"318c":function(e,t,n){"use strict";n.r(t);var i=n("2efd"),o=n("f466");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("5775");var r,l=n("f0c5"),s=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"4b3e2b55",null,!1,i["a"],r);t["default"]=s.exports},3575:function(e,t,n){var i=n("24fb"),o=n("1de5"),a=n("dc5e");t=i(!1);var r=o(a);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+r+') format("truetype")}.uni-icons[data-v-4b3e2b55]{font-family:uniicons;text-decoration:none;text-align:center}',""]),e.exports=t},"475d":function(e,t,n){var i=n("98c8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("1590df30",i,!0,{sourceMap:!1,shadowMode:!1})},"4e2f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.register=void 0;var i=n("4348"),o=function(t){return e.log(t),i.myRequest({url:"/register",method:"POST",data:t})};t.register=o}).call(this,n("5a52")["default"])},5775:function(e,t,n){"use strict";var i=n("ed6b"),o=n.n(i);o.a},"691f":function(e,t,n){"use strict";var i=n("475d"),o=n.n(i);o.a},"735d":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("318c").default},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"login-main"},[n("v-uni-view",{staticClass:"login-logo"}),n("v-uni-view",{},[n("v-uni-view",{staticClass:"title_tip"},[n("v-uni-text",[e._v("注册")])],1),n("v-uni-view",{staticClass:"tel_login"},[n("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.areaCode.apply(void 0,arguments)}}},[e._v(e._s(e.areacode))]),n("uni-icons",{attrs:{type:"arrowdown"}}),n("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("v-uni-view",{staticClass:"tel_login"},[n("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入验证码"},model:{value:e.vertifyCode,callback:function(t){e.vertifyCode=t},expression:"vertifyCode"}}),n("v-uni-button",{staticClass:"codeimg",style:e.styleObject,attrs:{type:"default",disabled:e.disabled},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getCode()}}},[e._v(e._s(e.getCodeText))])],1),n("v-uni-input",{staticClass:"tel_login",attrs:{type:"password",placeholder:"设置密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-uni-button",{staticClass:"getcodeBtn",attrs:{type:"default","hover-class":"button-hover"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.register()}}},[e._v("注册")])],1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-checkbox-group",{attrs:{name:""},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.select.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"label"},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:e.check,color:"#86B0D4"}}),n("v-uni-text",[e._v("我已阅读并同意")]),n("v-uni-text",{staticClass:"user",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.userAgree.apply(void 0,arguments)}}},[e._v("《用户协议》")]),n("v-uni-text",[e._v("和")]),n("v-uni-text",{staticClass:"secret",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.userPravicy.apply(void 0,arguments)}}},[e._v("《隐私政策》")])],1)],1)],1)],1)},a=[]},"75d7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.registerCode=void 0;var i=n("4348"),o=function(t){return e.log(t),i.myRequest({url:"/register/getSMSCodeToRegister",data:t})};t.registerCode=o}).call(this,n("5a52")["default"])},"7ee3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.passwordLogin=void 0;var i=n("4348"),o=function(t){return e.log(t),i.myRequest({url:"/token/loginForAndroid",method:"POST",data:t})};t.passwordLogin=o}).call(this,n("5a52")["default"])},"80b7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("75d7"),o=n("4e2f"),a=n("7ee3"),r={data:function(){return{areacode:"+86",phone:"",getCodeText:"获取验证码",styleObject:{color:"black",background:"#ffffff"},disabled:!1,vertifyCode:"",Timer:"",password:"",check:!1}},methods:{areaCode:function(){},userAgree:function(){uni.navigateTo({url:"/pages/aboutShoyii/userAgree"})},userPravicy:function(){uni.navigateTo({url:"/pages/aboutShoyii/privacyPolicy"})},getCode:function(){var t=this;e.log(this.disabled),this.disabled||(""!=this.phone?/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)?(0,i.registerCode)({telNum:this.phone}).then((function(n){e.log(n),0==n.data.code?(t.disabled=!0,t.setTimer()):uni.showToast({title:n.data.msg,icon:"none"})})).catch((function(t){e.log(t)})):uni.showToast({title:"请填写正确手机号码",icon:"none"}):uni.showToast({title:"手机号码不能为空",icon:"none"}))},setTimer:function(){var e=59,t=this;t.getCodeText="重新获取(60)",t.Timer=setInterval((function(){if(e<=0)return t.disabled=!1,t.styleObject.color="#ffffff",t.styleObject.background="#86B0D4",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--}),1e3)},select:function(e){this.check=!0},register:function(){var t=this;e.log(this.password),""!=this.phone?/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)?""!=this.vertifyCode?""!=this.password?this.check?(uni.showLoading({title:"注册中..."}),(0,o.register)({telephone:this.phone,password:this.password,smsVerCode:this.vertifyCode}).then((function(n){e.log(n),uni.hideLoading(),0==n.data.code?(uni.report("register",{telephone:t.phone}),uni.showLoading({title:"登录中..."}),(0,a.passwordLogin)({telephone:t.phone,password:t.password}).then((function(t){e.log(t),0==t.data.code&&(uni.hideLoading(),uni.setStorageSync("token",t.data.object.token),uni.setStorageSync("doctorId",t.data.object.doctorId),uni.navigateTo({url:"/pages/PersonalInfor/auditInfor"}))})).catch((function(t){e.log(t),uni.showToast({title:"err",icon:"none"})}))):uni.showToast({title:n.data.msg,icon:"none"})})).catch((function(t){e.log(t)}))):uni.showToast({title:"请同意用户协议",icon:"none"}):uni.showToast({title:"密码不能为空",icon:"none"}):uni.showToast({title:"验证码不能为空",icon:"none"}):uni.showToast({title:"请填写正确手机号码",icon:"none"}):uni.showToast({title:"手机号码不能为空",icon:"none"})}}};t.default=r}).call(this,n("5a52")["default"])},"98c8":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.title_tip[data-v-0c66155c]{color:#000;font-size:%?42?%;font-weight:600;margin-bottom:%?50?%}.tel_login[data-v-0c66155c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% 0;border-bottom:%?4?% solid #eee;margin-top:%?40?%}.tel_login .uni-icons[data-v-0c66155c]{margin:0 %?16?%}.getcodeBtn[data-v-0c66155c]{background:#ebebeb;color:#8f8f8f;margin-top:%?45?%;font-size:%?32?%;-webkit-border-radius:%?12?%;border-radius:%?12?%}.button-hover[data-v-0c66155c]{color:#fff;background:#86b0d4}.login[data-v-0c66155c]{position:absolute;top:0;left:0;right:0;bottom:0;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?30?%}.login-main[data-v-0c66155c]{padding:0 %?70?%;padding-bottom:%?40?%}.login-main .login-logo[data-v-0c66155c]{width:%?248?%;padding-bottom:%?50?%;margin:%?100?% auto 0 auto}.login-main .login-logo uni-image[data-v-0c66155c]{width:100%;height:100%}.codeimg[data-v-0c66155c]{padding:%?0?% %?12?%;border:%?2?% solid #909090;color:#909090;font-size:%?24?%;-webkit-border-radius:%?12?%;border-radius:%?12?%}.footer[data-v-0c66155c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#909090;font-size:%?28?%}.footer .user[data-v-0c66155c]{color:#86b0d4}.footer .secret[data-v-0c66155c]{color:#86b0d4}.footer .uni-label-pointer[data-v-0c66155c]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),e.exports=t},"9d55":function(e,t,n){"use strict";n.r(t);var i=n("735d"),o=n("0ad4");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("691f");var r,l=n("f0c5"),s=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"0c66155c",null,!1,i["a"],r);t["default"]=s.exports},a2b6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};t.default=i},dc5e:function(e,t,n){e.exports=n.p+"static/fonts/uni.75745d34.ttf"},ed6b:function(e,t,n){var i=n("3575");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("017c0530",i,!0,{sourceMap:!1,shadowMode:!1})},f466:function(e,t,n){"use strict";n.r(t);var i=n("209d"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=o.a}}]);