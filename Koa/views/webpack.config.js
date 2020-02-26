const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
module.exports = smp.wrap({
  entry: ['react-hot-loader/patch', './index.js'],

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.svg/, loader: 'svg-url-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
