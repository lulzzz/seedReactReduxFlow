console.log('PROD MODE')
require('shelljs/global')
var webpack = require('webpack')
var config = require('./webpack.prod')
var ora = require('ora')
var spinner = ora('loading...')

spinner.start()
rm('-rf', 'public/dist')

webpack(config, function(err, stats) {
	spinner.stop()
	if (err) throw err
	process.stdout.write(stats.toString({
		colors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false
	}) + '\n')
})