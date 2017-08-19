var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    build: path.join('..', 'backend', 'resources', 'public')
};

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: PATHS.build,
        filename: 'app-bundle.js'
    },
    devServer: {
        publicPath:"/assets/",
        contentBase: "../backend/resources/templates",
        historyApiFallback: true,
        hot: true,
    },
    resolve: {
        alias: {
            'react': path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
        }
    },
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!postcss!sass"
                    )
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    plugins: ["transform-decorators-legacy", "transform-class-properties"],
                    presets: ['es2015', 'react', "stage-1"]
                }
            },
            {
                test: /plugin\.css$/,
                loaders: [
                'style', 'css',
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!postcss"
                    )
            },
        ]
    },
    eslint: {
        failOnWarning: true,
        failOnError: true
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ]
}