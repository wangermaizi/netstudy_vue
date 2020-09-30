module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  chainWebpack: config => {
    // 修改prefetch：
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || [];
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
      return options
    })
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 用户请求代理配置：
  devServer: {
    proxy: {
    	'/wbr': {
        target: 'http://192.168.5.2/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '/wbr': ''
        }
      },
	  '/ljy': {
	      target: 'http://192.168.1.3:80',
	      changeOrigin: true,
	      ws: true,
	      pathRewrite: {
	          '^/ljy': ''
	      }
	  },
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'Axios': 'axios',
      'vuex': 'Vuex',
    },
  },
  chainWebpack: (config) => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end();
        config.plugins.delete('prefetch')
      }
    }
  },

  productionSourceMap: false, //不打包生成.map文件
  publicPath: './'
}
