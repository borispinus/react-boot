var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    build: path.join('..', 'backend', 'resources', 'public')
};

const query = {
  bypassOnDebug: true,
  optipng: {
    optimizationLevel: 4
  },
  gifsicle: {
    interlaced: false
  }
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
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    `image-webpack-loader?${JSON.stringify(query)}`
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: path.resolve(__dirname, "node_modules"),
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