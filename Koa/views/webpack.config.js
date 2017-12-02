const webpack=require('webpack');
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
        loaders: ["babel-loader?presets[]=react&presets[]=es2015"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
    }),
],
};
