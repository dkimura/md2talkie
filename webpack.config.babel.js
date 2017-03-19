import path from 'path';
import {
  entryPoint, setOutput,
  addPlugins, createConfig, customConfig,
  env, sourceMaps,
} from '@webpack-blocks/webpack';
import babel from '@webpack-blocks/babel6';
import extractText from '@webpack-blocks/extract-text';
import { basePlugins, developmentPlugins, productionPlugins } from './webpack.plugins';

module.exports = (props = {}) => createConfig([
  entryPoint('./src/index.js'),
  setOutput({
    path: 'dist',
    filename: 'bundle.js',
    libraryTarget: 'umd',
  }),
  customConfig({
    resolve: {
      root: [path.join(__dirname, 'src')],
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
