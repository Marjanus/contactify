const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfig = {
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    title: 'Dribble Search App',
    inject: 'body',
  })],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = webpackConfig;
