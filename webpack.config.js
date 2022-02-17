const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

let mode = 'development'
let target = 'web'

if(process.env.NODE_ENV === 'production') {
  mode = 'production'
  target = 'browserslist'
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/i, // /\.(s[ac]|c)ss$/i    sass scss css
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: "asset/inline"
      
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: {
    hints: false
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true,
  }
}
