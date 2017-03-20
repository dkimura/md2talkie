#!/usr/bin/env node
'use strict';

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)('\n  Usage\n    $ md2talkie <input>\n\n  Options\n    --watch, -w  watch mode\n\n  Examples\n    $ md2talkie slide.md --watch\n');

process.env.NODE_ENV = cli.flags && cli.flags.watch ? 'development' : 'production';

var createSlide = _ramda2.default.pipe(_create2.default, _build2.default);
createSlide(cli.input[0]);