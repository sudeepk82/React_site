import express from 'express';
import open from 'open';
import path from 'path';
import colors from 'colors';
import config from '../webpack.config';
import webpack from 'webpack';

/* eslint-disable no-console */

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
        console.log(err);
  } else {
      console.log(`Server running on port ${port}`.red);
        open(`http://localhost:${port}`);
  }
});