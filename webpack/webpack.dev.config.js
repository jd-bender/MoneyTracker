const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    output: {
        filename: 'bundle.js'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, '../dist')
        }
    },
    plugins: [new MiniCssExtractPlugin()]
});
