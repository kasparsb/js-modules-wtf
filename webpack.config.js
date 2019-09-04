const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
