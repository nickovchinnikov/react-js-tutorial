module.exports = [
  {
    test: /\.(js|ts)x?$/,
    loader: require.resolve("babel-loader"),
    exclude: /node_modules/,
  },
];
