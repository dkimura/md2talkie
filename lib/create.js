// @flow
import fs from 'fs';
import R from 'ramda';
import fm from 'front-matter';
import type { Slides, Slide } from '../src/types/Slides';

type ConfigObject = {
  splitRule: string | RegExp,
}

const defaultConfig: ConfigObject = {
  splitRule: /\n*-{5}\n*/,
};

const openFile = (filePath: string): string =>
  fs.readFileSync(filePath, 'utf-8');

const splitMarkdownBody = (markdownBody: string): Array<Slide> =>
  markdownBody
    .split(defaultConfig.splitRule)
    .map(item => fm(item));

const createSlidesObject = (slides: Array<Slide>): Slides => {
  const header = slides.shift().attributes;

  return {
    title: header.title,
    slides,
  };
};

export default R.pipe(openFile, splitMarkdownBody, createSlidesObject);
