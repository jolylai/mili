'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false,
    inline: true,
    stats: { colors: true },
    proxy: {
      //	/categories -->http://51kanmeiju.com/api/movieyears
      '/movieyears': {
        target: 'http://51kanmeiju.com/api',
        pathRewrite: {'^/': '/'},
        changeOrigin: true
      },
      '/category': {
        target: 'http://51kanmeiju.com/api',
        pathRewrite: {'^/': '/'},
        changeOrigin: true
      },
      '/HomeBannerMovie': {
        target: 'http://51kanmeiju.com/api',
        pathRewrite: {'^/HomeBannerMovie': '/movielast?limit=10'},
        changeOrigin: true
      },
      '/hotMovies': {
        target: 'http://51kanmeiju.com/api',
        pathRewrite: {'^/hotMovies': '/moviehot?limit=20&page=1'},
        changeOrigin: true
      },
      '/moviepromotion': {
        target: 'http://51kanmeiju.com/api',
        pathRewrite: {'^/': '/moviepromotion?limit=10'},
        changeOrigin: true
      }
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      components: `${defaultSettings.srcPath}/components/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {}
};
