const webpack = require('webpack')
const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const MergeJsonWebpackPlugin = require('merge-jsons-webpack-plugin')
// const AutoPrefixer = require('autoprefixer')

module.exports = {
  devtool: 'source-map',
  entry: {
    vendors: './src/vendors.js',
    main: './src/index.js',
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      title: 'Portitude: the Art of Learning',
      inject: true,
      template: './index.ejs',
      hash: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'data', to: 'data' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(ROOT_PATH, 'node_modules'),
                  path.resolve(ROOT_PATH, 'src/styles'),
                ],
              },
            },
          ],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url?limit=10000&mimetype=image/svg+xml',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.scss', '.html'],
    alias: {
      common: path.resolve(ROOT_PATH, 'src/components/_common'),
      config: path.resolve(ROOT_PATH, 'config'),
      store: path.resolve(ROOT_PATH, 'src/store'),
    },
    modules: [
      path.resolve('./src'),
      path.resolve('./data'),
      path.resolve('./node_modules'),
    ],
  },
}
