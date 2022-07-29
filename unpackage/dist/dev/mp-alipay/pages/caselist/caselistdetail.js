(my["webpackJsonp"] = my["webpackJsonp"] || []).push([["pages/caselist/caselistdetail"],{

/***/ 100:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




























































































































































































































var _getcasedetail = __webpack_require__(/*! @/utill/api/case/getcasedetail.js */ 101);
var _help = __webpack_require__(/*! @/utill/api/case/help.js */ 102);
var _getSurgical = __webpack_require__(/*! @/utill/api/surgical/getSurgical.js */ 57);
var _helpStatus = __webpack_require__(/*! @/utill/api/case/helpStatus.js */ 103);
var _querydevice = __webpack_require__(/*! @/utill/api/DeviceGroup/querydevice.js */ 59);
var _vrGroup = __webpack_require__(/*! @/utill/api/DeviceGroup/vrGroup.js */ 104);
var _editDevice = __webpack_require__(/*! @/utill/api/DeviceGroup/editDevice.js */ 105);function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var casedocinfor = function casedocinfor() {__webpack_require__.e(/*! require.ensure | components/case/casedocinfor */ "components/case/casedocinfor").then((function () {return resolve(__webpack_require__(/*! @/components/case/casedocinfor.vue */ 722));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var electricInfor = function electricInfor() {__webpack_require__.e(/*! require.ensure | components/case/caseElectric/electricInfor */ "components/case/caseElectric/electricInfor").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseElectric/electricInfor.vue */ 729));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var electricModel = function electricModel() {__webpack_require__.e(/*! require.ensure | components/case/caseElectric/electricModel */ "components/case/caseElectric/electricModel").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseElectric/electricModel.vue */ 736));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var twelveItems = function twelveItems() {__webpack_require__.e(/*! require.ensure | components/surgical/twelveItems */ "components/surgical/twelveItems").then((function () {return resolve(__webpack_require__(/*! @/components/surgical/twelveItems.vue */ 743));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var methodsModel = function methodsModel() {__webpack_require__.e(/*! require.ensure | components/case/caseMethods/methodsModel */ "components/case/caseMethods/methodsModel").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseMethods/methodsModel.vue */ 750));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var designModel = function designModel() {__webpack_require__.e(/*! require.ensure | components/case/caseDesign/designModel */ "components/case/caseDesign/designModel").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseDesign/designModel.vue */ 757));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var caseFiles = function caseFiles() {__webpack_require__.e(/*! require.ensure | components/case/caseDesign/caseFiles */ "components/case/caseDesign/caseFiles").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseDesign/caseFiles.vue */ 764));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var casepredict = function casepredict() {__webpack_require__.e(/*! require.ensure | components/case/casepredict/casepredict */ "components/case/casepredict/casepredict").then((function () {return resolve(__webpack_require__(/*! @/components/case/casepredict/casepredict.vue */ 771));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var casefollow = function casefollow() {__webpack_require__.e(/*! require.ensure | components/case/casefollow/casefollow */ "components/case/casefollow/casefollow").then((function () {return resolve(__webpack_require__(/*! @/components/case/casefollow/casefollow.vue */ 778));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var caseBottom = function caseBottom() {__webpack_require__.e(/*! require.ensure | components/case/caseBottom */ "components/case/caseBottom").then((function () {return resolve(__webpack_require__(/*! @/components/case/caseBottom.vue */ 785));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =















{
  components: {
    // 病例底部
    caseBottom: caseBottom,
    // 主治医生信息
    casedocinfor: casedocinfor,
    // 电子病例十二项数据
    electricInfor: electricInfor,
    // 电子病例的模型数据
    electricModel: electricModel,
    // 手术方法
    twelveItems: twelveItems,
    methodsModel: methodsModel,
    // 手术设计
    designModel: designModel,
    caseFiles: caseFiles,
    // 效果预测
    casepredict: casepredict,
    // 术后随访
    casefollow: casefollow },

  data: function data() {var _ref;
    return _ref = {
      // 顶部导航标题
      title: '详情',
      btnTitle: "树蚁辅助",
      helpshow: false,
      // 寻求帮助列表
      listc: [
      {
        name: '精细三维重建',
        disabled: false },

      {
        name: '模型观察、分析、测量',
        disabled: false },

      {
        name: '手术方案设计',
        disabled: false }],


      checked: false,
      radioId: '', //选中的单选框id
      // u-radio-group的v-model绑定的值如果设置为某个radio的name，就会被默认选中
      value: '',
      listcheck: [
      {
        name: '导板',
        checked: false },

      {
        name: '器械',
        checked: false }],


      current: 0,
      background: {
        background: '#f8f8f8' },

      fixedBool: true,
      pills: false,
      tabs: ['电子病例', '手术方法', '手术设计', '效果预测', '术后随访'],
      swiperCurrent: 0, //默认是全部
      list: [
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} }],

      scrollTop: 0,
      old: {
        scrollTop: 0 },

      casedocinfor: [], //主治医生的信息
      id: '', //病例详情的id
      // 电子病例的数据
      threeModeltitle: '', //轮播图顶部的title
      stlId: '',
      threemodel: {}, //这个是轮播图对应的模型数据
      threemodelbottom: [], //这个是底部menu的数据（也即是模型数据）
      // 效果预测
      casePredict: [],
      casePredictbanner: [], //效果预测的轮播图
      predictStlId: '',
      predictName: '',
      // 手术方法
      surgical: {
        threeDGuideList: [
        { stlPicture: '[]' }],

        threeDInstrumentList: [
        { stlPicture: '[]' }],

        surgicalDesignStepsList: [
        { stlPicture: '[]' }],

        preoperativeConditionList: [
        { stlPicture: '[]' }],

        postoperativeSituationList: [
        { stlPicture: '[]' }] },

      //手术方法的数据	
      Alllist: [], //匹配情况
      Guidelist: [], //导板数据
      Instrumentlist: [], //器械数据
      methodsBanner: [], //手术方法轮播图
      methodsStlId: '',
      titleName: '', //手术方法的title
      // 手术设计
      matching: [], //匹配情况
      DesignGuid: [], //导板数据
      DesignInstrument: [], //器械数据
      DesignData: {}, //所有的手术设计数据
      titleDesign: '', //三维数据title
      DesignBanner: {}, //三维图形数据
      designStlId: '',
      files: {}, //ppt,word 的文件
      // 术后随访
      followUpData: [],
      guideBool: false,
      instrumentBool: false,
      helpstatusBool: '', //手术设计状态
      auditshow: false, //审核状态的展示
      cancelBtn: false,
      shareshow: false,
      casetitle: '病例', //病例的title;
      jstitle: '病例', //3js的title
      casecontent: '病例详情', //转发的内容；
      surfacePic: '../../static/image/default.png',
      assitDoc: [], //协助医生数据
      groupshow: false, //vr显示的picker
      deviceGroup: [] }, _defineProperty(_ref, "radioId",
    null), _defineProperty(_ref, "devices",
    []), _defineProperty(_ref, "readBool",
    false), _defineProperty(_ref, "operateBool",
    false), _defineProperty(_ref, "threeModelId",
    ''), _defineProperty(_ref, "threeModelName",
    ''), _defineProperty(_ref, "methodsType",
    'Matching'), _defineProperty(_ref, "designType",
    'Matching'), _defineProperty(_ref, "shareUrl",
    ''), _defineProperty(_ref, "JsmodelId",
    ''), _defineProperty(_ref, "electricId",
    ''), _defineProperty(_ref, "designId",
    ''), _defineProperty(_ref, "shareTitle",
    '病例'), _ref;

  },
  methods: {
    // 转发分享按钮
    share: function share(e) {
      console.log(this.electricId);
      console.log(this.designType); //手术设计选择的是导板还是器械还是匹配情况
      console.log(this.list[0].casedetail.caseHistoryNo); //病历号
      console.log(this.list[0].casedetail.name); //患者名称
      console.log(this.casedocinfor[0].doctorVO.name);
      if (this.list[0].casedetail.name && this.list[0].casedetail.caseHistoryNo) {
        // 病例的详情拼接
        this.casecontent = '患者姓名：' + this.list[0].casedetail.name + '\n' + '病历医生:' + this.casedocinfor[0].doctorVO.name + '\n' + '病历号:' + this.list[0].casedetail.caseHistoryNo;
      } else if (this.list[0].casedetail.name) {
        // 病例的详情拼接
        this.casecontent = '患者姓名：' + this.list[0].casedetail.name + '\n' + '病历医生:' + this.casedocinfor[0].doctorVO.name;
      } else if (this.list[0].casedetail.caseHistoryNo) {
        // 病例的详情拼接
        this.casecontent = '病历医生:' + this.casedocinfor[0].doctorVO.name + '\n' + '病历号:' + this.list[0].casedetail.caseHistoryNo;
      } else {
        // 病例的详情拼接
        this.casecontent = '病例详情';
      }
      // 病例详情
      console.log(this.casecontent);
      var page = getCurrentPages();
      console.log(page);
      var length = page.length - 1;
      var page1 = page[length];
      console.log(page1);
      console.log(page1.route);
      this.pageUrl = page1.route; //网页版页面路由
      console.log(page1.options); //网页版参数
      this.paramter = page1.options.id;










      if (this.swiperCurrent == 0) {//电子病例（这块传的是三维文件的id）
        this.JsmodelId = this.electricId; //这个是3js文件的id;跟具体的stlid要区分开
        var modelType = '电子病历'; //3js的参数
        var modelIdType = 'majorTableId'; //3js的参数
        var token = uni.getStorageSync('token');
        if (this.threeModeltitle) {//如果电子病例的三维模型title为空，默认病例
          this.jstitle = '电子病例-' + this.threeModeltitle; //转发出去的标题（三维模型title）
        }
        console.log(this.threemodel);
        console.log(this.threemodel.previewImage);
        if (this.threemodel.length == 0) {
          if (this.threemodel.previewImage) {//轮播图存在(转发出的图片，图片第一张)
            this.surfacePic = Object.values(this.threemodel.previewImage)[0];
          }
        }
        console.log(this.JsmodelId);
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 1) {//手术方法
        this.JsmodelId = this.methodsStlId;
        var modelType = '';
        var modelIdType = 'fileId';
        var token = '';
        if (this.titleName) {
          this.jstitle = '手术方法-' + this.titleName;
        }
        console.log(this.methodsBanner);
        if (this.methodsBanner.length != 0) {
          this.surfacePic = this.methodsBanner[0];
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 2) {//手术设计
        this.JsmodelId = this.designId;
        var modelIdType = 'majorTableId';
        var token = uni.getStorageSync('token');
        if (this.designType == 'Matching') {//要具体区分导板，器械，匹配情况
          var modelType = '手术三维设计';
        } else if (this.designType == 'GuidePlate') {
          var modelType = '导板设计';
        } else if (this.designType == 'Instrument') {
          var modelType = '其他器械设计';
        }
        if (this.titleDesign) {
          this.jstitle = '手术设计-' + this.titleDesign;
        }
        console.log(this.DesignBanner);
        if (Object.values(this.DesignBanner).length != 0) {
          this.surfacePic = Object.values(this.DesignBanner)[0];
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 3) {//效果预测
        var modelType = '';
        var modelIdType = 'fileId';
        var token = '';
        this.JsmodelId = this.predictStlId;
        console.log(this.casePredictbanner);
        if (this.predictName) {
          this.jstitle = '效果预测-' + this.predictName;
        }
        if (this.casePredictbanner.length != 0) {
          this.surfacePic = this.casePredictbanner[0].fileDownloadUrl;
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      }
      console.log(this.pageUrl);
      console.log(this.paramter);
      if (e) {//e存在，分享三维模型
        this.shareTitle = this.jstitle;
        // 三维模型的url
        this.shareUrl = this.$JslineUrl + '&userType=D' + '&token=' + token + '&modelType=' + modelType + '&titlename=' + this.shareTitle + '&' + modelIdType + '=' + this.JsmodelId;
      } else {//e不存在，分享的是病例
        if (this.list[0].casedetail.name) {
          this.shareTitle = this.list[0].casedetail.name + '的病例'; //病例标题是患者姓名的病例
        } else {
          this.shareTitle = '未命名的病例'; //病例标题是患者姓名的病例
        }
        // 病例的url
        this.shareUrl = this.$onlineUrl + this.pageUrl + '?id=' + this.paramter;
      }
      console.log(this.shareUrl);
      console.log(this.shareTitle);
    },
    cancelshare: function cancelshare() {
      this.shareshow = false;
    },
    // 分享到微信聊天
    shareWeixin: function shareWeixin() {
      // console.log(this.pageUrl)
      // console.log(this.paramter)
      // console.log(this.threeModeltitle)//三维图形的title
      // console.log(this.shareUrl)


























    },
    // 分享到朋友圈
    shareFriend: function shareFriend() {
      uni.share({
        provider: 'weixin',
        title: this.shareTitle,
        type: 0,
        // href: this.$onlineUrl+this.pageUrl+'?id='+this.paramter,
        href: this.shareUrl,
        summary: this.casecontent,
        scene: 'WXSenceTimeline',
        imageUrl: this.surfacePic,
        success: function success(e) {
          uni.showToast({
            title: '分享成功',
            icon: 'none' });

          console.log(e);
        },
        fail: function fail(e) {
          uni.showToast({
            title: '分享失败',
            icon: 'none' });

        } });

    },
    // 设备组选择取消
    cancel: function cancel() {
      this.groupshow = false;
    },
    // 设备组选择确定
    canfirm: function canfirm() {var _this = this;
      console.log(this.groupId);
      if (!this.groupId) {
        uni.showToast({
          title: '设备分组选择不能为空',
          icon: 'none' });

        return;
      }
      if (this.swiperCurrent == 0) {//电子病例
        this.threeModelName = 'ThreeDModel'; //电子病例，这个固定
        this.threeModelId = this.stlId; //电子病历的stlid
      } else if (this.swiperCurrent == 1) {//手术方法
        console.log(this.methodsType);
        this.threeModelName = this.methodsType; //导板，器械还是匹配情况
        this.threeModelId = this.methodsStlId; //手术方法的stlid
      } else if (this.swiperCurrent == 2) {//手术设计
        this.threeModelName = this.designType; //导板，器械还是匹配情况
        this.threeModelId = this.designStlId; //手术设计的stlid
      }
      console.log(this.threeModelName);
      console.log(this.threeModelId);
      // 设备组选择
      (0, _vrGroup.vrGroup)({
        groupId: this.groupId,
        majorTableId: this.threeModelId,
        majorTableName: this.threeModelName }).
      then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

          _this.groupshow = false;
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 修改权限
    amendAuthority: function amendAuthority(item, groupId, checkread, checkoperate) {
      console.log(item);
      console.log(groupId);
      console.log(checkread);
      console.log(checkoperate);
      this.groupId = groupId;
      (0, _editDevice.editDevice)({
        id: item.id,
        deviceName: item.deviceName, //设备名称
        groupId: groupId, //设备组的id
        deviceIdentity: item.deviceIdentity, //设备类型
        deviceRead: checkread, // 查看权
        deviceControl: checkoperate //操作权
      }).then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          // this.getDeviceData(this.groupId)
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    select: function select(id, item) {
      this.radioId = id;
      this.groupId = id;
      console.log(id);
      console.log(item.devices);
      this.devices = item.devices;
    },
    // 查看权的选择
    selectread: function selectread(e, item, groupId) {
      this.readBool = e.value;
      this.amendAuthority(item, groupId, this.readBool, item.deviceControl);
    },
    // 操作权的选择
    selectoperate: function selectoperate(e, item, groupId) {
      this.operateBool = e.value;
      this.amendAuthority(item, groupId, item.deviceRead, this.operateBool);
    },
    vrshow: function vrshow() {var _this2 = this;
      if (this.swiperCurrent == 0) {//电子病例
        if (!this.stlId) {
          uni.showToast({
            title: '无相关文件',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 1) {//手术方法
        if (!this.methodsStlId) {
          uni.showToast({
            title: '无相关文件',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 2) {//手术设计
        if (!this.designStlId) {
          uni.showToast({
            title: '无相关文件',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 3) {//效果预测
        uni.showToast({
          title: '不能进行vr显示',
          icon: 'none' });

        return;
      }
      // 查询所有的设备组
      (0, _querydevice.querydevice)({}).then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          _this2.deviceGroup = res.data.object;
          _this2.groupshow = true;
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 返回
    back: function back() {











    },
    // 寻求帮助弹窗
    help: function help(assitDoc) {
      console.log(assitDoc);







      if (assitDoc.length != 0) {//协助病例不能帮助
        if (assitDoc[0].identity == 'XZ') {
          uni.showToast({
            title: '协助病例不能申请树蚁辅助',
            icon: 'none' });

          return;
        }
      }
      if (this.helpstatusBool == 0) {//寻求帮助
        this.helpshow = true;
      } else {//否则弹出价格表
        uni.navigateTo({
          url: '/pages/caselist/casecharge' });

      }
    },
    // 选中任一radio时，由radio-group触发
    radioGroupChange: function radioGroupChange(e) {
      console.log(e);
      if (e == '精细三维重建') {
        this.radioId = 1;
        this.guideBool = false;
        this.instrumentBool = false;
      } else if (e == '模型观察、分析、测量') {
        this.radioId = 2;
        this.guideBool = false;
        this.instrumentBool = false;
      } else if (e == '手术方案设计') {//出了手术设计下可以自由选择，其它选项下的导板，器械都是false
        this.radioId = 3;
      }
    },
    // 多选框
    checkboxChange: function checkboxChange(e) {
      console.log(e);
      if (e.name == '导板') {
        this.guideBool = e.value;
      }
      if (e.name == '器械') {
        this.instrumentBool = e.value;
      }
    },
    helpcancel: function helpcancel() {},
    helpconfirm: function helpconfirm() {var _this3 = this;
      console.log(this.radioId); //单选框1,2,3
      console.log(this.checked); //重建软组织开关
      console.log(this.guideBool); //导板
      console.log(this.instrumentBool); //器械
      if (!this.radioId) {
        uni.showToast({
          title: '请选择具体选项',
          icon: 'none' });

        return;
      }
      (0, _help.help)({
        caseHistoryId: this.id,
        assistExt: {
          productType: this.radioId,
          softTissueBoolean: this.checked,
          guidePlateDesignBoolean: this.guideBool,
          instrumentDesignBoolean: this.instrumentBool },

        leaderId: 0 }).
      then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

          // 查询手术设计的状态
          _this3.getStatus(_this3.id);
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 查看价格详情
    checkprice: function checkprice() {
      uni.navigateTo({
        url: '/pages/caselist/casecharge' });

    },
    //滑动获取数据
    change: function change(e) {
      this.current = e.detail.current;
      console.log(this.current);
      this.swiperCurrent = e.detail.current;
      this.getData(this.current, this.id);
    },
    // 点击获取数据
    changeTab: function changeTab(index) {//点击获取数据，每次index的变动，都会触发change事件
      this.loadtextAll = ''; //更换menu时，底部tip默认为'';
      this.swiperCurrent = index;
    },
    // object匹配数据
    changeData: function changeData(data, id) {var _this4 = this;
      console.log(data); //对应的是匹配情况的数据
      var a = data.filter(function (item) {
        if (item.id == id) {
          return item;
        }
      });
      if (a[0].stlPictureModelIds) {
        var b = a[0].stlPictureModelIds.split(',');
        var indexArr = b.map(function (item) {//遍历出匹配的下标
          return Object.keys(_this4.surgical.previewImage).indexOf(item);
        });
        var newArr = [];
        indexArr.filter(function (item) {
          newArr.push(Object.values(_this4.surgical.previewImage)[item]);
        });
        this.methodsBanner = newArr;
        console.log(this.methodsBanner);
      }
    },
    getStatus: function getStatus(id) {var _this5 = this;
      (0, _helpStatus.helpStatus)({
        caseHistoryId: id }).
      then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          switch (res.data.object[0].assistDesign) {
            case 'YXZ':
              _this5.helpstatusBool = 1;
              _this5.btnTitle = '手术协助设计中';
              break;
            case 'WCXZ':
              _this5.helpstatusBool = 2;
              _this5.btnTitle = '手术协助已完成';
              break;
            case 'YW':
              _this5.helpstatusBool = 3;
              _this5.btnTitle = '手术协助修改中';
              break;
            case 'QD':
              _this5.helpstatusBool = 4;
              _this5.btnTitle = '手术协助确定';
              break;
            default:
              _this5.helpstatusBool = 0;
              _this5.btnTitle = '树蚁辅助';
              break;}

        } else if (res.data.code == 2) {
          _this5.helpstatusBool = 0;
          _this5.btnTitle = '树蚁辅助';
        } else
        {
          uni.showToast({
            title: res.data.msg,
            icon: 'none' });

        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    getData: function getData(index, id) {var _this6 = this;
      (0, _getcasedetail.getcasedetail)({
        caseHistoryId: id }).
      then(function (res) {
        console.log(res);
        if (res.data.code == 0) {
          var data = res.data.object;
          _this6.list[index].casedetail = data;
          _this6.casedocinfor = res.data.object.attendingDoctors; //数组，主治医生有多个？？
          _this6.assitDoc = res.data.object.assistDoctors;
          // 电子病例相关
          if (index == 0) {
            _this6.threemodelbottom = data.threeDModel; //用于电子病历的底部切换轮播
            if (data.threeDModel.length != 0) {
              _this6.electricId = data.threeDModel[0].id; //用于电子病例的3js分享
              _this6.stlId = data.threeDModel[0].stlFileModelId; //stl的id，默认是第一组数据
              _this6.threemodel = data.threeDModel[0]; //用于电子病历的三维数据显示,默认是第一组的
              _this6.threeModeltitle = data.threeDModel[0].title; //用于电子病历的三维数据标题
            }
          }
          // 手术方法
          if (index == 1) {
            if (!data.video) {//video 是个id
              return;
            }
            (0, _getSurgical.getSurgicalDetail)({ //获取数据方法的数据
              surgicalPlanId: data.video }).
            then(function (res) {
              console.log(res);
              var surgicalData = res.data.object;
              _this6.surgical = surgicalData;
              _this6.methodsStlId = surgicalData.surgicalPlanMatchingVOS[0].stlModelIds; //获取匹配情况的第一条的methodsStlId；用于默认
              _this6.titleName = surgicalData.surgicalPlanMatchingVOS[0].name;
              // 获取匹配情况的第一条banner数据，在所有的banner中筛选出匹配情况对应的banner图
              _this6.changeData(surgicalData.surgicalPlanMatchingVOS, surgicalData.surgicalPlanMatchingVOS[0].id);
              _this6.Alllist = surgicalData.surgicalPlanMatchingVOS; //匹配情况
              _this6.Guidelist = surgicalData.guideVOS; //导板匹配情况
              _this6.Instrumentlist = surgicalData.instrumentVOS; //器械匹配情况
            });
          }
          // 手术设计
          if (index == 2) {
            _this6.DesignData = data; //所有的病例里的数据（器械，导板，匹配情况全部分开）
            if (data.matching || data.matching.length != 0) {
              _this6.matching = data.matching; //匹配情况的数据
              _this6.titleDesign = data.matching[0].name;
              _this6.designId = data.matching[0].id; //匹配情况的对象的id,区别于stl的id
              _this6.designStlId = data.matching[0].stlModelIds; //stl的id,默认是第一个
              _this6.DesignBanner = data.matching[0].stlPictureUrl; //默认是匹配情况的第一条数据
            }
            if (data.guides || data.guides.length != 0) {//导板数据
              _this6.DesignGuid = data.guides;
            }
            if (data.instrument || data.instrument.length != 0) {//器械数据
              _this6.DesignInstrument = data.instrument;
            }
            if (data.surgicalDesignContentDTO) {
              _this6.files = data.surgicalDesignContentDTO; //ppt,word 的文件
            }
          }
          if (index == 3) {//效果预测
            _this6.casePredictbanner = []; //每次切换都设置为空
            _this6.casePredict = data.caseHistoryEffectPredictions;
            _this6.predictStlId = data.caseHistoryEffectPredictions[0].stlModelIds;
            _this6.predictName = data.caseHistoryEffectPredictions[0].name;
            console.log(_this6.casePredict);
            var b = _this6.casePredict[0].stlPictureModelIds.split(',');
            console.log(b);
            b.map(function (item) {//遍历出匹配的下标
              _this6.casePredict[0].previewList.filter(function (items) {
                if (items.id == item) {
                  return _this6.casePredictbanner.push(items);
                }
              });
            });
            console.log(_this6.casePredictbanner); //效果预测的轮播图
          }
          if (index == 4) {//术后随访
            _this6.followUpData = data.followUps;
            console.log(_this6.followUpData);
          }
        }
      }).catch(function (err) {
        console.log(err);
      });

    },
    upper: function upper(e) {},
    lower: function lower(e) {},
    scroll: function scroll(e) {
      this.old.scrollTop = e.detail.scrollTop;
    },
    auditconfirm: function auditconfirm(e) {
      this.auditshow = false;
    },
    auditcancel: function auditcancel(e) {
      this.auditshow = false;
    } },

  onLoad: function onLoad(options) {var _this7 = this;
    if (uni.getStorageSync('auditstatus') == 'NP' || uni.getStorageSync('auditstatus') == 'ZC') {//如果未通过
      this.auditshow = true;
      return;
    }
    console.log(options.id);
    this.id = options.id;
    this.getData(0, options.id);
    this.getStatus(options.id);
    this.bus.$on('electricData', function (data) {//监听到电子病例更换的数据
      console.log(data);
      _this7.threemodel = data; //轮播图上的三维数据
      _this7.threeModeltitle = data.title; //轮播图上的三维数据标题
      _this7.stlId = data.stlFileModelId; //轮播图上的三维数据的stlid
      _this7.electricId = data.id; //这个是3js文件的id;跟stlid要区分开
    });
    // 手术方法
    this.bus.$on('methodsData', function (data) {//监听到电子病例更换的数据
      console.log(data);
      _this7.methodsBanner = data.bannerList; //轮播图上的三维数据
      _this7.methodsStlId = data.methodsStlId;
      _this7.titleName = data.titleName;
      console.log(data.count);
      switch (data.count) {
        case 0:
          _this7.methodsType = 'Matching';
          break;
        case 1:
          _this7.methodsType = 'GuidePlate';
          break;
        case 2:
          _this7.methodsType = 'Instrument';
          break;}

      console.log(data.count);
    });
    // 手术设计
    this.bus.$on('designData', function (data) {//监听到电子病例更换的数据
      console.log(data);
      _this7.DesignBanner = data.DesignBanner; //轮播图上的三维数据
      _this7.designStlId = data.designStlId;
      _this7.titleDesign = data.titleDesign;
      _this7.designId = data.designId; //获取的整个导板或器械或匹配情况id
      console.log(data.count);
      switch (data.count) {
        case 0:
          _this7.designType = 'Matching';
          break;
        case 1:
          _this7.designType = 'GuidePlate';
          break;
        case 2:
          _this7.designType = 'Instrument';
          break;}

    });
    // 效果预测
    this.bus.$on('predictData', function (data) {//监听到电子病例更换的数据
      console.log(data);
      _this7.casePredictbanner = data.predictData; //轮播图上的三维数据
      _this7.predictName = data.name; //轮播图上的三维数据标题
      _this7.predictStlId = data.stlId; //轮播图上的三维数据的stlid
    });
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 106:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=style&index=0&id=d09428d2&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./caselistdetail.vue?vue&type=style&index=0&id=d09428d2&scoped=true&lang=scss& */ 107);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 107:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=style&index=0&id=d09428d2&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 95:
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/shoyii/main.js?{"page":"pages%2Fcaselist%2Fcaselistdetail"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _caselistdetail = _interopRequireDefault(__webpack_require__(/*! ./pages/caselist/caselistdetail.vue */ 96));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_caselistdetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-alipay/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 96:
/*!*******************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caselistdetail.vue?vue&type=template&id=d09428d2&scoped=true& */ 97);
/* harmony import */ var _caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caselistdetail.vue?vue&type=script&lang=js& */ 99);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _caselistdetail_vue_vue_type_style_index_0_id_d09428d2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caselistdetail.vue?vue&type=style&index=0&id=d09428d2&scoped=true&lang=scss& */ 106);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d09428d2",
  null,
  false,
  _caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/caselist/caselistdetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=template&id=d09428d2&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./caselistdetail.vue?vue&type=template&id=d09428d2&scoped=true& */ 98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_template_id_d09428d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 98:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=template&id=d09428d2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uNavbar: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-navbar/u-navbar */ "uview-ui/components/u-navbar/u-navbar").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-navbar/u-navbar.vue */ 658))
  },
  uniIcons: function() {
    return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 519))
  },
  vTabs: function() {
    return __webpack_require__.e(/*! import() | components/v-tabs/v-tabs */ "components/v-tabs/v-tabs").then(__webpack_require__.bind(null, /*! @/components/v-tabs/v-tabs.vue */ 637))
  },
  uModal: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 665))
  },
  uRadioGroup: function() {
    return Promise.all(/*! import() | uview-ui/components/u-radio-group/u-radio-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-radio-group/u-radio-group")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-radio-group/u-radio-group.vue */ 672))
  },
  uRadio: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-radio/u-radio */ "uview-ui/components/u-radio/u-radio").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-radio/u-radio.vue */ 680))
  },
  uniTransition: function() {
    return __webpack_require__.e(/*! import() | components/uni-transition/uni-transition */ "components/uni-transition/uni-transition").then(__webpack_require__.bind(null, /*! @/components/uni-transition/uni-transition.vue */ 687))
  },
  uCheckboxGroup: function() {
    return Promise.all(/*! import() | uview-ui/components/u-checkbox-group/u-checkbox-group */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-checkbox-group/u-checkbox-group")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-checkbox-group/u-checkbox-group.vue */ 694))
  },
  uCheckbox: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-checkbox/u-checkbox */ "uview-ui/components/u-checkbox/u-checkbox").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-checkbox/u-checkbox.vue */ 701))
  },
  uSwitch: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-switch/u-switch */ "uview-ui/components/u-switch/u-switch").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-switch/u-switch.vue */ 708))
  },
  uPopup: function() {
    return __webpack_require__.e(/*! import() | uview-ui/components/u-popup/u-popup */ "uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 715))
  },
  auditStatus: function() {
    return __webpack_require__.e(/*! import() | components/auditStatus/auditStatus */ "components/auditStatus/auditStatus").then(__webpack_require__.bind(null, /*! @/components/auditStatus/auditStatus.vue */ 609))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 99:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/shoyii/pages/caselist/caselistdetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./caselistdetail.vue?vue&type=script&lang=js& */ 100);
/* harmony import */ var _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_d_Downloads_HBuilderX_2_8_11_20200907_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_caselistdetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[[95,"common/runtime","common/vendor"]]]);