#!/usr/bin/env node
// @flow
import meow from 'meow';
import R from 'ramda';
import create from './create';
import build from './build';

const cli = meow(`
  Usage
    $ md2talkie <input>

  Options
    --watch, -w  watch mode

  Examples
    $ md2talkie slide.md --watch
`);

process.env.NODE_ENV =
  cli.flags && cli.flags.watch ? 'development' : 'production';

const createSlide = R.pipe(create, build);
createSlide(cli.input[0]);
