const path = require('path');

module.exports = {
  entry: './demo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'demo-build.js'
  }
};