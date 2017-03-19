// @flow
import React from 'react';
import type { Slide } from 'types/Slides';

export default ({ attributes: { layout = true, invert }, body }: Slide) =>
  <section
    type="text/x-markdown"
    layout={layout}
    invert={invert}
    dangerouslySetInnerHTML={{ __html: body }}
  />;
