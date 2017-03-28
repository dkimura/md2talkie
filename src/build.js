// @flow
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import type { Slides } from '../templates/types/Slides';

export default (props: Slides) => {
  if (process.env.NODE_ENV === 'development') {
    return webpack(webpackConfig(props)).watch({}, (err, stats) => {
      if (err) {
        console.log('Failed to compile.');
        console.log(err);
        process.exit(1);
      }

      if (stats.compilation.errors.length) {
        console.log('Failed to compile.');
        console.log(stats.compilation.errors);
        process.exit(1);
      }
    });
  }

  return webpack(webpackConfig(props)).run((err, stats) => {
    if (err) {
      console.log('Failed to compile.');
      console.log(err);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      console.log('Failed to compile.');
      console.log(stats.compilation.errors);
      process.exit(1);
    }

    console.log('Build Success.');
  });
};
