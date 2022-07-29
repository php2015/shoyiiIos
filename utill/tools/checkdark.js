import store from '@/store/index.js'
module.exports={
	aemdTabbar(){
		if(store.state.isDark===true){
			// 设置tabar
			uni.setTabBarStyle({
				color:'#FFFFFF',
				backgroundColor:'#666',
				selectedColor:'#86B0D4',
				borderStyle:'white',
			})
		}else{
			uni.setTabBarStyle({
				color:'#CBCADC',
				backgroundColor:'#F7F7F7',
				selectedColor:'#86B0D4',
				borderStyle:'white',
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