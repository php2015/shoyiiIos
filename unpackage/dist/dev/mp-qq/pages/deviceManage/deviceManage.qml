<view class="device data-v-8b9a5834"><view class="tip data-v-8b9a5834"><text class="data-v-8b9a5834">可滑动删除组别</text></view><view class="content data-v-8b9a5834"><uni-swipe-action class="list data-v-8b9a5834" vue-id="8b9a7fa0-1" bind:__l="__l" vue-slots="{{['default']}}"><block qq:for="{{deviceData}}" qq:for-item="item" qq:for-index="index" qq:key="index"><uni-swipe-action-item vue-id="{{('8b9a7fa0-2-'+index)+','+('8b9a7fa0-1')}}" right-options="{{operations}}" data-event-opts="{{[['^click',[['click',['$event','$0'],[[['deviceData','',index,'id']]]]]],['^change',[['swipeChange',['$event','$0'],[[['deviceData','',index,'id']]]]]]]}}" bind:click="__e" bind:change="__e" class="data-v-8b9a5834" bind:__l="__l" vue-slots="{{['default']}}"><groups-list class="deviceList data-v-8b9a5834" vue-id="{{('8b9a7fa0-3-'+index)+','+('8b9a7fa0-2-'+index)}}" devices="{{item.devices}}" Uname="{{item.name}}" Deviceid="{{item.id}}" bind:__l="__l"></groups-list></uni-swipe-action-item></block></uni-swipe-action></view><view class="btn data-v-8b9a5834"><u-button class="button group data-v-8b9a5834" vue-id="8b9a7fa0-4" type="primary" data-event-opts="{{[['^click',[['addGrounps']]]]}}" bind:click="__e" bind:__l="__l" vue-slots="{{['default']}}">添加分组</u-button><u-button class="button device data-v-8b9a5834" vue-id="8b9a7fa0-5" type="primary" data-event-opts="{{[['^click',[['addDevice']]]]}}" bind:click="__e" bind:__l="__l" vue-slots="{{['default']}}">添加设备</u-button></view><u-modal vue-id="8b9a7fa0-6" confirm-color="#FD3130" negative-top="140rpx" show-title="{{false}}" show-cancel-button="{{true}}" data-ref="uModal" value="{{delshow}}" data-event-opts="{{[['^cancel',[['delcancel']]],['^confirm',[['delconfirm']]],['^input',[['__set_model',['','delshow','$event',[]]]]]]}}" bind:cancel="__e" bind:confirm="__e" bind:input="__e" class="data-v-8b9a5834 vue-ref" bind:__l="__l" vue-slots="{{['default']}}"><view class="slot-content data-v-8b9a5834"><text class="data-v-8b9a5834">是否删除该分组</text></view></u-modal><u-modal vue-id="8b9a7fa0-7" negative-top="140rpx" confirm-color="#000000" show-title="{{false}}" show-cancel-button="{{true}}" data-ref="uModal" value="{{addGrounpShow}}" data-event-opts="{{[['^cancel',[['grounpCancel']]],['^confirm',[['grounpConfirm']]],['^input',[['__set_model',['','addGrounpShow','$event',[]]]]]]}}" bind:cancel="__e" bind:confirm="__e" bind:input="__e" class="data-v-8b9a5834 vue-ref" bind:__l="__l" vue-slots="{{['default']}}"><view class="slot-content data-v-8b9a5834"><u-input bind:input="__e" class="input data-v-8b9a5834" vue-id="{{('8b9a7fa0-8')+','+('8b9a7fa0-7')}}" height="96" type="{{type}}" border="{{border}}" placeholder="输入分组名称" value="{{grounpsName}}" data-event-opts="{{[['^input',[['__set_model',['','grounpsName','$event',[]]]]]]}}" bind:__l="__l"></u-input></view></u-modal><u-no-network vue-id="8b9a7fa0-9" class="data-v-8b9a5834" bind:__l="__l"></u-no-network></view>