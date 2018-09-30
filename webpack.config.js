var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/index.html',
                to: path.resolve(__dirname, 'dist') + '/index.html'
            },
            {
                from: 'src/app/css',
                to: path.resolve(__dirname, 'dist') + '/app/css'
            },
            {
                from: 'src/app/images',
                to: path.resolve(__dirname, 'dist') + '/app/images'
            } 
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2017", "react", "stage-2"]
                }
            }
        ]
    },
    devServer: {
        port: 9000,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: 'http://localhost:3000'
            }
        }
    }
};

module.exports = config;