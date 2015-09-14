var path = require('path');

module.exports = {
  entry: './PRMap.js',
  output: {
    library: 'PRMap.js',
    libraryTarget: 'umd',

    path: path.resolve(__dirname, 'dist'),
    filename: 'pr-map.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?experimental=true&optional=runtime'
        ]
      }
    ]
  }
};
