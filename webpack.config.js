const path = require ('path');
const nodeExternals = require('webpack-node-externals');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    NODE_ENV = 'production',
} = process.env;

module.exports = {
    mode: NODE_ENV,
    target: 'node',
    watch: NODE_ENV === 'development',
    entry: {
        index: './app.js',
    },
    externals: [nodeExternals()],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
    },
    /*plugins: [
        new HtmlWebpackPlugin({
            title: 'Gerenciamento de saída',
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ],*/
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};