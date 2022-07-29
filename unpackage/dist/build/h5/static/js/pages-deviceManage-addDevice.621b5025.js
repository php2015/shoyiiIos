(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-deviceManage-addDevice"],{"2d6d":function(e,t,i){"use strict";(function(e){i("b64b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("d747"),n=i("71eb"),o={data:function(){return{deviceName:"",deviceMark:"",groupsName:"选择分组名称",deviceType:"选择设备类型",type:"text",border:!0,height:56,autoHeight:!0,show:!1,groupsshow:!1,list:[{value:"1",label:"MR"},{value:"2",label:"VR"},{value:"3",label:"AR"}],listgroups:[],groupsId:"",typeicon:"arrowdown",operation:[{name:"查看权",checked:!1,disabled:!1},{name:"操作权",checked:!1,disabled:!1}],checkBoolean:!1,operateBoolean:!1}},methods:{checkboxChange:function(t){e.log(t),"查看权"==t.name&&(this.checkBoolean=t.value),"操作权"==t.name&&(this.operateBoolean=t.value)},getGroupsName:function(){var t=this;(0,a.querydevice)({}).then((function(i){e.log(i),0==i.data.code?t.listgroups=i.data.object:uni.showToast({title:i.data.msg,icon:"none"})})).catch((function(t){e.log(t)}))},selectGroups:function(){this.groupsshow=!0},cancelGroups:function(){},confirmGroups:function(t){e.log(t),this.groupsId=t[0].value,this.groupsName=t[0].label},selectType:function(){this.show=!0},confirm:function(t){e.log(t),this.deviceType=t[0].label},cancel:function(t){e.log(t)},sure:function(){e.log(this.checkBoolean),e.log(this.operateBoolean),"选择设备类型"!=this.deviceType?this.deviceMark?(0,n.addDevice)({deviceName:this.deviceName,groupId:this.groupsId,deviceIdentity:this.deviceType,deviceMark:this.deviceMark,deviceRead:this.checkBoolean,deviceControl:this.operateBoolean}).then((function(t){e.log(t),0==t.data.code?uni.navigateTo({url:"/pages/deviceManage/deviceManage"}):uni.showToast({title:t.data.msg,icon:"none"})})).catch((function(t){e.log(t)})):uni.showToast({title:"设备标识不能为空",icon:"none"}):uni.showToast({title:"设备类型不能为空",icon:"none"})}},onLoad:function(t){e.log(t),0!=Object.keys(t).length&&(t.scan&&(this.deviceMark=t.deviceCode,this.groupsName=t.groupsName,this.groupsId=t.groupId),t.others&&(this.groupsName=t.groupsName,this.groupsId=t.groupId)),this.getGroupsName()}};t.default=o}).call(this,i("5a52")["default"])},"49fa":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={uNavbar:i("b391").default,uInput:i("ffa5").default,uniIcons:i("318c").default,uCheckboxGroup:i("648c").default,uCheckbox:i("5999").default,uSelect:i("3f2f").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("u-navbar",{attrs:{"back-icon-name":"close","is-back":!0,title:"添加设备","title-color":"#000000","back-icon-color":""}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"device"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",{staticClass:"tip",staticStyle:{"margin-right":"20rpx"}}),i("v-uni-text",[e._v("设备名称：")])],1),i("u-input",{attrs:{placeholder:"最多输入六个字符",type:e.type,maxlength:"6",border:e.border,height:e.height,"auto-height":e.autoHeight},model:{value:e.deviceName,callback:function(t){e.deviceName=t},expression:"deviceName"}})],1),i("v-uni-view",{staticClass:"device"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",{staticClass:"tip"},[e._v("*")]),i("v-uni-text",[e._v("设备分组：")])],1),i("v-uni-view",{staticClass:"type",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectGroups.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.groupsName))]),i("uni-icons",{attrs:{type:e.typeicon}})],1)],1),i("v-uni-view",{staticClass:"device"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",{staticClass:"tip"},[e._v("*")]),i("v-uni-text",[e._v("设备类型：")])],1),i("v-uni-view",{staticClass:"type",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectType.apply(void 0,arguments)}}},[i("v-uni-text",[e._v(e._s(e.deviceType))]),i("uni-icons",{attrs:{type:e.typeicon}})],1)],1),i("v-uni-view",{staticClass:"device"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",{staticClass:"tip"},[e._v("*")]),i("v-uni-text",[e._v("设备标识 (设备号)：")])],1),i("u-input",{attrs:{placeholder:"输入设备号",type:e.type,border:e.border,height:e.height,"auto-height":e.autoHeight},model:{value:e.deviceMark,callback:function(t){e.deviceMark=t},expression:"deviceMark"}})],1),i("v-uni-view",{staticClass:"device"},[i("v-uni-view",{staticClass:"label"},[i("v-uni-text",{staticClass:"tip",staticStyle:{"margin-right":"20rpx"}}),i("v-uni-text",[e._v("设备权限：")])],1),i("u-checkbox-group",e._l(e.operation,(function(t,a){return i("u-checkbox",{key:a,attrs:{shape:"circle","active-color":"#86B0D4",name:t.name},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:t.checked,callback:function(i){e.$set(t,"checked",i)},expression:"item.checked"}},[e._v(e._s(t.name))])})),1)],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sure.apply(void 0,arguments)}}},[e._v("确定")])],1),i("u-select",{attrs:{title:"选择设备类型",mode:"single-column",list:e.list,"cancel-color":"#000000","confirm-color":"#000000"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),i("u-select",{attrs:{title:"选择分组名称","value-name":"id","label-name":"name",mode:"single-column",list:e.listgroups,"cancel-color":"#000000","confirm-color":"#000000"},on:{cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.cancelGroups.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmGroups.apply(void 0,arguments)}},model:{value:e.groupsshow,callback:function(t){e.groupsshow=t},expression:"groupsshow"}})],1)},o=[]},"65da":function(e,t,i){"use strict";var a=i("9a48"),n=i.n(a);n.a},"9a48":function(e,t,i){var a=i("cd05");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("980ad9e8",a,!0,{sourceMap:!1,shadowMode:!1})},cd05:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-48cc0e3e]{background-color:#fff}.content[data-v-48cc0e3e]{padding-top:%?36?%}.device[data-v-48cc0e3e]{padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?20?%}.device .label[data-v-48cc0e3e]{margin-right:%?20?%;width:%?170?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tip[data-v-48cc0e3e]{margin-right:%?10?%;color:#86b0d4}.type[data-v-48cc0e3e]{height:%?76?%;border:1px solid #eee;line-height:%?76?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 %?20?%;color:#8f8f8f}.btn[data-v-48cc0e3e]{padding:%?20?% %?30?%;background-color:#fff;position:fixed;bottom:%?20?%;width:100%}.btn uni-button[data-v-48cc0e3e]{background-color:#86b0d4;color:#fff}.device[data-v-48cc0e3e] .u-input__textarea{line-height:%?56?%}.device[data-v-48cc0e3e] .u-input--border{border-color:#eee!important}body.?%PAGE?%[data-v-48cc0e3e]{background-color:#fff}",""]),e.exports=t},e575:function(e,t,i){"use strict";i.r(t);var a=i("49fa"),n=i("fd0f");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("65da");var c,s=i("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"48cc0e3e",null,!1,a["a"],c);t["default"]=l.exports},fd0f:function(e,t,i){"use strict";i.r(t);var a=i("2d6d"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a}}]);