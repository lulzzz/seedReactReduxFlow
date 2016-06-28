var webpack = require('webpack')
var config = require('./webpack.base')

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin()
])

module.exports = config