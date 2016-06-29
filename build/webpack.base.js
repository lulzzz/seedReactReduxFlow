var path = require('path')
var config = require('../config')
var autoprefixer = require('autoprefixer')
var root = path.resolve(__dirname, '../')
var browser_support = ['last 2 versions']

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/styles/index.scss', './src/index.jsx']
  } ,
  output: {
    path: config.build.assetsRoot,
    filename: 'bundle.js', // or [name].js if you want index.js
    publicPath: config.build.assetsPublicPath,
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    fallback: [path.join(root, './node_modules')],
    alias: {
      'src': path.resolve(root, './src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(root, './src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(root, './node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: root,
        exclude: /(node_modules)/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include : root,
        exclude: /(node_modules)/
      },
      { 
        test: /\.json$/, 
        loader: 'json' 
      },
      {
        _type: 'scss',
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: path.join(config.build.assetsSubDirectory, '[name]-[hash:7].[ext]')
        }
      }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  node: {
    net: "empty",
    tls: "empty",
    fs: "empty",
  },
  plugins: [],
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter'),
    failOnWarning: false,
    failOnError: true
  },
  postcss: function () {
    return [autoprefixer({browsers: browser_support})];
  }
}