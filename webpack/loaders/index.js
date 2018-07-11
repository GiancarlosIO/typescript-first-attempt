const css = require('./css');
const eslint = require('./eslint');
const graphql = require('./graphql');
const react = require('./react');
const url = require('./url');
const typescript = require('./typescript');

module.exports = [
  css,
  eslint,
  typescript,
  react,
  graphql,
  url,
  { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
];
