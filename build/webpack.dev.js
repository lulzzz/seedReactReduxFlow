var webpack = require('webpack')
var config = require('./webpack.base')

config.plugins = config.plugins.concat([
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		'process.env.backEnd': '"https://localhost:8081/ws/"',
		'process.env.signalServer': '"https://poc.kametventures.fr:8887/"',
		'process.env.facebookAppId': '"201475876919185"'
	})
])

module.exports = config