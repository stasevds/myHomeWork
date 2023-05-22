const { merge } = require('webpack-merge');
const baseWebpackConfig = require("./webpack.config");
const PATHS = require('./paths.js');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devServer:{
    static:{
       directory: PATHS.PUBLIC,
    },
    compress: true,
    port: 9000,
    hot: true, 
 },
})