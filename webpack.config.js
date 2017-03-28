// @flow
const path = require('path');
const {
  entryPoint, setOutput,
  addPlugins, createConfig,
  env, sourceMaps,
} = require('@webpack-blocks/webpack');
const babel = require('@webpack-blocks/babel6');
const extractText = require('@webpack-blocks/extract-text');
const { basePlugins, developmentPlugins, productionPlugins } = require('./webpack.plugins');

module.exports = props => createConfig([
  entryPoint(path.join(__dirname, 'templates/index.js')),
  setOutput({
    path: 'dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  }),
  babel({ exclude: path.join(__dirname, 'node_modules') }),
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
