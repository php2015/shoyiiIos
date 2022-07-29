<template>
	<view class="weatherAll">
		<image lazy-load class="bg-set" :src="bgImage"></image>
		<view class="weatherData">
			<view class="weather">
				<text style="font-size: 48rpx;">{{weather.city.data}}</text>
			</view>
			<view class="weather">
				<text style="font-size: 72rpx;">{{weather.temperature.data}} &#176</text>
			</view>
			<view class="weather">
				<text style="font-size: 36rpx;margin-right: 20rpx;">{{weather.weather.data}}</text>
				<text style="font-size: 36rpx;">{{weather.humidity.text}} {{weather.humidity.data}}</text>
			</view>
			<view class="weather">
				<text style="font-size: 36rpx;">{{weather.windpower.text}} {{weather.windpower.data}}</text>
			</view>
			<view class="weather">
				<text>{{weather.liveData.reporttime}} 更新</text>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入高德地图
	import amap from '../../common/js/map/amap-wx.130.js';  
	export default{
		data(){
			return{
				bgImage:require('./image/weather.jpg'),
				amapPlugin: null,
				// 这里填写高德开放平台上申请的key,小程序的key
				key:'34c1d7c06f414ab22e27351bf0c8ef53', 
				weather:{
					"city": {},
					"weather": {},
					"temperature": {},
					"winddirection": {},
					"windpower": {},
					"humidity": {},
					"liveData":{}
				}
			}
		},
		methods:{
			// 获取当地数据信息
			getweather(){
				var that = this;
				this.amapPlugin.getWeather({
				  success: function(data){
					//成功回调
					console.log(data)
					uni.setNavigationBarTitle({
						title:data.city.data
					})
					that.weather=data
				  },
				  fail: function(info){
					//失败回调
					console.log(info)
				  }
				})
			},
		},
		onLoad() {
			// this.getlocation()
			// 高德地图小程序sdk初始化加载
			// #ifdef APP-PLUS||MP-WEIXIN
			this.amapPlugin = new amap.AMapWX({
				key:this.key  
			}); 
			this.getweather()
			// #endif
			
		}
	}
</script>

<style scoped>
	.bg-set{
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.weather{
		color: #000000;
		text-align: center;
	}
	.weatherData{
		width: 400rpx;
		height:300rpx;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: space-around;
		 position:fixed;
		 top:10%;
		 right:0;
		 left:0;
		 margin:auto;
	}
</style>
