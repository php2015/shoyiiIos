(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"0139":function(t,e,i){"use strict";i.r(e);var n=i("1e5e"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"0782":function(t,e,i){"use strict";i.r(e);var n=i("9ce7"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"09bf":function(t,e,i){"use strict";i.r(e);var n=i("131d"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"131d":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=n},"1e5e":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("4aa4"),a=n(i("9a83")),o={components:{news:a.default},data:function(){return{newsList:[]}},methods:{back:function(){uni.showToast({title:"无效",icon:"none"})}},onLoad:function(){var e=this,i=setTimeout((function(){uni.showLoading({title:"数据加载中..."})}),2e3);(0,r.getNewsList)({}).then((function(n){clearTimeout(i),uni.hideLoading(),t.log(n),0==n.data.code?e.newsList=n.data.object.list:uni.showToast({title:n.data.msg,icon:"none"})})).catch((function(e){clearTimeout(i),uni.hideLoading(),t.log(e)}))}};e.default=o}).call(this,i("5a52")["default"])},"1f54":function(t,e,i){"use strict";i.r(e);var n=i("62e5"),r=i("0139");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"1714caba",null,!1,n["a"],o);e["default"]=d.exports},2430:function(t,e,i){var n=i("ccc6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("14ff5332",n,!0,{sourceMap:!1,shadowMode:!1})},"27cb":function(t,e,i){var n=i("3d48");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("d64df63c",n,!0,{sourceMap:!1,shadowMode:!1})},"3d48":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-loading-circle[data-v-1b741bef]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;-webkit-border-radius:50%;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-1b741bef 1s linear infinite;animation:u-circle-data-v-1b741bef 1s linear infinite}.u-loading-flower[data-v-1b741bef]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-1b741bef 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-1b741bef{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"4aa4":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.getNewsList=void 0;var n=i("4348"),r=function(e){return t.log(e),n.myRequest({url:"/news/getNews",data:e})};e.getNewsList=r}).call(this,i("5a52")["default"])},"52b2":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-885009e8]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-885009e8]{width:100%;height:100%}.u-image__loading[data-v-885009e8], .u-image__error[data-v-885009e8]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"575a":function(t,e,i){"use strict";i.r(e);var n=i("fd25"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},5959:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("7aef").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]},"62e5":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={navbar:i("8c14").default,uNoNetwork:i("04ec").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("navbar",{attrs:{leftIconBool:!1,rightBool:!1,Navtitle:"新闻列表",navBoolean:!1},on:{back:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),i("v-uni-view",{staticStyle:{padding:"0 30rpx"}},[t._l(t.newsList,(function(t,e){return i("news",{key:e,attrs:{Newsid:t.newsId,imgUrl:t.pictureUrl,title:t.title,content:t.synopsis}})})),i("u-no-network")],2)],1)},a=[]},"702b":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-loading",class:"circle"==t.mode?"u-loading-circle":"u-loading-flower",style:[t.cricleStyle]}):t._e()},a=[]},8483:function(t,e,i){"use strict";i.r(e);var n=i("5959"),r=i("09bf");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("ffba");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"885009e8",null,!1,n["a"],o);e["default"]=d.exports},8933:function(t,e,i){"use strict";var n=i("2430"),r=i.n(n);r.a},"971f":function(t,e,i){var n=i("52b2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1849e8e8",n,!0,{sourceMap:!1,shadowMode:!1})},"9a83":function(t,e,i){"use strict";i.r(e);var n=i("f9d4"),r=i("0782");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("8933");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4198f17d",null,!1,n["a"],o);e["default"]=d.exports},"9ce7":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{defaultImg:uni.getStorageSync("uploadLogo")}},props:{Newsid:{type:Number,default:null},imgUrl:{type:String,default:""},title:{type:String,default:""},content:{type:String,default:""}},methods:{enterNews:function(t){uni.navigateTo({url:"/pages/news/newsDetail?id="+t,animationType:"pop-in"})}}};e.default=n},ccc6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".newsList[data-v-4198f17d]{padding:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?32?%;background-color:#fff}\n.newsList .image[data-v-4198f17d]{width:40%;height:%?168?%;-webkit-border-radius:%?20?%;border-radius:%?20?%}.news_content_item[data-v-4198f17d]{width:60%;padding-left:%?28?%;color:#000;-webkit-box-sizing:border-box;box-sizing:border-box}.news_content_item .texttile[data-v-4198f17d]{font-size:%?30?%;font-weight:600;margin-bottom:%?12.5?%;font-family:PingFang-SC-Bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.news_content_item .textcontent[data-v-4198f17d]{font-size:%?24?%;font-family:PingFang-SC-Bold;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}",""]),t.exports=e},f9d4:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uImage:i("8483").default,uLoading:i("fe4c").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"newsList",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.enterNews(t.Newsid)}}},[t.imgUrl?i("u-image",{attrs:{width:"40%",height:"168rpx",src:t.imgUrl,mode:"aspectFit"}},[i("u-loading",{attrs:{slot:"loading"},slot:"loading"}),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{slot:"error"},slot:"error"},[i("v-uni-text",[t._v("error")])],1)],1):i("v-uni-image",{staticClass:"image",attrs:{src:t.defaultImg,mode:""}}),i("v-uni-view",{staticClass:"news_content_item"},[i("v-uni-view",{staticClass:"texttile"},[i("v-uni-text",[t._v(t._s(t.title||"无标题"))])],1),i("v-uni-text",{staticClass:"textcontent"},[t._v(t._s(t.content))])],1)],1)},a=[]},fd25:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var t={};return t.width=this.size+"rpx",t.height=this.size+"rpx","circle"==this.mode&&(t.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),t}}};e.default=n},fe00:function(t,e,i){"use strict";var n=i("27cb"),r=i.n(n);r.a},fe4c:function(t,e,i){"use strict";i.r(e);var n=i("702b"),r=i("575a");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("fe00");var o,s=i("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"1b741bef",null,!1,n["a"],o);e["default"]=d.exports},ffba:function(t,e,i){"use strict";var n=i("971f"),r=i.n(n);r.a}}]);