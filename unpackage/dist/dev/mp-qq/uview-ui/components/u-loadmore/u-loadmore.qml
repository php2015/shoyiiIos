<view class="u-load-more-wrap data-v-874545c0" style="{{'background-color:'+(bgColor)+';'+('margin-bottom:'+(marginBottom+'rpx')+';')+('margin-top:'+(marginTop+'rpx')+';')+('height:'+($root.g0)+';')}}"><u-line vue-id="87456d2c-1" color="#d4d4d4" length="50" class="data-v-874545c0" bind:__l="__l"></u-line><view class="{{['u-load-more-inner data-v-874545c0',status=='loadmore'||status=='nomore'?'u-more':'']}}"><view class="u-loadmore-icon-wrap data-v-874545c0"><u-loading class="u-loadmore-icon data-v-874545c0" vue-id="87456d2c-2" color="{{iconColor}}" mode="{{iconType=='circle'?'circle':'flower'}}" show="{{status=='loading'&&icon}}" bind:__l="__l"></u-loading></view><view data-event-opts="{{[['tap',[['loadMore',['$event']]]]]}}" class="{{['u-line-1 data-v-874545c0',status=='nomore'&&isDot==true?'u-dot-text':'u-more-text']}}" style="{{$root.s0}}" bindtap="__e">{{''+showText+''}}</view></view><u-line vue-id="87456d2c-3" color="#d4d4d4" length="50" class="data-v-874545c0" bind:__l="__l"></u-line></view>