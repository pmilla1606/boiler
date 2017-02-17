var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CleanPlugin = require('clean-webpack-plugin');

// this can be optimized. look at vendor chunking for example

module.exports = {
  entry: './src/js/index.js', // entry point
  output: {
    filename: 'scripts/bundle.[chunkhash:7].js', // output filename with hash'd filename
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}, // use babel loader for js and jsx
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({ // extract all styles to a file instead of inlining
          use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./styles/styles.[chunkhash:7].css"), // use ExtractTextPlugin - also hash filename
    new HtmlPlugin({
      template: 'src/index.html' // template html file into which styles and js are inserted
    }),
  ],
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules",
    ]
  }
};
