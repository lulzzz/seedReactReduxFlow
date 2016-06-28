var path = require('path')
var autoprefixer = require('autoprefixer')
var root = path.resolve(__dirname, '../')
var browser_support = ['last 2 versions']

module.exports = {
  entry: {
    app: ['./src/css/main.scss', './src/main.js']
  } ,
  output: {
    path: path.resolve(root, './public/dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    fallback: [path.join(root, './node_modules')],
    alias: {
      'src': path.resolve(root, './src'),
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include : root,
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [],
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter')
  },
  postcss: function () {
    return [autoprefixer({browsers: browser_support})];
  }
}