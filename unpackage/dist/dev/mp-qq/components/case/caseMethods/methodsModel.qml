<view class="sugicaldetail data-v-1b76a678"><view style="height:90rpx;" class="data-v-1b76a678"><view data-event-opts="{{[['tap',[['ThreeSelect',['$event']]]]]}}" class="toptitle data-v-1b76a678" bindtap="__e"><text class="data-v-1b76a678"></text><text class="data-v-1b76a678">{{titleName||'未填写'}}</text><view class="changeSwitch data-v-1b76a678"><text class="iconfont iconqiehuan data-v-1b76a678" style="margin-right:20rpx;"></text><text class="data-v-1b76a678">切换</text></view></view></view><block qq:if="{{methodsBanner.length!=0}}"><swiper class="swiperBox data-v-1b76a678" indicator-dots="{{true}}" autoplay="{{Imageplay}}" interval="{{3000}}" duration="{{1000}}" indicator-color="#333333" indicator-active-color="#ffffff" circular="true"><block qq:for="{{methodsBanner}}" qq:for-item="item" qq:for-index="index" qq:key="index"><swiper-item data-event-opts="{{[['tap',[['PreviewPic',[index,'$0'],['methodsBanner']]]]]}}" bindtap="__e" class="data-v-1b76a678"><view class="swiper-item data-v-1b76a678"><movable-area class="movable data-v-1b76a678"><image src="{{item}}" mode="aspectFit" class="data-v-1b76a678"></image><movable-view class="matchPic data-v-1b76a678" direction="all"></movable-view></movable-area></view></swiper-item></block></swiper></block><block qq:else><swiper class="swiperBox data-v-1b76a678" indicator-dots="{{true}}" autoplay="{{Imageplay}}" interval="{{3000}}" duration="{{1000}}" indicator-color="#333333" indicator-active-color="#ffffff" circular="true"><swiper-item class="data-v-1b76a678"><view class="swiper-item data-v-1b76a678"><movable-area class="movable data-v-1b76a678"><image src="../../../static/image/default.png" mode class="data-v-1b76a678"></image><movable-view class="matchPic data-v-1b76a678" direction="all"></movable-view></movable-area></view></swiper-item></swiper></block><uni-popup vue-id="1b7692c2-1" id="popupShare" type="share" data-ref="popupShare" data-event-opts="{{[['^change',[['change']]]]}}" bind:change="__e" class="data-v-1b76a678 vue-ref" bind:__l="__l" vue-slots="{{['default']}}"><view class="poplist data-v-1b76a678"><view class="pop_header data-v-1b76a678"><uni-segmented-control vue-id="{{('1b7692c2-2')+','+('1b7692c2-1')}}" current="{{current}}" values="{{items}}" style-type="text" activeColor="#86B0D4" data-event-opts="{{[['^clickItem',[['onClickItem']]]]}}" bind:clickItem="__e" class="data-v-1b76a678" bind:__l="__l"></uni-segmented-control></view><view class="content data-v-1b76a678"><view class="data-v-1b76a678"><scroll-view class="classifyItem data-v-1b76a678" scroll-y="true"><view hidden="{{!(current===0)}}" class="data-v-1b76a678"><scroll-view class="classifyItem data-v-1b76a678" scroll-y="true"><block qq:for="{{Alllist}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="content_item data-v-1b76a678"><text data-event-opts="{{[['tap',[['changePicAll',['$0'],[[['Alllist','',index,'id']]]]]]]}}" class="{{['data-v-1b76a678',item.id==boolIndexAll?'textColor':'']}}" bindtap="__e">{{item.name||'暂无数据'}}</text></view></block></scroll-view></view><view hidden="{{!(current===1)}}" class="data-v-1b76a678"><scroll-view class="classifyItem data-v-1b76a678" scroll-y="true"><block qq:for="{{Guidelist}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="content_item data-v-1b76a678"><text data-event-opts="{{[['tap',[['changePicGuide',['$0'],[[['Guidelist','',index,'id']]]]]]]}}" class="{{['data-v-1b76a678',item.id==boolIndexGuide?'textColor':'']}}" bindtap="__e">{{item.name||'暂无数据'}}</text></view></block></scroll-view></view><view hidden="{{!(current===2)}}" class="data-v-1b76a678"><scroll-view class="classifyItem data-v-1b76a678" scroll-y="true"><block qq:for="{{Instrumentlist}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="content_item data-v-1b76a678"><text data-event-opts="{{[['tap',[['changePicInstru',['$0'],[[['Instrumentlist','',index,'id']]]]]]]}}" class="{{['data-v-1b76a678',item.id==boolIndexInstru?'textColor':'']}}" bindtap="__e">{{item.name||'暂无数据'}}</text></view></block></scroll-view></view></scroll-view></view></view></view></uni-popup></view>