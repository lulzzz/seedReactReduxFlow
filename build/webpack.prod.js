var config = require('./webpack.base')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var extractCSS = new ExtractTextPlugin('bundle.css')

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments: false
  }),
  new webpack.DefinePlugin({
    'process.env.backEnd': '"https://poc.kametventures.fr:8081/ws/"',
    'process.env.signalServer': '"https://poc.kametventures.fr:8887/"',
    'process.env.facebookAppId': '"252649701558832"'
  }) 
  ])

config.module.loaders.forEach(function (e, i) { 
  if(e.hasOwnProperty('_type') && e['_type'] === 'scss'){
    var cssLoaders = config.module.loaders[i].loaders 
    config.module.loaders[i].loaders = null 
    config.module.loaders[i].loader = extractCSS.extract(cssLoaders.slice(1, cssLoaders.length)) 
  } 
})

module.exports = config