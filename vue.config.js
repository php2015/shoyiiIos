// const wepack =require('webpack')
// const WebpackPwaManifest=require('webpack-pwa-manifest')
module.exports={
	chainWebpack: (config) => {
		// 发行或运行时启用了压缩时会生效
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			console.log(compress)			// 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
			compress.drop_console = true
			compress.pure_funcs = [
				'__f__', // App 平台 vue 移除日志代码
				'console.log' 
				// 'console.debug' // 可移除指定的 console 方法
			]
			return args
		})
	},
	// configureWebpack: {
	// 	plugins: [
	// 		new WebpackPwaManifest({
	// 			name: 'My App',
	// 			themeColor: '#4DBA87',
	// 			msTileColor: '#000000',
	// 			appleMobileWebAppCapable: 'yes',
	// 			appleMobileWebAppStatusBarStyle: 'black',
	// 			workboxPluginMode: 'GenerateSW',
	// 		})
	// 	]
	// },
	devServer : {        
	    proxy:{
	        '/asjdhjv' : {
	            target : "http://apis.juhe.cn/simpleWeather/query",
	            changeOrigin : true,
	            secure : false,
	            pathRewrite : {
	                 "^/asjdhjv" : ""
	            }
	        },
	         "/proxy-hospital" : {
	             target : "https://shoyii-open-1258143571.cos.ap-guangzhou.myqcloud.com",
	             changeOrigin : true,
	             secure : false,
				 // logLevel: 'debug', //在终端查看转发路径
	             pathRewrite : {
	                 "^/proxy-hospital" : ""
	             }
			  //   onProxyRes(proxyRes, req, res) {
				 // const realUrl = new URL(req.url || '', commonUrl)?.href || '';
				 // proxyRes.headers['x-real-url2'] = realUrl;
			  //  }
	        }
	     }
	}
}