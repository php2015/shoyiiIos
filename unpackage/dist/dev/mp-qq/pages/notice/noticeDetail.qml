<view style="padding:0 30rpx;" class="data-v-694a1437">{{''+content+''}}<timeline vue-id="694a0081-1" class="data-v-694a1437" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{detailList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><timeline-item class="step data-v-694a1437" vue-id="{{('694a0081-2-'+index)+','+('694a0081-1')}}" leftTime="{{item.createTime}}" color="#86B0D4" bind:__l="__l" vue-slots="{{['default']}}"><view class="tripItem data-v-694a1437"><view class="title data-v-694a1437">{{item.title}}</view><view class="tips data-v-694a1437">{{item.content}}</view></view></timeline-item></block></timeline></view>