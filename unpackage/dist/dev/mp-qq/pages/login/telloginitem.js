(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/telloginitem"],{204:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/app/shoyii/main.js?{"page":"pages%2Flogin%2Ftelloginitem"} ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4);o(n(/*! vue */2));var t=o(n(/*! ./pages/login/telloginitem.vue */205));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */1)["createPage"])},205:
/*!******************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue ***!
  \******************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! ./telloginitem.vue?vue&type=template&id=4ec22de0& */206),r=n(/*! ./telloginitem.vue?vue&type=script&lang=js& */208);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(/*! ./telloginitem.vue?vue&type=style&index=0&lang=css& */211);var i,s=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);c.options.__file="pages/login/telloginitem.vue",t["default"]=c.exports},206:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=template&id=4ec22de0& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./telloginitem.vue?vue&type=template&id=4ec22de0& */207);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},207:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=template&id=4ec22de0& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return o}));var o={loginTop:function(){return n.e(/*! import() | components/login-top/login-top */"components/login-top/login-top").then(n.bind(null,/*! @/components/login-top/login-top.vue */935))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=!1,i=[];r._withStripped=!0},208:
/*!*******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./telloginitem.vue?vue&type=script&lang=js& */209),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},209:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(/*! @/utill/api/login/loginsendCode.js */198),r=n(/*! @/utill/api/login/loginCode.js */210),a={components:{},data:function(){return{getCodeText:"获取验证码",areaCode:"+86",phone:"",styleObject:{color:"black",background:"#ffffff"},a:"",vertifyCode:"",Timer:"",disabled:!0,check:!1}},methods:{userAgree:function(){e.navigateTo({url:"/pages/aboutShoyii/userAgree"})},userPravicy:function(){e.navigateTo({url:"/pages/aboutShoyii/privacyPolicy"})},close:function(){e.navigateBack({delta:1})},register:function(){e.navigateTo({url:"/pages/register/register"})},selects:function(e){this.check=!this.check},getCode:function(){var t=this;console.log(this.disabled),this.disabled||(0,o.loginsendCode)({telephone:this.phone}).then((function(n){console.log(n),0==n.data.code?t.setTimer():e.showToast({title:n.data.msg,icon:"none"})})).catch((function(e){console.log(e)}))},setTimer:function(){var e=59,t=this;t.getCodeText="重新获取(60)",t.Timer=setInterval((function(){if(e<=0)return t.disabled=!1,t.styleObject.color="#ffffff",t.styleObject.background="#86B0D4",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--}),1e3)},login:function(){var t=this;console.log(this.check),""!=this.vertifyCode?this.check?(0,r.loginCode)({telephone:this.phone,smsVerCode:this.vertifyCode}).then((function(n){if(console.log(n),clearInterval(t.Timer),console.log(n),0==n.data.code){e.setStorageSync("token",n.data.object.token),e.setStorageSync("doctorId",n.data.object.doctorId),e.setStorageSync("auditstatus",n.data.object.auditStatus);var o=t.$store.state.PagesUrl;console.log(o);t.$store.state.PagesType;if(console.log(t.$store.state.PagesUrl),"NP"==n.data.object.auditStatus)return void e.navigateTo({url:"/pages/PersonalInfor/auditInfor"});if("ZC"==n.data.object.auditStatus)return void e.navigateTo({url:"/pages/PersonalInfor/auditInfor"});"1"==t.$store.state.PagesType?e.switchTab({url:t.$store.state.PagesUrl}):"2"==t.$store.state.PagesType?e.navigateTo({url:t.$store.state.PagesUrl}):e.switchTab({url:"/pages/index/index"})}else e.showToast({title:n.data.msg,icon:"none"})})).catch((function(e){clearInterval(t.Timer),console.log(e)})):e.showToast({title:"请同意用户协议",icon:"none"}):e.showToast({title:"验证码不能为空",icon:"none"})},select:function(e){this.check=!0}},onLoad:function(e){var t=this;setTimeout((function(){t.setTimer()}),1e3),console.log(this.$store.state.PagesUrl),this.phone=e.phone,this.areaCode=e.area}};t.default=a}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */1)["default"])},211:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./telloginitem.vue?vue&type=style&index=0&lang=css& */212),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},212:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/app/shoyii/pages/login/telloginitem.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}},[[204,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL2FwcC9zaG95aWkvcGFnZXMvbG9naW4vdGVsbG9naW5pdGVtLnZ1ZT8zMGRmIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvYXBwL3Nob3lpaS9wYWdlcy9sb2dpbi90ZWxsb2dpbml0ZW0udnVlP2Q5ZjgiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRGVza3RvcC9hcHAvc2hveWlpL3BhZ2VzL2xvZ2luL3RlbGxvZ2luaXRlbS52dWU/NjY1NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL2FwcC9zaG95aWkvcGFnZXMvbG9naW4vdGVsbG9naW5pdGVtLnZ1ZT9iYjk5IiwidW5pLWFwcDovLy9wYWdlcy9sb2dpbi90ZWxsb2dpbml0ZW0udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0Rlc2t0b3AvYXBwL3Nob3lpaS9wYWdlcy9sb2dpbi90ZWxsb2dpbml0ZW0udnVlPzI1NTIiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiLCJyZW5kZXJqcyIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJfX2ZpbGUiLCJjb21wb25lbnRzIiwibG9naW5Ub3AiLCJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9zZWxmIiwiX2MiLCJyZWN5Y2xhYmxlUmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozt3RUFBQSxxQkFDQSxzQkFDQSxpRCxtREFDQUEsRUFBV0MsYTs7OzsyRENIWCw2UkFDSUMsRUFESixpSEFTSUMsRUFBWSxxQkFDZCxhQUNBLFlBQ0Esc0JBQ0EsRUFDQSxLQUNBLEtBQ0EsTUFDQSxFQUNBLGdCQUNBRCxHQUdGQyxFQUFVQyxRQUFRQyxPQUFTLCtCQUNaLGFBQUFGLEU7Ozs7MkdDdkJmLHl6Qjs7OzsyR0NBQSw4TEFBSUcsRUFBYSxDQUNmQyxTQUFVLFdBQ1IsT0FBTywwSkFLUEMsRUFBUyxXQUNYLElBQUlDLEVBQU1DLEtBQ05DLEVBQUtGLEVBQUlHLGVBQ0pILEVBQUlJLE1BQU1DLElBRWpCQyxHQUFtQixFQUNuQkMsRUFBa0IsR0FDdEJSLEVBQU9TLGVBQWdCLEc7Ozs7MkRDZHZCLDZlQUE2MEIsZUFBRyxHOzs7OzBJQ3NDaDFCLHNEQUNBLDhDLEVBQ0EsQ0FDQSxjQUNBLEtBRkEsV0FHQSxPQUNBLG9CQUNBLGVBQ0EsU0FDQSxhQUNBLGNBQ0Esc0JBRUEsS0FDQSxlQUNBLFNBQ0EsWUFDQSxXQUdBLFNBRUEsVUFGQSxXQUdBLGNBQ0Esc0NBSUEsWUFSQSxXQVNBLGNBQ0EsMENBSUEsTUFkQSxXQWVBLGdCQUNBLFdBR0EsU0FuQkEsV0FvQkEsY0FDQSxrQ0FHQSxRQXhCQSxTQXdCQSxHQUNBLHdCQUdBLFFBNUJBLFdBNEJBLFdBQ0EsMkJBQ0EsZ0JBR0Esb0JBQ0EsdUJBQ0Esa0JBQ0EsZUFDQSxlQUNBLGFBRUEsYUFDQSxpQkFDQSxpQkFJQSxtQkFDQSxtQkFHQSxTQWxEQSxXQW1EQSxTQUNBLE9BQ0EseUJBQ0EsZ0NBQ0EsUUFNQSxPQUxBLGNBQ0EsOEJBQ0EsbUNBQ0EsMkJBQ0EsdUJBR0EsNEJBQ0EsTUFDQSxNQUdBLE1BcEVBLFdBb0VBLFdBQ0Esd0JBQ0EscUJBT0EsWUFPQSxnQkFDQSxxQkFDQSw4QkFDQSxrQkFLQSxHQUpBLGVBRUEsdUJBQ0EsZUFDQSxnQkFFQSw4Q0FDQSxvREFDQSwwREFDQSw4QkFDQSxlQUNBLHlCQUVBLEdBREEscUNBQ0EsZ0NBTUEsWUFKQSxjQUNBLHdDQUtBLG1DQU1BLFlBSkEsY0FDQSx3Q0FLQSw4QkFDQSxhQUNBLDhCQUVBLDhCQUNBLGNBQ0EsOEJBR0EsYUFDQSxnQ0FJQSxhQUNBLGlCQUNBLGlCQUdBLG1CQUVBLHVCQUNBLGtCQTdEQSxhQUNBLGdCQUNBLGNBVEEsYUFDQSxnQkFDQSxlQXNFQSxPQS9JQSxTQStJQSxHQUNBLGdCQUdBLE9BcktBLFNBcUtBLGNBQ0EsdUJBQ0EsZUFDQSxLQUNBLHdDQUNBLG1CQUNBLHVCOzs7OzJEQ25OQSxrckJBQXFyQyxlQUFHLEciLCJmaWxlIjoicGFnZXMvbG9naW4vdGVsbG9naW5pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2xvZ2luL3RlbGxvZ2luaXRlbS52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90ZWxsb2dpbml0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYzIyZGUwJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGVsbG9naW5pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGVsbG9naW5pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90ZWxsb2dpbml0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9sb2dpbi90ZWxsb2dpbml0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hZDpcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC4yLjguMTEuMjAyMDA5MDcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhZDpcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC4yLjguMTEuMjAyMDA5MDcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi90ZWxsb2dpbml0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlYzIyZGUwJlwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIGxvZ2luVG9wOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL2xvZ2luLXRvcC9sb2dpbi10b3BcIiAqLyBcIkAvY29tcG9uZW50cy9sb2dpbi10b3AvbG9naW4tdG9wLnZ1ZVwiXG4gICAgKVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi90ZWxsb2dpbml0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi90ZWxsb2dpbml0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwibG9naW5TdXJlXCI+XHJcblx0XHQ8bG9naW4tdG9wIEBjbG9zZT1cImNsb3NlXCIgQHJlZ2lzdGVyPVwicmVnaXN0ZXJcIj48L2xvZ2luLXRvcD5cclxuXHRcdDx2aWV3IGNsYXNzPVwibG9naW4tbWFpblwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidGl0bGVfdGlwXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+6L6T5YWl6aqM6K+B56CBPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXBcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQ+55+t5L+h6aqM6K+B56CB5bey5Y+R6YCB6IezPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFyZWFDb2RlXCI+e3thcmVhQ29kZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRlbGVwaG9uZVwiPnt7cGhvbmV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0ZWxfbG9naW5cIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWF4bGVuZ3RoPVwiMTFcIiB2LW1vZGVsPVwidmVydGlmeUNvZGVcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiLz5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIGNsYXNzPVwiY29kZWltZ1wiIEBjbGljay5zdG9wPVwiZ2V0Q29kZSgpXCIgOnN0eWxlPVwic3R5bGVPYmplY3RcIj57e2dldENvZGVUZXh0fX08L2J1dHRvbj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIGhvdmVyLWNsYXNzPVwiYnV0dG9uLWhvdmVyXCIgY2xhc3M9XCJnZXRjb2RlQnRuXCIgQGNsaWNrLnN0b3A9XCJsb2dpblwiPumqjOivgTwvYnV0dG9uPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibG9naW4tdGlwXCI+XHJcblx0XHRcdFx0XHTmsqHmlLbliLDpqozor4HnoIHvvJ/lgJLorqHml7bnu5PmnZ/lkI7lj6/ph43mlrDojrflj5ZcclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxjaGVja2JveC1ncm91cCBuYW1lPVwiXCIgQGNoYW5nZT1cInNlbGVjdHNcIj5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHQ8Y2hlY2tib3ggOmNoZWNrZWQ9XCJjaGVja1wiIHN0eWxlPVwidHJhbnNmb3JtOnNjYWxlKDAuNylcIiBjb2xvcj0nIzg2QjBENCcvPlxyXG5cdFx0XHRcdFx0PHRleHQ+5oiR5bey6ZiF6K+75bm25ZCM5oSPPC90ZXh0PiBcclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidXNlclwiIEBjbGljay5zdG9wPVwidXNlckFncmVlXCI+44CK55So5oi35Y2P6K6u44CLPC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQ+5ZKMPC90ZXh0PiBcclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic2VjcmV0XCIgQGNsaWNrLnN0b3A9XCJ1c2VyUHJhdmljeVwiPuOAiumakOengeaUv+etluOAizwvdGV4dD5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHQ8L2NoZWNrYm94LWdyb3VwPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHtsb2dpbnNlbmRDb2RlfSBmcm9tICdAL3V0aWxsL2FwaS9sb2dpbi9sb2dpbnNlbmRDb2RlLmpzJ1xyXG5cdGltcG9ydCB7bG9naW5Db2RlfSBmcm9tICdAL3V0aWxsL2FwaS9sb2dpbi9sb2dpbkNvZGUuanMnXHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRjb21wb25lbnRzOnt9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0Z2V0Q29kZVRleHQ6ICfojrflj5bpqozor4HnoIEnLFxyXG5cdFx0XHRcdGFyZWFDb2RlOlwiKzg2XCIsXHJcblx0XHRcdFx0cGhvbmU6JycsXHJcblx0XHRcdFx0c3R5bGVPYmplY3Q6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAnYmxhY2snLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDpcIiNmZmZmZmZcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YTpcIlwiLFxyXG5cdFx0XHRcdHZlcnRpZnlDb2RlOlwiXCIsLy/pqozor4HnoIFcclxuXHRcdFx0XHRUaW1lcjonJywvL+WumuaXtuWZqFxyXG5cdFx0XHRcdGRpc2FibGVkOnRydWUsXHJcblx0XHRcdFx0Y2hlY2s6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHQvLyDnlKjmiLfljY/orq5cclxuXHRcdFx0dXNlckFncmVlKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOicvcGFnZXMvYWJvdXRTaG95aWkvdXNlckFncmVlJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmakOengeaUv+etllxyXG5cdFx0XHR1c2VyUHJhdmljeSgpe1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDonL3BhZ2VzL2Fib3V0U2hveWlpL3ByaXZhY3lQb2xpY3knXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YWz6Zet5rOo5YaM55m76ZmG6aG16Z2iXHJcblx0XHRcdGNsb3NlKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YToxLFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZ2lzdGVyKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOlwiL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RzKGUpe1xyXG5cdFx0XHRcdHRoaXMuY2hlY2s9IXRoaXMuY2hlY2tcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5YaN5qyh6I635Y+W6aqM6K+B56CBXHJcblx0XHRcdGdldENvZGUoKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmRpc2FibGVkKVxyXG5cdFx0XHRcdGlmKHRoaXMuZGlzYWJsZWQpey8v56aB55SoXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bG9naW5zZW5kQ29kZSh7XHJcblx0XHRcdFx0XHR0ZWxlcGhvbmU6dGhpcy5waG9uZVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRpZihyZXMuZGF0YS5jb2RlPT0wKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRUaW1lcigpXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vIOmqjOivgeeggeWPkemAgeaIkOWKn++8jOWImei/m+WFpeeZu+mZhumhtemdolx0XHRcdFx0XHJcblx0XHRcdFx0fSkuY2F0Y2goZXJyPT57XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0VGltZXIoKSB7XHJcblx0XHRcdFx0bGV0IGhvbGRUaW1lID0gNTksXHJcblx0XHRcdFx0X3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdF90aGlzLmdldENvZGVUZXh0ID0gXCLph43mlrDojrflj5YoNjApXCJcclxuXHRcdFx0XHRfdGhpcy5UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdGlmIChob2xkVGltZSA8PTApIHtcclxuXHRcdFx0XHRcdFx0X3RoaXMuZGlzYWJsZWQgPSBmYWxzZTsvL+WPr+S7peiOt+WPlumqjOivgeeggVxyXG5cdFx0XHRcdFx0XHRfdGhpcy5zdHlsZU9iamVjdC5jb2xvciA9IFwiI2ZmZmZmZlwiO1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5zdHlsZU9iamVjdC5iYWNrZ3JvdW5kID0gXCIjODZCMEQ0XCI7XHJcblx0XHRcdFx0XHRcdF90aGlzLmdldENvZGVUZXh0ID0gXCLojrflj5bpqozor4HnoIFcIlxyXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF90aGlzLlRpbWVyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0X3RoaXMuZ2V0Q29kZVRleHQgPSBcIumHjeaWsOiOt+WPlihcIiArIGhvbGRUaW1lICsgXCIpXCJcclxuXHRcdFx0XHRcdGhvbGRUaW1lLS07XHJcblx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6aqM6K+BL+eZu+W9lVxyXG5cdFx0XHRsb2dpbigpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY2hlY2spXHJcblx0XHRcdFx0aWYodGhpcy52ZXJ0aWZ5Q29kZT09Jycpe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6aqM6K+B56CB5LiN6IO95Li656m6JyxcclxuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZighdGhpcy5jaGVjayl7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7flkIzmhI/nlKjmiLfljY/orq4nLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxvZ2luQ29kZSh7XHJcblx0XHRcdFx0XHR0ZWxlcGhvbmU6dGhpcy5waG9uZSxcclxuXHRcdFx0XHRcdHNtc1ZlckNvZGU6dGhpcy52ZXJ0aWZ5Q29kZVxyXG5cdFx0XHRcdH0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHQvLyDmtojpmaTlrprml7blmahcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5UaW1lcilcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGU9PTApe1xyXG5cdFx0XHRcdFx0XHQvLyDmiJDlip/kuYvlkI7vvIzvvIzlrZjlgqjkv6Hmga/vvIzov5vlhaXkuKrkurrkuK3lv4PpobXpnaJcclxuXHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIHJlcy5kYXRhLm9iamVjdC50b2tlbik7Ly90b2tlblxyXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ2RvY3RvcklkJywgcmVzLmRhdGEub2JqZWN0LmRvY3RvcklkKTsvL+eUqOaIt0lEXHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygnYXVkaXRzdGF0dXMnLHJlcy5kYXRhLm9iamVjdC5hdWRpdFN0YXR1cylcclxuXHRcdFx0XHRcdFx0dmFyIHBhZ2VzPXRoaXMuJHN0b3JlLnN0YXRlLlBhZ2VzVXJsLy/pobXpnaLot6/lvoRcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocGFnZXMpXHJcblx0XHRcdFx0XHRcdHZhciBwYWdlc3R5cGU9dGhpcy4kc3RvcmUuc3RhdGUuUGFnZXNUeXBlLy/pobXpnaLot7PovazmlrnlvI9cclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy4kc3RvcmUuc3RhdGUuUGFnZXNVcmwpXHJcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLm9iamVjdC5hdWRpdFN0YXR1cz09J05QJyl7Ly/mnKrpgJrov4dcclxuXHRcdFx0XHRcdFx0XHQvLyDot7PovazliLDlrqHmoLjpobXpnaJcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9QZXJzb25hbEluZm9yL2F1ZGl0SW5mb3InXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB1cmw6Jy9wYWdlcy9QZXJzb25hbEluZm9yL1BlcnNvbmFsSW5mb3I/YXVkaXQ9JysxXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYocmVzLmRhdGEub2JqZWN0LmF1ZGl0U3RhdHVzPT0nWkMnKXtcclxuXHRcdFx0XHRcdFx0XHQvLyDloavlhpnlrqHmoLjkv6Hmga9cclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6Jy9wYWdlcy9QZXJzb25hbEluZm9yL2F1ZGl0SW5mb3InXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB1cmw6Jy9wYWdlcy9QZXJzb25hbEluZm9yL1BlcnNvbmFsSW5mb3I/YXVkaXQ9JysxXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0aWYodGhpcy4kc3RvcmUuc3RhdGUuUGFnZXNUeXBlPT0nMScpey8vc3dpdGNoVGFi5pa55byPXHJcblx0XHRcdFx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6dGhpcy4kc3RvcmUuc3RhdGUuUGFnZXNVcmwvL+i3s+i9rOebuOW6lOeahHRhYmJhclxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmKHRoaXMuJHN0b3JlLnN0YXRlLlBhZ2VzVHlwZT09JzInKXsvL+i3s+i9rOebuOW6lOeahOmhtemdolxyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDp0aGlzLiRzdG9yZS5zdGF0ZS5QYWdlc1VybFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvaW5kZXgvaW5kZXgnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOnJlcy5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pLmNhdGNoKGVycj0+e1xyXG5cdFx0XHRcdFx0Ly8g5raI6Zmk5a6a5pe25ZmoXHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuVGltZXIpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5ZCM5oSP6ZqQ56eB5pS/562WXHJcblx0XHRcdHNlbGVjdChlKXtcclxuXHRcdFx0XHR0aGlzLmNoZWNrPXRydWVcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0aW9ucykge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0dGhpcy5zZXRUaW1lcigpXHJcblx0XHRcdH0sMTAwMClcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy4kc3RvcmUuc3RhdGUuUGFnZXNVcmwpXHJcblx0XHRcdHRoaXMucGhvbmU9b3B0aW9ucy5waG9uZVxyXG5cdFx0XHR0aGlzLmFyZWFDb2RlPW9wdGlvbnMuYXJlYVxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblx0XG48c3R5bGU+XHJcblx0LmxvZ2luU3VyZXtcclxuXHRcdHBhZGRpbmc6IDAgMzBycHg7XHJcblx0fVxyXG5cdC5sb2dpbi1tYWluIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRwYWRkaW5nOiAwIDcwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjYwcnB4O1xyXG5cdH1cclxuXHQudGVsX2xvZ2lue1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAyMHJweCAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogNHJweCBzb2xpZCAjRUVFRUVFO1xyXG5cdFx0bWFyZ2luLXRvcDogNTBycHg7XHJcblx0fVxyXG5cdC50ZWxfbG9naW4gLnVuaS1pY29uc3tcclxuXHRcdG1hcmdpbjogMCAxNnJweDtcclxuXHR9XHJcblx0LnRpdGxlX3RpcCB7XHJcblx0XHRmb250LWZhbWlseTogUGluZ0ZhbmctU0MtTWVkaXVtO1xyXG5cdFx0bGV0dGVyLXNwYWNpbmc6IDJycHg7XHJcblx0fVxyXG5cdC50aXRsZV90aXAgLnRpdGxle1xyXG5cdFx0Y29sb3I6ICMwMDAwMDA7XHJcblx0XHRmb250LXNpemU6IDQycnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcblx0LnRpdGxlX3RpcCAudGlwe1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdH1cclxuXHQuYXJlYUNvZGV7XHJcblx0XHRtYXJnaW46IDAgMTBycHg7XHJcblx0fVxyXG5cdC5jb2RlaW1ne1xyXG5cdFx0cGFkZGluZzogMHJweCAxNnJweDtcclxuXHRcdGJvcmRlcjogMnJweCBzb2xpZCAjOTA5MDkwO1xyXG5cdFx0Y29sb3I6ICM5MDkwOTA7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czoxMnJweDtcclxuXHR9XHJcblx0LmdldGNvZGVCdG57XHJcblx0XHRiYWNrZ3JvdW5kOiAjRUJFQkVCO1xyXG5cdFx0Y29sb3I6ICM4RjhGOEY7XHJcblx0XHRtYXJnaW4tdG9wOiA0NXJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzJycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMnJweDtcclxuXHRcdHBhZGRpbmc6NnJweCAwO1xyXG5cdFx0d2lkdGg6IDUxNHJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDM1cnB4O1xyXG5cdH1cclxuXHQuYnV0dG9uLWhvdmVye1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRiYWNrZ3JvdW5kOiAjODZCMEQ0O1xyXG5cdH1cclxuXHQubG9naW4tdGlwe1xyXG5cdFx0Y29sb3I6ICM2NjY2NjY7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDVycHg7XHJcblx0fVxyXG5cdC5mb290ZXJ7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzkwOTA5MDtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0fVxyXG5cdC5mb290ZXIgLnVzZXJ7XHJcblx0XHRjb2xvcjogIzg2QjBENDtcclxuXHR9XHJcblx0LmZvb3RlciAuc2VjcmV0e1xyXG5cdFx0Y29sb3I6ICM4NkIwRDQ7XHJcblx0fVxyXG5cdC5mb290ZXIgLnVuaS1sYWJlbC1wb2ludGVye1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhZDpcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC4yLjguMTEuMjAyMDA5MDcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdGVsbG9naW5pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhZDpcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWC4yLjguMTEuMjAyMDA5MDcuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIWQ6XFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclguMi44LjExLjIwMjAwOTA3LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFkOlxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYLjIuOC4xMS4yMDIwMDkwNy5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdGVsbG9naW5pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==