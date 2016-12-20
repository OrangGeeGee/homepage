const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: {
        polyfills: './app/polyfills',
        vendor: './app/vendor',
        app: './app/main'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.es6', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [
                    /\.min\.js$/,
                    /\.spec\.ts$/,
                    /\.e2e\.ts$/,
                    /node_modules/
                ], loaders: ['ts-loader', 'angular2-template-loader?keepUrl=true']
            },
            {test: /\.html/, loader: 'html-loader?minimize=false'},
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?sourceMap"]
            },
            {test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=images/[name].[ext]'},
            {test: /\.svg/, loader: 'url-loader?name=images/[name].[ext]'},
            {
                test: /\.woff2?$/,
                loader: 'url-loader?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
            },
            {test: /\.(ttf|eot)$/, loader: 'file-loader?name=fonts/[name].[ext]'}
        ]
    },
    plugins: [
        // Fixes Angular 2 error
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({template: './index.html'}),
        new CopyWebpackPlugin([{from: './resources/favicon.png'}], {})
    ]
};

module.exports = config;