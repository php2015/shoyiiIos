if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/IndexMenu/IndexMenu?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-segmented-control/uni-segmented-control?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/IndexCaselist/IndexCaselist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-icon/u-icon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-tag/u-tag?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-read-more/u-read-more?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../components/GroupsList/GroupsList?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-icons/uni-icons?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-no-network/u-no-network?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/surgical/surgicalList?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-badge/u-badge?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/model/modellist?hash=798c98482750f07cd5a88fa7381b5fa0c097ec1f');
require('../../uview-ui/components/u-image/u-image?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-empty/u-empty?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../components/model/classifyModel?hash=2927a0ecab7370c404d24131fd3d0ec816d1f288');
require('../../uview-ui/components/u-swiper/u-swiper?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-tag/uni-tag?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/load-more/load-more?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/uni-status-bar/uni-status-bar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-nav-bar/uni-nav-bar?hash=e131c6705ecd6504274661106fc380014f3123b8');
require('../../components/navbar/navbar?hash=36d3342f94e28c6ebe9afa638b3c4fa44605137d');
require('../../uview-ui/components/u-search/u-search?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-dropdown/u-dropdown?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-cell-group/u-cell-group?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-cell-item/u-cell-item?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-dropdown-item/u-dropdown-item?hash=5d79d77c84ed8f0da5f7b48edef6f4c45d55c279');
require('../../uview-ui/components/u-button/u-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-back-top/u-back-top?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-mask/u-mask?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-popup/u-popup?hash=5622865c60292ad30694278ba2f3c54eebe00fac');
require('../../uview-ui/components/u-loading/u-loading?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-modal/u-modal?hash=73b5969633e2c16bb5b00b7e7ccbb3297cea257f');
require('../../components/auditStatus/auditStatus?hash=88a66ed679736e733658ae136af300b34b769801');
require('../../components/surgical/MysurgicalList?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/v-tabs/v-tabs?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/caselist/caselist?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-calendar/u-calendar?hash=23881233565f89c98bc4a21b5cc494e37adf1393');
require('../../uview-ui/components/u-navbar/u-navbar?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-radio-group/u-radio-group?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-radio/u-radio?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../components/uni-transition/uni-transition?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-checkbox-group/u-checkbox-group?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-checkbox/u-checkbox?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-switch/u-switch?hash=059f4e65dc0a15136be06911d4a9c64a7fa7917a');
require('../../components/case/caseBottom?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/case/casedocinfor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/case/caseElectric/electricInfor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../components/case/caseElectric/electricModel?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../components/surgical/twelveItems?hash=2596391f94bb16b721514e09a0f5973ffdcfd8b2');
require('../../components/case/caseMethods/methodsModel?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../components/case/caseDesign/designModel?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../components/case/caseDesign/caseFiles?hash=8f67ca3f306a18b34fbba53844c8a1047f50ec65');
require('../../components/case/casepredict/casepredict?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../components/case/casefollow/casefollow?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/case/successCase/electric?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../components/case/successCase/docinfor?hash=8f67ca3f306a18b34fbba53844c8a1047f50ec65');
require('../../components/case/successCase/successtwelveItem?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/case/successCase/design?hash=caf9f21582e52c0f919d2361f3f2de67617ff647');
require('../../uview-ui/components/u-input/u-input?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../components/vrshow/vrshow?hash=34eba4eac3f77fb54555eeacd7a9d10f611cc765');
require('../../components/wechatShare/wechatShare?hash=b38c0e26a63414fec586832d651ddd8a4ddc0cde');
require('../../components/model/modelBottom?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-parse/libs/trees?hash=e8f483ad5a871b6c5d4bc3e44952d9f4da69faaf');
require('../../uview-ui/components/u-parse/u-parse?hash=e8f483ad5a871b6c5d4bc3e44952d9f4da69faaf');
require('../../components/model/publicModel?hash=4335a2cb877ffc9550a18e1eb0ebf351efe0aa9c');
require('../../components/chenbin-timeline/timeLine?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/chenbin-timeline/timelineItem?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/login-top/login-top?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../uview-ui/components/u-field/u-field?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-verification-code/u-verification-code?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/threeModelPic/threeModelPic?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/surgical/surgicalDocInfor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/surgical/surgicalBottom?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/surgical/successCase?hash=c4765ac1dfb9f3b4bdeb3e9785e7a7be19d4f370');
require('../../uview-ui/components/u-avatar/u-avatar?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-select/u-select?hash=b38c0e26a63414fec586832d651ddd8a4ddc0cde');
require('../../uview-ui/components/u-number-keyboard/u-number-keyboard?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-car-keyboard/u-car-keyboard?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../uview-ui/components/u-keyboard/u-keyboard?hash=ea38a9ccdc8dcc24c77155cb9bda8c72b10f42c3');
require('../../uview-ui/components/u-top-tips/u-top-tips?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../uview-ui/components/u-toast/u-toast?hash=9e298209269eb10b31459e05fc702a747332b168');
require('../../components/uni-swipe-action/uni-swipe-action?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/uni-swipe-action-item/uni-swipe-action-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/news/news?hash=d1b1277c405324177ecf993ed0e3098f70745cb5');
require('../../components/otherDocInfor/otherDocInfor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/otherDocInfor/otherDocModel?hash=2927a0ecab7370c404d24131fd3d0ec816d1f288');
require('../../components/otherDocInfor/otherDocSurgical?hash=2927a0ecab7370c404d24131fd3d0ec816d1f288');
require('../../pages/index/index?hash=fcbf4d2626e59f731d485410331cd0418d754309');
require('../../pages/aboutUs/aboutUs?hash=35e491d3c70c07ee9332c8f13e5f8f7214c1093f');
require('../../pages/search/search?hash=28b40ce1076fc1f540b8288348d76d1c6f11f4b2');
require('../../pages/surgicalData/surgicalData?hash=2dbadbb82feb78362aa149e9e9d66b6865bbcb92');
require('../../pages/surgicalData/Mysurgical?hash=5581360c86a54f387012af9a1b798469adebeebe');
require('../../pages/caselist/caselist?hash=daa680ede6ad71c74da748c7252c94068aae077a');
require('../../pages/caselist/caselistdetail?hash=a1099941f2d0a0ba32440534ea9012062c835294');
require('../../pages/caselist/successCaseDetail?hash=e382641bd85370f9b96c64b1b08c461eae33584f');
require('../../pages/caselist/casecharge?hash=d2dcfa84aa992b6c4554e921ccaa99c2a766fd0a');
require('../../pages/model/model?hash=808393bae1b3e2d1db7abfd751305d6a5561d901');
require('../../pages/model/MyDetail?hash=c9398fabe2dc1ae9453751fe150558f348a417f5');
require('../../pages/course/course?hash=3041ea741db1b96e608ea191cfaedc9bc248300a');
require('../../pages/contactUs/contactUs?hash=da8bcc5f6be41a44c452ae6e56b02289755ce307');
require('../../pages/mine/mine?hash=49c00f23b56ffa73b6caa29958503464804b5bee');
require('../../pages/detail/detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/tellogin?hash=ce90f82a34b9de1d653bc3b208b98d30efa4f286');
require('../../pages/login/telloginitem?hash=f433f231f03b10cbbe16269475bb7fe68e3b8d22');
require('../../pages/login/bindTel?hash=16e8a23c203f51238c939a19fab057d8b6c8a3b7');
require('../../pages/register/register?hash=af30089a14de5bba22f51cbb6b3d48bc536087f6');
require('../../pages/login/pwdLogin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/newsDetail/newsDetail?hash=b9852c817e5fe8452a2b8b499fba109e6189e861');
require('../../pages/surgicalData/surgicalDetail?hash=d64c8da7a6c03f1a653d7a5488bfc015f1df36d2');
require('../../pages/PersonalInfor/PersonalInfor?hash=990a56016b71c677ce8dd89aa492848c4a0f699a');
require('../../pages/previewPdf/previewPdf?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/ThreejsShow/ThreejsShow?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/upload/upload?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/publicModel/publicModel?hash=6ce1c1ff9320f1bc5e9e7e8c5015374704f9bf81');
require('../../pages/publicModel/modelDetail?hash=e229b336448b5230724ee8b24cb207d8be2fa3bf');
require('../../pages/publicModel/classifyModel?hash=980234ef574c3f0b34647303702c045e97721e20');
require('../../pages/shoyiiStore/shoyiiStore?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/PersonalInfor/AmendInfor?hash=57009003d124d2a7bb3337060c4a8526279abae1');
require('../../pages/PersonalInfor/auditInfor?hash=ca326b92bdac5816992646afca7bd34f7ca2ea28');
require('../../pages/deviceManage/addDevice?hash=c6aa093c7ffcfaa9f144b6ec2c59ac9c47779761');
require('../../pages/deviceManage/deviceManage?hash=775314ce6da6a4290f9c5595c5fd40ec2efbbfd8');
require('../../pages/deviceManage/groupDevices?hash=9118dce8800e96c542214879d6822d1128f3c7d4');
require('../../pages/deviceManage/editDevice?hash=c6aa093c7ffcfaa9f144b6ec2c59ac9c47779761');
require('../../pages/errpage/errpage?hash=d4aa4e5f40ceb6f58855716282c27be291cf94f7');
require('../../pages/GeneralSetting/GeneralSetting?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/news/news?hash=db3f796471d0f54c44c5cccdd18ad52b94f2664d');
require('../../pages/aboutShoyii/aboutShoyii?hash=5717c63b3e8b163d2c309233b7a2c7fd3ee3956c');
require('../../pages/aboutShoyii/introduce?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/aboutShoyii/lawNotice?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/aboutShoyii/privacyPolicy?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/aboutShoyii/businessLicense?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/download/download?hash=fe07aa394977bf6fa97a1ac0b50a8db68ef16aee');
require('../../pages/otherDoctor/otherDoctor?hash=1e617219a26781d9bd4931db8a336f3c1aa88467');
require('../../pages/ForgetPassword/ForgetPassword?hash=16e8a23c203f51238c939a19fab057d8b6c8a3b7');
require('../../pages/ForgetPassword/SetPassword?hash=d6babfbeff13edf9c3e80db760dd0917ec9fccc5');
require('../../pages/AccoutSecurity/AccoutSecurity?hash=af30089a14de5bba22f51cbb6b3d48bc536087f6');
require('../../pages/AccoutSecurity/amendPhone?hash=16e8a23c203f51238c939a19fab057d8b6c8a3b7');
require('../../pages/AccoutSecurity/changePhone?hash=16e8a23c203f51238c939a19fab057d8b6c8a3b7');
require('../../pages/AccoutSecurity/amendPwd?hash=d6babfbeff13edf9c3e80db760dd0917ec9fccc5');
require('../../pages/doctorLogin/doctorLogin?hash=9f1f5dce1569f62f3f35de8b2fe5cb1ee12f74b3');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}