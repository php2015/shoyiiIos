<block qq:if="{{show}}"><view data-event-opts="{{[['tap',[['clickTag',['$event']]]]]}}" class="{{['u-tag data-v-95cf93f4',disabled?'u-disabled':'','u-size-'+size,'u-shape-'+shape,'u-mode-'+mode+'-'+type]}}" style="{{$root.s0}}" bindtap="__e">{{''+text+''}}<view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="u-icon-wrap data-v-95cf93f4" catchtap="__e"><block qq:if="{{closeable}}"><u-icon class="u-close-icon data-v-95cf93f4" style="{{$root.s1}}" vue-id="95cfbb60-1" size="22" color="{{closeIconColor}}" name="close" data-event-opts="{{[['^click',[['close']]]]}}" bind:click="__e" bind:__l="__l"></u-icon></block></view></view></block>