const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    output: {
        filename: 'bundle.[contenthash].js'
    },
    mode: 'production'
});
