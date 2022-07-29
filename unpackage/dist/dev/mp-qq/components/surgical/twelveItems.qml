<view class="data-v-3601e02f"><block qq:if="{{arrData.diseaseCategoryName||arrData.materials||arrData.title}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">手术设计介绍</text></view><view class="content data-v-3601e02f"><block qq:if="{{arrData.diseaseCategoryName}}"><view class="text1 data-v-3601e02f"><text class="data-v-3601e02f">病种类别：</text><block qq:if="{{arrData.diseaseCategoryName}}"><text class="data-v-3601e02f">{{arrData.diseaseCategoryName||'暂无'}}</text></block><block qq:else><text class="data-v-3601e02f">暂无数据</text></block></view></block><block qq:if="{{arrData.materials}}"><view class="text1 data-v-3601e02f"><text class="data-v-3601e02f">材料应用：</text><block qq:if="{{arrData.materials}}"><text class="data-v-3601e02f">{{arrData.materials.name||'暂无'}}</text></block><block qq:else><text class="data-v-3601e02f">暂无数据</text></block></view></block><block qq:if="{{arrData.title}}"><view class="text1 data-v-3601e02f"><text class="data-v-3601e02f">方法说明：</text><block qq:if="{{arrData.title}}"><text class="data-v-3601e02f">{{arrData.title||'暂无数据'}}</text></block><block qq:else><text class="data-v-3601e02f">暂无数据</text></block></view></block></view></view></block><block qq:if="{{guideEmpty}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">数字化3D打印导板</text></view><view class="content data-v-3601e02f"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="data-v-3601e02f"><view class="title data-v-3601e02f"><view class="indexDot data-v-3601e02f"></view><block qq:if="{{item.$orig.name}}"><view class="number data-v-3601e02f"><text class="data-v-3601e02f">{{item.$orig.name}}</text></view></block></view><block qq:if="{{item.$orig.detailedDescription}}"><view class="data-v-3601e02f"><text class="data-v-3601e02f">描述：</text><text class="data-v-3601e02f">{{item.$orig.detailedDescription}}</text></view></block><block qq:if="{{item.g0.length!=0}}"><view class="imgpic data-v-3601e02f"><block qq:for="{{item.$orig.previewImage}}" qq:for-item="itemImage" qq:for-index="index1" qq:key="index1"><view class="imgitems data-v-3601e02f"><u-image vue-id="{{'3601cc79-1-'+index+'-'+index1}}" height="100%" src="{{itemImage}}" mode="aspectFit" data-event-opts="{{[['^tap',[['PreviewPic',[index1,'$0'],[[['arrData.threeDGuideList','',index,'previewImage']]]]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l" vue-slots="{{['loading','error']}}"><uni-icons vue-id="{{('3601cc79-2-'+index+'-'+index1)+','+('3601cc79-1-'+index+'-'+index1)}}" slot="loading" type="spinner-cycle" class="data-v-3601e02f" bind:__l="__l"></uni-icons><view style="font-size:24rpx;" slot="error" class="data-v-3601e02f">加载失败</view></u-image></view></block></view></block></view></block></view></view></block><block qq:if="{{instruEmpty}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">数字化3D打印器械</text></view><view class="content data-v-3601e02f"><block qq:for="{{$root.l1}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="data-v-3601e02f"><view class="title data-v-3601e02f"><view class="indexDot data-v-3601e02f"></view><block qq:if="{{item.$orig.name}}"><view class="number data-v-3601e02f"><text class="data-v-3601e02f">{{item.$orig.name}}</text></view></block></view><block qq:if="{{item.$orig.detailedDescription}}"><view class="data-v-3601e02f"><text class="data-v-3601e02f">描述：</text><text class="data-v-3601e02f">{{item.$orig.detailedDescription}}</text></view></block><block qq:if="{{item.g1.length!=0}}"><view class="imgpic data-v-3601e02f"><block qq:for="{{item.$orig.previewImage}}" qq:for-item="itemImage" qq:for-index="index1" qq:key="index1"><view class="imgitems data-v-3601e02f"><u-image vue-id="{{'3601cc79-3-'+index+'-'+index1}}" height="100%" src="{{itemImage}}" mode="aspectFit" data-event-opts="{{[['^tap',[['PreviewPic',[index1,'$0'],[[['arrData.threeDInstrumentList','',index,'previewImage']]]]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l" vue-slots="{{['loading','error']}}"><uni-icons vue-id="{{('3601cc79-4-'+index+'-'+index1)+','+('3601cc79-3-'+index+'-'+index1)}}" slot="loading" type="spinner-cycle" class="data-v-3601e02f" bind:__l="__l"></uni-icons><view style="font-size:24rpx;" slot="error" class="data-v-3601e02f">加载失败</view></u-image></view></block></view></block></view></block></view></view></block><block qq:if="{{surgicalStepsEmpty}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">手术方法步骤</text></view><view class="content data-v-3601e02f"><block qq:for="{{$root.l2}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="data-v-3601e02f"><view class="title data-v-3601e02f"><view class="indexDot data-v-3601e02f"></view><block qq:if="{{item.$orig.name}}"><view class="number data-v-3601e02f"><text class="data-v-3601e02f">{{item.$orig.name}}</text></view></block></view><block qq:if="{{item.$orig.detailedDescription}}"><view class="data-v-3601e02f"><text class="data-v-3601e02f">描述：</text><text class="data-v-3601e02f">{{item.$orig.detailedDescription}}</text></view></block><block qq:if="{{item.g2.length!=0}}"><view class="imgpic data-v-3601e02f"><block qq:for="{{item.$orig.previewImage}}" qq:for-item="itemImage" qq:for-index="index1" qq:key="index1"><view class="imgitems data-v-3601e02f"><u-image vue-id="{{'3601cc79-5-'+index+'-'+index1}}" height="100%" src="{{itemImage}}" mode="aspectFit" data-event-opts="{{[['^tap',[['PreviewPic',[index1,'$0'],[[['arrData.surgicalDesignStepsList','',index,'previewImage']]]]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l" vue-slots="{{['loading','error']}}"><uni-icons vue-id="{{('3601cc79-6-'+index+'-'+index1)+','+('3601cc79-5-'+index+'-'+index1)}}" slot="loading" type="spinner-cycle" class="data-v-3601e02f" bind:__l="__l"></uni-icons><view style="font-size:24rpx;" slot="error" class="data-v-3601e02f">加载失败</view></u-image></view></block></view></block></view></block></view></view></block><block qq:if="{{preOperateEmpty}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">术前情况</text></view><view class="content data-v-3601e02f"><block qq:for="{{$root.l3}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="data-v-3601e02f"><view class="title data-v-3601e02f"><view class="indexDot data-v-3601e02f"></view><block qq:if="{{item.$orig.name}}"><view class="number data-v-3601e02f"><text class="data-v-3601e02f">{{item.$orig.name}}</text></view></block></view><block qq:if="{{item.$orig.detailedDescription}}"><view class="data-v-3601e02f"><text class="data-v-3601e02f">描述：</text><text class="data-v-3601e02f">{{item.$orig.detailedDescription}}</text></view></block><block qq:if="{{item.g3.length!=0}}"><view class="imgpic data-v-3601e02f"><block qq:for="{{item.$orig.previewImage}}" qq:for-item="itemImage" qq:for-index="index1" qq:key="index1"><view class="imgitems data-v-3601e02f"><u-image vue-id="{{'3601cc79-7-'+index+'-'+index1}}" height="100%" src="{{itemImage}}" mode="aspectFit" data-event-opts="{{[['^tap',[['PreviewPic',[index1,'$0'],[[['arrData.preoperativeConditionList','',index,'previewImage']]]]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l" vue-slots="{{['loading','error']}}"><uni-icons vue-id="{{('3601cc79-8-'+index+'-'+index1)+','+('3601cc79-7-'+index+'-'+index1)}}" slot="loading" type="spinner-cycle" class="data-v-3601e02f" bind:__l="__l"></uni-icons><view style="font-size:24rpx;" slot="error" class="data-v-3601e02f">加载失败</view></u-image></view></block></view></block></view></block></view></view></block><block qq:if="{{beforeOperateEmpty}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">术后情况</text></view><view class="content data-v-3601e02f"><block qq:for="{{$root.l4}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="data-v-3601e02f"><view class="title data-v-3601e02f"><view class="indexDot data-v-3601e02f"></view><block qq:if="{{item.$orig.name}}"><view class="number data-v-3601e02f"><text class="data-v-3601e02f">{{item.$orig.name}}</text></view></block></view><block qq:if="{{item.$orig.detailedDescription}}"><view class="data-v-3601e02f"><text class="data-v-3601e02f">描述：</text><text class="data-v-3601e02f">{{item.$orig.detailedDescription}}</text></view></block><block qq:if="{{item.g4.length!=0}}"><view class="imgpic data-v-3601e02f"><block qq:for="{{item.$orig.previewImage}}" qq:for-item="itemImage" qq:for-index="index1" qq:key="index1"><view class="imgitems data-v-3601e02f"><u-image vue-id="{{'3601cc79-9-'+index+'-'+index1}}" height="100%" src="{{itemImage}}" mode="aspectFit" data-event-opts="{{[['^tap',[['PreviewPic',[index1,'$0'],[[['arrData.postoperativeSituationList','',index,'previewImage']]]]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l" vue-slots="{{['loading','error']}}"><uni-icons vue-id="{{('3601cc79-10-'+index+'-'+index1)+','+('3601cc79-9-'+index+'-'+index1)}}" slot="loading" type="spinner-cycle" class="data-v-3601e02f" bind:__l="__l"></uni-icons><view style="font-size:24rpx;" slot="error" class="data-v-3601e02f">加载失败</view></u-image></view></block></view></block></view></block></view></view></block><block qq:if="{{arrData.wordPdfIds||arrData.pptPdfIds}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">补充文件</text></view><view class="content data-v-3601e02f"><block qq:if="{{arrData.wordPdfIds}}"><view class="tag-view data-v-3601e02f" style="padding:20rpx 0;"><uni-tag vue-id="3601cc79-11" text="点击预览word" data-event-opts="{{[['^tap',[['previewword',['$0'],['arrData.loadLink.'+arrData.wordPdfIds+'.fileDownloadUrl']]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l"></uni-tag></view></block><block qq:if="{{arrData.pptPdfIds}}"><view class="tag-view data-v-3601e02f"><uni-tag vue-id="3601cc79-12" text="点击预览ppt" data-event-opts="{{[['^tap',[['previewppt',['$0'],['arrData.loadLink.'+arrData.pptPdfIds+'.fileDownloadUrl']]]]]}}" bind:tap="__e" class="data-v-3601e02f" bind:__l="__l"></uni-tag></view></block></view></view></block><block qq:if="{{arrData.videoModelIds}}"><view class="introduce data-v-3601e02f"><view class="example-body data-v-3601e02f"><text class="data-v-3601e02f">视频描述</text></view><view class="content data-v-3601e02f" style="text-align:center;"><video style="width:100%;" src="{{arrData.loadLink[arrData.videoModelIds].fileDownloadUrl}}" show-mute-btn="true" controls="{{true}}" poster muted="{{true}}" danmu-btn="true" enable-danmu="true" page-gesture="true" class="data-v-3601e02f"></video></view></view></block></view>