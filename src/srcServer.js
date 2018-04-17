/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const port = 2222;
const app = express();
const compiler = webpack(config);

app.use(express.static('../public'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    throw (err);
  } else {
    console.log(`server is up and listening on port ${port} ...`);
  }
});
