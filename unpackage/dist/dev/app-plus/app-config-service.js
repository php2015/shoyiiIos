
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/surgicalData/surgicalData","pages/surgicalData/Mysurgical","pages/caselist/case","pages/caselist/caselistdetail","pages/caselist/successCaseDetail","pages/caselist/selectTeam","pages/caselist/selectDesign","pages/caselist/DesignTeaminfor","pages/caselist/Designladerinfor","pages/caselist/checkprice","pages/caselist/logistics","pages/caselist/classifycase","pages/model/model","pages/model/myClassify","pages/model/setting","pages/model/MyDetail","pages/mine/mine","pages/login/tellogin","pages/login/telloginitem","pages/login/bindTel","pages/login/pwdLogin","pages/login/accountLogin","pages/surgicalData/surgicalDetail","pages/surgicalData/shoyiiDesign","pages/PersonalInfor/PersonalInfor","pages/ThreejsShow/ThreejsShow","pages/publicModel/publicModel","pages/publicModel/modelDetail","pages/publicModel/classifyModel","pages/PersonalInfor/AmendInfor","pages/PersonalInfor/auditInfor","pages/deviceManage/addDevice","pages/deviceManage/deviceManage","pages/deviceManage/groupDevices","pages/deviceManage/editDevice","pages/errpage/errpage","pages/download/download","pages/otherDoctor/otherDoctor","pages/doctorLogin/doctorLogin","pages/weather/weather","pages/experts/experts","pages/experts/detail","pages/GuidePage/GuidePage","pages/GeneralSetting/GeneralSetting","pages/GeneralSetting/settingLogo","pages/aboutShoyii/aboutShoyii","pages/aboutShoyii/introduce","pages/aboutShoyii/lawNotice","pages/aboutShoyii/privacyPolicy","pages/aboutShoyii/userAgree","pages/aboutShoyii/complain","pages/aboutShoyii/aboutCompony","pages/shoyiiChat/index","pages/shoyiiChat/chatWindow","pages/shoyiiChat/contactGroup","pages/shoyiiChat/searchInfor","pages/shoyiiChat/addFriends","pages/shoyiiChat/inviteOther","pages/shoyiiChat/newFriend","pages/shoyiiChat/complaint","pages/shoyiiChat/search","pages/aboutUs/aboutUs","pages/shoyiiStore/shoyiiStore","pages/notice/notice","pages/notice/noticeDetail","pages/news/news","pages/news/newsDetail","pages/orderManage/orderManage","pages/orderManage/orderDetail","pages/orderManage/orderQuestion","pages/orderManage/orderSuccess","pages/orderManage/paymentOrder","pages/orderManage/invoice","pages/surgicalListParam/surgicalListParam","pages/previewPdf/previewPdf","pages/register/register","pages/ForgetPassword/ForgetPassword","pages/ForgetPassword/SetPassword","pages/AccoutSecurity/AccoutSecurity","pages/AccoutSecurity/amendPhone","pages/AccoutSecurity/changePhone","pages/AccoutSecurity/amendPwd","pages/AccoutSecurity/secondPwd","pages/map/map","pages/map/echarts","pages/teachTrain/teachTrain","pages/teachTrain/trainInfor","pages/teachTrain/trainList"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"树蚁","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#CBCADC","selectedColor":"#86B0D4","backgroundColor":"#F7F7F7","fontSize":"12px","height":"55px","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"/static/image/index.png","selectedIconPath":"/static/image/index1.png"},{"pagePath":"pages/surgicalData/surgicalData","text":"方法库","iconPath":"/static/image/method.png","selectedIconPath":"/static/image/method1.png"},{"pagePath":"pages/caselist/case","text":"病例","iconPath":"/static/image/case.png","selectedIconPath":"/static/image/case1.png"},{"pagePath":"pages/model/model","text":"模型库","iconPath":"/static/image/model.png","selectedIconPath":"/static/image/model1.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"/static/image/mine.png","selectedIconPath":"/static/image/mine1.png"}]},"preloadRule":{"pages/index/index":{"network":"all","packages":["pages/shoyiiChat"]}},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":false,"autoclose":false},"appname":"树蚁医疗","compilerVersion":"3.4.15","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"shoyii","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","titleImage":"./static/image/shoyiilogo.png","navigationStyle":"custom","backgroundColor":"#F7F7F7","enablePullDownRefresh":true,"bounce":"","pullToRefresh":{"support":true,"color":"#85AFD3","height":"10%","contentdown":{"caption":"下拉可刷新自定义文本"}}}},{"path":"/pages/search/search","meta":{},"window":{"titleNView":{"buttons":[{"float":"right","text":"搜索","fontSize":"14px","color":"#666"}],"searchInput":{"autoFocus":"true","backgroundColor":"#EEEEEE","align":"left","borderRadius":"8px","placeholder":"输入搜索内容"}}}},{"path":"/pages/surgicalData/surgicalData","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"方法库","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/surgicalData/Mysurgical","meta":{},"window":{"navigationBarTitleText":"我的方法库","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom","pullToRefresh":{"color":"#85AFD3","offset":"10%"}}},{"path":"/pages/caselist/case","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"病例","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/caselist/caselistdetail","meta":{},"window":{"navigationBarTitleText":"病例","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom","bounce":"none","background":"#f8f8f8","subNVues":[{"id":"video","path":"pages/caselist/subNVue/video","type":"popup","style":{"position":"absolute","mask":"rgba(0,0,0,0.5)","margin":"auto","width":"700rpx","height":"500rpx"}}]}},{"path":"/pages/caselist/successCaseDetail","meta":{},"window":{"navigationBarTitleText":"成功案例","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/caselist/selectTeam","meta":{},"window":{"navigationBarTitleText":"选择团队","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/caselist/selectDesign","meta":{},"window":{"navigationBarTitleText":"树蚁辅助","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"backgroundColor":"#F7F7F7"}}},{"path":"/pages/caselist/DesignTeaminfor","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"backgroundColor":"#F7F7F7"}}},{"path":"/pages/caselist/Designladerinfor","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"backgroundColor":"#F7F7F7"}}},{"path":"/pages/caselist/checkprice","meta":{},"window":{"navigationBarTitleText":"价格详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"backgroundColor":"#F7F7F7"}}},{"path":"/pages/caselist/logistics","meta":{},"window":{"navigationBarTitleText":"物流信息","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"backgroundColor":"#F7F7F7"}}},{"path":"/pages/caselist/classifycase","meta":{},"window":{"navigationBarTitleText":"经典案例","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","navigationStyle":"custom"}},{"path":"/pages/model/model","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"模型库","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/model/myClassify","meta":{},"window":{"navigationBarTitleText":"分类详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/model/setting","meta":{},"window":{"navigationBarTitleText":"设置","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/model/MyDetail","meta":{},"window":{"navigationBarTitleText":"模型库详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/login/tellogin","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/telloginitem","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/login/bindTel","meta":{},"window":{"navigationBarTitleText":"手机号绑定","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/login/pwdLogin","meta":{},"window":{}},{"path":"/pages/login/accountLogin","meta":{},"window":{"navigationBarTitleText":"账号登录","navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black"}},{"path":"/pages/surgicalData/surgicalDetail","meta":{},"window":{"navigationBarTitleText":"方法库详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom","subNVues":[{"id":"video","path":"pages/caselist/subNVue/video","type":"popup","style":{"position":"absolute","mask":"rgba(0,0,0,0.5)","margin":"auto","width":"700rpx","height":"500rpx"}}]}},{"path":"/pages/surgicalData/shoyiiDesign","meta":{},"window":{"navigationBarTitleText":"树蚁设计","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/PersonalInfor/PersonalInfor","meta":{},"window":{"navigationBarTitleText":"我的资料"}},{"path":"/pages/ThreejsShow/ThreejsShow","meta":{},"window":{}},{"path":"/pages/publicModel/publicModel","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/publicModel/modelDetail","meta":{},"window":{"navigationBarTitleText":"模型库详情","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/publicModel/classifyModel","meta":{},"window":{"navigationBarTitleText":"分类名称","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/PersonalInfor/AmendInfor","meta":{},"window":{"navigationBarTitleText":"修改信息","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/PersonalInfor/auditInfor","meta":{},"window":{"navigationBarTitleText":"审核信息","enablePullDownRefresh":false,"bounce":"none","softinputMode":"adjustResize"}},{"path":"/pages/deviceManage/addDevice","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/deviceManage/deviceManage","meta":{},"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"设备管理"}},{"path":"/pages/deviceManage/groupDevices","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/deviceManage/editDevice","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/errpage/errpage","meta":{},"window":{"navigationBarTitleText":"页面错误","enablePullDownRefresh":false}},{"path":"/pages/download/download","meta":{},"window":{"navigationBarTitleText":"树蚁App下载","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/otherDoctor/otherDoctor","meta":{},"window":{"navigationBarTitleText":"个人主页","enablePullDownRefresh":false}},{"path":"/pages/doctorLogin/doctorLogin","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/weather/weather","meta":{},"window":{"navigationBarTitleText":"天气状况","enablePullDownRefresh":false}},{"path":"/pages/experts/experts","meta":{},"window":{"navigationBarTitleText":"专家团队","enablePullDownRefresh":false}},{"path":"/pages/experts/detail","meta":{},"window":{"navigationBarTitleText":"专家详情","enablePullDownRefresh":false}},{"path":"/pages/GuidePage/GuidePage","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/GeneralSetting/GeneralSetting","meta":{},"window":{"navigationBarTitleText":"通用","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#f8f8f8"}},{"path":"/pages/GeneralSetting/settingLogo","meta":{},"window":{"navigationBarTitleText":"自定义LOGO","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#F8F8F8"}},{"path":"/pages/aboutShoyii/aboutShoyii","meta":{},"window":{"navigationBarTitleText":"关于树蚁","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/introduce","meta":{},"window":{"navigationBarTitleText":"功能介绍","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/lawNotice","meta":{},"window":{"navigationBarTitleText":"法律声明","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/privacyPolicy","meta":{},"window":{"navigationBarTitleText":"隐私政策","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/userAgree","meta":{},"window":{"navigationBarTitleText":"用户协议","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/complain","meta":{},"window":{"navigationBarTitleText":"问题与意见反馈","enablePullDownRefresh":false}},{"path":"/pages/aboutShoyii/aboutCompony","meta":{},"window":{"navigationBarTitleText":"公司简介","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/shoyiiChat/index","meta":{},"window":{"navigationBarTitleText":"聊天页","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/shoyiiChat/chatWindow","meta":{},"window":{"navigationBarTitleText":"聊天","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","titleNView":{"buttons":[{"type":"menu","float":"right","color":"#666666"}]}}},{"path":"/pages/shoyiiChat/contactGroup","meta":{},"window":{"navigationBarTitleText":"群组信息","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/shoyiiChat/searchInfor","meta":{},"window":{"navigationBarTitleText":"添加好友","navigationBarBackgroundColor":"#F8F8F8","navigationBarTextStyle":"black"}},{"path":"/pages/shoyiiChat/addFriends","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/shoyiiChat/inviteOther","meta":{},"window":{"navigationBarTitleText":"选择联系人","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/shoyiiChat/newFriend","meta":{},"window":{"navigationBarTitleText":"新的朋友","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationStyle":"custom"}},{"path":"/pages/shoyiiChat/complaint","meta":{},"window":{"navigationBarTitleText":"投诉","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/shoyiiChat/search","meta":{},"window":{"navigationBarTitleText":"添加朋友","enablePullDownRefresh":false}},{"path":"/pages/aboutUs/aboutUs","meta":{},"window":{"navigationBarTitleText":"关于我们","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/shoyiiStore/shoyiiStore","meta":{},"window":{"navigationBarBackgroundColor":"#007AFF","navigationBarTextStyle":"white","navigationBarTitleText":"树蚁商城","navigationBarShadow":{},"navigationStyle":"default"}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarTitleText":"消息中心","enablePullDownRefresh":false}},{"path":"/pages/notice/noticeDetail","meta":{},"window":{"navigationBarTitleText":"消息详情","enablePullDownRefresh":false}},{"path":"/pages/news/news","meta":{"isNVue":true},"window":{"navigationBarTitleText":"新闻列表","enablePullDownRefresh":false,"navigationStyle":"default"}},{"path":"/pages/news/newsDetail","meta":{},"window":{"titleNView":{"buttons":[{"type":"share","float":"right","text":"分享","color":"#666"}]}}},{"path":"/pages/orderManage/orderManage","meta":{},"window":{"navigationBarTitleText":"订单管理","enablePullDownRefresh":false}},{"path":"/pages/orderManage/orderDetail","meta":{},"window":{"navigationBarTitleText":"账单详情","enablePullDownRefresh":false}},{"path":"/pages/orderManage/orderQuestion","meta":{},"window":{"navigationBarTitleText":"订单有疑问","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#f8f8f8"}},{"path":"/pages/orderManage/orderSuccess","meta":{},"window":{"navigationBarTitleText":"支付成功","enablePullDownRefresh":false}},{"path":"/pages/orderManage/paymentOrder","meta":{},"window":{"navigationBarTitleText":"支付详情","enablePullDownRefresh":false}},{"path":"/pages/orderManage/invoice","meta":{},"window":{"navigationBarTitleText":"申请发票","enablePullDownRefresh":false}},{"path":"/pages/surgicalListParam/surgicalListParam","meta":{},"window":{"navigationBarTitleText":"方法库","enablePullDownRefresh":false}},{"path":"/pages/previewPdf/previewPdf","meta":{},"window":{}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/ForgetPassword/ForgetPassword","meta":{},"window":{"navigationBarTitleText":"忘记密码","enablePullDownRefresh":false}},{"path":"/pages/ForgetPassword/SetPassword","meta":{},"window":{"navigationBarTitleText":"设置密码","enablePullDownRefresh":false}},{"path":"/pages/AccoutSecurity/AccoutSecurity","meta":{},"window":{"navigationBarTitleText":"账号安全","enablePullDownRefresh":false}},{"path":"/pages/AccoutSecurity/amendPhone","meta":{},"window":{"navigationBarTitleText":"修改手机号","enablePullDownRefresh":false}},{"path":"/pages/AccoutSecurity/changePhone","meta":{},"window":{"navigationBarTitleText":"更换新手机号","enablePullDownRefresh":false}},{"path":"/pages/AccoutSecurity/amendPwd","meta":{},"window":{"navigationBarTitleText":"修改密码","enablePullDownRefresh":false}},{"path":"/pages/AccoutSecurity/secondPwd","meta":{},"window":{"navigationBarTitleText":"修改二级密码","enablePullDownRefresh":false}},{"path":"/pages/map/map","meta":{},"window":{"navigationBarTitleText":"地图测试","enablePullDownRefresh":false}},{"path":"/pages/map/echarts","meta":{},"window":{"navigationBarTitleText":"echarts","enablePullDownRefresh":false}},{"path":"/pages/teachTrain/teachTrain","meta":{},"window":{"navigationBarTitleText":"教学培训","enablePullDownRefresh":false}},{"path":"/pages/teachTrain/trainInfor","meta":{},"window":{"navigationBarTitleText":"教学内容","enablePullDownRefresh":false}},{"path":"/pages/teachTrain/trainList","meta":{},"window":{"navigationBarTitleText":"报名信息","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
