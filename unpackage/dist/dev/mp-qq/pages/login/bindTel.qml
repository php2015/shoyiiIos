<view class="data-v-0e6a1b62"><view class="bindTel data-v-0e6a1b62"><u-field bind:input="__e" vue-id="0e6a42ce-1" label="手机号" placeholder="请填写手机号" icon="phone" value="{{mobile}}" data-event-opts="{{[['^input',[['__set_model',['','mobile','$event',[]]]]]]}}" class="data-v-0e6a1b62" bind:__l="__l"></u-field><u-field bind:input="__e" vue-id="0e6a42ce-2" label="验证码" icon="photo" placeholder="请填写验证码" value="{{code}}" data-event-opts="{{[['^input',[['__set_model',['','code','$event',[]]]]]]}}" class="data-v-0e6a1b62" bind:__l="__l" vue-slots="{{['right']}}"><u-button vue-id="{{('0e6a42ce-3')+','+('0e6a42ce-2')}}" slot="right" size="mini" data-event-opts="{{[['^click',[['getCode']]]]}}" bind:click="__e" class="data-v-0e6a1b62" bind:__l="__l" vue-slots="{{['default']}}">{{codeText}}</u-button></u-field><u-verification-code vue-id="0e6a42ce-4" seconds="{{seconds}}" data-ref="uCode" data-event-opts="{{[['^change',[['codeChange']]]]}}" bind:change="__e" class="data-v-0e6a1b62 vue-ref" bind:__l="__l"></u-verification-code><view style="padding:0 30rpx;" class="data-v-0e6a1b62"><u-button vue-id="0e6a42ce-5" custom-style="{{customStyle}}" data-event-opts="{{[['^click',[['bindTel']]]]}}" bind:click="__e" class="data-v-0e6a1b62" bind:__l="__l" vue-slots="{{['default']}}">绑定</u-button></view></view></view>