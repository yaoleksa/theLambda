const path = require('path');
const { ProvidePlugin } = require('webpack');
const NodePolyfillWebpackPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
        test: /.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
        }]
    },
    resolve: {
        fallback: {
            "fs": false
        },
        alias: {
            process: 'process/browser'
        }
    },
    plugins: [
        new ProvidePlugin({
            process: 'process/browser'
        }),
        new NodePolyfillWebpackPlugin()
    ]
};