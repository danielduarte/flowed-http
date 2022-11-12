const path = require('path');

module.exports = {
  mode: "production",
  entry: './dist/index.js',
  output: {
    filename: 'flowed-http.js',
    path: path.resolve(__dirname, 'web'),
    library: "FlowedHttp",
  },
  resolve: {
    fallback: {
      fs: false,
    },
  }
};
