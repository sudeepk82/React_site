import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src/index'),
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [new webpack.NoEmitOnErrorsPlugin()]
};