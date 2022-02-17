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
