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
                exclude: /node_modules/,
                query: {
                    plugins: ["transform-decorators-legacy", "transform-class-properties"],
                    presets: ['es2015', 'react', "stage-1"]
                }
            }
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