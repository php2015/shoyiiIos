<view class="data-v-3b24dd48"><view class="charge data-v-3b24dd48"><block qq:for="{{datalist}}" qq:for-item="Fitem" qq:for-index="index0" qq:key="index0"><view class="aa data-v-3b24dd48"><uni-transition class="checkbox data-v-3b24dd48" vue-id="{{'3b2504b4-1-'+index0}}" mode-class="{{['zoom-in']}}" show="{{true}}" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['firtst',['$0'],[[['datalist','',index0,'id']]]]]]]}}" bindtap="__e" class="data-v-3b24dd48"><block qq:if="{{Fitem.id==ids}}"><uni-icons vue-id="{{('3b2504b4-2-'+index0)+','+('3b2504b4-1-'+index0)}}" type="arrowdown" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><block qq:else><uni-icons vue-id="{{('3b2504b4-3-'+index0)+','+('3b2504b4-1-'+index0)}}" type="arrowright" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><text style="font-size:32rpx;" class="data-v-3b24dd48">{{Fitem.name}}</text></view></uni-transition><block qq:for="{{Fitem.surgicalAssistDesignPriceVOS}}" qq:for-item="Sitem" qq:for-index="index" qq:key="index"><block qq:if="{{Fitem.id==ids?true:false}}"><view class="aa data-v-3b24dd48" style="margin-left:20rpx;"><uni-transition class="checkbox data-v-3b24dd48" vue-id="{{'3b2504b4-4-'+index0+'-'+index}}" mode-class="{{['zoom-in']}}" show="{{true}}" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['second',['$0','$1'],[[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index,'id']],[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index]]]]]]]}}" bindtap="__e" class="data-v-3b24dd48"><block qq:if="{{Sitem.surgicalAssistDesignPriceVOS.length!=0}}"><uni-icons vue-id="{{('3b2504b4-5-'+index0+'-'+index)+','+('3b2504b4-4-'+index0+'-'+index)}}" type="{{Sicon}}" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><block qq:if="{{Sitem.name}}"><text class="data-v-3b24dd48">{{Sitem.name}}</text></block><block qq:if="{{Sitem.price}}"><text class="data-v-3b24dd48">{{"："+Sitem.price+"元"}}</text></block></view></uni-transition><block qq:for="{{Sitem.surgicalAssistDesignPriceVOS}}" qq:for-item="Titem" qq:for-index="index1" qq:key="index1"><block qq:if="{{Sitem.id==idss?true:false}}"><view class="aa data-v-3b24dd48" style="margin-left:40rpx;"><view data-event-opts="{{[['tap',[['third',['$0','$1'],[[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index],['surgicalAssistDesignPriceVOS','',index1,'id']],[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index],['surgicalAssistDesignPriceVOS','',index1]]]]]]]}}" bindtap="__e" class="data-v-3b24dd48"><block qq:if="{{Titem.surgicalAssistDesignPriceVOS.length!=0}}"><uni-icons vue-id="{{'3b2504b4-6-'+index0+'-'+index+'-'+index1}}" type="arrowup" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><block qq:if="{{Titem.name}}"><text class="data-v-3b24dd48">{{Titem.name}}</text></block><block qq:if="{{Titem.price}}"><text class="data-v-3b24dd48">{{"："+Titem.price+"元"}}</text></block></view><block qq:for="{{Titem.surgicalAssistDesignPriceVOS}}" qq:for-item="foitem" qq:for-index="index2" qq:key="index2"><block qq:if="{{Titem.id==idsss?true:false}}"><view class="aa data-v-3b24dd48" style="margin-left:60rpx;"><view data-event-opts="{{[['tap',[['fourId',['$0','$1'],[[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index],['surgicalAssistDesignPriceVOS','',index1],['surgicalAssistDesignPriceVOS','',index2,'id']],[['datalist','',index0],['surgicalAssistDesignPriceVOS','',index],['surgicalAssistDesignPriceVOS','',index1],['surgicalAssistDesignPriceVOS','',index2]]]]]]]}}" bindtap="__e" class="data-v-3b24dd48"><block qq:if="{{foitem.surgicalAssistDesignPriceVOS.length!=0}}"><uni-icons vue-id="{{'3b2504b4-7-'+index0+'-'+index+'-'+index1+'-'+index2}}" type="arrowup" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><block qq:if="{{foitem.name}}"><text class="data-v-3b24dd48">{{foitem.name}}</text></block><block qq:if="{{foitem.price}}"><text class="data-v-3b24dd48">{{"："+foitem.price+"元"}}</text></block></view><block qq:for="{{foitem.surgicalAssistDesignPriceVOS}}" qq:for-item="fiveitem" qq:for-index="index3" qq:key="index3"><block qq:if="{{foitem.id==idssss?true:false}}"><view class="aa data-v-3b24dd48" style="margin-left:80rpx;"><view class="data-v-3b24dd48"><block qq:if="{{fiveitem.surgicalAssistDesignPriceVOS.length!=0}}"><uni-icons vue-id="{{'3b2504b4-8-'+index0+'-'+index+'-'+index1+'-'+index2+'-'+index3}}" type="arrowup" class="data-v-3b24dd48" bind:__l="__l"></uni-icons></block><block qq:if="{{fiveitem.name}}"><text class="data-v-3b24dd48">{{fiveitem.name}}</text></block><block qq:if="{{fiveitem.price}}"><text class="data-v-3b24dd48">{{"："+fiveitem.price+"元"}}</text></block></view></view></block></block></view></block></block></view></block></block></view></block></block></view></block></view><u-no-network vue-id="3b2504b4-9" class="data-v-3b24dd48" bind:__l="__l"></u-no-network></view>