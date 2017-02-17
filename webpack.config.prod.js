var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var _ = require('lodash');
var config = require('./webpack.config.base');

config = _.merge(config, {
  plugins: config.plugins.concat([
    new CleanPlugin(['dist']), // wipe dist dir on each build
    new webpack.optimize.UglifyJsPlugin(), // minify/uglify
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"' // build in production
    })
  ])
});

module.exports = config;
