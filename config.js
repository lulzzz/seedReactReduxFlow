// look https://github.com/Grafikart/webpack/blob/master/template/build/webpack.prod.conf.js
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'), //in case of using hot on index
    assetsRoot: path.resolve(__dirname, './public/dist'), //ok
    assetsSubDirectory: 'static', //ok
    assetsPublicPath: '/dist/', // ok
    productionSourceMap: true
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}