const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const pluginConfig = [];

const plugins = [
  // {
  //   plugin: new MiniCssExtractPlugin({
  //     filename: 'styles.css'
  //   }),
  //   dev: true,
  //   prod: true
  // },
  {
    plugin: new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    dev: true,
    prod: false
  }
];

plugins.forEach(plugin => {
  if (isDev) {
    if (plugin.dev) {
      pluginConfig.push(plugin.plugin);
    }
    return;
  }

  if (plugin.prod) {
    pluginConfig.push(plugin.plugin);
  }
});

module.exports = pluginConfig;
