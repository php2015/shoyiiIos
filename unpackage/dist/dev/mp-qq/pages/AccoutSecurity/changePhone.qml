<view class="data-v-2adab116"><view class="amedTel data-v-2adab116"><u-field bind:input="__e" vue-id="2adad882-1" label="手机号" placeholder="输入新的手机号码" icon="phone" error-message="{{errorMessage}}" value="{{mobile}}" data-event-opts="{{[['^input',[['__set_model',['','mobile','$event',[]]]]]]}}" class="data-v-2adab116" bind:__l="__l"></u-field><u-field bind:input="__e" vue-id="2adad882-2" label="验证码" icon="photo" placeholder="请填写验证码" error-message="{{errorMessageCode}}" value="{{code}}" data-event-opts="{{[['^input',[['__set_model',['','code','$event',[]]]]]]}}" class="data-v-2adab116" bind:__l="__l" vue-slots="{{['right']}}"><u-button vue-id="{{('2adad882-3')+','+('2adad882-2')}}" slot="right" size="mini" data-event-opts="{{[['^click',[['getCode']]]]}}" bind:click="__e" class="data-v-2adab116" bind:__l="__l" vue-slots="{{['default']}}">{{codeText}}</u-button></u-field><u-verification-code vue-id="2adad882-4" seconds="{{seconds}}" data-ref="uCode" data-event-opts="{{[['^change',[['codeChange']]]]}}" bind:change="__e" class="data-v-2adab116 vue-ref" bind:__l="__l"></u-verification-code><view style="padding:0 30rpx;" class="data-v-2adab116"><u-button vue-id="2adad882-5" custom-style="{{customStyle}}" data-event-opts="{{[['^click',[['nextStep']]]]}}" bind:click="__e" class="data-v-2adab116" bind:__l="__l" vue-slots="{{['default']}}">下一步</u-button></view></view></view>