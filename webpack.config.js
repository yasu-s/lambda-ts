const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/handlers/hello-world/app.ts',

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
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV || 'production',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};
