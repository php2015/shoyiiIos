<template>
	<view class="">
		<u-modal v-model="auditshow" :show-title='false' :show-cancel-button='false' :show-confirm-button='false'>
			<view class="audit" >
				<text>审核状态</text>
				<view class="content">
					<text>您的信息审核没有通过，暂时不能查看当前内容，是否前去重新修改信息</text>
				</view>
			</view>
			<view class="btn">
				<text class="text cancel" @tap="auditcancel" v-if="cancelBtn">否</text>
				<text class="text sure" @tap="auditconfirm">是</text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:{
			auditshow:{
				type:Boolean,
				default:''
			},
			cancelBtn:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			// 去审核
			auditconfirm(){
				this.$emit('auditconfirm','confirm')
				uni.navigateTo({
					// 进入修改审核页面
					url:'/pages/PersonalInfor/auditInfor'
				})
			},
			auditcancel(){
				this.$emit('auditcancel','cancel')
			},
		}
	}
</script>

<style scoped>
	.audit{
		padding: 30rpx 30rpx;
		text-align: center;
		background-color: #FFFFFF;
	}
	.audit .content{
		padding: 30rpx 0;
	}
	.btn{
		display: flex;
		border-top: 1px solid #EEEEEE;
		/* #ifdef H5||MP-WEIXIN */
		flex-direction: row;
		/* #endif */
	}
	.btn .text{
		flex: 1;
		padding: 30rpx 0;
		text-align: center;
		color: #666666;
	}
	.btn .sure{
		color: #86B0D4;
	}
</style>
