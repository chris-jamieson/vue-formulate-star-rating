module.exports = {
  configureWebpack: {
    output: {
      filename: "index.js",
      libraryTarget: "umd",
    },
    externals: {
      "vue-select": "commonjs2 vue-star-rating",
    },
    mode: "production",
  },
};
