var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path:'./public/',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ],
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract('css!sass'),
        test: /\.sass$/
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
