const path = require('path');
const {
  entryPoint, setOutput,
  addPlugins, createConfig, customConfig,
  env, sourceMaps,
} = require('@webpack-blocks/webpack');
const babel = require('@webpack-blocks/babel6');
const extractText = require('@webpack-blocks/extract-text');
const { basePlugins, developmentPlugins, productionPlugins } = require('./webpack.plugins');

module.exports = props => createConfig([
  entryPoint('./templates/index.js'),
  setOutput({
    path: 'dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  }),
  customConfig({
    resolve: {
      root: [path.join(__dirname, 'templates')],
    },
  }),
  babel(),
  extractText('style.css'),
  addPlugins(basePlugins(props)),
  env('development', [
    sourceMaps(),
    addPlugins(developmentPlugins),
  ]),
  env('production', [
    addPlugins(productionPlugins),
  ]),
]);
