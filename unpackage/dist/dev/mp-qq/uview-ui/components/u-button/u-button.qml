<button class="{{['u-btn u-line-1 u-fix-ios-appearance data-v-6e15e680','u-size-'+size,plain?'u-btn--'+type+'--plain':'',loading?'u-loading':'',shape=='circle'?'u-round-circle':'',hairLine?showHairLineBorder:'u-btn--bold-border','u-btn--'+type,disabled?'u-btn--'+type+'--disabled':'']}}" style="{{$root.s0}}" id="u-wave-btn" hover-start-time="{{$root.m0}}" hover-stay-time="{{$root.m1}}" disabled="{{disabled}}" form-type="{{formType}}" open-type="{{openType}}" app-parameter="{{appParameter}}" hover-stop-propagation="{{hoverStopPropagation}}" send-message-title="{{sendMessageTitle}}" send-message-path="sendMessagePath" lang="{{lang}}" data-name="{{dataName}}" session-from="{{sessionFrom}}" send-message-img="{{sendMessageImg}}" show-message-card="{{showMessageCard}}" hover-class="{{getHoverClass}}" loading="{{loading}}" data-event-opts="{{[['getphonenumber',[['getphonenumber',['$event']]]],['getuserinfo',[['getuserinfo',['$event']]]],['error',[['error',['$event']]]],['opensetting',[['opensetting',['$event']]]],['launchapp',[['launchapp',['$event']]]],['tap',[['click',['$event']]]]]}}" bindgetphonenumber="__e" bindgetuserinfo="__e" binderror="__e" bindopensetting="__e" bindlaunchapp="__e" catchtap="__e"><slot></slot><block qq:if="{{ripple}}"><view class="{{['u-wave-ripple data-v-6e15e680',waveActive?'u-wave-active':'']}}" style="{{'top:'+(rippleTop+'px')+';'+('left:'+(rippleLeft+'px')+';')+('width:'+(fields.targetWidth+'px')+';')+('height:'+(fields.targetWidth+'px')+';')+('background-color:'+(rippleBgColor||'rgba(0, 0, 0, 0.15)')+';')}}"></view></block></button>