const path = require('path');
const { ProvidePlugin, DefinePlugin } = require('webpack');
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
        new NodePolyfillWebpackPlugin(),
        new DefinePlugin({
            'process.env': {
                SUPABASE_URL: JSON.stringify('https://azxmmelolclqfcfjgpka.supabase.co'),
                SUPABASE_KEY: JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6eG1tZWxvbGNscWZjZmpncGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMTk0MTEsImV4cCI6MjAxNDU5NTQxMX0.nYQqwnBeFbD5qlQ6fpVxN8PH2Nvegtgga05wqEm3-y8'),
                EMAIL: JSON.stringify('ekt_1@ukr.net'),
                PASSWORD: JSON.stringify('notveryeasy4473')
            }
        })
    ]
};