const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html',
})


module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, cleanPlugin],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229'},
            {
                test: /\.jpg|png|gif$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 22228,
                        outputPath: 'image'
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties'],

                    }
                }
            },

        ]
    }
}