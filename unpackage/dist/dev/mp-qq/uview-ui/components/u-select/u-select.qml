<view class="u-select data-v-a577ac80"><u-popup vue-id="a577d3ec-1" maskCloseAble="{{maskCloseAble}}" mode="bottom" popup="{{false}}" length="auto" safeAreaInsetBottom="{{safeAreaInsetBottom}}" z-index="{{uZIndex}}" value="{{value}}" data-event-opts="{{[['^close',[['close']]],['^input',[['__set_model',['','value','$event',[]]]]]]}}" bind:close="__e" bind:input="__e" class="data-v-a577ac80" bind:__l="__l" vue-slots="{{['default']}}"><view class="u-select data-v-a577ac80"><view data-event-opts="{{[['touchmove',[['',['$event']]]]]}}" class="u-select__header data-v-a577ac80" catchtouchmove="__e"><view class="u-select__header__cancel u-select__header__btn data-v-a577ac80" style="{{'color:'+(cancelColor)+';'}}" hover-class="u-hover-class" hover-stay-time="{{150}}" data-event-opts="{{[['tap',[['getResult',['cancel']]]]]}}" bindtap="__e">{{''+cancelText+''}}</view><view class="u-select__header__title data-v-a577ac80">{{''+title+''}}</view><view class="u-select__header__confirm u-select__header__btn data-v-a577ac80" style="{{'color:'+(moving?cancelColor:confirmColor)+';'}}" hover-class="u-hover-class" hover-stay-time="{{150}}" data-event-opts="{{[['touchmove',[['',['$event']]]],['tap',[['getResult',['confirm']]]]]}}" catchtouchmove="__e" catchtap="__e">{{''+confirmText+''}}</view></view><view class="u-select__body data-v-a577ac80"><picker-view class="u-select__body__picker-view data-v-a577ac80" value="{{defaultSelector}}" data-event-opts="{{[['change',[['columnChange',['$event']]]],['pickstart',[['pickstart',['$event']]]],['pickend',[['pickend',['$event']]]]]}}" bindchange="__e" bindpickstart="__e" bindpickend="__e"><block qq:for="{{columnData}}" qq:for-item="item" qq:for-index="index" qq:key="index"><picker-view-column class="data-v-a577ac80"><block qq:for="{{item}}" qq:for-item="item1" qq:for-index="index1" qq:key="index1"><view class="u-select__body__picker-view__item data-v-a577ac80"><view class="u-line-1 data-v-a577ac80">{{item1[labelName]}}</view></view></block></picker-view-column></block></picker-view></view></view></u-popup></view>