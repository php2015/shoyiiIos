(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-map-map"],{"209d":function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a2b6")),o={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:n.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=o},"2efd":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},o=[]},"318c":function(t,e,i){"use strict";i.r(e);var a=i("2efd"),n=i("f466");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5775");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"4b3e2b55",null,!1,a["a"],r);e["default"]=l.exports},3575:function(t,e,i){var a=i("24fb"),n=i("1de5"),o=i("dc5e");e=a(!1);var r=n(o);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+r+') format("truetype")}.uni-icons[data-v-4b3e2b55]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},3615:function(t,e,i){"use strict";var a=i("4ea4");i("a9e3"),i("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("7b2f")),o={name:"u-input",mixins:[n.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,i=t.detail.value;this.trim&&(i=this.$u.trim(i)),this.$emit("input",i),this.defaultValue=i,setTimeout((function(){e.dispatch("u-form-item","on-form-change",i)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"3b81":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".weather[data-v-8a618e6e]{\n\t/* display: flex;\n\tflex-direction: row; */}",""]),t.exports=e},"4f0a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{-webkit-border-radius:%?6?%;border-radius:%?6?%;-webkit-border-radius:4px;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},5775:function(t,e,i){"use strict";var a=i("ed6b"),n=i.n(a);n.a},"696f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uInput:i("ffa5").default,uniIcons:i("318c").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE"}},[i("u-input",{attrs:{type:"text",border:!0,height:"300"},model:{value:t.searchContent,callback:function(e){t.searchContent=e},expression:"searchContent"}})],1),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")]),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getlocation.apply(void 0,arguments)}}},[t._v("获取位置")]),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getweather.apply(void 0,arguments)}}},[t._v("获取天气")]),i("v-uni-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getsdkLocation.apply(void 0,arguments)}}},[t._v("获取sdk位置")]),i("v-uni-view",{staticClass:"page-section page-section-gap"},[i("v-uni-text",[t._v("您当前位置是")]),i("v-uni-view",{},[i("v-uni-text",[t._v(t._s(t.locations.country))]),i("v-uni-text",[t._v(t._s(t.locations.province))]),i("v-uni-text",[t._v(t._s(t.locations.city))]),i("v-uni-text",[t._v(t._s(t.locations.district))]),i("v-uni-text",[t._v(t._s(t.locations.street))]),i("v-uni-text",[t._v(t._s(t.locations.streetNum))]),i("v-uni-text",[t._v(t._s(t.locations.poiName))]),i("v-uni-text",[t._v(t._s(t.locations.cityCode))])],1),i("v-uni-map",{staticStyle:{width:"100%",height:"400px"},attrs:{latitude:t.latitude,longitude:t.longitude,markers:t.markers},on:{markertap:function(e){arguments[0]=e=t.$handleEvent(e),t.markertap.apply(void 0,arguments)}}})],1),i("v-uni-view",{},t._l(t.searchlist,(function(e,a){return i("v-uni-view",{key:a,staticStyle:{padding:"10px 0","background-color":"#EEEEEE"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center"}},[i("uni-icons",{attrs:{type:"phone"}}),i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#000"}},[t._v(t._s(e.name))]),i("v-uni-text",{staticStyle:{color:"#000"}},[t._v(t._s(e.address))])],1)],1)],1)})),1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v(t._s(t.weather.city.text))]),i("v-uni-text",[t._v(t._s(t.weather.city.data))])],1),i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v(t._s(t.weather.weather.text))]),i("v-uni-text",[t._v(t._s(t.weather.weather.data))])],1),i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v(t._s(t.weather.temperature.text))]),i("v-uni-text",[t._v(t._s(t.weather.temperature.data))])],1),i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v(t._s(t.weather.windpower.text))]),i("v-uni-text",[t._v(t._s(t.weather.windpower.data))])],1),i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v(t._s(t.weather.humidity.text))]),i("v-uni-text",[t._v(t._s(t.weather.humidity.data))])],1),i("v-uni-view",{staticClass:"weather"},[i("v-uni-text",[t._v("时间")]),i("v-uni-text",[t._v(t._s(t.weather.liveData.reporttime))])],1)],1)],1)},o=[]},"7b2f":function(t,e,i){"use strict";function a(t,e,i){this.$children.map((function(n){t===n.$options.name?n.$emit.apply(n,[e].concat(i)):a.apply(n,[t,e].concat(i))}))}i("99af"),i("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={methods:{dispatch:function(t,e,i){var a=this.$parent||this.$root,n=a.$options.name;while(a&&(!n||n!==t))a=a.$parent,a&&(n=a.$options.name);a&&a.$emit.apply(a,[e].concat(i))},broadcast:function(t,e,i){a.call(this,t,e,i)}}};e.default=n},"84ba":function(t,e,i){"use strict";i.r(e);var a=i("3615"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},8970:function(t,e,i){"use strict";i.r(e);var a=i("d170"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9ec9":function(t,e,i){"use strict";i.r(e);var a=i("696f"),n=i("8970");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("a53d");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"8a618e6e",null,!1,a["a"],r);e["default"]=l.exports},a2b6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=a},a53d:function(t,e,i){"use strict";var a=i("d6d8"),n=i.n(a);n.a},d170:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("fb6a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("d4a2")),o={data:function(){return{latitude:39.909,longitude:116.39742,covers:[{id:1,title:"map地图",latitude:39.909,longitude:116.39742,iconPath:"/static/image/shoyiilogo.png",width:20,height:20,callout:{content:"天安门",color:"#ffffff",fontSize:"14",bgColor:"blue"},label:{content:"",color:"black",fontSize:"14"}}],locations:[],searchlist:[],searchContent:"琶洲",amapPlugin:null,key:"34c1d7c06f414ab22e27351bf0c8ef53",weather:{city:{},weather:{},temperature:{},winddirection:{},windpower:{},humidity:{},liveData:{}}}},computed:{markers:function(){return t.log(this.covers),t.log(this.covers.slice(0)),this.covers.slice(0)}},methods:{markertap:function(e){t.log(e),t.log(e.detail.markerId),uni.openLocation({latitude:this.latitude,longitude:this.longitude,success:function(){t.log("success")}})},search:function(){var e=weex.requireModule("mapSearch"),i=this;e.poiSearchNearBy({point:{latitude:23.095234,longitude:113.399147},key:this.searchContent,index:2},(function(e){t.log(e),t.log(e.currentNumber),t.log(e.pageIndex),t.log(e.pageNumber),i.searchlist=e.poiList,t.log(i.searchlist)}))},getweather:function(){var e=this;this.amapPlugin.getWeather({success:function(i){t.log(i),e.weather=i},fail:function(e){t.log(e)}})},getlocation:function(){var e=this;uni.getLocation({type:"gcj02",geocode:!0,success:function(i){t.log(i),t.log("当前位置的经度："+i.longitude),t.log("当前位置的纬度："+i.latitude),this.latitude=i.latitude,e.latitude=i.latitude,e.longitude=i.longitude,this.longitude=i.longitude,e.covers[0].latitude=i.latitude,e.covers[0].longitude=i.longitude}})},getsdkLocation:function(){var e=this;uni.showLoading({title:"获取信息中"}),this.amapPlugin.getRegeo({success:function(i){t.log(i),e.addressName=i[0].name,uni.hideLoading()},fail:function(e){t.log(e),uni.hideLoading()}})}},onLoad:function(){this.amapPlugin=new n.default.AMapWX({key:this.key})}};e.default=o}).call(this,i("5a52")["default"])},d4a2:function(t,e,i){function a(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"},this.MeRequestConfig={key:t.key,serviceName:"https://restapi.amap.com/rest/me"}}i("4de4"),i("a15b"),i("acd8"),i("ac1f"),i("1276"),a.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){t=t.longitude+","+t.latitude,wx.setStorage({key:"userLocation",data:t}),e(t)},fail:function(i){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:i.errMsg||""})}})},a.prototype.getMEKeywordsSearch=function(t){if(!t.options)return t.fail({errCode:"0",errMsg:"缺少必要参数"});var e=t.options,i=this.MeRequestConfig,a={key:i.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"};e.layerId&&(a.layerId=e.layerId),e.keywords&&(a.keywords=e.keywords),e.city&&(a.city=e.city),e.filter&&(a.filter=e.filter),e.sortrule&&(a.sortrule=e.sortrule),e.pageNum&&(a.pageNum=e.pageNum),e.pageSize&&(a.pageSize=e.pageSize),e.sig&&(a.sig=e.sig),wx.request({url:i.serviceName+"/cpoint/datasearch/local",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){(e=e.data)&&e.status&&"1"===e.status&&0===e.code?t.success(e.data):t.fail({errCode:"0",errMsg:e})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getMEIdSearch=function(t){if(!t.options)return t.fail({errCode:"0",errMsg:"缺少必要参数"});var e=t.options,i=this.MeRequestConfig,a={key:i.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"};e.layerId&&(a.layerId=e.layerId),e.id&&(a.id=e.id),e.sig&&(a.sig=e.sig),wx.request({url:i.serviceName+"/cpoint/datasearch/id",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){(e=e.data)&&e.status&&"1"===e.status&&0===e.code?t.success(e.data):t.fail({errCode:"0",errMsg:e})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getMEPolygonSearch=function(t){if(!t.options)return t.fail({errCode:"0",errMsg:"缺少必要参数"});var e=t.options,i=this.MeRequestConfig,a={key:i.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"};e.layerId&&(a.layerId=e.layerId),e.keywords&&(a.keywords=e.keywords),e.polygon&&(a.polygon=e.polygon),e.filter&&(a.filter=e.filter),e.sortrule&&(a.sortrule=e.sortrule),e.pageNum&&(a.pageNum=e.pageNum),e.pageSize&&(a.pageSize=e.pageSize),e.sig&&(a.sig=e.sig),wx.request({url:i.serviceName+"/cpoint/datasearch/polygon",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){(e=e.data)&&e.status&&"1"===e.status&&0===e.code?t.success(e.data):t.fail({errCode:"0",errMsg:e})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getMEaroundSearch=function(t){if(!t.options)return t.fail({errCode:"0",errMsg:"缺少必要参数"});var e=t.options,i=this.MeRequestConfig,a={key:i.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"};e.layerId&&(a.layerId=e.layerId),e.keywords&&(a.keywords=e.keywords),e.center&&(a.center=e.center),e.radius&&(a.radius=e.radius),e.filter&&(a.filter=e.filter),e.sortrule&&(a.sortrule=e.sortrule),e.pageNum&&(a.pageNum=e.pageNum),e.pageSize&&(a.pageSize=e.pageSize),e.sig&&(a.sig=e.sig),wx.request({url:i.serviceName+"/cpoint/datasearch/around",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){(e=e.data)&&e.status&&"1"===e.status&&0===e.code?t.success(e.data):t.fail({errCode:"0",errMsg:e})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getGeo=function(t){var e=this.requestConfig,i=t.options;e={key:this.key,extensions:"all",s:e.s,platform:e.platform,appname:this.key,sdkversion:e.sdkversion,logversion:e.logversion},i.address&&(e.address=i.address),i.city&&(e.city=i.city),i.batch&&(e.batch=i.batch),i.sig&&(e.sig=i.sig),wx.request({url:"https://restapi.amap.com/v3/geocode/geo",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){(e=e.data)&&e.status&&"1"===e.status?t.success(e):t.fail({errCode:"0",errMsg:e})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getRegeo=function(t){function e(e){var a=i.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:e,extensions:"all",s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){if(i.data.status&&"1"==i.data.status){i=i.data.regeocode;var a=i.addressComponent,n=[],o=i.roads[0].name+"附近",r=e.split(",")[0],s=e.split(",")[1];if(i.pois&&i.pois[0]){o=i.pois[0].name+"附近";var l=i.pois[0].location;l&&(r=parseFloat(l.split(",")[0]),s=parseFloat(l.split(",")[1]))}a.provice&&n.push(a.provice),a.city&&n.push(a.city),a.district&&n.push(a.district),a.streetNumber&&a.streetNumber.street&&a.streetNumber.number?(n.push(a.streetNumber.street),n.push(a.streetNumber.number)):n.push(i.roads[0].name),n=n.join(""),t.success([{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:n,desc:o,longitude:r,latitude:s,id:0,regeocodeData:i}])}else t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this;t.location?e(t.location):i.getWxLocation(t,(function(t){e(t)}))},a.prototype.getWeather=function(t){function e(e){var i="base";t.type&&"forecast"==t.type&&(i="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:a.key,city:e,extensions:i,s:n.s,platform:n.platform,appname:a.key,sdkversion:n.sdkversion,logversion:n.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){if(e.data.status&&"1"==e.data.status)if(e.data.lives){if((e=e.data.lives)&&0<e.length){e=e[0];var i={city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}};i.liveData=e,t.success(i)}}else e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]});else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function i(i){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:a.key,location:i,extensions:"all",s:n.s,platform:n.platform,appname:a.key,sdkversion:n.sdkversion,logversion:n.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){if(i.data.status&&"1"==i.data.status){if(i=i.data.regeocode,i.addressComponent)var a=i.addressComponent.adcode;else i.aois&&0<i.aois.length&&(a=i.aois[0].adcode);e(a)}else t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var a=this,n=a.requestConfig;t.city?e(t.city):a.getWxLocation(t,(function(t){i(t)}))},a.prototype.getPoiAround=function(t){function e(e){e={key:i.key,location:e,s:a.s,platform:a.platform,appname:i.key,sdkversion:a.sdkversion,logversion:a.logversion},t.querytypes&&(e.types=t.querytypes),t.querykeywords&&(e.keywords=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e.data.status&&"1"==e.data.status){if((e=e.data)&&e.pois){for(var i=[],a=0;a<e.pois.length;a++){var n=0==a?t.iconPathSelected:t.iconPath;i.push({latitude:parseFloat(e.pois[a].location.split(",")[1]),longitude:parseFloat(e.pois[a].location.split(",")[0]),iconPath:n,width:22,height:32,id:a,name:e.pois[a].name,address:e.pois[a].address})}t.success({markers:i,poisData:e.pois})}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this,a=i.requestConfig;t.location?e(t.location):i.getWxLocation(t,(function(t){e(t)}))},a.prototype.getStaticmap=function(t){function e(e){i.push("location="+e),t.zoom&&i.push("zoom="+t.zoom),t.size&&i.push("size="+t.size),t.scale&&i.push("scale="+t.scale),t.markers&&i.push("markers="+t.markers),t.labels&&i.push("labels="+t.labels),t.paths&&i.push("paths="+t.paths),t.traffic&&i.push("traffic="+t.traffic),e="https://restapi.amap.com/v3/staticmap?"+i.join("&"),t.success({url:e})}var i=[];i.push("key="+this.key);var a=this.requestConfig;i.push("s="+a.s),i.push("platform="+a.platform),i.push("appname="+a.appname),i.push("sdkversion="+a.sdkversion),i.push("logversion="+a.logversion),t.location?e(t.location):this.getWxLocation(t,(function(t){e(t)}))},a.prototype.getInputtips=function(t){var e=Object.assign({},this.requestConfig);t.location&&(e.location=t.location),t.keywords&&(e.keywords=t.keywords),t.type&&(e.type=t.type),t.city&&(e.city=t.city),t.citylimit&&(e.citylimit=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getDrivingRoute=function(t){var e=Object.assign({},this.requestConfig);t.origin&&(e.origin=t.origin),t.destination&&(e.destination=t.destination),t.strategy&&(e.strategy=t.strategy),t.waypoints&&(e.waypoints=t.waypoints),t.avoidpolygons&&(e.avoidpolygons=t.avoidpolygons),t.avoidroad&&(e.avoidroad=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getWalkingRoute=function(t){var e=Object.assign({},this.requestConfig);t.origin&&(e.origin=t.origin),t.destination&&(e.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getTransitRoute=function(t){var e=Object.assign({},this.requestConfig);t.origin&&(e.origin=t.origin),t.destination&&(e.destination=t.destination),t.strategy&&(e.strategy=t.strategy),t.city&&(e.city=t.city),t.cityd&&(e.cityd=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&(e=e.data.route,t.success({distance:e.distance||"",taxi_cost:e.taxi_cost||"",transits:e.transits}))},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},a.prototype.getRidingRoute=function(t){var e=Object.assign({},this.requestConfig);t.origin&&(e.origin=t.origin),t.destination&&(e.destination=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/riding",data:e,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=a},d6d8:function(t,e,i){var a=i("3b81");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2eeaffc0",a,!0,{sourceMap:!1,shadowMode:!1})},dc5e:function(t,e,i){t.exports=i.p+"static/fonts/uni.75745d34.ttf"},dff9:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("7aef").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[i("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[i("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[i("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},ed6b:function(t,e,i){var a=i("3575");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("017c0530",a,!0,{sourceMap:!1,shadowMode:!1})},f315:function(t,e,i){"use strict";var a=i("fbac"),n=i.n(a);n.a},f466:function(t,e,i){"use strict";i.r(e);var a=i("209d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},fbac:function(t,e,i){var a=i("4f0a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("07a96025",a,!0,{sourceMap:!1,shadowMode:!1})},ffa5:function(t,e,i){"use strict";i.r(e);var a=i("dff9"),n=i("84ba");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("f315");var r,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5c361d36",null,!1,a["a"],r);e["default"]=l.exports}}]);