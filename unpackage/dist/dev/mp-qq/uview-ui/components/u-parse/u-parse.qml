<view><block qq:if="{{!nodes.length}}"><slot></slot></block><view style="{{(showAm+(selectable?';user-select:text;-webkit-user-select:text':''))}}" id="_top"><trees vue-id="2995dd42-1" nodes="{{nodes}}" lazyLoad="{{lazyLoad}}" loading="{{loadingImg}}" bind:__l="__l"></trees></view></view>