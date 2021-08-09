const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');

const entries = {};
glob.sync('./src/handlers/**/*.ts').map((value) => {
  console.log(value);
  entries[path.basename(value, '.ts')] = value;
});

module.exports = {
  entry: entries,

  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve('./dist'),
    filename: '[name].js',
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
