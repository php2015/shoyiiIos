<view><v-tabs class="tabMenu" vue-id="34cd1a06-1" scroll="{{false}}" tabs="{{list}}" fontSize="24rpx" bgColor="#ffffff" fixed="{{fixedBool}}" color="#000000" pills="{{pills}}" lineColor="#86B0D4" activeColor="#86B0D4" value="{{current}}" data-event-opts="{{[['^change',[['tabsChange']]],['^input',[['__set_model',['','current','$event',[]]]]]]}}" bind:change="__e" bind:input="__e" bind:__l="__l"></v-tabs><scroll-view scroll-y="true"><block qq:if="{{current==0}}"><view><electric vue-id="34cd1a06-2" bannerList="{{bannerList}}" threemodel="{{threemodel}}" bind:__l="__l"></electric><docinfor vue-id="34cd1a06-3" docInfor="{{docInfor}}" Creatime="{{Creatime}}" bind:__l="__l"></docinfor><view class="section"><successtwelve-item vue-id="34cd1a06-4" twelveItems="{{twelveItems}}" patientName="{{patientName}}" patientCode="{{patientCode}}" bind:__l="__l"></successtwelve-item></view></view></block><block qq:if="{{current==1}}"><view><design vue-id="34cd1a06-5" designData="{{designData}}" matchData="{{matchData}}" guideData="{{guideData}}" instrumentData="{{instrumentData}}" inplantData="{{inplantData}}" bind:__l="__l"></design><docinfor vue-id="34cd1a06-6" docInfor="{{docInfor}}" Creatime="{{Creatime}}" files="{{files}}" bind:__l="__l"></docinfor></view></block></scroll-view></view>