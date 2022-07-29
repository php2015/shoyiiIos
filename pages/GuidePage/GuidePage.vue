<template>
	<view>
		<u-swiper @click="clickDot" class="picHeight" bg-color='#ffffff' img-mode='aspectFit' :list="list" :title-style='titleStyle' :title="true" :circular='false' :autoplay="false"></u-swiper>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list: [{
					  image: './static/image/one.png',
					 },
					 {
					  image: './static/image/two.png',
					 },
					 {
					  image: './static/image/three.png',
					 },
					 {
					  image: './static/image/four.png',
					 },
					 {
					  image: './static/image/five.png',
					  title: '马上体验'
					 }
				],
				titleStyle:{
					 textAlign:'center',
					 color:'#86B0D4',
					 fontSize:'18px',
					 fontWeight:'bold'
				}
			}
		},
		methods: {
			clickDot(e){
			    console.log(e)
				if(e=='4'){
					uni.reLaunch({
						url:'/pages/index/index',
						animationDuration:100
					})
				}
			}
		},
		onLoad() {
			// 设置为true
			uni.setStorageSync('first_flag', true);
		}
	}
</script>

<style scoped>
	.picHeight /deep/ uni-swiper{
	   height: calc(100vh)!important;
	}
</style>
