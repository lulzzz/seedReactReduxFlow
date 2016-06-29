console.log('DEV MODE')
require('shelljs/global')
var webpack = require('webpack')
var config = require('../config')
var configdev = require('./webpack.dev')
var webpackDevServer = require('webpack-dev-server')
var port = process.env.PORT || config.dev.port
configdev.entry.app.unshift("webpack-dev-server/client?http://localhost:"+port+"/", "webpack/hot/dev-server" )

//rm('-rf', 'public/dist')

var server = new webpackDevServer(webpack(configdev), {
	hot: true,
	contentBase: './public',
	quiet: false,
	noInfo: false,
	publicPath: configdev.output.publicPath,
	stats: { colors: true }
});

server.listen(port, function(err) {
	if(err){
		console.log(err)
	} else {
		console.log("j'écoute sur le port " + port)
	}
})