const { resolve } = require('path');

module.exports = {
  test: /\.(ts|tsx)?$/,
  include: [
    resolve(__dirname, '..', '..', 'src'),
  ],
  loader: 'awesome-typescript-loader',
  query: {
    cacheDirectory: true,
  },
};
