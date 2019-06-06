const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

const entryPoints = {
  page1: ['./src/pages/page1.jsx'],
  page2: ['./src/pages/page2.jsx']
};

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: entryPoints,
  devtool: isDev ? 'inline-source-map' : '',
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/public',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
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
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          {
            loader: 'style-loader',
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          },
          {
            loader: 'svg-url-loader',
            options: {
              // Images larger than 10 KB won't be inlined
              limit: 10 * 1024,
              // Remove quotes around the encoded URL
              noquotes: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]'
            }
          },
          // {
          //   loader: 'url-loader',
          //   options: {
          //     // Images larger than 10 KB won't be inlined
          //     limit: 10 * 1024
          //   }
          // },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'styles.css'
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  }
};
