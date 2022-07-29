<template>
	<!-- 这个导航组件应用于小程序端病例列表，模型列表。修改个人信息部分 -->
	<view class="">
		<!-- 小程序胶囊的占位 -->
		<view :style="{height:statusBarHeight+44+'px'}">
		</view>
		<view class="header" :style="{height:statusBarHeight+44+'px'}" >
			<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>  <!--状态栏占位 -->
			<view class="info" :style="{height:44+'px',width:widthLength+'rpx'}">
				<text class="navItem left" @click="help">{{Navobject.left}}</text>
				<text class="navItem center"> {{Navobject.center}}</text>
				<view class="navItem right" v-if="Navobject.right=='case'"> <!--病例-->
					<uni-icons @click="search" type='search' color='#999' size='20' style="margin: 0 10rpx;"></uni-icons>
				</view>
				<view class="navItem right" v-if="Navobject.right=='model'"> <!--模型-->
					<text @click="clearUp" class="clearUp">{{Tabtitle}}</text>
				</view>
			</view> 
		</view> 
	</view>
</template>

<script>
	export default{
		data(){
			return{
				searchFriends:'',
			}
		},
		props:{
			statusBarHeight:{//状态栏高度
				type:Number,
				default:null
			},
			widthLength:{//导航栏宽度（不包含胶囊宽度）
				type:Number,
				default:null
			},
			Navobject:{//导航栏内容
				type:Object,
				default:()=>{
					return{}
				}
			},
			Tabtitle:{//模型库的右侧文字
				type:String,
				default:''
			},
		},
		methods:{
			help(){
				this.$emit('help')
			},
			search(){
				this.$emit('search')
			},
			clearUp(){//整理
				this.$emit('clearUp')
			}
		}
	}
</script>

<style scoped>
	.header {
	   position: fixed;
	   top: 0;
	   left: 0;
	   right: 0;
	}  
	.info {  
		display: flex;
	    height: 44px;  
		padding: 0 30rpx;
		flex-direction: row;
	    justify-content: space-between;  
	    align-items: center;  
		background-color: #F8F8F8;
	} 
	 .navItem{
		 flex: 1; 
	 }
	 .left{
		 font-size: 26rpx;color: #666;
	 }
	 .center{
		 font-size: 30rpx;text-align: center;font-weight: bold;
	 }
	 .right{
		 display: flex;
		 flex-direction: row;
		 justify-content: flex-end;
	 }
	 .clearUp{
	 	padding: 0 20rpx;
	 	font-size: 26rpx;
	 	font-weight: 400;	
	 }
</style>
