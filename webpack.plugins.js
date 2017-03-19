import { webpack } from '@webpack-blocks/webpack';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export const basePlugins = props => [
  new StaticSiteGeneratorPlugin('main', ['/'], props),
  new CopyWebpackPlugin([
    {
      from: './node_modules/talkiejs/dist/talkie.min.js',
      to: 'talkie.js',
    },
    {
      from: './node_modules/highlightjs/highlight.pack.min.js',
      to: 'highlight.js',
    },
  ]),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env || 'development'),
  }),
];

export const developmentPlugins = [
  new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['dist'],
    },
  }),
];

export const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true,
    },
    output: {
      comments: false,
    },
  }),
];
