let webpack = require('webpack');
let path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/index.js', './src/app/styles/style.css', './node_modules/materialize-css/bin/materialize.css', './node_modules/materialize-css/bin/materialize.js'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(ttf|jpeg|jpg|eof|eot|woff|woff2)$/, loaders: ['url-loader']}
      ]
  }
};