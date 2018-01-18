const webpack=require('webpack');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
  entry: "./index.js",
  
  output: {
    filename: "bundle.js",
    publicPath: ""
  },

  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          'presets':['react','es2015'],
        }
        
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: /\.svg/, loader: 'svg-url-loader'},
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  plugins: [    
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
    }),
],
};
