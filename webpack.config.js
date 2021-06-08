const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new cleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Setup',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/template.html')
        }),
    ]

}