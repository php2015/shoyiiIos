(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderManage-orderQuestion"],{1232:function(t,n,o){var e=o("fe5f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=o("4f06").default;i("42936a26",e,!0,{sourceMap:!1,shadowMode:!1})},"23ff":function(t,n,o){"use strict";var e=o("1232"),i=o.n(e);i.a},"77ec":function(t,n,o){"use strict";o.r(n);var e=o("f2ac"),i=o("8d41");for(var r in i)"default"!==r&&function(t){o.d(n,t,(function(){return i[t]}))}(r);o("23ff");var a,u=o("f0c5"),c=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,"3d747058",null,!1,e["a"],a);n["default"]=c.exports},"8d41":function(t,n,o){"use strict";o.r(n);var e=o("fef4"),i=o.n(e);for(var r in e)"default"!==r&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},f2ac:function(t,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return e}));var e={uInput:o("ffa5").default,uUpload:o("447c").default},i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-uni-view",{staticClass:"Questions"},[o("u-input",{attrs:{type:t.type,placeholder:"请输入问题详细内容",border:t.border,height:t.height,"auto-height":t.autoHeight},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),o("v-uni-view",{},[o("u-upload",{attrs:{"file-list":t.fileList,action:t.action,name:"files",header:t.header,"max-count":"3","upload-text":"上传图片"},on:{"on-remove":function(n){arguments[0]=n=t.$handleEvent(n),t.onRemove.apply(void 0,arguments)},"on-error":function(n){arguments[0]=n=t.$handleEvent(n),t.onErrors.apply(void 0,arguments)},"on-success":function(n){arguments[0]=n=t.$handleEvent(n),t.onSuccess.apply(void 0,arguments)},"on-uploaded":function(n){arguments[0]=n=t.$handleEvent(n),t.onUploaded.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[o("v-uni-button",{staticStyle:{"background-color":"#86B0D4",color:"#FFFFFF"},attrs:{type:"default"}},[t._v("提交")])],1)],1)},r=[]},fe5f:function(t,n,o){var e=o("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3d747058]{background-color:#fff}.Questions[data-v-3d747058]{padding:0 %?30?%}.btn[data-v-3d747058]{width:100%;position:fixed;bottom:%?20?%;left:0;right:0;padding:0 %?30?%}body.?%PAGE?%[data-v-3d747058]{background-color:#fff}',""]),t.exports=n},fef4:function(t,n,o){"use strict";(function(t){o("4160"),o("d3b7"),o("25f0"),o("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=o("3087"),i={data:function(){return{value:"",type:"textarea",border:!0,height:200,autoHeight:!0,action:this.$uploadUrl+"/cosFile/uploadImages",header:{token:uni.getStorageSync("token")},fileList:[],pictrueId:[],orderNo:""}},methods:{onRemove:function(n,o,i){var r=this;(0,e.delOrderPicture)({id:this.pictrueId[n].toString()}).then((function(n){t.log(n),0!=n.data.code&&uni.showToast({title:n.data.msg,icon:"none"})})).catch((function(n){t.log(n)})),this.pictrueId=[],o.forEach((function(n){t.log(n),r.pictrueId.push(n.response.object[0])})),t.log(this.pictrueId)},onErrors:function(n,o,e,i){t.log(n),uni.showToast({title:n.data.msg})},onSuccess:function(n,o,e,i){t.log(n),t.log(o),t.log(e)},onUploaded:function(n,o){var e=this;t.log(n),this.pictrueId=[],n.forEach((function(n){t.log(n),e.pictrueId.push(n.response.object[0])})),t.log(this.pictrueId)},submit:function(){t.log(this.pictrueId),t.log(this.pictrueId.toString()),t.log(this.value),t.log(this.orderNo),this.value?(0,e.orderQuestionSave)({description:this.value,picture:this.pictrueId.toString(),tagNumber:this.orderNo}).then((function(n){t.log(n),0==n.data.code?(uni.showToast({title:n.data.msg}),uni.navigateBack({delta:1})):uni.showToast({title:n.data.msg,icon:"none"})})).catch((function(n){t.log(n)})):uni.showToast({title:"问题不能为空",icon:"none"})}},onLoad:function(n){t.log(n.orderNo),this.orderNo=n.orderNo}};n.default=i}).call(this,o("5a52")["default"])}}]);