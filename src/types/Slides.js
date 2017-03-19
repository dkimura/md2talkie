// @flow
export type Slide = {
  attributes: {
    title?: string,
    layout: boolean,
    invert?: boolean,
    backface?: string,
    backfaceFilter?: string,
  },
  body?: string,
  note?: string,
}

export type Slides = {
  title?: ?string,
  slides?: Array<Slide>
}
