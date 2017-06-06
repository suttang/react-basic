const path = require('path');

const webpackConfig = {
  entry: {
    app: ['./src/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader' },
        ],
      },
    ],
  },
};

module.exports = webpackConfig;
