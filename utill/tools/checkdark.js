import store from '@/store/index.js'
module.exports={
	aemdTabbar(data){
		let isDark=false
		if(data){
			isDark=data
		}else{
			isDark=store.state.isDark
		}
		// console.log(data)
		let dark_arr=[
			'/static/image/dark/index_dark.png',
			'/static/image/dark/surgical_dark.png',
			'/static/image/dark/case_dark.png',
			'/static/image/dark/model_dark.png',
			'/static/image/dark/mine_dark.png',
		],
		light_arr=[
			'/static/image/index.png',
			'/static/image/method.png',
			'/static/image/case.png',
			'/static/image/model.png',
			'/static/image/mine.png',
		]
		if(!isDark){//light
			// 在tabbar设置有效
			uni.setTabBarStyle({
				color:'#000000',
				selectedColor:"#69CDFF",
				backgroundColor:"#F7F7F7",
				borderStyle:'black'
			})
			light_arr.forEach((item,index)=>{
				uni.setTabBarItem({
					index,
					iconPath:item
				})
			})
		}else{
			uni.setTabBarStyle({
				color:'#ffffff',
				selectedColor:"#69CDFF",
				backgroundColor:"#999999",
				borderStyle:'white'
			})
			dark_arr.forEach((item,index)=>{
				uni.setTabBarItem({
					index,
					iconPath:item
				})
			})
		}
	},
	amendNavigator(){
		// 设置原生的导航栏
		if(store.state.isDark===true){
			uni.setNavigationBarColor({
			    frontColor: '#ffffff',
			    backgroundColor: '#1B1C1E',
			    animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    }
			})
		}else{
			uni.setNavigationBarColor({
			    frontColor: '#1B1C1E',
			    backgroundColor: '#FFFFFF',
			    animation: {
			        duration: 400,
			        timingFunc: 'easeIn'
			    }
			})
		}
		
	}
}