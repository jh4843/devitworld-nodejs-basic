const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/app.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()], // node_modules를 자동으로 externals로 처리

  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$/
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /express/,
      contextRegExp: /express\/lib\/view/
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /typeorm\/platform\/PlatformTools/,
      contextRegExp: /typeorm/
    }),
  ],
};
