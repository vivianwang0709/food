var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

var plugins = [];


require.extensions['.css'] = () => {
  return;
};


plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new ExtractTextPlugin('[name].css')); //css单独打包



module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: `${__dirname}/app`,
        exclude: /bundle\.js$/,
      },
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /^node_modules$/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      exclude: /^node_modules$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
    }, {
      test: /\.less/,
      exclude: /^node_modules$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')      
    }],
  },
  plugins,  
};
