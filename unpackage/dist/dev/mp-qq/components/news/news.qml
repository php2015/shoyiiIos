<view data-event-opts="{{[['tap',[['enterNews',['$0'],['Newsid']]]]]}}" class="newsList" bindtap="__e"><block qq:if="{{imgUrl}}"><u-image vue-id="6878ceae-1" width="40%" height="168rpx" src="{{imgUrl}}" mode="aspectFit" bind:__l="__l" vue-slots="{{['loading','error']}}"><u-loading vue-id="{{('6878ceae-2')+','+('6878ceae-1')}}" slot="loading" bind:__l="__l"></u-loading><view style="display:flex;justify-content:center;align-items:center;" slot="error"><text>error</text></view></u-image></block><block qq:else><image class="image" src="/static/image/default.png" mode></image></block><view class="news_content_item"><view class="texttile"><text>{{title||'无标题'}}</text></view><text class="textcontent">{{content}}</text></view></view>