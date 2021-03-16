module.exports = {
  configureWebpack: {
    output: {
      filename: "index.js",
      libraryTarget: "umd",
    },
    externals: {
      "vue-star-rating": "commonjs2 vue-star-rating",
    },
    mode: "production",
  },
};
