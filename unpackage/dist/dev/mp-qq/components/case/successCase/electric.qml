<view class="data-v-6cd412ad"><view style="height:90rpx;" class="data-v-6cd412ad"><view data-event-opts="{{[['tap',[['ThreeSelect',['$event']]]]]}}" class="toptitle data-v-6cd412ad" bindtap="__e"><text class="data-v-6cd412ad"></text><block qq:if="{{bannerList.title}}"><text class="data-v-6cd412ad">{{bannerList.title||'未填写'}}</text></block><view class="changeSwitch data-v-6cd412ad"><text class="iconfont iconqiehuan data-v-6cd412ad" style="margin-right:20rpx;"></text><text class="data-v-6cd412ad">切换</text></view></view></view><block qq:if="{{bannerList.previewUrl}}"><swiper class="swiperBox data-v-6cd412ad" indicator-dots="{{true}}" autoplay="{{Imageplay}}" interval="{{3000}}" duration="{{1000}}" indicator-color="#333333" indicator-active-color="#ffffff" circular="true"><block qq:for="{{bannerList.previewUrl}}" qq:for-item="item" qq:for-index="index" qq:key="index"><swiper-item data-event-opts="{{[['tap',[['PreviewPic',['$0'],['bannerList.previewUrl']]]]]}}" bindtap="__e" class="data-v-6cd412ad"><view class="swiper-item data-v-6cd412ad"><movable-area class="movable data-v-6cd412ad"><image src="{{item}}" mode="aspectFit" class="data-v-6cd412ad"></image><movable-view class="matchPic data-v-6cd412ad" direction="all"></movable-view></movable-area></view></swiper-item></block></swiper></block><block qq:else><swiper class="swiperBox data-v-6cd412ad" indicator-dots="{{true}}" autoplay="{{Imageplay}}" interval="{{3000}}" duration="{{1000}}" indicator-color="#333333" indicator-active-color="#ffffff" circular="true"><swiper-item class="data-v-6cd412ad"><view class="swiper-item data-v-6cd412ad"><movable-area class="movable data-v-6cd412ad"><image src="../../../static/image/default.png" mode="aspectFit" class="data-v-6cd412ad"></image><movable-view class="matchPic data-v-6cd412ad" direction="all"></movable-view></movable-area></view></swiper-item></swiper></block><view class="popUpBox data-v-6cd412ad"><uni-popup vue-id="6cd3fef7-1" id="popupShare" type="share" data-ref="popupShare" class="data-v-6cd412ad vue-ref" bind:__l="__l" vue-slots="{{['default']}}"><view class="poplist data-v-6cd412ad"><view class="pop_header data-v-6cd412ad"><uni-segmented-control vue-id="{{('6cd3fef7-2')+','+('6cd3fef7-1')}}" current="{{current}}" values="{{items}}" style-type="text" activeColor="#86B0D4" class="data-v-6cd412ad" bind:__l="__l"></uni-segmented-control></view><view class="content data-v-6cd412ad"><view class="data-v-6cd412ad"><scroll-view class="classifyItem data-v-6cd412ad" scroll-y="true"><block qq:for="{{threemodel}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="content_item data-v-6cd412ad"><text data-event-opts="{{[['tap',[['changePic',[index,'$0'],[[['threemodel','',index,'id']]]]]]]}}" class="{{['data-v-6cd412ad',index==boolIndex?'textColor':'']}}" bindtap="__e">{{item.title}}</text></view></block></scroll-view></view></view></view></uni-popup></view></view>