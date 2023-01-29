const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, '../dist')
        }
    }
});