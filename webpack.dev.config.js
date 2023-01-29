const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        devMiddleware: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env"]
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Money Tracker',
            template: 'index.html'
        })
    ]
};