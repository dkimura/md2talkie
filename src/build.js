// @flow
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import type { Slides } from '../templates/types/Slides';

export default (props: Slides) => {
  if (process.env.NODE_ENV === 'development') {
    return webpack(webpackConfig(props)).watch({}, (err) => {
      if (err) throw Error(err);
    });
  }

  return webpack(webpackConfig(props)).run((err) => {
    if (err) throw Error(err);
    return console.log('build success.');
  });
};
