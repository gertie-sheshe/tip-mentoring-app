import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import routes from './src/api/routes/index';
import dbconfig from './config/dbconfig';
import webpackConfig from './webpack.config';
import webpack from 'webpack';

let compiler = webpack(webpackConfig);

// App instance
const app = express();
const port = 5000;

app.use(bodyparser.json());
app.use(express.static(__dirname + '/src'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

routes(app);
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

mongoose.connect(dbconfig.db, (err) => {
  err ? console.log('Error connecting to db') : console.log('Connected to database')
});

app.listen(port, (err) => {
  err ? console.log('Error running app') : console.log('Running on port ' + port);
});

export default app;