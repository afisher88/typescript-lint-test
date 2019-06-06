const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev =
  process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.jsx',
  devtool: isDev ? 'inline-source-map' : '',
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/transform-spread'
              ]
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
