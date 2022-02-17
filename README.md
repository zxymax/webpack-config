### webpack config

[video source](https://www.youtube.com/watch?v=TOb1c39m64A&ab_channel=SwashbucklingwithCode)

#### CSS

- SASS
- PostCSS
- min-css-extract-plugin
- hot reloading

> npm package install

- @babel/core
- @babel/preset-env
- babel-loader
- css-loader
- sass
- sass-loader
- mini-css-extract-plugin

> scripts command:

```json
scripts: {
  "start": "webpack serve",
  "watch": "webpack --watch",
  "build": "NODE_ENV=production webpack",
  "build-dev": "webpack"
}
```

> .babel.config.js

```js
module.exports = {
  presets: ['@babel/preset-env'],
};
```

##### if you need sass-loader css-loader, then config your webpack file moudle rules

```js
{
  test: /\.s?css$/i,
  use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
},
```

##### Pay attention to a problem

```js
// wrong config
  devServer: {
    contentBase: './dist', // here needs to be changed to static
    hot: true,
  }
```

```js
// right config
  devServer: {
    static: './dist', // correct
    hot: true,
  }
```

#### Images

Images with Asset Modules type

```js
// change webpack.config.js, support images
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

      }
    ]
  },
```

```js
// add html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
```

```js
// add clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
  plugins: [
    new CleanWebpackPlugin(),
  ],
```
