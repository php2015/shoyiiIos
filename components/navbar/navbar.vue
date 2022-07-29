<template>
	<uni-nav-bar class="navBar dark-bottom-border" fixed="true" status-bar="true" :dark="$store.getters.isDark">
	    <view slot="default" class="default dark-font">
			<text v-if="searchShow">{{Navtitle}}</text>
			<uni-transition :mode-class="['fade','zoom-out']" :duration=300 :show="!searchShow">
				<view class="searchInput dark-block" @click="search" style="background-color: #FFFFFF;">
					<u-search placeholder="输入方法库相关信息" :disabled='true' placeholder-color='#999' :show-action="false" shape="round" search-icon-color='#999' color='#f8f8f8' :bg-color="$store.getters.isDark?'#1B1C1E':'#ffffff'" :border-color="$store.getters.isDark?'':'#EEEEEE'" height='64'></u-search>
				</view>
			</uni-transition>
			<!-- #ifdef MP-WEIXIN -->
			<view slot="right" class="right" v-if="rightBool">
				<text @click="clearUp" class="clearUp" v-if="navBoolean">{{Tabtitle}}</text>
				<text class="iconfont iconsousuo search" @click="search" v-if="navIconBoolean"></text>
				<text class="iconfont iconxiaoxi" @click="notice" v-if="noticeBoolean"></text>
			</view>	
			<!-- #endif -->
	    </view>
	    <view slot="left" class="help dark-font">
			<text v-if="!searchShow"  style="font-size:30rpx;">方法库</text>
		  <text @click="help" v-if="leftIconBool"></text>
		  <uni-icons type="arrowleft" class="arrowLeft dark-font" @click="back" v-else></uni-icons>
	    </view>
		<!-- #ifdef APP-PLUS||H5 -->
		<view slot="right" class="right" v-if="rightBool">
			<text @click="clearUp" class="clearUp dark-font" v-if="navBoolean">{{Tabtitle}}</text>
			<text class="iconfont iconsousuo search dark-font" @click="search" v-if="navIconBoolean"></text>
			<text class="iconfont iconxiaoxi dark-font" @click="notice" v-if="noticeBoolean"></text>
		</view>	
		<!-- #endif -->
	</uni-nav-bar>
</template>

<script>
	export default{
		props:{
			searchShow:{
				type:Boolean,
				default:true
			},
			Navtitle:{
				type:String,
				default:''
			},
			Tabtitle:{
				type:String,
				default:''
			},
			// 右侧的字体(用于模型)
			navBoolean:{
				type:Boolean,
				default:false
			},
			// 右侧的图标(用于病例)
			navIconBoolean:{
				type:Boolean,
				default:false
			},
			// 左侧的图标(用于公开模型库)
			leftIconBool:{
				type:Boolean,
				default:true
			},
			rightBool:{
				type:Boolean,
				default:true
			},
			noticeBoolean:{//右侧的消息按钮，主要是病例和模型库
				type:Boolean,
				default:false
			}
		},
		methods:{
			// 帮助
			help(){
				this.$emit('help')
			},
			// 整理
			clearUp(){
				this.$emit('clearUp')
			},
			// 消息
			notice(){
				this.$emit('notice')
			},
			search(){
				this.$emit('search')
			},
			back(){
				this.$emit('back')
			}
		}
	}
</script>

<style scoped lang="scss">
	.navBar{
		/* #ifdef APP-PLUS||H5 */
		border-bottom: 1px solid #F8F8F8;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		border-bottom: none!important;
		/* #endif */
	}
	.navBar /deep/ .uni-navbar__content_view{
		padding: 0 18rpx!important;
	}	
	.navBar /deep/ .uni-icons{
		color: #343434;
		font-size: 40rpx!important;
		padding-left: 10rpx!important;
	}
	.navBar /deep/ .uni-navbar__header{
		align-items: center;
	}
	.navBar /deep/ .uni-navbar__header-btns{
		justify-content: flex-end!important;
		width: auto;
	}
	.navBar /deep/ .uni-navbar__header-btns-left{
		justify-content: flex-start!important;
	}
	.navBar .right{
		/* #ifdef MP-WEIXIN */
		margin-left: 20rpx;
		/* #endif */
		display: flex;
		.clearUp{
			padding: 0 20rpx;
			font-size: 26rpx;
			// margin-right: 10rpx;
			/* #ifdef MP-WEIXIN */
			font-weight: 400;
			/* #endif */	
		}
		/* #ifdef MP-WEIXIN */
		.iconfont{
			font-weight: 400!important;
		}
		/* #endif */
		.search{
			// margin-right: 40rpx;
		}
	}
	/* #ifdef MP-WEIXIN */
	.navBar /deep/ .u-line-1 {
		display: none!important;
	}
	/* #endif */
	.default{
		margin: 0 auto;
		color: #000000;
		font-size:30rpx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		/* #ifdef MP-WEIXIN */
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* #endif */
		flex: 1;
		text-align: center;
	}
	.help{
		color: #000000;
		font-size: 26rpx;
		font-family: PingFang-SC-Regular;
		.arrowLeft{
			padding: 10rpx;
		}
	}
	.uni-navbar /deep/ .uni-navbar--border{
		border-bottom-color:transparent!important;
	}
	.searchInput /deep/ .u-content{
		align-items: center;
		color: #8F8F8F;
	}
</style>
