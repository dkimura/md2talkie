// @flow
import React from 'react';
import Slide from './Slide';
import type { Slides } from './types/Slides';

type Props = Slides;

export default ({ title, slides }: Props) =>
  <html lang="ja">
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      {slides && slides.map((page, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <Slide key={index} {...page} />)
      }
      <script src="/highlight.js" />
      <script src="/talkie.js" />
      <script>
        Talkie();
      </script>
    </body>
  </html>;
