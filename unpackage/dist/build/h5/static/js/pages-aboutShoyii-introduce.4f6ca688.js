(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-aboutShoyii-introduce"],{"00a7":function(t,e,a){"use strict";a.r(e);var o=a("9dda"),i=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=i.a},1534:function(t,e,a){"use strict";var o=a("9f7c"),i=a.n(o);i.a},1801:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.updateLog=void 0;var o=a("4348"),i=function(e){return t.log(e),o.myRequest({url:"/appUpdateLog/loadAll",data:e})};e.updateLog=i}).call(this,a("5a52")["default"])},"5ccb":function(t,e,a){"use strict";a.r(e);var o=a("9216"),i=a("00a7");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("1534");var u,s=a("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"4227b06e",null,!1,o["a"],u);e["default"]=c.exports},9216:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uCollapse:a("73ce").default,uCollapseItem:a("4fee").default,uLoadmore:a("186e").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("u-collapse",{attrs:{"arrow-color":"#999"}},t._l(t.updateItem,(function(e,o){return a("u-collapse-item",{key:o,staticClass:"item",attrs:{title:""}},[a("v-uni-view",{attrs:{slot:"title"},slot:"title"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",[t._v(t._s(e.title))]),a("v-uni-text",{staticClass:"time"},[t._v(t._s(t._f("timeStamp")(e.createTime)))])],1)],1),a("v-uni-view",{},[a("v-uni-text",[t._v(t._s(e.content))])],1)],1)})),1),a("u-loadmore",{attrs:{status:t.status}})],1)},n=[]},"9dda":function(t,e,a){"use strict";(function(t){a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a("1801"),i={data:function(){return{updateItem:[],status:"nomore",page:1,size:12,total:0,mark:0}},methods:{updateLog:function(e,a){var i=this;(0,o.updateLog)({pageNum:a,pageSize:this.size}).then((function(a){t.log(a),0!=a.data.object.list.length?(i.total=a.data.object.pages,0==e?i.updateItem=a.data.object.list:1==e&&(i.updateItem=i.updateItem.concat(a.data.object.list))):i.status="nomore"})).catch((function(e){t.log(e)}))},onReachBottom:function(){if(this.page>=this.total)return this.status="nomore";this.status="loading",this.page++,this.mark=1,this.updateLog(this.mark,this.page)}},onLoad:function(){this.updateLog(0,1)}};e.default=i}).call(this,a("5a52")["default"])},"9f7c":function(t,e,a){var o=a("d1f1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("4f06").default;i("18419660",o,!0,{sourceMap:!1,shadowMode:!1})},d1f1:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".item[data-v-4227b06e]{\npadding:0 %?30?%;\nborder-bottom:1px solid #f8f8f8;background-color:#fff}\n.content[data-v-4227b06e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#000;font-size:%?30?%;line-height:%?40?%}.time[data-v-4227b06e]{color:#666;font-size:%?24?%}.bgColor[data-v-4227b06e]{background-color:#f8f8f8}",""]),t.exports=e}}]);