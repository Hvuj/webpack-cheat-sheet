// webpack.config.js
// const MinifyPlugin = require("babel-minify-webpack-plugin");
// module.exports = {
//   entry: //...,
//   output: //...,
//   plugins: [
//     new MinifyPlugin(minifyOpts, pluginOpts)
//   ]
// }
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// module.exports = {
//   mode: 'development',
//   optimization: {
//     usedExports: true,
//   },
//   entry: {
//     app: './src/index.js',
//     // print: './src/print.js',
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist',
//     hot: true,
//   },
//   plugins: [
//     new CleanWebpackPlugin({
//       cleanStaleWebpackAssets: false,
//     }),
//     new HtmlWebpackPlugin({
//       title: 'Output Managment',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: ['file-loader'],
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: ['file-loader'],
//       },
//       {
//         test: /\.(csv|tsv)$/,
//         use: ['csv-loader'],
//       },
//       {
//         test: /\.xml$/,
//         use: ['xml-loader'],
//       },
//     ],
//   },
// }
