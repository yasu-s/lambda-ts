const path = require('path');

module.exports = {
  entry: './app.ts',

  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve('./dist'),
    filename: 'app.js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js'],
  },

  target: 'node',
  externals: process.env.NODE_ENV === 'development' ? [] : ['aws-sdk'],
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};
