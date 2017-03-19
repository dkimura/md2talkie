'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _frontMatter = require('front-matter');

var _frontMatter2 = _interopRequireDefault(_frontMatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConfig = {
  splitRule: /\n*-{5}\n*/
};


var openFile = function openFile(filePath) {
  return _fs2.default.readFileSync(filePath, 'utf-8');
};

var splitMarkdownBody = function splitMarkdownBody(markdownBody) {
  return markdownBody.split(defaultConfig.splitRule).map(function (item) {
    return (0, _frontMatter2.default)(item);
  });
};

var createSlidesObject = function createSlidesObject(slides) {
  var header = slides.shift().attributes;

  return {
    title: header.title,
    slides: slides
  };
};

exports.default = _ramda2.default.pipe(openFile, splitMarkdownBody, createSlidesObject);