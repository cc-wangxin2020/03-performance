const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

let externals = {}
let cdn = {
  js: []
}
const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  externals = {
    xlsx: 'XLSX',
    echarts: 'echarts'
  }
  cdn = {
    js: [
      'https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js',
      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
    ]
  }
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-web.lgdsunday.club/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    externals
  },
  chainWebpack(config) {
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn
      return args
    })
    config.module.rule('svg').exclude.add(resolve('src/icon')).end()
    config.module
      .rule('icon')
      .test(/\.svg$/)
      .include.add(resolve('src/icon'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  }
})
