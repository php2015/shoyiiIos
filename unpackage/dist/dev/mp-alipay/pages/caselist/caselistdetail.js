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
    // ????????????
    caseBottom: caseBottom,
    // ??????????????????
    casedocinfor: casedocinfor,
    // ???????????????????????????
    electricInfor: electricInfor,
    // ???????????????????????????
    electricModel: electricModel,
    // ????????????
    twelveItems: twelveItems,
    methodsModel: methodsModel,
    // ????????????
    designModel: designModel,
    caseFiles: caseFiles,
    // ????????????
    casepredict: casepredict,
    // ????????????
    casefollow: casefollow },

  data: function data() {var _ref;
    return _ref = {
      // ??????????????????
      title: '??????',
      btnTitle: "????????????",
      helpshow: false,
      // ??????????????????
      listc: [
      {
        name: '??????????????????',
        disabled: false },

      {
        name: '??????????????????????????????',
        disabled: false },

      {
        name: '??????????????????',
        disabled: false }],


      checked: false,
      radioId: '', //??????????????????id
      // u-radio-group???v-model?????????????????????????????????radio???name????????????????????????
      value: '',
      listcheck: [
      {
        name: '??????',
        checked: false },

      {
        name: '??????',
        checked: false }],


      current: 0,
      background: {
        background: '#f8f8f8' },

      fixedBool: true,
      pills: false,
      tabs: ['????????????', '????????????', '????????????', '????????????', '????????????'],
      swiperCurrent: 0, //???????????????
      list: [
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} },
      { casedetail: {} }],

      scrollTop: 0,
      old: {
        scrollTop: 0 },

      casedocinfor: [], //?????????????????????
      id: '', //???????????????id
      // ?????????????????????
      threeModeltitle: '', //??????????????????title
      stlId: '',
      threemodel: {}, //???????????????????????????????????????
      threemodelbottom: [], //???????????????menu????????????????????????????????????
      // ????????????
      casePredict: [],
      casePredictbanner: [], //????????????????????????
      predictStlId: '',
      predictName: '',
      // ????????????
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

      //?????????????????????	
      Alllist: [], //????????????
      Guidelist: [], //????????????
      Instrumentlist: [], //????????????
      methodsBanner: [], //?????????????????????
      methodsStlId: '',
      titleName: '', //???????????????title
      // ????????????
      matching: [], //????????????
      DesignGuid: [], //????????????
      DesignInstrument: [], //????????????
      DesignData: {}, //???????????????????????????
      titleDesign: '', //????????????title
      DesignBanner: {}, //??????????????????
      designStlId: '',
      files: {}, //ppt,word ?????????
      // ????????????
      followUpData: [],
      guideBool: false,
      instrumentBool: false,
      helpstatusBool: '', //??????????????????
      auditshow: false, //?????????????????????
      cancelBtn: false,
      shareshow: false,
      casetitle: '??????', //?????????title;
      jstitle: '??????', //3js???title
      casecontent: '????????????', //??????????????????
      surfacePic: '../../static/image/default.png',
      assitDoc: [], //??????????????????
      groupshow: false, //vr?????????picker
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
    '??????'), _ref;

  },
  methods: {
    // ??????????????????
    share: function share(e) {
      console.log(this.electricId);
      console.log(this.designType); //????????????????????????????????????????????????????????????
      console.log(this.list[0].casedetail.caseHistoryNo); //?????????
      console.log(this.list[0].casedetail.name); //????????????
      console.log(this.casedocinfor[0].doctorVO.name);
      if (this.list[0].casedetail.name && this.list[0].casedetail.caseHistoryNo) {
        // ?????????????????????
        this.casecontent = '???????????????' + this.list[0].casedetail.name + '\n' + '????????????:' + this.casedocinfor[0].doctorVO.name + '\n' + '?????????:' + this.list[0].casedetail.caseHistoryNo;
      } else if (this.list[0].casedetail.name) {
        // ?????????????????????
        this.casecontent = '???????????????' + this.list[0].casedetail.name + '\n' + '????????????:' + this.casedocinfor[0].doctorVO.name;
      } else if (this.list[0].casedetail.caseHistoryNo) {
        // ?????????????????????
        this.casecontent = '????????????:' + this.casedocinfor[0].doctorVO.name + '\n' + '?????????:' + this.list[0].casedetail.caseHistoryNo;
      } else {
        // ?????????????????????
        this.casecontent = '????????????';
      }
      // ????????????
      console.log(this.casecontent);
      var page = getCurrentPages();
      console.log(page);
      var length = page.length - 1;
      var page1 = page[length];
      console.log(page1);
      console.log(page1.route);
      this.pageUrl = page1.route; //?????????????????????
      console.log(page1.options); //???????????????
      this.paramter = page1.options.id;










      if (this.swiperCurrent == 0) {//?????????????????????????????????????????????id???
        this.JsmodelId = this.electricId; //?????????3js?????????id;????????????stlid????????????
        var modelType = '????????????'; //3js?????????
        var modelIdType = 'majorTableId'; //3js?????????
        var token = uni.getStorageSync('token');
        if (this.threeModeltitle) {//?????????????????????????????????title?????????????????????
          this.jstitle = '????????????-' + this.threeModeltitle; //????????????????????????????????????title???
        }
        console.log(this.threemodel);
        console.log(this.threemodel.previewImage);
        if (this.threemodel.length == 0) {
          if (this.threemodel.previewImage) {//???????????????(????????????????????????????????????)
            this.surfacePic = Object.values(this.threemodel.previewImage)[0];
          }
        }
        console.log(this.JsmodelId);
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 1) {//????????????
        this.JsmodelId = this.methodsStlId;
        var modelType = '';
        var modelIdType = 'fileId';
        var token = '';
        if (this.titleName) {
          this.jstitle = '????????????-' + this.titleName;
        }
        console.log(this.methodsBanner);
        if (this.methodsBanner.length != 0) {
          this.surfacePic = this.methodsBanner[0];
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 2) {//????????????
        this.JsmodelId = this.designId;
        var modelIdType = 'majorTableId';
        var token = uni.getStorageSync('token');
        if (this.designType == 'Matching') {//?????????????????????????????????????????????
          var modelType = '??????????????????';
        } else if (this.designType == 'GuidePlate') {
          var modelType = '????????????';
        } else if (this.designType == 'Instrument') {
          var modelType = '??????????????????';
        }
        if (this.titleDesign) {
          this.jstitle = '????????????-' + this.titleDesign;
        }
        console.log(this.DesignBanner);
        if (Object.values(this.DesignBanner).length != 0) {
          this.surfacePic = Object.values(this.DesignBanner)[0];
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      } else if (this.swiperCurrent == 3) {//????????????
        var modelType = '';
        var modelIdType = 'fileId';
        var token = '';
        this.JsmodelId = this.predictStlId;
        console.log(this.casePredictbanner);
        if (this.predictName) {
          this.jstitle = '????????????-' + this.predictName;
        }
        if (this.casePredictbanner.length != 0) {
          this.surfacePic = this.casePredictbanner[0].fileDownloadUrl;
        }
        console.log(this.jstitle);
        console.log(this.surfacePic);
      }
      console.log(this.pageUrl);
      console.log(this.paramter);
      if (e) {//e???????????????????????????
        this.shareTitle = this.jstitle;
        // ???????????????url
        this.shareUrl = this.$JslineUrl + '&userType=D' + '&token=' + token + '&modelType=' + modelType + '&titlename=' + this.shareTitle + '&' + modelIdType + '=' + this.JsmodelId;
      } else {//e??????????????????????????????
        if (this.list[0].casedetail.name) {
          this.shareTitle = this.list[0].casedetail.name + '?????????'; //????????????????????????????????????
        } else {
          this.shareTitle = '??????????????????'; //????????????????????????????????????
        }
        // ?????????url
        this.shareUrl = this.$onlineUrl + this.pageUrl + '?id=' + this.paramter;
      }
      console.log(this.shareUrl);
      console.log(this.shareTitle);
    },
    cancelshare: function cancelshare() {
      this.shareshow = false;
    },
    // ?????????????????????
    shareWeixin: function shareWeixin() {
      // console.log(this.pageUrl)
      // console.log(this.paramter)
      // console.log(this.threeModeltitle)//???????????????title
      // console.log(this.shareUrl)


























    },
    // ??????????????????
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
            title: '????????????',
            icon: 'none' });

          console.log(e);
        },
        fail: function fail(e) {
          uni.showToast({
            title: '????????????',
            icon: 'none' });

        } });

    },
    // ?????????????????????
    cancel: function cancel() {
      this.groupshow = false;
    },
    // ?????????????????????
    canfirm: function canfirm() {var _this = this;
      console.log(this.groupId);
      if (!this.groupId) {
        uni.showToast({
          title: '??????????????????????????????',
          icon: 'none' });

        return;
      }
      if (this.swiperCurrent == 0) {//????????????
        this.threeModelName = 'ThreeDModel'; //???????????????????????????
        this.threeModelId = this.stlId; //???????????????stlid
      } else if (this.swiperCurrent == 1) {//????????????
        console.log(this.methodsType);
        this.threeModelName = this.methodsType; //?????????????????????????????????
        this.threeModelId = this.methodsStlId; //???????????????stlid
      } else if (this.swiperCurrent == 2) {//????????????
        this.threeModelName = this.designType; //?????????????????????????????????
        this.threeModelId = this.designStlId; //???????????????stlid
      }
      console.log(this.threeModelName);
      console.log(this.threeModelId);
      // ???????????????
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
    // ????????????
    amendAuthority: function amendAuthority(item, groupId, checkread, checkoperate) {
      console.log(item);
      console.log(groupId);
      console.log(checkread);
      console.log(checkoperate);
      this.groupId = groupId;
      (0, _editDevice.editDevice)({
        id: item.id,
        deviceName: item.deviceName, //????????????
        groupId: groupId, //????????????id
        deviceIdentity: item.deviceIdentity, //????????????
        deviceRead: checkread, // ?????????
        deviceControl: checkoperate //?????????
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
    // ??????????????????
    selectread: function selectread(e, item, groupId) {
      this.readBool = e.value;
      this.amendAuthority(item, groupId, this.readBool, item.deviceControl);
    },
    // ??????????????????
    selectoperate: function selectoperate(e, item, groupId) {
      this.operateBool = e.value;
      this.amendAuthority(item, groupId, item.deviceRead, this.operateBool);
    },
    vrshow: function vrshow() {var _this2 = this;
      if (this.swiperCurrent == 0) {//????????????
        if (!this.stlId) {
          uni.showToast({
            title: '???????????????',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 1) {//????????????
        if (!this.methodsStlId) {
          uni.showToast({
            title: '???????????????',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 2) {//????????????
        if (!this.designStlId) {
          uni.showToast({
            title: '???????????????',
            icon: 'none' });

          return;
        }
      } else if (this.swiperCurrent == 3) {//????????????
        uni.showToast({
          title: '????????????vr??????',
          icon: 'none' });

        return;
      }
      // ????????????????????????
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
    // ??????
    back: function back() {











    },
    // ??????????????????
    help: function help(assitDoc) {
      console.log(assitDoc);







      if (assitDoc.length != 0) {//????????????????????????
        if (assitDoc[0].identity == 'XZ') {
          uni.showToast({
            title: '????????????????????????????????????',
            icon: 'none' });

          return;
        }
      }
      if (this.helpstatusBool == 0) {//????????????
        this.helpshow = true;
      } else {//?????????????????????
        uni.navigateTo({
          url: '/pages/caselist/casecharge' });

      }
    },
    // ????????????radio?????????radio-group??????
    radioGroupChange: function radioGroupChange(e) {
      console.log(e);
      if (e == '??????????????????') {
        this.radioId = 1;
        this.guideBool = false;
        this.instrumentBool = false;
      } else if (e == '??????????????????????????????') {
        this.radioId = 2;
        this.guideBool = false;
        this.instrumentBool = false;
      } else if (e == '??????????????????') {//?????????????????????????????????????????????????????????????????????????????????false
        this.radioId = 3;
      }
    },
    // ?????????
    checkboxChange: function checkboxChange(e) {
      console.log(e);
      if (e.name == '??????') {
        this.guideBool = e.value;
      }
      if (e.name == '??????') {
        this.instrumentBool = e.value;
      }
    },
    helpcancel: function helpcancel() {},
    helpconfirm: function helpconfirm() {var _this3 = this;
      console.log(this.radioId); //?????????1,2,3
      console.log(this.checked); //?????????????????????
      console.log(this.guideBool); //??????
      console.log(this.instrumentBool); //??????
      if (!this.radioId) {
        uni.showToast({
          title: '?????????????????????',
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

          // ???????????????????????????
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
    // ??????????????????
    checkprice: function checkprice() {
      uni.navigateTo({
        url: '/pages/caselist/casecharge' });

    },
    //??????????????????
    change: function change(e) {
      this.current = e.detail.current;
      console.log(this.current);
      this.swiperCurrent = e.detail.current;
      this.getData(this.current, this.id);
    },
    // ??????????????????
    changeTab: function changeTab(index) {//???????????????????????????index????????????????????????change??????
      this.loadtextAll = ''; //??????menu????????????tip?????????'';
      this.swiperCurrent = index;
    },
    // object????????????
    changeData: function changeData(data, id) {var _this4 = this;
      console.log(data); //?????????????????????????????????
      var a = data.filter(function (item) {
        if (item.id == id) {
          return item;
        }
      });
      if (a[0].stlPictureModelIds) {
        var b = a[0].stlPictureModelIds.split(',');
        var indexArr = b.map(function (item) {//????????????????????????
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
              _this5.btnTitle = '?????????????????????';
              break;
            case 'WCXZ':
              _this5.helpstatusBool = 2;
              _this5.btnTitle = '?????????????????????';
              break;
            case 'YW':
              _this5.helpstatusBool = 3;
              _this5.btnTitle = '?????????????????????';
              break;
            case 'QD':
              _this5.helpstatusBool = 4;
              _this5.btnTitle = '??????????????????';
              break;
            default:
              _this5.helpstatusBool = 0;
              _this5.btnTitle = '????????????';
              break;}

        } else if (res.data.code == 2) {
          _this5.helpstatusBool = 0;
          _this5.btnTitle = '????????????';
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
          _this6.casedocinfor = res.data.object.attendingDoctors; //????????????????????????????????????
          _this6.assitDoc = res.data.object.assistDoctors;
          // ??????????????????
          if (index == 0) {
            _this6.threemodelbottom = data.threeDModel; //???????????????????????????????????????
            if (data.threeDModel.length != 0) {
              _this6.electricId = data.threeDModel[0].id; //?????????????????????3js??????
              _this6.stlId = data.threeDModel[0].stlFileModelId; //stl???id???????????????????????????
              _this6.threemodel = data.threeDModel[0]; //???????????????????????????????????????,?????????????????????
              _this6.threeModeltitle = data.threeDModel[0].title; //???????????????????????????????????????
            }
          }
          // ????????????
          if (index == 1) {
            if (!data.video) {//video ??????id
              return;
            }
            (0, _getSurgical.getSurgicalDetail)({ //???????????????????????????
              surgicalPlanId: data.video }).
            then(function (res) {
              console.log(res);
              var surgicalData = res.data.object;
              _this6.surgical = surgicalData;
              _this6.methodsStlId = surgicalData.surgicalPlanMatchingVOS[0].stlModelIds; //?????????????????????????????????methodsStlId???????????????
              _this6.titleName = surgicalData.surgicalPlanMatchingVOS[0].name;
              // ??????????????????????????????banner?????????????????????banner?????????????????????????????????banner???
              _this6.changeData(surgicalData.surgicalPlanMatchingVOS, surgicalData.surgicalPlanMatchingVOS[0].id);
              _this6.Alllist = surgicalData.surgicalPlanMatchingVOS; //????????????
              _this6.Guidelist = surgicalData.guideVOS; //??????????????????
              _this6.Instrumentlist = surgicalData.instrumentVOS; //??????????????????
            });
          }
          // ????????????
          if (index == 2) {
            _this6.DesignData = data; //???????????????????????????????????????????????????????????????????????????
            if (data.matching || data.matching.length != 0) {
              _this6.matching = data.matching; //?????????????????????
              _this6.titleDesign = data.matching[0].name;
              _this6.designId = data.matching[0].id; //????????????????????????id,?????????stl???id
              _this6.designStlId = data.matching[0].stlModelIds; //stl???id,??????????????????
              _this6.DesignBanner = data.matching[0].stlPictureUrl; //???????????????????????????????????????
            }
            if (data.guides || data.guides.length != 0) {//????????????
              _this6.DesignGuid = data.guides;
            }
            if (data.instrument || data.instrument.length != 0) {//????????????
              _this6.DesignInstrument = data.instrument;
            }
            if (data.surgicalDesignContentDTO) {
              _this6.files = data.surgicalDesignContentDTO; //ppt,word ?????????
            }
          }
          if (index == 3) {//????????????
            _this6.casePredictbanner = []; //???????????????????????????
            _this6.casePredict = data.caseHistoryEffectPredictions;
            _this6.predictStlId = data.caseHistoryEffectPredictions[0].stlModelIds;
            _this6.predictName = data.caseHistoryEffectPredictions[0].name;
            console.log(_this6.casePredict);
            var b = _this6.casePredict[0].stlPictureModelIds.split(',');
            console.log(b);
            b.map(function (item) {//????????????????????????
              _this6.casePredict[0].previewList.filter(function (items) {
                if (items.id == item) {
                  return _this6.casePredictbanner.push(items);
                }
              });
            });
            console.log(_this6.casePredictbanner); //????????????????????????
          }
          if (index == 4) {//????????????
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
    if (uni.getStorageSync('auditstatus') == 'NP' || uni.getStorageSync('auditstatus') == 'ZC') {//???????????????
      this.auditshow = true;
      return;
    }
    console.log(options.id);
    this.id = options.id;
    this.getData(0, options.id);
    this.getStatus(options.id);
    this.bus.$on('electricData', function (data) {//????????????????????????????????????
      console.log(data);
      _this7.threemodel = data; //???????????????????????????
      _this7.threeModeltitle = data.title; //?????????????????????????????????
      _this7.stlId = data.stlFileModelId; //??????????????????????????????stlid
      _this7.electricId = data.id; //?????????3js?????????id;???stlid????????????
    });
    // ????????????
    this.bus.$on('methodsData', function (data) {//????????????????????????????????????
      console.log(data);
      _this7.methodsBanner = data.bannerList; //???????????????????????????
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
    // ????????????
    this.bus.$on('designData', function (data) {//????????????????????????????????????
      console.log(data);
      _this7.DesignBanner = data.DesignBanner; //???????????????????????????
      _this7.designStlId = data.designStlId;
      _this7.titleDesign = data.titleDesign;
      _this7.designId = data.designId; //?????????????????????????????????????????????id
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
    // ????????????
    this.bus.$on('predictData', function (data) {//????????????????????????????????????
      console.log(data);
      _this7.casePredictbanner = data.predictData; //???????????????????????????
      _this7.predictName = data.name; //?????????????????????????????????
      _this7.predictStlId = data.stlId; //??????????????????????????????stlid
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