import * as webpack from 'webpack';
import * as path from 'path';
import * as glob from 'glob';
import * as nodeExternals from 'webpack-node-externals';

const entries: { [key: string]: string } = {};
glob.sync('./src/handlers/**/*.ts').map((value) => {
  console.log(value);
  entries[path.basename(value, '.ts')] = value;
});

const config: webpack.Configuration = {
  entry: entries,

  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve('./dist'),
    filename: '[name].js',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@sample': path.resolve('/src'), // rootPath にはルートのパスが入る。
    },
  },

  target: 'node',
  externals: [nodeExternals.default()],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};

export default config;
