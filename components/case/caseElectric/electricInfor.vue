<template>
	<view class="">
		<!-- 病例介绍 -->
		<view class="introduce dark-block dark-bottom-border">
			<view class="example-body dark-block dark-bottom-border">
				<text>病例介绍</text>
			</view>
			<view class="content">
				<view class="text1">
					<text>病历号：</text>
					<text>{{caseData.caseHistoryNo}}</text>
				</view>
				<view class="text1">
					<text>患者姓名：</text>
					<text>{{caseData.name||'暂无数据'}}</text>
				</view>
			</view>
		</view>
		<!-- 十二项 -->
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.diagnosticMessageList&&caseHistory.diagnosticMessageList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>诊断信息</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.diagnosticMessageList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.complainList&&caseHistory.complainList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>主诉</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.complainList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.historyPresentIllnessList&&caseHistory.historyPresentIllnessList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>现病史</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.historyPresentIllnessList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		v-if="caseHistory.previousHistoryList&&caseHistory.previousHistoryList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>既往史</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.previousHistoryList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.allergicHistoryList&&caseHistory.allergicHistoryList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>过敏史</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.allergicHistoryList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
			
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.personalHistoryList&&caseHistory.personalHistoryList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>个人史</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.personalHistoryList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.healthCheckupList&&caseHistory.healthCheckupList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>体格检查</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.healthCheckupList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.laboratoryExaminationList&&caseHistory.laboratoryExaminationList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>化验检查</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.laboratoryExaminationList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.specialInspectionList&&caseHistory.specialInspectionList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>特殊检查：CT,B超，X线片</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.specialInspectionList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.diseaseDiagnosisList&&caseHistory.diseaseDiagnosisList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>疾病诊断</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.diseaseDiagnosisList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.antidiastoleList&&caseHistory.antidiastoleList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>鉴别诊断</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.antidiastoleList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<view class="introduce dark-block dark-bottom-border"
		 v-if="caseHistory.recommendedTreatmentList&&caseHistory.recommendedTreatmentList.length!=0">
			<view class="example-body dark-block dark-bottom-border">
					<text>建议治疗方案</text>
			</view>
			<view class="">
				<view class="content" v-for="(item,index) in caseHistory.recommendedTreatmentList"
				:key='index'>
					<view class="text1">
						<text>{{item.description}}</text>
					</view>
					<view class="imgpic" v-if="item.pictures&&item.pictures.split(',').length!=0">
						<u-lazy-load class="imgitems" 
						v-for="(itemImage,index1) in item.pictures.split(',')"
						:key='index1'
						:image="caseHistory.pictureUrl[itemImage]" 
						@tap="PreviewPic(caseHistory.pictureUrl[itemImage])" 
						height="210rpx" 
						img-mode="aspectFit">
						</u-lazy-load>
					</view>
				</view>
			</view>
		</view>
		<!-- 就诊历史 -->
		<view class="introduce dark-block dark-bottom-border dark-bottom-border" v-for="(item,index) in medicalHistories" :key='index'>
			<view class="example-body dark-block dark-bottom-border dark-bottom-border">
				<text>{{item.title||'暂无数据'}}</text>
			</view>
			<view class="content">
				<view class="text1">
					<text>{{item.introduce||'暂无数据'}}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {preview} from '@/utill/tools/previewImage.js'
	export default{
		props:{
			caseData:{//获取病历号和病例名称
				type:Object,
				default:()=>{
					return {}
				}
			},
			// 病例介绍（十二项）
			caseHistory:{
				type:Object,
				default:()=>{
					return{}
				}
			},
			// 就诊历史
			medicalHistories:{
				type:Array,
				default:()=>{
					return[]
				}
			},
		},
		methods:{
			// 预览图片
			PreviewPic(data){
				// console.log(data)
				preview(0,data)
			},
		}
	}
</script>
<style scoped>
	@import "@/common/css/twelveItem.css";
	.imgpic{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		
	}
	.imgitems{
		width: 210rpx;background-color: #FFFFFF;
		margin: 10rpx 10rpx;
		padding-bottom: 0px!important;
		border: 1px solid #EEEEEE;
	}  
</style>
