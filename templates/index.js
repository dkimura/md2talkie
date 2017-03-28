// @flow
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DOMProperty } from 'react-dom/lib/ReactInjection';

import 'talkiejs/dist/talkie.min.css';
import 'talkiejs/dist/talkie-default.min.css';
import 'highlightjs/styles/monokai_sublime.css';

import Root from './Root';
import type { Slides } from './types/Slides';

DOMProperty.injectDOMPropertyConfig({
  Properties: {
    layout: DOMProperty.MUST_USE_PROPERTY || DOMProperty.HAS_BOOLEAN_VALUE,
    invert: DOMProperty.HAS_BOOLEAN_VALUE,
    backface: 0,
    backfaceFilter: 0,
  },
  DOMAttributeNames: {
    layout: 'layout',
  },
});

export default (locals: Slides, callback: Function) => {
  const html = renderToStaticMarkup(createElement(Root, locals));
  callback(null, `<!DOCTYPE html>${html}`);
};
