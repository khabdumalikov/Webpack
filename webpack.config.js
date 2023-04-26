const path = require('path') // node.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: "production", //development
    entry: {
        about: path.resolve(__dirname, "src/js/about.js"),
        main: path.resolve(__dirname, "src/js/main.js"),
    },
    output: {
        path: path.resolve(__dirname, 'plugin'),
        filename: '[name][contenthash].js',
        clean: true
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Configs | about',
            filename: 'about.html',
            template: 'src/pages/aboutTemp.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            title: 'Configs | index',
            filename: 'index.html',
            template: 'src/indexTemp.html',
            chunks: ["main"]
        }),
        new MiniCssExtractPlugin()
    ],
    //loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
}