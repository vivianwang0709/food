const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//壓縮js


const plugins = [];


require.extensions['.css'] = () => {
  return;
};


//plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
//plugins.push(new webpack.HotModuleReplacementPlugin());

//css单独打包
plugins.push(new ExtractTextPlugin('[name].css'));
plugins.push(new UglifyJSPlugin());


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
