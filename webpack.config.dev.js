import path from 'path';
import webpack from 'webpack';

const inputPath = path.resolve(__dirname, 'src/index.jsx');
const outputPath = path.resolve(__dirname, '/public', 'shares');

export default {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client',
    inputPath,
  ],
  output: {
    path: outputPath,
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

