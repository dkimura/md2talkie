'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.babel');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  if (process.env.NODE_ENV === 'development') {
    return (0, _webpack2.default)((0, _webpackConfig2.default)(props)).watch({}, function (err) {
      if (err) throw Error(err);
    });
  }

  return (0, _webpack2.default)((0, _webpackConfig2.default)(props)).run(function (err) {
    if (err) throw Error(err);
    return console.log('build success.');
  });
};