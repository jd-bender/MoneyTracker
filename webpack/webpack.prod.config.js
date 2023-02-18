const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    output: {
        filename: 'bundle.[contenthash].js'
    },
    mode: 'production',
    optimization: {
        minimizer: [new CssMinimizerPlugin()]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[contenthash].css'
        })
    ]
});
